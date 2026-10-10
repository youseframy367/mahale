import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { randomInt } from 'crypto';
import { Repository } from 'typeorm';
import { Client } from './entities/clients.entity';
import { ClientDetails } from './entities/clients-details.entity';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateDetailsDto } from './dto/update-details.dto';

// من غير الحروف المتشابهة (0/O و 1/I)
const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client) private readonly clientsRepo: Repository<Client>,
    @InjectRepository(ClientDetails) private readonly detailsRepo: Repository<ClientDetails>,
  ) {}

  private randomCode(length = 8) {
    let code = '';
    for (let i = 0; i < length; i++) {
      code += CODE_CHARS[randomInt(CODE_CHARS.length)];
    }
    return code;
  }

  private async generateUniqueCode() {
    while (true) {
      const code = this.randomCode();
      const exists = await this.clientsRepo.exist({ where: { accessCode: code } });
      if (!exists) return code;
    }
  }

  async create(dto: CreateClientDto) {
    const accessCode = await this.generateUniqueCode();
    const client = await this.clientsRepo.save(
      this.clientsRepo.create({ ...dto, accessCode }),
    );
    return {
      id: client.id,
      shopName: client.shopName,
      accessCode: client.accessCode,
    };
  }

  async updateDetails(id: number, dto: UpdateDetailsDto, imageUrl?: string) {
    const client = await this.clientsRepo.findOne({ where: { id }, relations: ['details'] });
    if (!client) throw new NotFoundException('Client not found');

    const details = client.details ?? this.detailsRepo.create({ client });
    details.customerPhone = dto.customerPhone;
    details.hasDelivery = dto.hasDelivery;
    if (imageUrl) details.imageUrl = imageUrl;

    const saved = await this.detailsRepo.save(details);
    return {
      clientId: id,
      customerPhone: saved.customerPhone,
      hasDelivery: saved.hasDelivery,
      imageUrl: saved.imageUrl,
    };
  }

  // عدد الإعلانات مؤقتًا 0 لحد ما نعمل موديول الإعلانات
  private toResponse(c: Client) {
    return {
      id: c.id,
      shopName: c.shopName,
      location: c.location,
      phone: c.phone,
      category: c.category,
      sponsoredAdsCount: 0,
    };
  }

  async findAll() {
    const clients = await this.clientsRepo.find({ order: { id: 'DESC' } });
    return clients.map((c) => this.toResponse(c));
  }

  async findOne(id: number) {
    const client = await this.clientsRepo.findOne({ where: { id }, relations: ['details'] });
    if (!client) throw new NotFoundException('Client not found');
    return {
      ...this.toResponse(client),
      details: client.details && {
        customerPhone: client.details.customerPhone,
        hasDelivery: client.details.hasDelivery,
        imageUrl: client.details.imageUrl,
      },
    };
  }

  async accessWithCode(code: string) {
    const client = await this.clientsRepo.findOne({
      where: { accessCode: code.toUpperCase() },
    });
    if (!client) throw new UnauthorizedException('Invalid access code');
    return this.toResponse(client);
  }
}
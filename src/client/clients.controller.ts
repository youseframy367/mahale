import {
  BadRequestException, Body, Controller, Get, HttpCode, Param,
  ParseIntPipe, Patch, Post, UploadedFile, UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { randomUUID } from 'crypto';
import { extname } from 'path';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateDetailsDto } from './dto/update-details.dto';
import { AccessCodeDto } from './dto/access-code.dto';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  // الخطوة 1
  @Post()
  create(@Body() dto: CreateClientDto) {
    return this.clientsService.create(dto);
  }

  // الخطوة 2 (form-data)
  @Patch(':id/details')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads/clients',
        filename: (_req, file, cb) => cb(null, `${randomUUID()}${extname(file.originalname)}`),
      }),
      fileFilter: (_req, file, cb) => {
        if (!file.mimetype.match(/^image\/(jpeg|png|webp)$/)) {
          return cb(new BadRequestException('Only jpg, png, webp images are allowed'), false);
        }
        cb(null, true);
      },
      limits: { fileSize: 5 * 1024 * 1024 },
    }),
  )
  updateDetails(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateDetailsDto,
    @UploadedFile() image?: Express.Multer.File,
  ) {
    const imageUrl = image ? `/uploads/clients/${image.filename}` : undefined;
    return this.clientsService.updateDetails(id, dto, imageUrl);
  }

  @Get()
  findAll() {
    return this.clientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.clientsService.findOne(id);
  }

  // دخول الداشبورد بالكود
  @Post('access')
  @HttpCode(200)
  access(@Body() dto: AccessCodeDto) {
    return this.clientsService.accessWithCode(dto.code);
  }
}
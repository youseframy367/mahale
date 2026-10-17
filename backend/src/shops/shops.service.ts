import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { AuthPayload } from '../auth/auth.guard'
import { Shop } from './shop.entity'

@Injectable()
export class ShopsService {
  constructor(@InjectRepository(Shop) private readonly repo: Repository<Shop>) {}
  findOne(id: string) { return this.repo.findOneBy({ id }) }
  assertAccess(id: string, user: AuthPayload) { if (user.role === 'shop_owner' && user.shopId !== id) throw new ForbiddenException('لا يمكنك الوصول إلى هذا المحل') }
  async update(id: string, data: Partial<Shop>) { const shop = await this.findOne(id); if (!shop) throw new NotFoundException('المحل غير موجود'); Object.assign(shop, data); return this.repo.save(shop) }
}

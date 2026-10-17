import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { AuthPayload } from '../auth/auth.guard'
import { Product } from './product.entity'

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(Product) private readonly repo: Repository<Product>) {}
  assertAccess(shopId: string, user: AuthPayload) { if (user.role === 'shop_owner' && user.shopId !== shopId) throw new ForbiddenException('لا يمكنك الوصول إلى هذا المحل') }
  list(shopId: string) { return this.repo.find({ where: { shopId }, order: { createdAt: 'DESC' } }) }
  create(shopId: string, data: Partial<Product>) { return this.repo.save(this.repo.create({ ...data, shopId })) }
  async update(id: string, shopId: string, data: Partial<Product>) { const item = await this.repo.findOneBy({ id, shopId }); if (!item) throw new NotFoundException('المنتج غير موجود'); Object.assign(item, data); return this.repo.save(item) }
  async remove(id: string, shopId: string) { const item = await this.repo.findOneBy({ id, shopId }); if (!item) throw new NotFoundException('المنتج غير موجود'); await this.repo.remove(item); return { success: true } }
}

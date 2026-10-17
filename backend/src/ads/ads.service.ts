import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { AuthPayload } from '../auth/auth.guard'
import { SponsoredAd } from './ad.entity'

@Injectable()
export class AdsService {
  constructor(@InjectRepository(SponsoredAd) private readonly repo: Repository<SponsoredAd>) {}
  assertAccess(shopId: string, user: AuthPayload) { if (user.role === 'shop_owner' && user.shopId !== shopId) throw new ForbiddenException('لا يمكنك الوصول إلى هذا المحل') }
  list(shopId: string) { return this.repo.find({ where: { shopId }, order: { createdAt: 'DESC' } }) }
  create(shopId: string, data: Partial<SponsoredAd>) { return this.repo.save(this.repo.create({ ...data, shopId })) }
  async update(id: string, shopId: string, data: Partial<SponsoredAd>) { const item = await this.repo.findOneBy({ id, shopId }); if (!item) throw new NotFoundException('الإعلان غير موجود'); Object.assign(item, data); return this.repo.save(item) }
  async remove(id: string, shopId: string) { const item = await this.repo.findOneBy({ id, shopId }); if (!item) throw new NotFoundException('الإعلان غير موجود'); await this.repo.remove(item); return { success: true } }
}

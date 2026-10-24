import { ConflictException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import * as bcrypt from 'bcrypt'
import { Repository } from 'typeorm'
import { AdminRole, AdminUser } from '../auth/admin-user.entity'
import { ShopAccount } from '../auth/shop-account.entity'
import { AuthPayload } from '../auth/auth.guard'
import { Shop } from '../shops/shop.entity'
import { SponsoredAd } from '../ads/ad.entity'

@Injectable()
export class AdminService {
  constructor(@InjectRepository(AdminUser) private admins: Repository<AdminUser>, @InjectRepository(ShopAccount) private accounts: Repository<ShopAccount>, @InjectRepository(Shop) private shops: Repository<Shop>, @InjectRepository(SponsoredAd) private ads: Repository<SponsoredAd>) {}
  ownerOnly(user: AuthPayload) { if (user.role !== AdminRole.OWNER) throw new ForbiddenException('هذا الإجراء متاح للمالك فقط') }
  async overview() { const [shops, ads, users] = await Promise.all([this.shops.count({ where: { isActive: true } }), this.ads.count(), this.admins.count({ where: { isActive: true } })]); const categories = await this.shops.createQueryBuilder('shop').select('COUNT(DISTINCT shop.category)', 'count').where('shop.is_active=true').getRawOne<{ count: string }>(); return { shops, ads, users, categories: Number(categories?.count || 0) } }
  async listShops() { const shops = await this.shops.find({ order: { createdAt: 'DESC' } }); return Promise.all(shops.map(async shop => ({ ...shop, sponsoredAds: await this.ads.countBy({ shopId: shop.id }) }))) }
  async createShop(data: Record<string, string>) { const existing = await this.shops.findOne({ where: [{ slug: data.slug }, { name: data.name }] }); if (existing) throw new ConflictException('المحل موجود بالفعل'); const shop = await this.shops.save(this.shops.create({ name: data.name, slug: data.slug, location: data.location, phone: data.phone, category: data.category, description: data.description })); if (data.email && data.password) await this.accounts.save(this.accounts.create({ email: data.email, passwordHash: await bcrypt.hash(data.password, 12), shopId: shop.id })); return shop }
  async updateShop(id: string, data: Partial<Shop>) { const shop = await this.shops.findOneBy({ id }); if (!shop) throw new NotFoundException('المحل غير موجود'); Object.assign(shop, data); return this.shops.save(shop) }
  async deleteShop(id: string) { const shop = await this.shops.findOneBy({ id }); if (!shop) throw new NotFoundException('المحل غير موجود'); await this.shops.remove(shop); return { success: true } }
  async listUsers() { return this.admins.find({ select: { id: true, name: true, email: true, role: true, isActive: true, createdAt: true }, order: { createdAt: 'ASC' } }) }
  async createUser(data: { name: string; email: string; password: string; role: AdminRole }, user: AuthPayload) { this.ownerOnly(user); const exists = await this.admins.findOneBy({ email: data.email.toLowerCase() }); if (exists) throw new ConflictException('البريد مستخدم بالفعل'); return this.admins.save(this.admins.create({ name: data.name, email: data.email.toLowerCase(), passwordHash: await bcrypt.hash(data.password, 12), role: data.role })) }
  async deleteUser(id: string, user: AuthPayload) { this.ownerOnly(user); const target = await this.admins.findOneBy({ id }); if (!target) throw new NotFoundException('المستخدم غير موجود'); if (target.role === AdminRole.OWNER) throw new ForbiddenException('لا يمكن حذف حساب مالك المنصة'); await this.admins.remove(target); return { success: true } }
  listAds() { return this.ads.find({ order: { createdAt: 'DESC' } }) }
  async createAd(shopId: string, data: Partial<SponsoredAd>) { return this.ads.save(this.ads.create({ ...data, shopId })) }
  async updateAd(id: string, data: Partial<SponsoredAd>) { const ad = await this.ads.findOneBy({ id }); if (!ad) throw new NotFoundException('الإعلان غير موجود'); Object.assign(ad, data); return this.ads.save(ad) }
  async deleteAd(id: string) { const ad = await this.ads.findOneBy({ id }); if (!ad) throw new NotFoundException('الإعلان غير موجود'); await this.ads.remove(ad); return { success: true } }
}

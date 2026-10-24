import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Shop } from '../shops/shop.entity'
import { Product } from '../products/product.entity'
import { SponsoredAd, AdStatus } from '../ads/ad.entity'

@Injectable()
export class PublicService {
  constructor(@InjectRepository(Shop) private shops: Repository<Shop>, @InjectRepository(Product) private products: Repository<Product>, @InjectRepository(SponsoredAd) private ads: Repository<SponsoredAd>) {}
  async listShops() { const shops = await this.shops.find({ where: { isActive: true }, order: { createdAt: 'DESC' } }); return Promise.all(shops.map(async shop => ({ ...shop, productsCount: await this.products.countBy({ shopId: shop.id, available: true }), featured: false }))) }
  async getShop(slug: string) { const shop = await this.shops.findOneBy({ slug, isActive: true }); if (!shop) throw new NotFoundException('المحل غير موجود'); const [products, ads] = await Promise.all([this.products.find({ where: { shopId: shop.id, available: true }, order: { createdAt: 'DESC' } }), this.ads.find({ where: { shopId: shop.id, status: AdStatus.ACTIVE }, order: { createdAt: 'DESC' } })]); return { ...shop, products, ads } }
  async listProducts() { return this.products.find({ where: { available: true }, order: { createdAt: 'DESC' } }) }
  async getProduct(slug: string) { const product = await this.products.findOneBy({ slug, available: true }); if (!product) throw new NotFoundException('المنتج غير موجود'); const shop = await this.shops.findOneBy({ id: product.shopId, isActive: true }); return { ...product, shop } }
  listAds() { return this.ads.find({ where: { status: AdStatus.ACTIVE }, order: { createdAt: 'DESC' } }) }
}

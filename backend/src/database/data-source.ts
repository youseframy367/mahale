import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { AdminUser } from '../auth/admin-user.entity'
import { ShopAccount } from '../auth/shop-account.entity'
import { Shop } from '../shops/shop.entity'
import { Product } from '../products/product.entity'
import { SponsoredAd } from '../ads/ad.entity'

export default new DataSource({ type: 'postgres', url: process.env.DATABASE_URL, entities: [AdminUser, ShopAccount, Shop, Product, SponsoredAd], migrations: ['src/database/migrations/*.ts'] })

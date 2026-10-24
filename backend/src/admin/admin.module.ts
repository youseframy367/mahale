import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthModule } from '../auth/auth.module'
import { AdminController } from './admin.controller'
import { AdminService } from './admin.service'
import { AdminUser } from '../auth/admin-user.entity'
import { ShopAccount } from '../auth/shop-account.entity'
import { Shop } from '../shops/shop.entity'
import { Product } from '../products/product.entity'
import { SponsoredAd } from '../ads/ad.entity'

@Module({ imports: [AuthModule, TypeOrmModule.forFeature([AdminUser, ShopAccount, Shop, Product, SponsoredAd])], controllers: [AdminController], providers: [AdminService] })
export class AdminModule {}

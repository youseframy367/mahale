import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Shop } from '../shops/shop.entity'
import { Product } from '../products/product.entity'
import { SponsoredAd } from '../ads/ad.entity'
import { PublicController } from './public.controller'
import { PublicService } from './public.service'

@Module({ imports: [TypeOrmModule.forFeature([Shop, Product, SponsoredAd])], controllers: [PublicController], providers: [PublicService] })
export class PublicModule {}

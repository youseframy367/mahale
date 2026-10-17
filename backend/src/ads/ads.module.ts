import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthModule } from '../auth/auth.module'
import { SponsoredAd } from './ad.entity'
import { AdsController } from './ads.controller'
import { AdsService } from './ads.service'

@Module({ imports: [AuthModule, TypeOrmModule.forFeature([SponsoredAd])], controllers: [AdsController], providers: [AdsService] })
export class AdsModule {}

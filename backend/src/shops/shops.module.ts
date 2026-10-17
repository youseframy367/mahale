import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthModule } from '../auth/auth.module'
import { Shop } from './shop.entity'
import { ShopsController } from './shops.controller'
import { ShopsService } from './shops.service'

@Module({ imports: [AuthModule, TypeOrmModule.forFeature([Shop])], controllers: [ShopsController], providers: [ShopsService], exports: [ShopsService] })
export class ShopsModule {}

import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AdminUser } from './admin-user.entity'
import { ShopAccount } from './shop-account.entity'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { AuthGuard } from './auth.guard'

@Module({ imports: [TypeOrmModule.forFeature([AdminUser, ShopAccount]), JwtModule.register({ secret: process.env.JWT_SECRET || 'dev-secret', signOptions: { expiresIn: '7d' } })], controllers: [AuthController], providers: [AuthService, AuthGuard], exports: [AuthService, AuthGuard, JwtModule] })
export class AuthModule {}

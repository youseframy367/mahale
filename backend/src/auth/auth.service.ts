import { Injectable,UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { AdminUser } from './admin-user.entity';
import { ShopAccount } from './shop-account.entity';
@Injectable()
export class AuthService {
  constructor(@InjectRepository(AdminUser) private admins:Repository<AdminUser>, @InjectRepository(ShopAccount) private shopAccounts:Repository<ShopAccount>, private jwt:JwtService) {}
  async login(email:string,password:string) {
    const shop = await this.shopAccounts.createQueryBuilder('account').addSelect('account.passwordHash').where('LOWER(account.email)=LOWER(:email)',{email}).andWhere('account.isActive=true').getOne();
    if (shop && await bcrypt.compare(password,shop.passwordHash)) { shop.lastLoginAt=new Date(); await this.shopAccounts.save(shop); const accessToken=await this.jwt.signAsync({sub:shop.id,role:'shop_owner',shopId:shop.shopId}); return {accessToken,user:{id:shop.id,email:shop.email,role:'shop_owner',shopId:shop.shopId}} }
    const admin=await this.admins.createQueryBuilder('user').addSelect('user.passwordHash').where('LOWER(user.email)=LOWER(:email)',{email}).andWhere('user.isActive=true').getOne();
    if (!admin || !(await bcrypt.compare(password,admin.passwordHash))) throw new UnauthorizedException('بيانات الدخول غير صحيحة');
    const accessToken=await this.jwt.signAsync({sub:admin.id,role:admin.role,shopId:null}); return {accessToken,user:{id:admin.id,name:admin.name,email:admin.email,role:admin.role,shopId:null}}
  }
}

import { Controller, Get, Param } from '@nestjs/common'
import { PublicService } from './public.service'

@Controller('public')
export class PublicController {
  constructor(private readonly service: PublicService) {}
  @Get('shops') shops() { return this.service.listShops() }
  @Get('shops/:slug') shop(@Param('slug') slug: string) { return this.service.getShop(slug) }
  @Get('products') products() { return this.service.listProducts() }
  @Get('products/:slug') product(@Param('slug') slug: string) { return this.service.getProduct(slug) }
  @Get('ads') ads() { return this.service.listAds() }
}

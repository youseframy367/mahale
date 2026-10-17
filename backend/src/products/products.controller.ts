import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common'
import { AuthGuard, type AuthPayload } from '../auth/auth.guard'
import { ProductsService } from './products.service'

@Controller('shops/:shopId/products')
@UseGuards(AuthGuard)
export class ProductsController {
  constructor(private readonly service: ProductsService) {}
  @Get() list(@Param('shopId') shopId: string, @Req() req: { user: AuthPayload }) { this.service.assertAccess(shopId, req.user); return this.service.list(shopId) }
  @Post() create(@Param('shopId') shopId: string, @Body() body: Record<string, unknown>, @Req() req: { user: AuthPayload }) { this.service.assertAccess(shopId, req.user); return this.service.create(shopId, body) }
  @Patch(':id') update(@Param('shopId') shopId: string, @Param('id') id: string, @Body() body: Record<string, unknown>, @Req() req: { user: AuthPayload }) { this.service.assertAccess(shopId, req.user); return this.service.update(id, shopId, body) }
  @Delete(':id') remove(@Param('shopId') shopId: string, @Param('id') id: string, @Req() req: { user: AuthPayload }) { this.service.assertAccess(shopId, req.user); return this.service.remove(id, shopId) }
}

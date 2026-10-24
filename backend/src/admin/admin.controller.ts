import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common'
import { AuthGuard, type AuthPayload } from '../auth/auth.guard'
import { AdminService } from './admin.service'

@Controller('admin')
@UseGuards(AuthGuard)
export class AdminController {
  constructor(private readonly service: AdminService) {}
  @Get('overview') overview() { return this.service.overview() }
  @Get('shops') shops() { return this.service.listShops() }
  @Post('shops') createShop(@Body() body: Record<string, string>) { return this.service.createShop(body) }
  @Patch('shops/:id') updateShop(@Param('id') id: string, @Body() body: Record<string, unknown>) { return this.service.updateShop(id, body) }
  @Delete('shops/:id') deleteShop(@Param('id') id: string) { return this.service.deleteShop(id) }
  @Get('users') users() { return this.service.listUsers() }
  @Post('users') createUser(@Body() body: { name: string; email: string; password: string; role: 'owner' | 'sales' }, @Req() req: { user: AuthPayload }) { return this.service.createUser(body as never, req.user) }
  @Delete('users/:id') deleteUser(@Param('id') id: string, @Req() req: { user: AuthPayload }) { return this.service.deleteUser(id, req.user) }
  @Get('ads') ads() { return this.service.listAds() }
  @Post('shops/:shopId/ads') createAd(@Param('shopId') shopId: string, @Body() body: Record<string, unknown>) { return this.service.createAd(shopId, body) }
  @Patch('ads/:id') updateAd(@Param('id') id: string, @Body() body: Record<string, unknown>) { return this.service.updateAd(id, body) }
  @Delete('ads/:id') deleteAd(@Param('id') id: string) { return this.service.deleteAd(id) }
}

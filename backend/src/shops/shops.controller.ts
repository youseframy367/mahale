import { Body, Controller, Get, Param, Patch, Req, UseGuards } from '@nestjs/common'
import { AuthGuard, type AuthPayload } from '../auth/auth.guard'
import { ShopsService } from './shops.service'

@Controller('shops')
@UseGuards(AuthGuard)
export class ShopsController {
  constructor(private readonly service: ShopsService) {}
  @Get(':id') get(@Param('id') id: string, @Req() req: { user: AuthPayload }) { this.service.assertAccess(id, req.user); return this.service.findOne(id) }
  @Patch(':id') update(@Param('id') id: string, @Body() body: Record<string, unknown>, @Req() req: { user: AuthPayload }) { this.service.assertAccess(id, req.user); return this.service.update(id, body) }
}

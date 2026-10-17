import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

export type AuthPayload = { sub: string; role: string; shopId: string | null }

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwt: JwtService) {}
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<{ headers: { authorization?: string }; user?: AuthPayload }>()
    const token = request.headers.authorization?.replace(/^Bearer\s+/i, '')
    if (!token) throw new UnauthorizedException('يجب تسجيل الدخول')
    try { request.user = this.jwt.verify<AuthPayload>(token); return true } catch { throw new UnauthorizedException('جلسة الدخول غير صالحة') }
  }
}

export function currentUser(request: { user?: AuthPayload }) { return request.user }

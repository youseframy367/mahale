export type DashboardShop = { id: string | number; name: string; slug: string; location: string; phone: string; category: string; sponsoredAds: number; joinedAt: string; password: string; email?: string; logo: string; cover: string }
export type SponsoredAd = { id: string | number; shopId: string | number; title: string; description: string; phone: string; image: string; status: 'نشط' | 'مسودة' }
export type TeamRole = 'owner' | 'sales'
export type TeamUser = { id: string | number; name: string; email: string; password: string; role: TeamRole }
export const dashboardCredentials = { email: 'yousseframy@gmail.com', password: '2005' }
export const initialTeamUsers: TeamUser[] = [{ id: 1, name: 'يُوسِف رامي', email: dashboardCredentials.email, password: dashboardCredentials.password, role: 'owner' }]
export const teamRoleLabels: Record<TeamRole, string> = { owner: 'Owner', sales: 'Sales' }
export const initialDashboardShops: DashboardShop[] = []
export const initialSponsoredAds: SponsoredAd[] = []
export function generateClientPassword() { const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789'; return Array.from({ length: 11 }, (_, index) => chars[(Date.now() + index * 17) % chars.length]).join('') }
export function slugify(value: string) { return value.trim().toLowerCase().replace(/[^a-z0-9\u0600-\u06ff]+/g, '-').replace(/^-|-$/g, '') || `shop-${Date.now()}` }

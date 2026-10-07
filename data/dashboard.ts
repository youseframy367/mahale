export type DashboardShop = {
  id: number
  name: string
  slug: string
  location: string
  phone: string
  category: string
  sponsoredAds: number
  joinedAt: string
  password: string
  logo: string
  cover: string
}

export type SponsoredAd = {
  id: number
  shopId: number
  title: string
  description: string
  phone: string
  image: string
  status: 'نشط' | 'مسودة'
}

export type TeamRole = 'owner' | 'sales'

export type TeamUser = {
  id: number
  name: string
  email: string
  password: string
  role: TeamRole
}

export const dashboardCredentials = { email: 'yousseframy@gmail.com', password: '2005' }

export const initialTeamUsers: TeamUser[] = [
  { id: 1, name: 'يُوسِف رامي', email: dashboardCredentials.email, password: dashboardCredentials.password, role: 'owner' },
]

export const teamRoleLabels: Record<TeamRole, string> = { owner: 'Owner', sales: 'Sales' }

export const initialDashboardShops: DashboardShop[] = [
  { id: 1, name: 'أحمد فاشون', slug: 'ahmed-fashion', location: 'المنصورة، الدقهلية', phone: '01023522063', category: 'ملابس', sponsoredAds: 3, joinedAt: '2025/09/14', password: 'A7kL9pQ2xZ1', logo: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=240&q=85', cover: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=85' },
  { id: 2, name: 'بيت القهوة', slug: 'coffee-house', location: 'المعادي، القاهرة', phone: '01098765432', category: 'أكل ومشروبات', sponsoredAds: 2, joinedAt: '2025/10/02', password: 'M4sT8nR1bC6', logo: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=240&q=85', cover: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85' },
  { id: 3, name: 'تك زون', slug: 'tech-zone', location: 'المعادي، القاهرة', phone: '01122334455', category: 'إلكترونيات', sponsoredAds: 1, joinedAt: '2025/10/11', password: 'T9vK3dP7mL2', logo: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=240&q=85', cover: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85' },
  { id: 4, name: 'حلويات روز', slug: 'rose-sweets', location: 'الهرم، الجيزة', phone: '01234567890', category: 'حلويات', sponsoredAds: 4, joinedAt: '2025/11/18', password: 'R2sW6hN8qE4', logo: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=240&q=85', cover: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85' },
]

export const initialSponsoredAds: SponsoredAd[] = [
  { id: 1, shopId: 1, title: 'خصم 30% على تشكيلة الشتاء', description: 'اختيارات مميزة بأسعار خاصة لفترة محدودة.', phone: '01023522063', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=85', status: 'نشط' },
  { id: 2, shopId: 1, title: 'وصل حديثًا: كاجوال رجالي', description: 'اكتشف التشكيلة الجديدة الآن.', phone: '01023522063', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85', status: 'نشط' },
  { id: 3, shopId: 2, title: 'قهوة اليوم بسعر خاص', description: 'استمتع بأفضل مذاق في أجواء هادئة.', phone: '01098765432', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85', status: 'نشط' },
]

export function generateClientPassword() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789'
  return Array.from({ length: 11 }, (_, index) => chars[(Date.now() + index * 17) % chars.length]).join('')
}

export function slugify(value: string) {
  return value.trim().toLowerCase().replace(/[^a-z0-9\u0600-\u06ff]+/g, '-').replace(/^-|-$/g, '') || `shop-${Date.now()}`
}

import { apiRequest } from './client'
export type AdminShop = { id: string; name: string; slug: string; location: string; phone: string; category: string; description?: string; logoUrl?: string; coverUrl?: string; sponsoredAds: number; createdAt: string }
export type AdminAd = { id: string; shopId: string; title: string; description: string; phone?: string; imageUrl?: string; status: 'draft' | 'active' | 'paused' | 'expired'; createdAt: string }
export type AdminUser = { id: string; name: string; email: string; role: 'owner' | 'sales'; isActive: boolean; createdAt: string }
export type Overview = { shops: number; ads: number; users: number; categories: number }
export const adminApi = {
  overview: () => apiRequest<Overview>('/admin/overview'), shops: () => apiRequest<AdminShop[]>('/admin/shops'), users: () => apiRequest<AdminUser[]>('/admin/users'), ads: () => apiRequest<AdminAd[]>('/admin/ads'),
  createShop: (data: Record<string, string>) => apiRequest<AdminShop>('/admin/shops', { method: 'POST', body: JSON.stringify(data) }), updateShop: (id: string, data: Partial<AdminShop>) => apiRequest<AdminShop>(`/admin/shops/${id}`, { method: 'PATCH', body: JSON.stringify(data) }), deleteShop: (id: string) => apiRequest<{ success: boolean }>(`/admin/shops/${id}`, { method: 'DELETE' }),
  createUser: (data: { name: string; email: string; password: string; role: 'owner' | 'sales' }) => apiRequest<AdminUser>('/admin/users', { method: 'POST', body: JSON.stringify(data) }), deleteUser: (id: string) => apiRequest<{ success: boolean }>(`/admin/users/${id}`, { method: 'DELETE' }),
  createAd: (shopId: string, data: Partial<AdminAd>) => apiRequest<AdminAd>(`/admin/shops/${shopId}/ads`, { method: 'POST', body: JSON.stringify(data) }), updateAd: (id: string, data: Partial<AdminAd>) => apiRequest<AdminAd>(`/admin/ads/${id}`, { method: 'PATCH', body: JSON.stringify(data) }), deleteAd: (id: string) => apiRequest<{ success: boolean }>(`/admin/ads/${id}`, { method: 'DELETE' }),
}

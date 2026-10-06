export type ShopProduct = {
  id: number
  name: string
  slug: string
  price: number
  category: string
  image: string
  description: string
  available: boolean
  shopSlug: string
  shopName: string
}

const productImages = [
  'photo-1521572163474-6864f9cf17ab',
  'photo-1542272604-787c3835535d',
  'photo-1551028719-00167b16eac5',
  'photo-1549298916-b41d501d3772',
  'photo-1602810318383-e386cc2a3ccf',
  'photo-1553062407-98eeb64c6a62',
]

export function makeShopProducts(shopName: string, category: string, shopSlug: string): ShopProduct[] {
  return Array.from({ length: 8 }, (_, index) => ({
    id: index + 1,
    name: `${category} ${['مميز', 'عملي', 'كلاسيك', 'جديد'][index % 4]}`,
    slug: `${shopSlug}-product-${index + 1}`,
    price: 280 + index * 145,
    category,
    image: `https://images.unsplash.com/${productImages[index % productImages.length]}?auto=format&fit=crop&w=800&q=85`,
    description: `اختيار مميز من ${shopName} بجودة عالية وتفاصيل مناسبة للاستخدام اليومي.`,
    available: index !== 6,
    shopSlug,
    shopName,
  }))
}

export function findShopProduct(slug: string, shops: Array<{ name: string; category: string; slug: string }>) {
  for (const shop of shops) {
    const product = makeShopProducts(shop.name, shop.category, shop.slug).find((item) => item.slug === slug)
    if (product) return product
  }
  return undefined
}

import { notFound } from 'next/navigation'
import { getPublicShop, getPublicShops } from '@/lib/public-api'
import StorePageClient from '@/components/store/store-page'

export default async function StorePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const [shop, allShops] = await Promise.all([getPublicShop(slug), getPublicShops()])
  if (!shop) notFound()
  return <StorePageClient shop={shop} relatedShops={allShops.filter(item => item.slug !== shop.slug)} />
}

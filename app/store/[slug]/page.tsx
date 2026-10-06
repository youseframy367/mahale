import { notFound } from 'next/navigation'
import { shops } from '@/data/shops'
import StorePageClient from '@/components/store/store-page'

export default async function StorePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const shop = shops.find((item) => item.slug === slug)
  if (!shop) notFound()
  return <StorePageClient shop={shop} />
}

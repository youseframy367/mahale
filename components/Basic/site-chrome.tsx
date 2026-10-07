'use client'

import { usePathname } from 'next/navigation'
import { Navbar } from '@/components/Basic/navbar'
import { Footer } from '@/components/Basic/footer'

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const isDashboard = usePathname().startsWith('/dashboard')
  return isDashboard ? <>{children}</> : <><Navbar />{children}<Footer /></>
}

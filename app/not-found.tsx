import Link from 'next/link'
import { ArrowRight, LayoutDashboard } from 'lucide-react'

export default function NotFound() {
  return <main dir="rtl" className="flex min-h-screen items-center justify-center bg-[#f5f8f6] px-5 text-center"><div className="max-w-md"><div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-[#eaf7ef] text-[#087a55]"><LayoutDashboard size={28} /></div><p className="mt-6 text-sm font-bold text-[#087a55]">الصفحة مش موجودة</p><h1 className="mt-2 text-3xl font-bold text-[#17231d]">واضح إن الرابط اتغير</h1><p className="mt-3 text-sm leading-7 text-[#718078]">ارجع للوحة التحكم وكمل إدارة العملاء والإعلانات من مكان واحد.</p><Link href="/dashboard" className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#087a55] px-5 text-sm font-bold text-white"><ArrowRight size={16} /> العودة للوحة التحكم</Link></div></main>
}

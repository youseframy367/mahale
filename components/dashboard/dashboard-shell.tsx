'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { BarChart3, ChevronLeft, LogOut, Megaphone, Plus, Settings, Store, Users, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navItems = [
  { href: '/dashboard', label: 'الرئيسية', icon: BarChart3 },
  { href: '/dashboard/clients', label: 'بيانات العملاء', icon: Users },
  { href: '/dashboard/clients/new', label: 'إضافة عميل', icon: Plus },
]

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [ready, setReady] = useState(false)
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setReady(true); if (localStorage.getItem('mahally-dashboard-auth') !== 'true') router.replace('/dashboard/login') }, [router])
  if (!ready || pathname === '/dashboard/login') return <>{children}</>
  const logout = () => { localStorage.removeItem('mahally-dashboard-auth'); router.replace('/dashboard/login') }
  return <div dir="rtl" className="min-h-screen bg-[#f5f8f6] text-[#17231d]">
    <button type="button" aria-label="فتح القائمة" onClick={() => setOpen(true)} className="fixed right-4 top-4 z-30 grid size-11 place-items-center rounded-xl bg-[#087a55] text-white shadow-lg lg:hidden"><Store size={20} /></button>
    <aside className={`fixed inset-y-0 right-0 z-40 flex w-[275px] flex-col bg-[#10251d] px-5 py-6 text-white transition-transform duration-300 lg:translate-x-0 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex items-center justify-between"><Link href="/dashboard" className="flex items-center gap-3 text-xl font-bold"><span className="grid size-10 place-items-center rounded-xl bg-[#087a55]"><Store size={20} /></span> لوحة محلّي</Link><button type="button" className="lg:hidden" onClick={() => setOpen(false)} aria-label="إغلاق القائمة"><X size={20} /></button></div>
      <p className="mt-12 px-3 text-[11px] font-bold text-white/40">القائمة الرئيسية</p>
      <nav className="mt-3 space-y-1">{navItems.map(({ href, label, icon: Icon }) => <Link key={href} href={href} onClick={() => setOpen(false)} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition ${pathname === href ? 'bg-[#087a55] text-white' : 'text-white/65 hover:bg-white/10 hover:text-white'}`}><Icon size={18} />{label}<ChevronLeft size={15} className="mr-auto opacity-50" /></Link>)}</nav>
      <p className="mt-9 px-3 text-[11px] font-bold text-white/40">إدارة المنصة</p>
      <nav className="mt-3 space-y-1"><Link href="/dashboard/clients" className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-white/65 hover:bg-white/10 hover:text-white"><Megaphone size={18} />الإعلانات الممولة</Link><button type="button" className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-white/65 hover:bg-white/10 hover:text-white"><Settings size={18} />الإعدادات</button></nav>
      <div className="mt-auto border-t border-white/10 pt-5"><div className="mb-4 flex items-center gap-3"><span className="grid size-9 place-items-center rounded-full bg-[#d8efe3] text-sm font-bold text-[#087a55]">ي</span><div><b className="block text-sm">يُوسِف رامي</b><span className="text-[11px] text-white/45">مدير المنصة</span></div></div><button type="button" onClick={logout} className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-red-200 hover:bg-red-500/10"><LogOut size={18} />تسجيل الخروج</button></div>
    </aside>
    {open && <button aria-label="إغلاق القائمة" className="fixed inset-0 z-30 bg-black/40 lg:hidden" onClick={() => setOpen(false)} />}
    <main className="min-h-screen lg:mr-[275px]">{children}</main>
  </div>
}

export function DashboardHeader({ title, description, action }: { title: string; description?: string; action?: React.ReactNode }) { return <header className="flex flex-col justify-between gap-4 border-b border-[#e2ebe5] bg-white px-5 py-5 sm:flex-row sm:items-center sm:px-8"><div><h1 className="text-xl font-bold sm:text-2xl">{title}</h1>{description && <p className="mt-1 text-sm text-[#74847b]">{description}</p>}</div>{action}</header> }

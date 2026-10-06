import Link from 'next/link'
import { ArrowRight, Search } from 'lucide-react'

export default function NotFound() {
  return <main dir="rtl" className="flex min-h-[70vh] items-center justify-center bg-[#fbfcfa] px-5 text-center"><div className="max-w-md"><div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-[#eef8f1] text-[#087a55]"><Search size={28} /></div><p className="mt-6 text-sm font-bold text-[#087a55]">الصفحة مش موجودة</p><h1 className="mt-2 text-3xl font-bold text-[#17231d]">واضح إن الرابط اتغير</h1><p className="mt-3 text-sm leading-7 text-[#718078]">جرّب ترجع للمحلات أو الصفحة الرئيسية وتبدأ اكتشاف جديد.</p><div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/stores" className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#087a55] px-5 text-sm font-bold text-white"><Search size={16} /> اكتشف المحلات</Link><Link href="/" className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-[#dce7df] bg-white px-5 text-sm font-bold text-[#087a55]"><ArrowRight size={16} /> الصفحة الرئيسية</Link></div></div></main>
}

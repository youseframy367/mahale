'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { MapPin, Search, SlidersHorizontal, Sparkles, Store, X } from 'lucide-react'
import { categories, governorates, shops, sortOptions, whatsappUrl, type Shop } from '@/data/shops'

export default function StoresPage() {
  const [query, setQuery] = useState('')
  const [governorate, setGovernorate] = useState(governorates[0])
  const [category, setCategory] = useState(categories[0])
  const [sort, setSort] = useState(sortOptions[0])
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filteredShops = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    const result = shops.filter((shop) => {
      const searchable = [shop.name, shop.description, shop.location, shop.governorate, shop.category].join(' ').toLowerCase()
      return (!normalizedQuery || searchable.includes(normalizedQuery)) &&
        (governorate === governorates[0] || shop.governorate === governorate) &&
        (category === categories[0] || shop.category === category)
    })

    return [...result].sort((a, b) => sort === 'الأكثر منتجات' ? b.productsCount - a.productsCount : sort === 'المحلات المميزة' ? Number(b.featured) - Number(a.featured) : a.id - b.id)
  }, [category, governorate, query, sort])

  const clearFilters = () => {
    setQuery('')
    setGovernorate(governorates[0])
    setCategory(categories[0])
    setSort(sortOptions[0])
  }

  return (
    <main className="min-h-screen bg-[#fbfcfa] text-[#17231d]">
      <section className="border-b border-[#e6eee9] bg-white">
        <div className="mx-auto max-w-[1180px] px-5 pb-9 pt-12 sm:px-8 sm:pb-12 sm:pt-16">
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-[#087a55]"><Store size={17} /> مجتمع محلي يكبر كل يوم</p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">اكتشف محلات محلّي</h1>
            <p className="mt-4 text-sm leading-7 text-[#68786f] sm:text-base">تعرّف على المحلات المشتركة مع محلّي واكتشف منتجات وخدمات قريبة منك.</p>
          </div>
          <div className="relative mt-8 max-w-3xl">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-[#84948b]" size={20} />
            <input aria-label="ابحث عن اسم محل" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="ابحث عن اسم محل..." className="h-14 w-full rounded-2xl border border-[#dce7df] bg-white pr-12 pl-5 text-sm shadow-[0_5px_20px_rgba(23,35,29,0.05)] outline-none transition placeholder:text-[#9aa7a0] focus:border-[#087a55] focus:ring-4 focus:ring-[#087a55]/10" />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1180px] px-5 py-8 sm:px-8 sm:py-11">
        <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
          <div><p className="text-xs font-bold text-[#087a55]">اختار اللي يناسبك</p><h2 className="mt-1 text-2xl font-bold">كل المحلات <span className="text-base font-medium text-[#8a9891]">({filteredShops.length})</span></h2></div>
          <button type="button" onClick={() => setFiltersOpen(true)} className="inline-flex h-11 items-center gap-2 rounded-xl border border-[#dce7df] bg-white px-4 text-sm font-bold text-[#526159] shadow-sm md:hidden"><SlidersHorizontal size={17} /> فلترة</button>
        </div>

        <div className="hidden rounded-2xl border border-[#e1ebe5] bg-white p-4 shadow-[0_4px_18px_rgba(23,35,29,0.03)] md:flex md:items-end md:gap-3">
          <SelectFilter label="المحافظة" value={governorate} options={governorates} onChange={setGovernorate} />
          <SelectFilter label="الفئة" value={category} options={categories} onChange={setCategory} />
          <SelectFilter label="ترتيب المحلات" value={sort} options={sortOptions} onChange={setSort} />
          <button type="button" onClick={clearFilters} className="h-11 shrink-0 rounded-xl px-4 text-sm font-bold text-[#087a55] transition hover:bg-[#f1f8f3]">مسح الفلاتر</button>
        </div>

        {filteredShops.length ? <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{filteredShops.map((shop) => <ShopCard key={shop.id} shop={shop} />)}</div> : <EmptyState onClear={clearFilters} />}

        <section className="mt-14 overflow-hidden rounded-[28px] border border-[#cfe4d6] bg-[#eef8f1] p-6 sm:p-10">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl"><p className="text-sm font-bold text-[#087a55]">لأصحاب المحلات</p><h2 className="mt-2 text-2xl font-bold sm:text-3xl">محلك يستاهل يكون موجود هنا</h2><p className="mt-4 text-sm leading-7 text-[#5e7065]">خلّي الناس تكتشف محلك ومنتجاتك بسهولة، واعمل لنفسك صفحة خاصة على محلّي يقدر عملاؤك يرجعوا لها في أي وقت.</p></div>
            <div className="grid shrink-0 gap-3 text-sm font-semibold text-[#496056] sm:grid-cols-3 lg:w-[500px] lg:grid-cols-1"><Benefit text="صفحة خاصة باسم ولوجو محلك" /><Benefit text="عرض منتجاتك وأسعارك" /><Benefit text="وصول أسهل للعملاء والتواصل معهم" /></div>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="/AddStore" className="inline-flex h-12 items-center justify-center rounded-xl bg-[#087a55] px-6 text-sm font-bold text-white transition hover:bg-[#066847]">أضف محلك</Link><a href={whatsappUrl} className="inline-flex h-12 items-center justify-center rounded-xl border border-[#b9d9c4] bg-white px-6 text-sm font-bold text-[#087a55] transition hover:bg-[#f8fcf9]">تواصل معنا على واتساب</a></div>
        </section>
      </div>

      {filtersOpen && <div className="fixed inset-0 z-50 flex items-end bg-[#17231d]/40 md:hidden" role="dialog" aria-modal="true" aria-label="فلاتر المحلات"><div className="w-full rounded-t-[28px] bg-white p-6"><div className="mb-6 flex items-center justify-between"><h2 className="text-xl font-bold">فلترة المحلات</h2><button type="button" onClick={() => setFiltersOpen(false)} className="rounded-full bg-[#f1f5f2] p-2 text-[#627269]" aria-label="إغلاق"><X size={18} /></button></div><div className="grid gap-4"><SelectFilter label="المحافظة" value={governorate} options={governorates} onChange={setGovernorate} /><SelectFilter label="الفئة" value={category} options={categories} onChange={setCategory} /><SelectFilter label="ترتيب المحلات" value={sort} options={sortOptions} onChange={setSort} /></div><div className="mt-6 flex gap-3"><button type="button" onClick={clearFilters} className="h-12 flex-1 rounded-xl border border-[#dce7df] text-sm font-bold text-[#087a55]">مسح الفلاتر</button><button type="button" onClick={() => setFiltersOpen(false)} className="h-12 flex-1 rounded-xl bg-[#087a55] text-sm font-bold text-white">عرض النتائج</button></div></div></div>}
    </main>
  )
}

function SelectFilter({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (value: string) => void }) {
  return <label className="block flex-1"><span className="mb-2 block text-xs font-bold text-[#718078]">{label}</span><select value={value} onChange={(event) => onChange(event.target.value)} className="h-11 w-full rounded-xl border border-[#dce7df] bg-white px-3 text-sm font-semibold text-[#34453c] outline-none focus:border-[#087a55] focus:ring-4 focus:ring-[#087a55]/10">{options.map((option) => <option key={option}>{option}</option>)}</select></label>
}

function ShopCard({ shop }: { shop: Shop }) {
  return <article className="group overflow-hidden rounded-2xl border border-[#e1ebe5] bg-white shadow-[0_4px_15px_rgba(23,35,29,0.03)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(23,35,29,0.09)]"><div className="relative h-40 overflow-hidden bg-[#e9f2ec]"><img src={shop.cover} alt={`غلاف ${shop.name}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#17231d]/35 to-transparent" />{shop.featured && <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-lg bg-white/95 px-2.5 py-1.5 text-[11px] font-bold text-[#087a55]"><Sparkles size={13} /> محل مميز</span>}<img src={shop.logo} alt={`شعار ${shop.name}`} className="absolute bottom-[-22px] right-5 h-16 w-16 rounded-2xl border-4 border-white object-cover shadow-md" /></div><div className="p-5 pt-8"><div className="flex items-start justify-between gap-3"><h3 className="text-lg font-bold">{shop.name}</h3><span className="rounded-lg bg-[#eef8f1] px-2.5 py-1 text-[11px] font-bold text-[#087a55]">{shop.category}</span></div><p className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-[#718078]"><MapPin size={14} className="text-[#087a55]" /> {shop.location}، {shop.governorate}</p><p className="mt-3 min-h-[48px] text-sm leading-6 text-[#718078]">{shop.description}</p><div className="mt-5 flex items-center justify-between gap-3"><span className="text-xs font-semibold text-[#839189]">{shop.productsCount} منتج</span><Link href={`/store/${shop.slug}`} className="inline-flex h-10 items-center justify-center rounded-xl bg-[#087a55] px-4 text-xs font-bold text-white transition hover:bg-[#066847] focus:outline-none focus:ring-4 focus:ring-[#087a55]/20">عرض المحل</Link></div></div></article>
}

function Benefit({ text }: { text: string }) { return <div className="flex items-center gap-3"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#087a55] shadow-sm">✓</span>{text}</div> }
function EmptyState({ onClear }: { onClear: () => void }) { return <div className="mt-7 rounded-2xl border border-dashed border-[#cdded3] bg-white px-5 py-16 text-center"><div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef8f1] text-[#087a55]"><Search size={21} /></div><h2 className="mt-4 text-xl font-bold">مش لقينا محلات مطابقة</h2><p className="mt-2 text-sm text-[#718078]">جرّب تغيّر كلمة البحث أو تعدّل الفلاتر.</p><button type="button" onClick={onClear} className="mt-5 rounded-xl bg-[#087a55] px-5 py-3 text-sm font-bold text-white">مسح الفلاتر</button></div> }

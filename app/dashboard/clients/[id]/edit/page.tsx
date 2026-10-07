'use client'

import Link from 'next/link'
import { ArrowRight, Save } from 'lucide-react'
import { FormEvent, useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { DashboardHeader } from '@/components/dashboard/dashboard-shell'
import { useDashboardData } from '@/components/dashboard/dashboard-data'

export default function EditClientPage() {
  const { id } = useParams<{ id: string }>(); const router = useRouter(); const { shops, updateShop } = useDashboardData(); const shop = shops.find((item) => item.id === Number(id)); const [form, setForm] = useState({ name: '', location: '', phone: '', category: '' })
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { if (shop) setForm({ name: shop.name, location: shop.location, phone: shop.phone, category: shop.category }) }, [shop])
  if (!shop) return <div className="p-8">العميل غير موجود.</div>
  const submit = (event: FormEvent) => { event.preventDefault(); updateShop({ ...shop, ...form }); router.push(`/dashboard/clients/${shop.id}`) }
  return <><DashboardHeader title="تعديل بيانات العميل" description={`تحديث بيانات ${shop.name}`} /><div className="max-w-3xl p-5 sm:p-8"><form onSubmit={submit} className="rounded-2xl border border-[#e3ebe6] bg-white p-6 sm:p-8"><div className="grid gap-5 sm:grid-cols-2"><Field label="اسم المحل" value={form.name} onChange={(v) => setForm({ ...form, name: v })} /><Field label="الموقع" value={form.location} onChange={(v) => setForm({ ...form, location: v })} /><Field label="رقم التواصل" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} /><label className="block"><span className="mb-2 block text-sm font-bold">الفئة</span><select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="h-12 w-full rounded-xl border border-[#dce7df] bg-white px-3 text-sm outline-none focus:border-[#087a55]"><option>ملابس</option><option>أحذية</option><option>إلكترونيات</option><option>أكل ومشروبات</option><option>منزل وديكور</option><option>ورد وهدايا</option><option>حلويات</option></select></label></div><div className="mt-8 flex gap-3"><Link href={`/dashboard/clients/${shop.id}`} className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-[#dce7df] text-sm font-bold"><ArrowRight size={16} /> إلغاء</Link><button type="submit" className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#087a55] text-sm font-bold text-white"><Save size={17} /> حفظ التعديلات</button></div></form></div></>
}
function Field({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) { return <label className="block"><span className="mb-2 block text-sm font-bold">{label}</span><input required value={value} onChange={(e) => onChange(e.target.value)} className="h-12 w-full rounded-xl border border-[#dce7df] px-4 text-sm outline-none focus:border-[#087a55]" /></label> }

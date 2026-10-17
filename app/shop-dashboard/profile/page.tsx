'use client'
import { FormEvent, useEffect, useState } from 'react'
import { DashboardHeader } from '@/components/dashboard/dashboard-shell'
import { shopApi, type ShopProfile } from '@/lib/api/shop-dashboard'

export default function ShopProfile() {
  const [form, setForm] = useState<Partial<ShopProfile>>({}); const [saved, setSaved] = useState(false); const [error, setError] = useState(''); const [loading, setLoading] = useState(true)
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { const shopId = JSON.parse(localStorage.getItem('mahally-shop-user') || '{}').shopId; if (!shopId) { setError('لم يتم العثور على المحل المرتبط بالحساب'); setLoading(false); return } shopApi.getProfile(shopId).then(setForm).catch(e => setError(e.message)).finally(() => setLoading(false)) }, [])
  const update = (key: keyof ShopProfile, value: string) => setForm(current => ({ ...current, [key]: value }))
  const submit = async (event: FormEvent) => { event.preventDefault(); const shopId = JSON.parse(localStorage.getItem('mahally-shop-user') || '{}').shopId; try { const result = await shopApi.updateProfile(shopId, form); setForm(result); setSaved(true); setError('') } catch (e) { setError(e instanceof Error ? e.message : 'تعذر حفظ التعديلات') } }
  return <><DashboardHeader title="بيانات المحل" description="حدّث البيانات التي تظهر للزوار" /><form onSubmit={submit} className="m-5 max-w-3xl space-y-5 rounded-2xl border border-[#e3ebe6] bg-white p-6 sm:m-8">{loading ? <p className="text-sm text-[#718078]">جاري تحميل البيانات...</p> : <><Field label="اسم المحل" value={form.name || ''} set={v => update('name', v)} /><div className="grid gap-5 sm:grid-cols-2"><Field label="الموقع" value={form.location || ''} set={v => update('location', v)} /><Field label="رقم التواصل" value={form.phone || ''} set={v => update('phone', v)} /></div><label className="block text-sm font-bold">وصف المحل<textarea value={form.description || ''} onChange={e => update('description', e.target.value)} className="mt-2 min-h-32 w-full rounded-xl border border-[#dce7df] p-4 outline-none focus:border-[#087a55]" /></label></>}{error && <p className="text-sm font-bold text-red-600">{error}</p>}{saved && <p className="text-sm font-bold text-[#087a55]">تم حفظ التعديلات بنجاح.</p>}<button disabled={loading} className="rounded-xl bg-[#087a55] px-6 py-3 text-sm font-bold text-white disabled:opacity-50">حفظ التعديلات</button></form></>
}
function Field({ label, value, set }: { label: string; value: string; set: (value: string) => void }) { return <label className="block text-sm font-bold">{label}<input value={value} onChange={e => set(e.target.value)} className="mt-2 h-12 w-full rounded-xl border border-[#dce7df] px-4 outline-none focus:border-[#087a55]" /></label> }

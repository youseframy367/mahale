'use client'

import { ArrowLeft, MapPin, MessageCircle, Store, Users, Zap, } from 'lucide-react'
import Advertisements from "@/components/advertisements";

const whatsappUrl = 'https://wa.me/201023522063?text=' + encodeURIComponent('مرحبًا، أريد الاشتراك في المنصة وإضافة محلي.')

const benefits = [
  { icon: Store, title: 'صفحة خاصة بمحلك', description: 'خلي لمحلك صفحة خاصة باسمك وصورك وبيانات التواصل.' },
  { icon: Zap, title: 'اعرض منتجاتك', description: 'اعرض منتجاتك وأسعارك وخلي العملاء يتعرفوا على اللي بتقدمه.' },
  { icon: Users, title: 'عملاء أكتر', description: 'خلي العملاء يكتشفوا محلك من خلال المنصة.' },
  { icon: MessageCircle, title: 'تواصل مباشر', description: 'العميل يقدر يتواصل معاك مباشرة عن طريق واتساب أو الهاتف.' },
]

const shops = [
  { name: 'متجر الورود', category: 'ورد وهدايا', location: 'مدينة نصر', image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=640&q=80', color: 'bg-[#e6f5ed]' },
  { name: 'بيت القهوة', category: 'محمصة وقهوة', location: 'المعادي', image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=640&q=80', color: 'bg-[#f4eee7]' },
  { name: 'لمسة أناقة', category: 'ملابس حريمي', location: 'التجمع الخامس', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=640&q=80', color: 'bg-[#f8edf1]' },
  { name: 'مخبز بلدي', category: 'مخبوزات وحلويات', location: 'الهرم', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=640&q=80', color: 'bg-[#fff2dc]' },
  { name: 'ركن الحيوانات', category: 'مستلزمات حيوانات', location: 'الزمالك', image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=640&q=80', color: 'bg-[#e9f2f4]' },
  { name: 'حكاية بيت', category: 'مفروشات وديكور', location: 'حلوان', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=640&q=80', color: 'bg-[#f3efe9]' },
]



function WhatsAppButton({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <a href={whatsappUrl} target="_blank" rel="noreferrer" className={className}><MessageCircle size={18} />{children}</a>
}

export default function Page() {

  return (
    <main dir="rtl" className="min-h-screen overflow-hidden bg-[#fbfcfa] text-[#17231d]">


      <section id="top" className="relative border-b border-[#edf1ee] bg-white"><div className="mx-auto flex max-w-[1160px] flex-col items-center px-5 pb-20 pt-16 text-center sm:px-8 sm:pt-24 lg:pb-24 lg:pt-28"><div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#edf8f3] px-3.5 py-2 text-xs font-semibold text-[#087a55]"><span className="h-1.5 w-1.5 rounded-full bg-[#087a55]" /> منصتك لكل المحلات المحلية</div><h1 className="max-w-[720px] text-4xl font-bold leading-[1.25] tracking-tight sm:text-5xl lg:text-[56px]">خلّي محلك <span className="text-[#087a55]">موجود أونلاين</span></h1><p className="mt-5 max-w-[570px] text-base leading-8 text-[#718078] sm:text-lg">اعمل صفحة خاصة بمحلك، اعرض منتجاتك وخلي عملاءك يوصلولك بسهولة.</p><WhatsAppButton className="mt-8 flex h-13 items-center gap-2 rounded-xl bg-[#087a55] px-7 text-sm font-bold text-white shadow-[0_8px_20px_rgba(8,122,85,0.18)] transition-all hover:-translate-y-0.5 hover:bg-[#066847]">اشترك معانا</WhatsAppButton><p className="mt-3 text-xs text-[#9aa59f]">تواصل معانا وهنشرحلك كل التفاصيل.</p></div><div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#edf8f3] blur-3xl" /><div className="pointer-events-none absolute -right-20 top-10 h-52 w-52 rounded-full bg-[#f2f8f4] blur-3xl" /></section>

      <section id="benefits" className="mx-auto max-w-[1160px] px-5 py-16 sm:px-8 lg:py-20"><div className="mb-9 text-center"><p className="mb-2 text-xs font-semibold text-[#087a55]">مميزات الانضمام</p><h2 className="text-2xl font-bold tracking-tight sm:text-3xl">ليه تشترك معانا؟</h2><p className="mt-3 text-sm text-[#718078]">كل اللي تحتاجه عشان محلك يكبر ويوصل لعملاء أكتر.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{benefits.map(({ icon: Icon, title, description }) => <article key={title} className="rounded-2xl border border-[#e1ebe5] bg-white p-5 shadow-[0_2px_10px_rgba(23,35,29,0.03)]"><div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf8f3] text-[#087a55]"><Icon size={21} /></div><h3 className="text-sm font-bold">{title}</h3><p className="mt-2 text-xs leading-6 text-[#718078]">{description}</p></article>)}</div></section>

      <section id="shops" className="border-y border-[#edf1ee] bg-white"><div className="mx-auto max-w-[1160px] px-5 py-16 sm:px-8 lg:py-20"><div className="mb-9 flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><div><p className="mb-2 text-xs font-semibold text-[#087a55]">مجتمع محلي</p><h2 className="text-2xl font-bold tracking-tight sm:text-3xl">محلات موجودة معانا بالفعل</h2></div><p className="max-w-[390px] text-sm leading-6 align-center text-[#718078] sm:text-left">انضم لمجموعة من أصحاب المحلات اللي بدأوا يعرضوا نشاطهم على المنصة.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{shops.map((shop) => <article key={shop.name} className="group overflow-hidden rounded-2xl border border-[#e1ebe5] bg-white shadow-[0_2px_10px_rgba(23,35,29,0.03)]"><div className={`relative h-40 overflow-hidden ${shop.color}`}><img src={shop.image} alt={shop.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" /><div className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#087a55] shadow-sm"><Store size={18} /></div></div><div className="p-4"><div className="flex items-start justify-between gap-2"><div><h3 className="text-sm font-bold">{shop.name}</h3><p className="mt-1 text-xs text-[#829089]">{shop.category}</p></div><a href="#footer" className="flex items-center gap-1 text-xs font-semibold text-[#087a55]">زيارة المحل <ArrowLeft size={13} /></a></div><p className="mt-4 flex items-center gap-1.5 text-xs text-[#829089]"><MapPin size={14} />{shop.location}</p></div></article>)}</div></div></section>
      <Advertisements />

      <section className="px-5 pb-16 sm:px-8 lg:pb-20"><div className="mx-auto flex max-w-[1160px] flex-col items-center rounded-3xl bg-[#087a55] px-6 py-12 text-center text-white sm:px-10"><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15"><Store size={23} /></div><h2 className="text-2xl font-bold sm:text-3xl">جاهز تضيف محلك؟</h2><p className="mt-3 text-sm text-white/75">كلّمنا على واتساب وابدأ معانا.</p><WhatsAppButton className="mt-7 flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-sm font-bold text-[#087a55] shadow-sm transition-colors hover:bg-[#f1fbf5]">اشترك معانا على واتساب</WhatsAppButton></div></section>

</main>

)
}


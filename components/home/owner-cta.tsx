import { ArrowLeft, Store } from "lucide-react";

export function OwnerCta() {
  return (
    <section id="owner" className="py-20 md:py-28">
      <div className="mx-auto w-[min(1180px,calc(100%-2rem))]">
        <div className="relative min-h-[44rem] overflow-hidden rounded-3xl bg-brand-600 px-7 py-10 text-white md:min-h-[30rem] md:px-16 md:py-14">
          <div aria-hidden="true" className="absolute -bottom-60 -left-16 size-[28rem] rounded-full border-[5rem] border-white/5" />
          <div className="relative z-10 text-center md:w-1/2 md:text-right">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold"><Store aria-hidden="true" className="size-4" /> لأصحاب المحلات</span>
            <h2 className="mt-5 text-4xl leading-tight font-extrabold tracking-tight md:text-6xl">عندك محل؟<br />خليه <span className="text-amber-200">أونلاين.</span></h2>
            <p className="mt-5 leading-8 text-white/75">أنشئ صفحتك الخاصة، أضف منتجاتك، وشارك رابط محلك مع عملائك — من غير عمولة ولا تعقيد.</p>
            <a href="#" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-brand-700 shadow-lg transition hover:-translate-y-1">
              أضف محلك مجانًا
              <ArrowLeft aria-hidden="true" className="size-5" />
            </a>
          </div>
          <div aria-label="نموذج لصفحة متجر على محلّي" className="absolute -bottom-6 left-5 w-[calc(100%-2.5rem)] -rotate-1 overflow-hidden rounded-t-3xl border-[0.4rem] border-b-0 border-white/20 bg-stone-50 text-ink shadow-2xl md:left-12 md:w-[42%]">
            <div className="flex h-7 items-center gap-1.5 border-b border-stone-100 bg-white px-3"><i className="size-1.5 rounded-full bg-stone-300" /><i className="size-1.5 rounded-full bg-stone-300" /><i className="size-1.5 rounded-full bg-stone-300" /></div>
            <img src="https://images.unsplash.com/photo-1603400521630-9f2de124b33b?auto=format&fit=crop&w=900&q=80" alt="واجهة متجر أزياء أنيق" className="h-32 w-full object-cover md:h-40" />
            <div className="flex items-center gap-3 p-4">
              <span className="grid size-11 place-items-center rounded-xl bg-emerald-950 font-extrabold text-white">ل</span>
              <div><strong className="block">لِينن</strong><small className="text-stone-400">أزياء يومية بتفاصيل بسيطة</small></div>
              <span className="mr-auto rounded-full bg-brand-50 px-2 py-1 text-[0.6rem] font-bold text-brand-600">مفتوح الآن</span>
            </div>
            <div className="grid grid-cols-3 gap-2 px-4 pb-6"><i className="h-20 rounded-xl bg-stone-200" /><i className="h-20 rounded-xl bg-orange-100" /><i className="h-20 rounded-xl bg-emerald-100" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

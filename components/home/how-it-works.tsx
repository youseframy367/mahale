import { Compass, MessageCircleMore, Search } from "lucide-react";

const steps = [
  { number: "١", title: "ابحث", description: "اكتب اسم المحل أو المنتج، أو استكشف حسب التصنيف.", icon: Search },
  { number: "٢", title: "اكتشف", description: "شوف صفحة المحل، منتجاته، أسعاره ومكانه بالتفصيل.", icon: Compass },
  { number: "٣", title: "تواصل", description: "كلم المحل مباشرة على واتساب واسأل أو اطلب بسهولة.", icon: MessageCircleMore },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative overflow-hidden bg-ink py-20 text-white md:py-28">
      <div aria-hidden="true" className="absolute -top-40 -left-40 size-96 rounded-full border border-white/5 ring-[4rem] ring-white/[0.02]" />
      <div className="relative mx-auto w-[min(1180px,calc(100%-2rem))]">
        <header className="text-center">
          <span className="text-sm font-extrabold text-brand-200">ببساطة ومن غير تعقيد</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">من أول بحث لحد ما تكلم المحل</h2>
          <p className="mt-3 text-stone-400">ثلاث خطوات بس تفصلك عن المنتج اللي بتدور عليه.</p>
        </header>
        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="relative text-center">
                <span className="absolute top-0 right-[calc(50%-3rem)] z-10 grid size-7 place-items-center rounded-full border-4 border-ink bg-amber-300 text-xs font-extrabold text-ink">{step.number}</span>
                <div className="mx-auto mb-5 grid size-20 place-items-center rounded-3xl border border-white/10 bg-white/5 text-brand-200">
                  <Icon aria-hidden="true" className="size-7" />
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-7 text-stone-400">{step.description}</p>
                {index < 2 ? <span aria-hidden="true" className="absolute top-10 -left-[calc(50%+2.5rem)] hidden w-[calc(100%-1rem)] border-t border-dashed border-white/15 md:block" /> : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

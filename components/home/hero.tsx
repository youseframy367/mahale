"use client";

import { Search } from "lucide-react";
import { FormEvent, useState } from "react";

const chips = ["ملابس", "أحذية", "إلكترونيات", "مطاعم", "إكسسوارات", "تجميل"];

export function Hero() {
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(query.trim() ? `بندور لك على «${query.trim()}»` : "اكتب اسم محل أو منتج علشان نبدأ");
  }

  return (
    <section className="relative isolate overflow-hidden bg-cream pt-16 text-center md:pt-24">
      <div aria-hidden="true" className="absolute -right-44 top-14 -z-10 size-96 rounded-full bg-brand-100/60" />
      <div aria-hidden="true" className="absolute -bottom-20 -left-24 -z-10 size-72 rounded-full border-[4rem] border-amber-100/60" />
      <div className="mx-auto flex w-[min(1180px,calc(100%-2rem))] flex-col items-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/80 px-4 py-2 text-sm font-semibold text-brand-600 shadow-sm">
          <span className="size-2 rounded-full bg-brand-500 ring-4 ring-brand-100" />
          أكثر من ٥٠٠ محل قريب منك
        </div>
        <h1 className="mt-6 text-5xl leading-[1.15] font-extrabold tracking-[-0.06em] text-ink sm:text-6xl md:text-8xl">
          اكتشف المحلات
          <span className="mt-1 block text-brand-600">اللي حواليك</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-500 md:text-xl">تصفح منتجات محلاتك المفضلة واكتشف أماكن جديدة في مكان واحد.</p>
        <form onSubmit={handleSubmit} className="mt-8 flex h-16 w-full max-w-2xl items-center gap-3 rounded-2xl border border-stone-200 bg-white p-2 pr-5 text-right shadow-card md:h-18">
          <Search aria-hidden="true" className="size-6 shrink-0 text-brand-600" />
          <input value={query} onChange={(event) => setQuery(event.target.value)} aria-label="ابحث عن محل أو منتج" placeholder="ابحث عن محل أو منتج..." className="h-full min-w-0 flex-1 border-0 bg-transparent text-base outline-none placeholder:text-stone-400" />
          <button type="submit" className="h-full rounded-xl bg-brand-600 px-6 font-bold text-white transition hover:bg-brand-700">ابحث</button>
        </form>
        <p role="status" className="h-7 pt-2 text-xs font-medium text-brand-600">{message}</p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
          <span className="w-full text-xs text-stone-400 sm:w-auto">جرّب:</span>
          {chips.map((chip) => (
            <button key={chip} type="button" onClick={() => setQuery(chip)} className="rounded-full border border-stone-200 bg-white/70 px-4 py-2 text-xs text-stone-600 transition hover:border-brand-200 hover:text-brand-600">
              {chip}
            </button>
          ))}
        </div>
      </div>
      <dl className="mx-auto mt-14 flex w-[min(1180px,calc(100%-2rem))] items-center justify-center gap-6 border-t border-stone-200 py-6 text-stone-500 sm:mt-20 sm:gap-12">
        {[["٥٠٠+", "محل مميز"], ["١٢", "مدينة"], ["٨ آلاف+", "منتج محلي"]].map(([value, label], index) => (
          <div key={label} className={`flex flex-col text-xs sm:flex-row sm:items-center sm:gap-1 sm:text-sm ${index ? "border-r border-stone-200 pr-6 sm:pr-12" : ""}`}>
            <dt className="order-2">{label}</dt>
            <dd className="order-1 text-lg font-extrabold text-ink">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

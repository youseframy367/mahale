import { ArrowLeft, Box, MapPin } from "lucide-react";
import type { Category, Product, Shop } from "@/data/mock-data";
import { FavoriteButton } from "./favorite-button";

export function ShopCard({ shop }: { shop: Shop }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-card">
      <div className="relative h-56 overflow-hidden">
        <img src={shop.image} alt={`واجهة محل ${shop.name}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-brand-600 backdrop-blur">موثّق</span>
      </div>
      <div className="relative p-5 pt-0">
        <div className={`relative z-10 -mt-8 grid size-16 place-items-center rounded-2xl border-4 border-white text-2xl font-extrabold shadow-lg ${shop.logoClass}`}>{shop.logo}</div>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">{shop.name}</h3>
            <p className="mt-1 text-sm text-stone-500">{shop.category}</p>
          </div>
          <a href={`https://wa.me/${shop.whatsapp}`} aria-label={`زيارة محل ${shop.name}`} className="grid size-10 place-items-center rounded-full bg-brand-50 text-brand-600 transition hover:bg-brand-600 hover:text-white">
            <ArrowLeft aria-hidden="true" className="size-5" />
          </a>
        </div>
        <div className="mt-5 flex gap-4 border-t border-stone-100 pt-4 text-xs text-stone-500">
          <span className="flex items-center gap-1.5"><MapPin aria-hidden="true" className="size-4" />{shop.location}</span>
          <span className="flex items-center gap-1.5"><Box aria-hidden="true" className="size-4" />{shop.productCount} منتج</span>
        </div>
      </div>
    </article>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group min-w-[78%] snap-start overflow-hidden rounded-2xl border border-stone-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-card sm:min-w-0">
      <div className="relative h-72 overflow-hidden bg-stone-100 lg:h-64">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <FavoriteButton productName={product.name} />
      </div>
      <div className="p-4">
        <h3 className="font-bold">{product.name}</h3>
        <strong className="mt-1 block text-lg text-brand-600">{product.price}</strong>
        <div className="mt-4 flex items-center gap-2 border-t border-stone-100 pt-3">
          <span className="grid size-7 place-items-center rounded-lg bg-brand-50 text-xs font-bold text-brand-600">{product.logo}</span>
          <p className="text-xs text-stone-400">من متجر <b className="text-stone-600">{product.shop}</b></p>
        </div>
      </div>
    </article>
  );
}

export function CategoryCard({ category }: { category: Category }) {
  const Icon = category.icon;

  return (
    <a href="#" className={`group flex min-h-36 flex-col items-start gap-3 rounded-2xl border border-transparent p-4 transition hover:-translate-y-1 hover:border-current/10 sm:min-h-28 sm:flex-row sm:items-center sm:p-5 ${category.className}`}>
      <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-white/70">
        <Icon aria-hidden="true" className="size-7" />
      </span>
      <div>
        <h3 className="font-bold text-ink">{category.name}</h3>
        <p className="mt-1 text-xs opacity-70">{category.count}</p>
      </div>
      <ArrowLeft aria-hidden="true" className="mr-auto hidden size-4 opacity-40 transition group-hover:-translate-x-1 sm:block" />
    </a>
  );
}

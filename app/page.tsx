import { CategoryCard, ProductCard, ShopCard } from "@/components/home/cards";
import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { OwnerCta } from "@/components/home/owner-cta";
import { SectionHeading } from "@/components/ui/section-heading";
import { categories, products, shops } from "@/data/mock-data";
import { Search } from "lucide-react";
import Advertisements from "@/components/advertisements";
export default function HomePage() {
  return (
    <>
     
      <main>
        <Hero />

        <section id="shops" className="py-20 md:py-28">
          <div className="mx-auto w-[min(1180px,calc(100%-2rem))]">
            <SectionHeading title="محلات تستحق تكتشفها" subtitle="أماكن مميزة اختارها فريقنا علشان تعيش تجربة مختلفة." action="شوف كل المحلات" />
            <div className="grid gap-5 md:grid-cols-3">
              {shops.map((shop) => <ShopCard key={shop.name} shop={shop} />)}
            </div>
          </div>
        </section>

        <section id="products" className="bg-stone-100/70 py-20 md:py-28">
          <div className="mx-auto w-[min(1180px,calc(100%-2rem))]">
            <SectionHeading title="منتجات ممكن تعجبك" subtitle="اكتشف اختيارات جديدة من محلات قريبة منك." action="تصفح كل المنتجات" />
            <div className="-ml-4 flex snap-x gap-5 overflow-x-auto pl-4 [scrollbar-width:none] sm:ml-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pl-0 lg:grid-cols-4">
              {products.map((product) => <ProductCard key={product.name} product={product} />)}
            </div>
          </div>
        </section>

<section id="categories" className="py-20 md:py-28">
  <div className="mx-auto w-[min(1180px,calc(100%-2rem))]">
    <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
      <SectionHeading
        title="دوّر على مزاجك"
        subtitle="كل اللي بتحبه، متجمع حسب التصنيف."
      />

      <div className="relative w-full md:w-[320px]">
        <Search
          aria-hidden="true"
          className="absolute right-4 top-1/2 size-5 -translate-y-1/2 text-stone-400"
        />

        <input
          type="search"
          placeholder="إنت عايز إيه؟"
          className="h-12 w-full rounded-xl border border-stone-200 bg-white pr-11 pl-4 text-sm text-stone-700 outline-none transition placeholder:text-stone-400 focus:border-brand-400 focus:ring-4 focus:ring-brand-500/10"
        />
      </div>
    </div>

    <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
      {categories.map((category) => (
        <CategoryCard key={category.name} category={category} />
      ))}
    </div>
  </div>
</section>

        <HowItWorks />
         <Advertisements />

        <OwnerCta />
      </main>
    </>
  );
}

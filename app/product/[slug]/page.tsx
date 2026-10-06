import Link from "next/link";
import { ArrowRight, Check, MapPin, MessageCircle, Store } from "lucide-react";

const productCatalog: Record<
  string,
  {
    name: string;
    price: string;
    category: string;
    shop: string;
    shopSlug: string;
    whatsapp: string;
    location: string;
    image: string;
    available: boolean;
  }
> = {
  "smart-watch": {
    name: "ساعة ذكية",
    price: "1,850 جنيه",
    category: "إلكترونيات",
    shop: "عالم الموبايل",
    shopSlug: "mobile-world",
    whatsapp: "201000000000",
    location: "الزمالك",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
    available: false,
  },

  "classic-cotton-tshirt": {
    name: "تيشيرت قطن كلاسيك",
    price: "450 جنيه",
    category: "ملابس",
    shop: "أحمد فاشون",
    shopSlug: "ahmed-fashion",
    whatsapp: "201000000000",
    location: "المنصورة",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    available: true,
  },

  "wireless-headphones": {
    name: "سماعة لاسلكية",
    price: "650 جنيه",
    category: "إلكترونيات",
    shop: "تك زون",
    shopSlug: "tech-zone",
    whatsapp: "201000000000",
    location: "المعادي",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85",
    available: true,
  },

  "everyday-womens-bag": {
    name: "حقيبة نسائية يومية",
    price: "850 جنيه",
    category: "ملابس",
    shop: "لمسة أناقة",
    shopSlug: "lamset-anaka",
    whatsapp: "201000000000",
    location: "التجمع الخامس",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
    available: true,
  },

  "classic-sport-shoes": {
    name: "حذاء رياضي كلاسيك",
    price: "1,200 جنيه",
    category: "أحذية",
    shop: "خطوة رياضية",
    shopSlug: "khotwa-sport",
    whatsapp: "201000000000",
    location: "مدينة نصر",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
    available: true,
  },

  "fresh-roasted-coffee": {
    name: "قهوة محمصة",
    price: "280 جنيه",
    category: "أكل ومشروبات",
    shop: "بيت القهوة",
    shopSlug: "coffee-house",
    whatsapp: "201000000000",
    location: "المعادي",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=900&q=85",
    available: true,
  },

  "chocolate-gift-box": {
    name: "بوكس شوكولاتة",
    price: "550 جنيه",
    category: "حلويات",
    shop: "سكر زيادة",
    shopSlug: "sokkar-ziada",
    whatsapp: "201000000000",
    location: "مصر الجديدة",
    image:
      "https://images.unsplash.com/photo-1548907040-4d42bfcf2e0a?auto=format&fit=crop&w=900&q=85",
    available: true,
  },

  "chocolate-cake": {
    name: "كيك شوكولاتة",
    price: "420 جنيه",
    category: "حلويات",
    shop: "حلويات روز",
    shopSlug: "rose-sweets",
    whatsapp: "201000000000",
    location: "الهرم",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
    available: true,
  },

  "fresh-flower-bouquet": {
    name: "باقة ورد طبيعية",
    price: "700 جنيه",
    category: "ورد وهدايا",
    shop: "متجر الورود",
    shopSlug: "flower-store",
    whatsapp: "201000000000",
    location: "مدينة نصر",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=85",
    available: true,
  },

  "decorative-lamp": {
    name: "أباجورة ديكور",
    price: "980 جنيه",
    category: "منزل وديكور",
    shop: "حكاية بيت",
    shopSlug: "hekayat-beit",
    whatsapp: "201000000000",
    location: "حلوان",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85",
    available: true,
  },

  "oriental-perfume": {
    name: "عطر شرقي",
    price: "620 جنيه",
    category: "تجميل وعناية",
    shop: "لمسة عطر",
    shopSlug: "lamset-atr",
    whatsapp: "201000000000",
    location: "وسط البلد",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=85",
    available: true,
  },

  "butter-croissant": {
    name: "كرواسون بالزبدة",
    price: "95 جنيه",
    category: "أكل ومشروبات",
    shop: "مخبز بلدي",
    shopSlug: "balady-bakery",
    whatsapp: "201000000000",
    location: "الهرم",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=85",
    available: true,
  },
};

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productCatalog[slug];

  if (!product) {
    return (
      <main
        dir="rtl"
        className="flex min-h-[70vh] items-center justify-center bg-[#fbfcfa] px-5 text-center"
      >
        <div>
          <h1 className="text-2xl font-bold text-[#17231d]">
            المنتج مش موجود
          </h1>

          <p className="mt-3 text-sm text-[#718078]">
            ممكن يكون المنتج اتشال أو الرابط غير صحيح.
          </p>

          <Link
            href="/categories"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#087a55] px-5 py-3 text-sm font-bold text-white"
          >
            <ArrowRight size={16} />
            العودة للمنتجات
          </Link>
        </div>
      </main>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `مرحبًا، أريد الاستفسار عن منتج "${product.name}" بسعر ${product.price}.`
  );

  const whatsappUrl = `https://wa.me/${product.whatsapp}?text=${whatsappMessage}`;

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#fbfcfa] py-8 text-[#17231d] md:py-14"
    >
      <section className="mx-auto grid max-w-[1100px] gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        {/* صورة المنتج */}
        <div className="overflow-hidden rounded-3xl border border-[#e1ebe5] bg-white shadow-[0_8px_35px_rgba(23,35,29,0.06)]">
          <img
            src={product.image}
            alt={product.name}
            className="aspect-square w-full object-cover"
          />
        </div>

        {/* معلومات المنتج */}
        <div>
          <span className="inline-flex rounded-full bg-[#edf8f3] px-3 py-1.5 text-xs font-semibold text-[#087a55]">
            {product.category}
          </span>

          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            {product.name}
          </h1>

          <p className="mt-5 text-2xl font-bold text-[#087a55]">
            {product.price}
          </p>

          {/* بيانات المحل */}
          <div className="mt-8 space-y-4 border-y border-[#e1ebe5] py-6">
            <Link
              href={`/store/${product.shopSlug}`}
              className="flex items-center gap-3 transition hover:text-[#087a55]"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-[#edf8f3] text-[#087a55]">
                <Store size={18} />
              </span>

              <span>
                <span className="block text-xs text-[#718078]">
                  المحل
                </span>

                <span className="text-sm font-bold">
                  {product.shop}
                </span>
              </span>
            </Link>

            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-[#edf8f3] text-[#087a55]">
                <MapPin size={18} />
              </span>

              <span>
                <span className="block text-xs text-[#718078]">
                  المكان
                </span>

                <span className="text-sm font-semibold">
                  {product.location}
                </span>
              </span>
            </div>

            <div
              className={`flex items-center gap-3 text-sm font-semibold ${
                product.available
                  ? "text-[#087a55]"
                  : "text-[#9a6258]"
              }`}
            >
              <Check size={18} />

              {product.available
                ? "المنتج متوفر حاليًا"
                : "المنتج غير متوفر حاليًا"}
            </div>
          </div>

          {/* أزرار التواصل */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            {product.available && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#087a55] px-5 text-sm font-bold text-white transition hover:bg-[#066847]"
              >
                <MessageCircle size={18} />
                تواصل مع صاحب المحل للشراء
              </a>
            )}

            <Link
              href={`/store/${product.shopSlug}`}
              className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-[#dce7e1] bg-white px-5 text-sm font-bold text-[#087a55] transition hover:bg-[#f3f8f5]"
            >
              عرض المزيد من المنتجات
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
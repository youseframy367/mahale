import { ArrowLeft } from "lucide-react";

const whatsappUrl =
  "https://wa.me/201023522063?text=" +
  encodeURIComponent("مرحبًا، أريد معرفة تفاصيل العرض.");

const ads = [
  {
    title: "خصم خاص على باقات الإنترنت",
    description: "استمتع بسرعة أعلى وعروض حصرية لفترة محدودة.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
    href: whatsappUrl,
  },
  {
    title: "كل احتياجات بيتك في مكان واحد",
    description: "اكتشف منتجات مختارة بعناية من شركائنا.",
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80",
    href: whatsappUrl,
  },
  {
    title: "خلي مناسبتك أجمل",
    description: "ديكورات وهدايا تناسب كل لحظة مميزة.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80",
    href: whatsappUrl,
  },
];

export default function Advertisements() {
  return (
    <section
      id="ads"
      className="mx-auto max-w-[1160px] px-5 py-16 sm:px-8 lg:py-20"
    >
      <div className="mb-9">
        <p className="mb-2 text-xs font-semibold text-[#087a55]">
          اختيارات محلي
        </p>

        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          إعلانات مميزة
        </h2>

        <p className="mt-3 text-sm text-[#718078]">
          عروض وخدمات مميزة من شركائنا.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {ads.map((ad) => (
          <article
            key={ad.title}
            className="overflow-hidden rounded-2xl border border-[#e1ebe5] bg-white shadow-[0_2px_10px_rgba(23,35,29,0.03)]"
          >
            <img
              src={ad.image}
              alt={ad.title}
              className="h-40 w-full object-cover"
            />

            <div className="p-4">
              <span className="rounded-full bg-[#fff4d9] px-2.5 py-1 text-[10px] font-semibold text-[#94701c]">
                إعلان ممول
              </span>

              <h3 className="mt-3 text-sm font-bold">{ad.title}</h3>

              <p className="mt-2 text-xs leading-6 text-[#718078]">
                {ad.description}
              </p>

              <a
                href={ad.href}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[#087a55] transition hover:text-[#076345]"
              >
                اكتشف العرض
                <ArrowLeft size={13} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Logo } from "@/components/ui/logo";

const footerGroups = [
  { title: "استكشف", links: ["المحلات", "التصنيفات", "منتجات جديدة", "كيف يعمل؟"] },
  { title: "لأصحاب المحلات", links: ["أضف محلك", "المميزات", "الأسعار", "مركز المساعدة"] },
  { title: "تواصل معنا", links: ["hello@mahally.co", "واتساب", "الأسئلة الشائعة"] },
];

export function Footer() {
  return (
    <footer className="bg-[#121c17] pt-16 pb-6 text-white">
      <div className="mx-auto grid w-[min(1180px,calc(100%-2rem))] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo light />

          <p className="mt-5 max-w-sm text-sm leading-7 text-stone-400">
            منصة تساعدك تكتشف أحلى المحلات والمنتجات المحلية حواليك، وتوصل للمحل مباشرة.
          </p>

          <div className="mt-5 flex gap-2">
            {[FaInstagram, FaTwitter, FaFacebookF].map((Icon, index) => (
              <a
                key={index}
                href="#"
                aria-label={["إنستغرام", "إكس", "فيسبوك"][index]}
                className="grid size-10 place-items-center rounded-xl border border-white/10 text-stone-400 transition hover:border-white/30 hover:text-white"
              >
                <Icon aria-hidden="true" className="size-4" />
              </a>
            ))}
          </div>
        </div>

        {footerGroups.map((group) => (
          <nav
            key={group.title}
            aria-label={group.title}
            className="flex flex-col gap-3"
          >
            <h3 className="mb-1 text-sm font-bold">{group.title}</h3>

            {group.links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-stone-400 transition hover:text-white"
              >
                {link}
              </a>
            ))}
          </nav>
        ))}
      </div>

      <div className="mx-auto mt-14 flex w-[min(1180px,calc(100%-2rem))] flex-col gap-3 border-t border-white/10 pt-6 text-xs text-stone-500 sm:flex-row sm:justify-between">
        <p>© ٢٠٢٥ محلّي. كل الحقوق محفوظة.</p>

        <div className="flex gap-6">
          <a href="#">سياسة الخصوصية</a>
          <a href="#">الشروط والأحكام</a>
        </div>
      </div>
    </footer>
  );
}
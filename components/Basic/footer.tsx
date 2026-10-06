import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Logo } from "@/components/ui/logo";

const footerGroups = [
  {
    title: "استكشف",
    links: [
      { label: "المحلات", href: "/stores" },
      { label: "التصنيفات", href: "/matger" },
      { label: "منتجات جديدة", href: "/matger" },
      { label: "كيف يعمل؟", href: "/#how" },
    ],
  },
  {
    title: "لأصحاب المحلات",
    links: [
      { label: "أضف محلك", href: "/AddStore" },
      { label: "المميزات", href: "/#how" },
      { label: "الأسعار", href: "/AddStore" },
      { label: "مركز المساعدة", href: "/faq" },
    ],
  },
  {
    title: "تواصل معنا",
    links: [
      { label: "hello@mahally.co", href: "mailto:hello@mahally.co" },
      { label: "واتساب", href: "https://wa.me/201023522063" },
      { label: "الأسئلة الشائعة", href: "/faq" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#121c17] pb-6 pt-16 text-white">
      <div className="mx-auto grid w-[min(1180px,calc(100%-2rem))] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-7 text-stone-400">
            منصة تساعدك تكتشف أحلى المحلات والمنتجات المحلية حواليك، وتوصل للمحل مباشرة.
          </p>
          <div className="mt-5 flex gap-2">
            {[
              { Icon: FaInstagram, label: "إنستغرام", href: "#" },
              { Icon: FaTwitter, label: "إكس", href: "#" },
              { Icon: FaFacebookF, label: "فيسبوك", href: "#" },
            ].map(({ Icon, label, href }) => (
              <a key={label} href={href} aria-label={label} className="grid size-10 place-items-center rounded-xl border border-white/10 text-stone-400 transition hover:border-white/30 hover:text-white">
                <Icon aria-hidden="true" className="size-4" />
              </a>
            ))}
          </div>
        </div>
        {footerGroups.map((group) => (
          <nav key={group.title} aria-label={group.title} className="flex flex-col gap-3">
            <h3 className="mb-1 text-sm font-bold">{group.title}</h3>
            {group.links.map((link) => (
              <a key={link.label} href={link.href} className="text-sm text-stone-400 transition hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
        ))}
      </div>
      <div className="mx-auto mt-14 flex w-[min(1180px,calc(100%-2rem))] flex-col gap-3 border-t border-white/10 pt-6 text-xs text-stone-500 sm:flex-row sm:justify-between">
        <p>© ٢٠٢٥ محلّي. كل الحقوق محفوظة.</p>
        <div className="flex gap-6">
          <a href="/privacy">سياسة الخصوصية</a>
          <a href="/faq">الأسئلة الشائعة</a>
        </div>
      </div>
    </footer>
  );
}

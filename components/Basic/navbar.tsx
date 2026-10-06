"use client";

import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/ui/logo";
import { ShopSearchPanel } from "./shop-search-panel";
const links = [
  { label: "اكتشف المحلات", href: "#shops" },
  { label: "التصنيفات", href: "#categories" },
  { label: "كيف يعمل؟", href: "#how" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <header className="relative  sticky top-0 z-50 border-b border-stone-200/80 bg-canvas/90 backdrop-blur-xl">
      <div className="mx-auto flex h-18 w-[min(1180px,calc(100%-2rem))] items-center gap-12">
          <Logo />
        {/* Desktop & Mobile Navigation */}
        <nav
          aria-label="التنقل الرئيسي"
          className={`${isOpen ? "flex" : "hidden"
            } absolute inset-x-4 top-18 flex-col rounded-b-2xl border border-stone-200 bg-white p-5 shadow-card md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="border-b border-stone-100 py-3 text-sm font-medium text-stone-600 transition hover:text-brand-600 md:border-0 md:py-0"
            >
              {link.label}
            </a>
          ))}

          {/* Mobile CTA */}
          <div className="mt-4 flex md:hidden">
            <a
              href="./AddStore"
              onClick={() => setIsOpen(false)}
              className="w-full rounded-xl bg-brand-600 px-5 py-3 text-center text-sm font-bold text-white"
            >
              أضف محلك
            </a>
          </div>
        </nav>

        {/* Desktop Actions */}
        <div className="mr-auto hidden items-center gap-4 md:flex">
          <button
            type="button"
            aria-label="بحث"
            onClick={() => setIsSearchOpen((current) => !current)}

            className="grid size-10 place-items-center rounded-full border border-stone-200 transition hover:border-brand-200 hover:text-brand-600"
          >
            <Search aria-hidden="true" className="size-5" />
          </button>

          <a
            href="./AddStore"
            className="rounded-xl bg-brand-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-900/10 transition hover:-translate-y-0.5 hover:bg-brand-700"
          >
            أضف محلك
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="mr-auto flex items-center gap-2 md:hidden">
          <button
            type="button"
            aria-label="بحث"
            className="grid size-10 place-items-center rounded-full border border-stone-200 transition hover:border-brand-200 hover:text-brand-600"
          >
            <Search aria-hidden="true" className="size-5" />
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
            className="grid size-10 place-items-center rounded-xl border border-stone-200"
          >
            {isOpen ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
          </button>
        </div>
      </div>
      <ShopSearchPanel
        open={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </header>
  );
}
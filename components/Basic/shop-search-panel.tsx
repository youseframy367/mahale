"use client";

import Image from "next/image";
import { Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const shops = [
  {
    id: 1,
    name: "Ahmed Fashion",
    slug: "ahmed-fashion",
    address: "المنصورة، شارع الجمهورية",
    logo: "/shops/ahmed-fashion.jpg",
  },
  {
    id: 2,
    name: "كافيه زمان",
    slug: "coffee-house",
    address: "المنصورة، شارع المشاية",
    logo: "/shops/zaman-cafe.jpg",
  },
  {
    id: 3,
    name: "بيت الإلكترونيات",
    slug: "tech-zone",
    address: "المنصورة، شارع الجيش",
    logo: "/shops/electronics.jpg",
  },
  {
    id: 4,
    name: "حلويات السعادة",
    slug: "rose-sweets",
    address: "المنصورة، شارع قناة السويس",
    logo: "/shops/sweets.jpg",
  },
  {
    id: 5,
    name: "Style Store",
    slug: "stylek",
    address: "المنصورة، شارع أحمد ماهر",
    logo: "/shops/style.jpg",
  },
];

type ShopSearchPanelProps = {
  open: boolean;
  onClose: () => void;
};

export function ShopSearchPanel({
  open,
  onClose,
}: ShopSearchPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onClose]);

  if (!open) return null;

  const filteredShops = shops.filter((shop) => {
    const value = query.toLowerCase();

    return (
      shop.name.toLowerCase().includes(value) ||
      shop.address.toLowerCase().includes(value)
    );
  });

  return (
    <div
      ref={panelRef}
      className="absolute left-1/2 top-full z-40 w-[min(680px,calc(100%-2rem))] -translate-x-1/2 pt-3"
    >
      <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-[0_20px_60px_rgba(28,52,41,0.14)]">
        
        {/* Search */}
        <div className="border-b border-stone-100 p-4">
          <div className="relative">
            <Search className="absolute right-4 top-1/2 size-5 -translate-y-1/2 text-stone-400" />

            <input
              autoFocus
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="ابحث عن محل أو مكان..."
              className="h-12 w-full rounded-xl bg-stone-50 pr-11 pl-11 text-sm outline-none transition placeholder:text-stone-400 focus:bg-white focus:ring-2 focus:ring-brand-500/15"
            />

            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="مسح البحث"
                className="absolute left-3 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-lg text-stone-400 transition hover:bg-stone-100 hover:text-stone-700"
              >
                <X className="size-4" />
              </button>
            )}
          </div>
        </div>

        {/* Shops */}
        <div className="max-h-[360px] overflow-y-auto p-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {filteredShops.length > 0 ? (
            <div className="space-y-1">
              {filteredShops.map((shop) => (
                <a
                  key={shop.id}
                  href={`/store/${shop.slug}`}
                  onClick={onClose}
                  className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-brand-50"
                >
                  <div className="size-12 shrink-0 overflow-hidden rounded-xl border border-stone-100 bg-stone-50">
                    <Image
                      src={shop.logo}
                      alt={shop.name}
                      width={48}
                      height={48}
                      className="size-full object-cover"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-bold text-stone-800">
                      {shop.name}
                    </h3>

                    <p className="mt-1 truncate text-xs text-stone-500">
                      {shop.address}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="px-4 py-10 text-center">
              <p className="text-sm font-semibold text-stone-600">
                مفيش محلات بالاسم ده
              </p>

              <p className="mt-1 text-xs text-stone-400">
                جرّب تبحث باسم محل تاني
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

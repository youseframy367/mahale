"use client";

import { Heart } from "lucide-react";
import { useState } from "react";

export function FavoriteButton({ productName }: { productName: string }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button type="button" onClick={() => setIsFavorite((current) => !current)} aria-pressed={isFavorite} aria-label={isFavorite ? `إزالة ${productName} من المفضلة` : `إضافة ${productName} إلى المفضلة`} className={`absolute top-3 left-3 grid size-10 place-items-center rounded-full bg-white/95 shadow-md transition hover:scale-105 ${isFavorite ? "text-rose-500" : "text-stone-500"}`}>
      <Heart aria-hidden="true" className={`size-5 ${isFavorite ? "fill-current" : ""}`} />
    </button>
  );
}

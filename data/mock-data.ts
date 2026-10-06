import type { LucideIcon } from "lucide-react";
import { CookingPot, Gem, Laptop, Shirt, ShoppingBag, Sparkles } from "lucide-react";

export type Shop = {
  name: string;
  category: string;
  location: string;
  productCount: number;
  image: string;
  logo: string;
  logoClass: string;
  phone: string;
  whatsapp: string;
};

export type Product = {
  name: string;
  price: string;
  shop: string;
  logo: string;
  image: string;
};

export type Category = {
  name: string;
  count: string;
  icon: LucideIcon;
  className: string;
};

export const shops: Shop[] = [
  {
    name: "دار نُسج",
    category: "أزياء وملابس",
    location: "الزمالك، القاهرة",
    productCount: 48,
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1200&q=85",
    logo: "نُ",
    logoClass: "bg-[#2e5247] text-[#f9dfb8]",
    phone: "01012345678",
    whatsapp: "201012345678",
  },
  {
    name: "رُكن",
    category: "قهوة ومخبوزات",
    location: "المعادي، القاهرة",
    productCount: 26,
    image: "https://images.unsplash.com/photo-1567880905822-56f8e06fe630?auto=format&fit=crop&w=1200&q=85",
    logo: "ر",
    logoClass: "bg-amber-200 text-amber-950",
    phone: "01098765432",
    whatsapp: "201098765432",
  },
  {
    name: "بَسطة",
    category: "إكسسوارات وهدايا",
    location: "سموحة، الإسكندرية",
    productCount: 61,
    image: "https://images.unsplash.com/photo-1630905119003-329447458f85?auto=format&fit=crop&w=1200&q=85",
    logo: "ب",
    logoClass: "bg-emerald-100 text-emerald-900",
    phone: "01123456789",
    whatsapp: "201123456789",
  },
];

export const products: Product[] = [
  {
    name: "حذاء سنيكرز يومي",
    price: "١٬٤٥٠ ج.م",
    shop: "خطوة",
    logo: "خ",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "عطر عود ناعم",
    price: "٨٩٠ ج.م",
    shop: "نَفَس",
    logo: "ن",
    image: "https://images.unsplash.com/photo-1600680764015-cb92136047b6?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "حقيبة جلد كلاسيك",
    price: "١٬١٩٠ ج.م",
    shop: "دار نُسج",
    logo: "د",
    image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "سوار لؤلؤ مطلي",
    price: "٦٢٠ ج.م",
    shop: "لَمعة",
    logo: "ل",
    image: "https://images.unsplash.com/photo-1619969791360-218a3a72b777?auto=format&fit=crop&w=900&q=85",
  },
];

export const categories: Category[] = [
  { name: "ملابس", count: "١٢٨ محل", icon: Shirt, className: "bg-rose-50 text-rose-800" },
  { name: "أحذية وشنط", count: "٧٤ محل", icon: ShoppingBag, className: "bg-sky-50 text-sky-800" },
  { name: "إلكترونيات", count: "٥٦ محل", icon: Laptop, className: "bg-violet-50 text-violet-800" },
  { name: "مطاعم", count: "٩٢ محل", icon: CookingPot, className: "bg-orange-50 text-orange-800" },
  { name: "إكسسوارات", count: "٨١ محل", icon: Gem, className: "bg-amber-50 text-amber-800" },
  { name: "تجميل", count: "٦٣ محل", icon: Sparkles, className: "bg-emerald-50 text-emerald-800" },
];

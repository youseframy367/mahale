'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import {
  ArrowLeft,
  CakeSlice,
  Check,
  ChevronLeft,
  Coffee,
  Flower2,
  Home,
  MapPin,
  Search,
  ShoppingBag,
  Smartphone,
  Sparkles,
  SlidersHorizontal,
  Store,
  X,
} from 'lucide-react'

type Category = {
  name: string
  slug: string
  count: number
  icon: typeof ShoppingBag
}

type Product = {
  id: number
  name: string
  slug: string
  price: number
  category: string
  categorySlug: string
  shop: string
  shopSlug: string
  location: string
  governorate: string
  image: string
  available: boolean
}

type PriceRange = {
  id: string
  label: string
  min: number
  max: number | null
}

const categories: Category[] = [
  { name: 'الكل', slug: 'all', count: 12, icon: ShoppingBag },
  { name: 'ملابس', slug: 'clothes', count: 2, icon: ShoppingBag },
  { name: 'أحذية', slug: 'shoes', count: 1, icon: ShoppingBag },
  { name: 'إلكترونيات', slug: 'electronics', count: 2, icon: Smartphone },
  { name: 'أكل ومشروبات', slug: 'food', count: 2, icon: Coffee },
  { name: 'حلويات', slug: 'sweets', count: 2, icon: CakeSlice },
  { name: 'ورد وهدايا', slug: 'gifts', count: 1, icon: Flower2 },
  { name: 'منزل وديكور', slug: 'home', count: 1, icon: Home },
  { name: 'تجميل وعناية', slug: 'beauty', count: 1, icon: Sparkles },
]

const governorates = [
  'الدقهلية',
  'القاهرة',
  'الجيزة',
  'الإسكندرية',
  'القليوبية',
  'الشرقية',
  'الغربية',
  'البحيرة',
  'المنوفية',
]

const priceRanges: PriceRange[] = [
  {
    id: '10-500',
    label: '10 - 500 جنيه',
    min: 10,
    max: 500,
  },
  {
    id: '500-1000',
    label: '500 - 1,000 جنيه',
    min: 500,
    max: 1000,
  },
  {
    id: '1000-1500',
    label: '1,000 - 1,500 جنيه',
    min: 1000,
    max: 1500,
  },
  {
    id: '1500-2000',
    label: '1,500 - 2,000 جنيه',
    min: 1500,
    max: 2000,
  },
  {
    id: '2000-3000',
    label: '2,000 - 3,000 جنيه',
    min: 2000,
    max: 3000,
  },
  {
    id: '3000-plus',
    label: '3,000 جنيه فأكثر',
    min: 3000,
    max: null,
  },
]

const products: Product[] = [
  {
    id: 1,
    name: 'تيشيرت قطن كلاسيك',
    slug: 'classic-cotton-tshirt',
    price: 450,
    category: 'ملابس',
    categorySlug: 'clothes',
    shop: 'أحمد فاشون',
    shopSlug: 'ahmed-fashion',
    location: 'المنصورة',
    governorate: 'الدقهلية',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=85',
    available: true,
  },
  {
    id: 2,
    name: 'حقيبة نسائية يومية',
    slug: 'everyday-womens-bag',
    price: 850,
    category: 'ملابس',
    categorySlug: 'clothes',
    shop: 'لمسة أناقة',
    shopSlug: 'lamset-anaka',
    location: 'التجمع الخامس',
    governorate: 'القاهرة',
    image:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=85',
    available: true,
  },
  {
    id: 3,
    name: 'حذاء رياضي كلاسيك',
    slug: 'classic-sport-shoes',
    price: 1200,
    category: 'أحذية',
    categorySlug: 'shoes',
    shop: 'خطوة رياضية',
    shopSlug: 'khotwa-sport',
    location: 'مدينة نصر',
    governorate: 'القاهرة',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85',
    available: true,
  },
  {
    id: 4,
    name: 'سماعة لاسلكية',
    slug: 'wireless-headphones',
    price: 650,
    category: 'إلكترونيات',
    categorySlug: 'electronics',
    shop: 'تك زون',
    shopSlug: 'tech-zone',
    location: 'المعادي',
    governorate: 'القاهرة',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=85',
    available: true,
  },
  {
    id: 5,
    name: 'ساعة ذكية',
    slug: 'smart-watch',
    price: 1850,
    category: 'إلكترونيات',
    categorySlug: 'electronics',
    shop: 'عالم الموبايل',
    shopSlug: 'mobile-world',
    location: 'الزمالك',
    governorate: 'القاهرة',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=85',
    available: false,
  },
  {
    id: 6,
    name: 'قهوة محمصة',
    slug: 'fresh-roasted-coffee',
    price: 280,
    category: 'أكل ومشروبات',
    categorySlug: 'food',
    shop: 'بيت القهوة',
    shopSlug: 'coffee-house',
    location: 'المعادي',
    governorate: 'القاهرة',
    image:
      'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=700&q=85',
    available: true,
  },
  {
    id: 7,
    name: 'بوكس شوكولاتة',
    slug: 'chocolate-gift-box',
    price: 550,
    category: 'حلويات',
    categorySlug: 'sweets',
    shop: 'سكر زيادة',
    shopSlug: 'sokkar-ziada',
    location: 'مصر الجديدة',
    governorate: 'القاهرة',
    image:
      'https://images.unsplash.com/photo-1548907040-4d42bfcf2e0a?auto=format&fit=crop&w=700&q=85',
    available: true,
  },
  {
    id: 8,
    name: 'كيك شوكولاتة',
    slug: 'chocolate-cake',
    price: 420,
    category: 'حلويات',
    categorySlug: 'sweets',
    shop: 'حلويات روز',
    shopSlug: 'rose-sweets',
    location: 'الهرم',
    governorate: 'الجيزة',
    image:
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=85',
    available: true,
  },
  {
    id: 9,
    name: 'باقة ورد طبيعية',
    slug: 'fresh-flower-bouquet',
    price: 700,
    category: 'ورد وهدايا',
    categorySlug: 'gifts',
    shop: 'متجر الورود',
    shopSlug: 'flower-store',
    location: 'مدينة نصر',
    governorate: 'القاهرة',
    image:
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=700&q=85',
    available: true,
  },
  {
    id: 10,
    name: 'أباجورة ديكور',
    slug: 'decorative-lamp',
    price: 980,
    category: 'منزل وديكور',
    categorySlug: 'home',
    shop: 'حكاية بيت',
    shopSlug: 'hekayat-beit',
    location: 'حلوان',
    governorate: 'القاهرة',
    image:
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=85',
    available: true,
  },
  {
    id: 11,
    name: 'عطر شرقي',
    slug: 'oriental-perfume',
    price: 620,
    category: 'تجميل وعناية',
    categorySlug: 'beauty',
    shop: 'لمسة عطر',
    shopSlug: 'lamset-atr',
    location: 'وسط البلد',
    governorate: 'القاهرة',
    image:
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=700&q=85',
    available: true,
  },
  {
    id: 12,
    name: 'كرواسون بالزبدة',
    slug: 'butter-croissant',
    price: 95,
    category: 'أكل ومشروبات',
    categorySlug: 'food',
    shop: 'مخبز بلدي',
    shopSlug: 'balady-bakery',
    location: 'الهرم',
    governorate: 'الجيزة',
    image:
      'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=85',
    available: true,
  },
  {
    id: 13,
    name: 'كرواسون بالزبدة',
    slug: 'butter-croissant',
    price: 95,
    category: 'أكل ومشروبات',
    categorySlug: 'food',
    shop: 'مخبز بلدي',
    shopSlug: 'balady-bakery',
    location: 'الهرم',
    governorate: 'الجيزة',
    image:
      'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=85',
    available: true,
  },

  {
    id: 14,
    name: 'كرواسون بالزبدة',
    slug: 'butter-croissant',
    price: 95,
    category: 'أكل ومشروبات',
    categorySlug: 'food',
    shop: 'مخبز بلدي',
    shopSlug: 'balady-bakery',
    location: 'الهرم',
    governorate: 'الجيزة',
    image:
      'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=85',
    available: true,
  },
  {
    id: 15,
    name: 'كرواسون بالزبدة',
    slug: 'butter-croissant',
    price: 95,
    category: 'أكل ومشروبات',
    categorySlug: 'food',
    shop: 'مخبز بلدي',
    shopSlug: 'balady-bakery',
    location: 'الهرم',
    governorate: 'الجيزة',
    image:
      'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=85',
    available: true,
  },
]

function CategoryCard({
  category,
  active,
  onClick,
}: {
  category: Category
  active: boolean
  onClick: () => void
}) {
  const Icon = category.icon

  return (
    <button
      onClick={onClick}
      className={`group rounded-2xl border bg-white p-4 text-right shadow-[0_2px_10px_rgba(23,35,29,0.03)] transition-all hover:-translate-y-0.5 hover:border-[#b9dfcc] hover:shadow-[0_8px_22px_rgba(23,35,29,0.07)] ${active
          ? 'border-[#087a55] ring-1 ring-[#087a55]/10'
          : 'border-[#e1ebe5]'
        }`}
    >
      <span
        className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${active
            ? 'bg-[#087a55] text-white'
            : 'bg-[#edf8f3] text-[#087a55]'
          }`}
      >
        <Icon size={19} />
      </span>

      <span className="block text-sm font-bold">{category.name}</span>

      <span className="mt-1 block text-xs text-[#829089]">
        {category.count} منتج
      </span>
    </button>
  )
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[#e1ebe5] bg-white shadow-[0_2px_10px_rgba(23,35,29,0.03)] transition-all hover:-translate-y-1 hover:shadow-[0_10px_26px_rgba(23,35,29,0.08)]">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[1.05] overflow-hidden bg-[#f3f7f4]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {!product.available && (
            <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-[#829089]">
              غير متوفر
            </span>
          )}

          {product.available && (
            <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-[#087a55]">
              <Check size={11} />
              متوفر
            </span>
          )}
        </div>

        <div className="p-4">
          <p className="text-[11px] font-medium text-[#087a55]">
            {product.category}
          </p>

          <h3 className="mt-1.5 min-h-11 text-sm font-bold leading-6 text-[#17231d]">
            {product.name}
          </h3>

          <p className="mt-2 text-base font-bold text-[#087a55]">
            {product.price.toLocaleString('ar-EG')} جنيه
          </p>

          <div className="mt-4 border-t border-[#edf1ee] pt-3">
            <p className="flex items-center gap-1.5 text-xs font-semibold text-[#526159]">
              <Store size={13} />
              {product.shop}
            </p>

            <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#829089]">
              <MapPin size={13} />
              {product.location}
            </p>

            <span className="mt-3 flex items-center justify-end gap-1 text-xs font-bold text-[#087a55]">
              عرض المنتج
              <ArrowLeft size={13} />
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}

function PriceFilter({
  selectedPrice,
  setSelectedPrice,
}: {
  selectedPrice: string
  setSelectedPrice: (value: string) => void
}) {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-bold text-[#17231d]">السعر</h3>

        {selectedPrice && (
          <button
            onClick={() => setSelectedPrice('')}
            className="text-[11px] font-semibold text-[#087a55] hover:underline"
          >
            إلغاء
          </button>
        )}
      </div>

      <div className="space-y-2">
        {priceRanges.map((range) => {
          const active = selectedPrice === range.id

          return (
            <button
              key={range.id}
              onClick={() =>
                setSelectedPrice(active ? '' : range.id)
              }
              className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-right transition ${active
                  ? 'bg-[#edf8f3] text-[#087a55]'
                  : 'text-[#526159] hover:bg-[#f7faf8]'
                }`}
            >
              <span className="flex items-center gap-3">
                <span
                  className={`flex h-4 w-4 items-center justify-center rounded border ${active
                      ? 'border-[#087a55] bg-[#087a55]'
                      : 'border-[#cbd8d1] bg-white'
                    }`}
                >
                  {active && (
                    <Check
                      size={11}
                      strokeWidth={3}
                      className="text-white"
                    />
                  )}
                </span>

                <span className="text-xs font-medium">
                  {range.label}
                </span>
              </span>

              {active && (
                <span className="text-[10px] font-bold">✓</span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function GovernorateFilter({
  selectedGovernorates,
  toggleGovernorate,
  onClear,
}: {
  selectedGovernorates: string[]
  toggleGovernorate: (governorate: string) => void
  onClear: () => void
}) {
  return (
    <div className="border-t border-[#edf1ee] pt-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-bold text-[#17231d]">
          المحافظة
        </h3>

        {selectedGovernorates.length > 0 && (
          <button
            onClick={onClear}
            className="text-[11px] font-semibold text-[#087a55] hover:underline"
          >
            إلغاء
          </button>
        )}
      </div>

      <div className="space-y-1.5">
        {governorates.map((governorate) => {
          const active = selectedGovernorates.includes(governorate)

          return (
            <button
              key={governorate}
              onClick={() => toggleGovernorate(governorate)}
              className={`flex w-full items-center rounded-xl px-3 py-2.5 text-right transition ${active
                  ? 'bg-[#edf8f3] text-[#087a55]'
                  : 'text-[#526159] hover:bg-[#f7faf8]'
                }`}
            >
              <span className="flex items-center gap-3">
                <span
                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${active
                      ? 'border-[#087a55] bg-[#087a55]'
                      : 'border-[#cbd8d1] bg-white'
                    }`}
                >
                  {active && (
                    <Check
                      size={11}
                      strokeWidth={3}
                      className="text-white"
                    />
                  )}
                </span>

                <span className="text-xs font-medium">
                  {governorate}
                </span>
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function AvailabilityFilter({
  availableOnly,
  setAvailableOnly,
}: {
  availableOnly: boolean
  setAvailableOnly: (value: boolean) => void
}) {
  return (
    <div className="border-t border-[#edf1ee] pt-5">
      <h3 className="mb-3 text-sm font-bold text-[#17231d]">
        التوفر
      </h3>

      <button
        onClick={() => setAvailableOnly(!availableOnly)}
        className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-right transition hover:bg-[#f7faf8]"
      >
        <span className="flex items-center gap-3">
          <span
            className={`flex h-4 w-4 items-center justify-center rounded border ${availableOnly
                ? 'border-[#087a55] bg-[#087a55]'
                : 'border-[#cbd8d1] bg-white'
              }`}
          >
            {availableOnly && (
              <Check
                size={11}
                strokeWidth={3}
                className="text-white"
              />
            )}
          </span>

          <span className="text-xs font-medium text-[#526159]">
            المتوفر فقط
          </span>
        </span>
      </button>
    </div>
  )
}

function FilterSidebar({
  selectedPrice,
  setSelectedPrice,
  selectedGovernorates,
  toggleGovernorate,
  clearGovernorates,
  availableOnly,
  setAvailableOnly,
  onClear,
}: {
  selectedPrice: string
  setSelectedPrice: (value: string) => void
  selectedGovernorates: string[]
  toggleGovernorate: (governorate: string) => void
  clearGovernorates: () => void
  availableOnly: boolean
  setAvailableOnly: (value: boolean) => void
  onClear: () => void
}) {
  const hasFilters = Boolean(
    selectedPrice ||
    availableOnly ||
    selectedGovernorates.length > 0
  )

  return (
    <aside className="hidden h-fit rounded-2xl border border-[#e1ebe5] bg-white p-5 shadow-[0_4px_18px_rgba(23,35,29,0.04)] lg:block">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-base font-bold">تصفية المنتجات</h2>

        {hasFilters && (
          <button
            onClick={onClear}
            className="text-[11px] font-semibold text-[#087a55] hover:underline"
          >
            مسح الكل
          </button>
        )}
      </div>

      <PriceFilter
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
      />

      <GovernorateFilter
        selectedGovernorates={selectedGovernorates}
        toggleGovernorate={toggleGovernorate}
        onClear={clearGovernorates}
      />

      <AvailabilityFilter
        availableOnly={availableOnly}
        setAvailableOnly={setAvailableOnly}
      />
    </aside>
  )
}

function MobileFilterSheet({
  open,
  onClose,
  selectedPrice,
  setSelectedPrice,
  selectedGovernorates,
  toggleGovernorate,
  clearGovernorates,
  availableOnly,
  setAvailableOnly,
  resultCount,
  onClear,
}: {
  open: boolean
  onClose: () => void
  selectedPrice: string
  setSelectedPrice: (value: string) => void
  selectedGovernorates: string[]
  toggleGovernorate: (governorate: string) => void
  clearGovernorates: () => void
  availableOnly: boolean
  setAvailableOnly: (value: boolean) => void
  resultCount: number
  onClear: () => void
}) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] lg:hidden">
      <button
        aria-label="إغلاق الفلاتر"
        onClick={onClose}
        className="absolute inset-0 bg-[#17231d]/35 backdrop-blur-[2px]"
      />

      <div className="absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto rounded-t-[28px] bg-white px-5 pb-5 pt-4 shadow-[0_-15px_50px_rgba(23,35,29,0.18)]">
        <div className="mx-auto mb-5 h-1.5 w-10 rounded-full bg-[#dbe5df]" />

        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold">
              تصفية المنتجات
            </h2>

            <p className="mt-1 text-xs text-[#829089]">
              اختر الفلاتر المناسبة لك
            </p>
          </div>

          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f3f7f4] text-[#526159]"
            aria-label="إغلاق"
          >
            <X size={18} />
          </button>
        </div>

        <PriceFilter
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
        />

        <GovernorateFilter
          selectedGovernorates={selectedGovernorates}
          toggleGovernorate={toggleGovernorate}
          onClear={clearGovernorates}
        />

        <AvailabilityFilter
          availableOnly={availableOnly}
          setAvailableOnly={setAvailableOnly}
        />

        <div className="mt-7 grid grid-cols-2 gap-3 border-t border-[#edf1ee] pt-4">
          <button
            onClick={onClear}
            className="h-12 rounded-xl border border-[#dce8e0] text-sm font-bold text-[#526159]"
          >
            مسح الفلاتر
          </button>

          <button
            onClick={onClose}
            className="h-12 rounded-xl bg-[#087a55] text-sm font-bold text-white"
          >
            عرض {resultCount} منتج
          </button>
        </div>
      </div>
    </div>
  )
}

export default function CategoriesPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [query, setQuery] = useState('')
  const [selectedPrice, setSelectedPrice] = useState('')
  const [selectedGovernorates, setSelectedGovernorates] =
    useState<string[]>([])
  const [availableOnly, setAvailableOnly] = useState(false)
  const [mobileFiltersOpen, setMobileFiltersOpen] =
    useState(false)

  const selectedPriceRange = useMemo(
    () =>
      priceRanges.find(
        (range) => range.id === selectedPrice
      ),
    [selectedPrice]
  )

  const toggleGovernorate = (governorate: string) => {
    setSelectedGovernorates((current) =>
      current.includes(governorate)
        ? current.filter((item) => item !== governorate)
        : [...current, governorate]
    )
  }

  const clearGovernorates = () => {
    setSelectedGovernorates([])
  }

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return products.filter((product) => {
      const matchesCategory =
        activeCategory === 'all' ||
        product.categorySlug === activeCategory

      const searchableText =
        `${product.name} ${product.category} ${product.shop} ${product.location} ${product.governorate}`.toLowerCase()

      const matchesSearch =
        !normalizedQuery ||
        searchableText.includes(normalizedQuery)

      const matchesAvailability =
        !availableOnly || product.available

      const matchesGovernorate =
        selectedGovernorates.length === 0 ||
        selectedGovernorates.includes(product.governorate)

      let matchesPrice = true

      if (selectedPriceRange) {
        matchesPrice =
          product.price >= selectedPriceRange.min &&
          (selectedPriceRange.max === null ||
            product.price < selectedPriceRange.max)
      }

      return (
        matchesCategory &&
        matchesSearch &&
        matchesAvailability &&
        matchesPrice &&
        matchesGovernorate
      )
    })
  }, [
    activeCategory,
    query,
    availableOnly,
    selectedPriceRange,
    selectedGovernorates,
  ])

  const clearFilters = () => {
    setActiveCategory('all')
    setQuery('')
    setSelectedPrice('')
    setSelectedGovernorates([])
    setAvailableOnly(false)
  }

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#fbfcfa] text-[#17231d]"
    >
      {/* Hero */}
      <section className="border-b border-[#edf1ee] bg-white">
        <div className="mx-auto flex max-w-[1160px] flex-col items-center px-5 pb-12 pt-14 text-center sm:px-8 sm:pb-16 sm:pt-20">
          <p className="mb-3 text-xs font-semibold text-[#087a55]">
            استكشف المنتجات
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            كل اللي بتدور عليه، في مكان واحد
          </h1>

          <p className="mt-4 max-w-[570px] text-sm leading-7 text-[#718078] sm:text-base">
            اكتشف المنتجات من المحلات الموجودة على محلّي، وتصفحها حسب
            الفئة والسعر والمحافظة.
          </p>

          <label className="relative mt-7 block w-full max-w-[570px]">
            <Search
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#829089]"
              size={19}
            />

            <input
              value={query}
              onChange={(event) =>
                setQuery(event.target.value)
              }
              placeholder="ابحث عن منتج، محل، أو مكان..."
              aria-label="ابحث عن منتج"
              className="h-13 w-full rounded-2xl border border-[#dce8e0] bg-[#fbfcfa] pr-12 pl-4 text-sm outline-none transition focus:border-[#087a55] focus:ring-4 focus:ring-[#087a55]/10"
            />
          </label>
        </div>
      </section>

      <div className="mx-auto max-w-[1160px] px-5 sm:px-8">
        {/* Category pills */}
        <div className="-mx-5 overflow-x-auto px-5 py-5 [scrollbar-width:none] sm:-mx-8 sm:px-8">
          <div className="flex min-w-max gap-2">
            <span className="ml-1 self-center text-xs font-semibold text-[#829089]">
              الفئات
            </span>

            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() =>
                  setActiveCategory(category.slug)
                }
                className={`rounded-full px-4 py-2.5 text-xs font-semibold transition-colors ${activeCategory === category.slug
                    ? 'bg-[#087a55] text-white'
                    : 'bg-white text-[#637169] ring-1 ring-[#e1ebe5] hover:text-[#087a55]'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Categories */}
        <section className="pb-8 pt-5 sm:pt-7">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-semibold text-[#087a55]">
                تصفح حسب النوع
              </p>

              <h2 className="text-2xl font-bold tracking-tight">
                الفئات
              </h2>
            </div>

            <p className="hidden text-xs text-[#829089] sm:block">
              اختار فئة واستكشف المنتجات
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {categories.slice(1).map((category) => (
              <CategoryCard
                key={category.slug}
                category={category}
                active={
                  activeCategory === category.slug
                }
                onClick={() =>
                  setActiveCategory(category.slug)
                }
              />
            ))}
          </div>
        </section>

        {/* Products */}
        <section className="pb-20 pt-8">
          <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold text-[#087a55]">
                اختيارات من محلات محلي
              </p>

              <h2 className="text-2xl font-bold tracking-tight">
                المنتجات
              </h2>
            </div>

            <div className="flex items-center justify-between gap-3">
              <p className="text-xs text-[#829089]">
                عرض {filteredProducts.length} منتج
              </p>

              <button
                onClick={() =>
                  setMobileFiltersOpen(true)
                }
                className="flex items-center gap-2 rounded-xl border border-[#dce8e0] bg-white px-3.5 py-2.5 text-xs font-bold text-[#526159] shadow-sm lg:hidden"
              >
                <SlidersHorizontal size={15} />
                تصفية المنتجات
              </button>
            </div>
          </div>

          <div className="grid items-start gap-5 lg:grid-cols-[230px_minmax(0,1fr)]">
            {/* Desktop Sidebar */}
            <FilterSidebar
              selectedPrice={selectedPrice}
              setSelectedPrice={setSelectedPrice}
              selectedGovernorates={
                selectedGovernorates
              }
              toggleGovernorate={
                toggleGovernorate
              }
              clearGovernorates={
                clearGovernorates
              }
              availableOnly={availableOnly}
              setAvailableOnly={
                setAvailableOnly
              }
              onClear={clearFilters}
            />

            {/* Products */}
            <div>
              {filteredProducts.length ? (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 lg:gap-4">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                    />
                  ))}
                </div>
              ) : (
                <div className="rounded-3xl border border-dashed border-[#cbdcd1] bg-white px-6 py-16 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#edf8f3] text-[#087a55]">
                    <Search size={24} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold">
                    مش لاقيين منتجات
                  </h3>

                  <p className="mt-2 text-sm text-[#718078]">
                    جرّب تغير البحث أو السعر أو المحافظة أو
                    الفئة وشوف منتجات تانية.
                  </p>

                  <button
                    onClick={clearFilters}
                    className="mt-6 inline-flex h-11 items-center gap-2 rounded-xl bg-[#087a55] px-5 text-sm font-bold text-white hover:bg-[#066847]"
                  >
                    عرض كل المنتجات
                    <ChevronLeft size={16} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* Mobile Filter */}
      <MobileFilterSheet
        open={mobileFiltersOpen}
        onClose={() =>
          setMobileFiltersOpen(false)
        }
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
        selectedGovernorates={
          selectedGovernorates
        }
        toggleGovernorate={
          toggleGovernorate
        }
        clearGovernorates={
          clearGovernorates
        }
        availableOnly={availableOnly}
        setAvailableOnly={setAvailableOnly}
        resultCount={filteredProducts.length}
        onClear={clearFilters}
      />


    </main>
  )
}

export { products }

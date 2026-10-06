export type Shop = {
  id: number
  name: string
  slug: string
  logo: string
  cover: string
  location: string
  governorate: string
  category: string
  categorySlug: string
  description: string
  longDescription?: string
  address?: string
  phone?: string
  whatsapp?: string
  workingHours?: string
  deliveryAvailable?: boolean
  paymentMethods?: string[]
  productsCount: number
  featured: boolean
}

const image = (id: string, width = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`

export const shops: Shop[] = [
  { id: 1, name: 'أحمد فاشون', slug: 'ahmed-fashion', logo: image('photo-1490481651871-ab68de25d43d', 240), cover: image('photo-1445205170230-053b83016050'), location: 'المنصورة', governorate: 'الدقهلية', category: 'ملابس', categorySlug: 'fashion', description: 'ملابس رجالي وكاجوال بجودة مميزة وأسعار مناسبة.', productsCount: 24, featured: true },
  { id: 2, name: 'بيت القهوة', slug: 'coffee-house', logo: image('photo-1447933601403-0c6688de566e', 240), cover: image('photo-1495474472287-4d71bcdd2085'), location: 'المعادي', governorate: 'القاهرة', category: 'أكل ومشروبات', categorySlug: 'food-drinks', description: 'قهوة مختصة ومشروبات محضرة بحب في أجواء هادئة.', productsCount: 18, featured: true },
  { id: 3, name: 'تك زون', slug: 'tech-zone', logo: image('photo-1516035069371-29a1b244cc32', 240), cover: image('photo-1496181133206-80ce9b88a853'), location: 'المعادي', governorate: 'القاهرة', category: 'إلكترونيات', categorySlug: 'electronics', description: 'إكسسوارات وأجهزة ذكية أصلية للاستخدام اليومي.', productsCount: 42, featured: true },
  { id: 4, name: 'حلويات روز', slug: 'rose-sweets', logo: image('photo-1578985545062-69928b1d9587', 240), cover: image('photo-1551024506-0bccd828d307'), location: 'الهرم', governorate: 'الجيزة', category: 'حلويات', categorySlug: 'sweets', description: 'حلويات شرقية وغربية طازجة لكل مناسبة.', productsCount: 31, featured: true },
  { id: 5, name: 'متجر الورود', slug: 'flower-store', logo: image('photo-1490750967868-88aa4486c946', 240), cover: image('photo-1523438885200-e635ba2c371e'), location: 'مدينة نصر', governorate: 'القاهرة', category: 'ورد وهدايا', categorySlug: 'flowers-gifts', description: 'بوكيهات وهدايا مختارة بعناية لكل شخص تحبه.', productsCount: 16, featured: false },
  { id: 6, name: 'حكاية بيت', slug: 'hekayat-beit', logo: image('photo-1586023492125-27b2c045efd7', 240), cover: image('photo-1616486338812-3dadae4b4ace'), location: 'حلوان', governorate: 'القاهرة', category: 'منزل وديكور', categorySlug: 'home-decor', description: 'تفاصيل بسيطة تضيف لمسة دافئة ومميزة لبيتك.', productsCount: 27, featured: false },
  { id: 7, name: 'لمسة عطر', slug: 'lamset-atr', logo: image('photo-1596462502278-27bfdc403348', 240), cover: image('photo-1612817288484-6f916006741a'), location: 'وسط البلد', governorate: 'القاهرة', category: 'تجميل وعناية', categorySlug: 'beauty-care', description: 'عطور ومنتجات عناية أصلية تناسب ذوقك وروتينك.', productsCount: 35, featured: false },
  { id: 8, name: 'خطوة مريحة', slug: 'comfortable-step', logo: image('photo-1542291026-7eec264c27ff', 240), cover: image('photo-1549298916-b41d501d3772'), location: 'طنطا', governorate: 'الغربية', category: 'أحذية', categorySlug: 'shoes', description: 'أحذية عملية ومريحة بتصميمات عصرية لكل يوم.', productsCount: 22, featured: false },
  { id: 9, name: 'مذاق البيت', slug: 'taste-of-home', logo: image('photo-1556910103-1c02745aae4d', 240), cover: image('photo-1504674900247-0877df9cc836'), location: 'شبين الكوم', governorate: 'المنوفية', category: 'أكل ومشروبات', categorySlug: 'food-drinks', description: 'أكل بيتي طازج بطعم زمان ومكونات نعرفها.', productsCount: 14, featured: false },
  { id: 10, name: 'لمسة خشب', slug: 'wood-touch', logo: image('photo-1555041469-a586c61ea9bc', 240), cover: image('photo-1555041469-a586c61ea9bc'), location: 'بنها', governorate: 'القليوبية', category: 'منزل وديكور', categorySlug: 'home-decor', description: 'قطع ديكور وأثاث صغيرة مصنوعة بذوق واهتمام.', productsCount: 19, featured: false },
  { id: 11, name: 'ستايلك', slug: 'stylek', logo: image('photo-1529139574466-a303027c1d8b', 240), cover: image('photo-1483985988355-763728e1935b'), location: 'الزقازيق', governorate: 'الشرقية', category: 'ملابس', categorySlug: 'fashion', description: 'اختيارات يومية أنيقة للبنات بأسعار في المتناول.', productsCount: 38, featured: true },
  { id: 12, name: 'هدية من القلب', slug: 'gift-from-heart', logo: image('photo-1513883049090-d0b7439799bf', 240), cover: image('photo-1513883049090-d0b7439799bf'), location: 'دمنهور', governorate: 'البحيرة', category: 'ورد وهدايا', categorySlug: 'flowers-gifts', description: 'هدايا شخصية وتغليف مميز يخلي مناسبتك أجمل.', productsCount: 21, featured: false },
]

export const governorates = ['كل المحافظات', 'الدقهلية', 'القاهرة', 'الجيزة', 'الإسكندرية', 'القليوبية', 'الشرقية', 'الغربية', 'البحيرة', 'المنوفية']
export const categories = ['كل الفئات', 'ملابس', 'أحذية', 'إلكترونيات', 'أكل ومشروبات', 'حلويات', 'ورد وهدايا', 'منزل وديكور', 'تجميل وعناية', 'أخرى']
export const sortOptions = ['الأحدث', 'الأكثر منتجات', 'المحلات المميزة']

export const whatsappUrl = `https://wa.me/201023522063?text=${encodeURIComponent('مرحبًا، أريد إضافة محلي إلى منصة محلّي.')}`

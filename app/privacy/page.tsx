import { ShieldCheck } from 'lucide-react'

const sections = [
  ['المعلومات التي نعرضها', 'محلّي يعرض بيانات المحلات والمنتجات التي يرسلها أصحابها أو يوافقون على نشرها، مثل الاسم والصور والوصف والموقع وطرق التواصل.'],
  ['استخدام المعلومات', 'نستخدم المعلومات لتسهيل اكتشاف المحلات والمنتجات، وتحسين تجربة التصفح، ومساعدة العملاء على التواصل المباشر مع أصحاب المحلات.'],
  ['التواصل والروابط الخارجية', 'عند الضغط على واتساب أو الاتصال أو خرائط Google، تنتقل إلى خدمة خارجية لها سياسة خصوصية خاصة بها. لا نطلب منك إرسال بيانات الدفع أو كلمات المرور عبر محلّي.'],
  ['حماية البيانات', 'نحاول الحفاظ على البيانات المعروضة واستخدام وسائل مناسبة لحمايتها، لكن لا توجد وسيلة نقل أو تخزين عبر الإنترنت تضمن حماية مطلقة.'],
  ['تحديث السياسة', 'قد نحدّث سياسة الخصوصية عند إضافة خدمات أو خصائص جديدة. سيتم نشر أي تحديث في هذه الصفحة مع توضيح تاريخ المراجعة.'],
]

export default function PrivacyPage() {
  return <main dir="rtl" className="min-h-screen bg-[#fbfcfa] text-[#17231d]"><section className="border-b border-[#e6eee9] bg-[#f7f5ef]"><div className="mx-auto max-w-[1180px] px-5 pb-12 pt-14 sm:px-8 sm:pb-16 sm:pt-20"><p className="inline-flex items-center gap-2 text-sm font-bold text-[#087a55]"><ShieldCheck size={17} /> خصوصيتك تهمنا</p><h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">سياسة الخصوصية</h1><p className="mt-4 max-w-2xl text-sm leading-7 text-[#68786f] sm:text-base">توضّح هذه الصفحة بشكل مبسّط كيف نتعامل مع المعلومات داخل منصة محلّي.</p></div></section><section className="mx-auto max-w-[900px] px-5 py-10 sm:px-8 sm:py-16"><div className="rounded-[26px] border border-[#e1ebe5] bg-white p-6 shadow-[0_8px_30px_rgba(23,35,29,0.04)] sm:p-10"><p className="text-sm leading-8 text-[#5f7067]">آخر تحديث: أكتوبر ٢٠٢٥. باستخدامك لمنصة محلّي، أنت توافق على الممارسات الموضحة في هذه السياسة.</p><div className="mt-8 space-y-7">{sections.map(([title, body]) => <section key={title}><h2 className="text-xl font-bold text-[#24342b]">{title}</h2><p className="mt-3 text-sm leading-8 text-[#718078]">{body}</p></section>)}</div><div className="mt-9 rounded-2xl bg-[#eef8f1] p-5 text-sm leading-7 text-[#526159]">لو عندك استفسار بخصوص بياناتك أو محتوى محلك، تقدر تتواصل معنا مباشرة عبر <a href="mailto:hello@mahally.co" className="font-bold text-[#087a55]">hello@mahally.co</a>.</div></div></section></main>
}

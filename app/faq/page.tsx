import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  ['إزاي أقدر أضيف محلي على محلّي؟', 'اضغط على أضف محلك من أي صفحة، وبعدها تواصل معنا على واتساب لإرسال بيانات المحل والمنتجات.'],
  ['هل إضافة المحل عليها عمولة؟', 'تقدر تبدأ بإضافة بيانات محلك والتواصل معنا لمعرفة الباقة المناسبة قبل تفعيل الصفحة.'],
  ['هل أقدر أعدل بيانات المحل والمنتجات؟', 'نعم، فريقنا يساعدك في تحديث بيانات المحل والأسعار والصور عند الحاجة.'],
  ['هل الشراء يتم من خلال محلّي؟', 'محلّي يساعدك تكتشف المحلات وتتواصل معها مباشرة. إتمام الطلب والدفع يتم مع المحل نفسه.'],
  ['إزاي أتواصل مع صاحب المحل؟', 'من صفحة المحل ستجد أزرار واتساب والاتصال، بالإضافة إلى رابط الموقع على خرائط Google.'],
  ['هل أقدر أبحث حسب المحافظة أو الفئة؟', 'نعم، صفحة المحلات تحتوي على بحث وفلاتر للمحافظة والفئة وترتيب النتائج.'],
]

export default function FAQPage() {
  return <main dir="rtl" className="min-h-screen bg-[#fbfcfa] text-[#17231d]"><section className="border-b border-[#e6eee9] bg-[#f7f5ef]"><div className="mx-auto max-w-[1180px] px-5 pb-12 pt-14 sm:px-8 sm:pb-16 sm:pt-20"><p className="inline-flex items-center gap-2 text-sm font-bold text-[#087a55]"><HelpCircle size={17} /> مركز المساعدة</p><h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">الأسئلة الشائعة</h1><p className="mt-4 max-w-2xl text-sm leading-7 text-[#68786f] sm:text-base">إجابات بسيطة على أكثر الأسئلة اللي ممكن تقابلك أثناء اكتشاف المحلات والتواصل معها.</p></div></section><section className="mx-auto max-w-[900px] px-5 py-10 sm:px-8 sm:py-16"><div className="grid gap-4">{faqs.map(([question, answer]) => <details key={question} className="group rounded-2xl border border-[#e1ebe5] bg-white p-5 shadow-[0_4px_15px_rgba(23,35,29,0.03)]"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-[#24342b]"><span>{question}</span><ChevronDown size={19} className="shrink-0 text-[#087a55] transition group-open:rotate-180" /></summary><p className="mt-4 border-t border-[#eef3ef] pt-4 text-sm leading-7 text-[#718078]">{answer}</p></details>)}</div><div className="mt-10 rounded-[24px] border border-[#cfe4d6] bg-[#eef8f1] p-6 sm:p-8"><p className="text-sm font-bold text-[#087a55]">لسه عندك سؤال؟</p><h2 className="mt-2 text-2xl font-bold">إحنا جاهزين نساعدك</h2><a href="https://wa.me/201023522063" className="mt-5 inline-flex h-11 items-center justify-center rounded-xl bg-[#087a55] px-5 text-sm font-bold text-white">تواصل معنا على واتساب</a></div></section></main>
}

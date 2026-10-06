import Link from "next/link";
import { Store } from "lucide-react";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="محلّي - الصفحة الرئيسية"
      className={`inline-flex shrink-0 items-center gap-2.5 text-2xl font-extrabold tracking-tight ${light ? "text-white" : ""}`}
    >
      <span
        className={`grid size-10 -rotate-2 place-items-center rounded-[14px_14px_8px_14px] bg-brand-600 text-white`}
      >
        <Store
          aria-hidden="true"
          className="size-5 rotate-2"
        />
      </span>

      <span>محلّي</span>
    </Link>
  );
}

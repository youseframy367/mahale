"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type SectionHeadingProps = {
  title: string;
  subtitle: string;
  action?: string;
};

export function SectionHeading({
  title,
  subtitle,
  action,
}: SectionHeadingProps) {
  const actionHref =
    action === "تصفح كل المنتجات" ? "/matger" : "/stores";

  return (
    <header className="mb-8 flex items-end justify-between gap-8 md:mb-10">
      <div>
        <span className="mb-2 block text-sm font-extrabold text-brand-600">
          مختارات محلّي
        </span>

        <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
          {title}
        </h2>

        <p className="mt-2 text-sm leading-7 text-stone-500 md:text-base">
          {subtitle}
        </p>
      </div>

      {action ? (
        <Link
          href={actionHref}
          className="hidden shrink-0 items-center gap-2 text-sm font-bold text-brand-600 transition hover:-translate-x-1 md:flex"
        >
          {action}
          <ArrowLeft aria-hidden="true" className="size-4" />
        </Link>
      ) : null}
    </header>
  );
}
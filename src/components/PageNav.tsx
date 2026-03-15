"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavLink {
  sectionId: string;
  sectionTitle: string;
  slug: string;
  title: string;
}

export function PageNav({
  prev,
  next,
}: {
  prev: NavLink | null;
  next: NavLink | null;
}) {
  const active = next ?? prev;
  const activeHref = active
    ? `/${active.sectionId}/${active.slug}`
    : "#";

  return (
    <nav className="page-nav not-prose mt-16 max-w-[550px] mx-auto rounded-2xl bg-gray-100 dark:bg-[#1F1F23] p-1">
      <div className="flex w-full items-center">
        {prev ? (
          <Link
            href={`/${prev.sectionId}/${prev.slug}`}
            className="flex items-center gap-1 px-3 text-[13px] font-medium tracking-wide text-fg-muted dark:text-[#71717A] hover:text-fg dark:hover:text-[#FAFAFA] transition-colors shrink-0"
          >
            <ChevronLeft className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden md:block">Previous</span>
          </Link>
        ) : (
          <div className="w-20 shrink-0" />
        )}

        <Link
          href={activeHref}
          className="group flex w-full items-center gap-3 overflow-hidden rounded-xl border border-border dark:border-[#27272A] bg-white dark:bg-[#121212] px-3 py-2.5 transition-colors hover:border-brand-400 dark:hover:border-[#A78BFA]"
        >
          <div className="flex min-w-0 flex-1 flex-col text-right gap-[2px]">
            <p className="truncate text-[14px] font-semibold tracking-wide text-fg dark:text-[#FAFAFA]">
              {active?.title}
            </p>
            <p className="truncate text-[12px] tracking-wide text-fg-muted dark:text-[#71717A]">
              {active?.sectionTitle}
            </p>
          </div>

          <div className="hidden md:block h-5 w-px bg-gray-300 dark:bg-[#3F3F46] shrink-0" />

          {next && (
            <div className="flex items-center gap-1 text-[13px] font-medium tracking-wide text-fg-muted dark:text-[#71717A] shrink-0">
              <ChevronRight className="w-3.5 h-3.5 shrink-0" />
              <p className="hidden md:block">Next</p>
            </div>
          )}
        </Link>
      </div>
    </nav>
  );
}

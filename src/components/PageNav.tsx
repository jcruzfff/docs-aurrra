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
  return (
    <div className="flex items-stretch gap-3 mt-12 pt-8 border-t border-border">
      {prev ? (
        <Link
          href={`/${prev.sectionId}/${prev.slug}`}
          className="flex-1 group flex items-center gap-3 p-4 rounded-xl border border-border hover:border-brand-300 hover:bg-brand-50/30 transition-all"
        >
          <ChevronLeft className="w-4 h-4 text-fg-faint group-hover:text-brand-500 transition-colors shrink-0" />
          <div className="text-right flex-1">
            <p className="text-xs text-fg-faint">{prev.sectionTitle}</p>
            <p className="text-sm font-medium text-fg group-hover:text-brand-600 transition-colors">
              {prev.title}
            </p>
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
      {next ? (
        <Link
          href={`/${next.sectionId}/${next.slug}`}
          className="flex-1 group flex items-center gap-3 p-4 rounded-xl border border-border hover:border-brand-300 hover:bg-brand-50/30 transition-all"
        >
          <div className="flex-1">
            <p className="text-xs text-fg-faint">{next.sectionTitle}</p>
            <p className="text-sm font-medium text-fg group-hover:text-brand-600 transition-colors">
              {next.title}
            </p>
          </div>
          <ChevronRight className="w-4 h-4 text-fg-faint group-hover:text-brand-500 transition-colors shrink-0" />
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  );
}

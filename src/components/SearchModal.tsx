"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Search, X } from "lucide-react";
import { search, type SearchResult } from "@/lib/search";
import Link from "next/link";

export function SearchModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const prevOpen = useRef(open);

  const handleSearch = useCallback((q: string) => {
    setQuery(q);
    setResults(search(q));
  }, []);

  if (prevOpen.current && !open) {
    setQuery("");
    setResults([]);
  }
  prevOpen.current = open;

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] bg-black/30 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-white dark:bg-[#121212] rounded-2xl shadow-2xl overflow-hidden border border-border dark:border-[#27272A] animate-in fade-in slide-in-from-top-4 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative border-b border-border dark:border-[#27272A]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-fg-muted dark:text-[#A1A1AA]" />
          <input
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search docs..."
            autoFocus
            className="w-full h-14 pl-12 pr-12 bg-transparent text-fg dark:text-[#FAFAFA] placeholder:text-fg-faint dark:placeholder:text-[#52525B] text-[0.9375rem] focus:outline-none font-body"
          />
          <button
            onClick={onClose}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-fg-faint hover:text-fg transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {!query && (
          <div className="p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-fg-faint mb-3">
              Quick links
            </p>
            <div className="space-y-1">
              {[
                {
                  title: "Welcome to Aurrra",
                  href: "/getting-started/welcome",
                  section: "Getting Started",
                },
                {
                  title: "Understanding Credits",
                  href: "/getting-started/understanding-credits",
                  section: "Getting Started",
                },
                {
                  title: "Plan Comparison",
                  href: "/pricing/plans",
                  section: "Plans & Pricing",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-brand-50 transition-colors group"
                >
                  <div className="w-7 h-7 rounded-md bg-brand-50 group-hover:bg-brand-100 flex items-center justify-center shrink-0 transition-colors">
                    <span className="text-brand-500 text-xs font-bold">#</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-fg group-hover:text-brand-600 transition-colors">
                      {link.title}
                    </p>
                    <p className="text-xs text-fg-faint">{link.section}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {query && results.length > 0 && (
          <div className="max-h-[400px] overflow-y-auto">
            <div className="px-5 py-2.5 border-b border-border dark:border-[#27272A] bg-surface-alt dark:bg-[#0F0F11]">
              <p className="text-xs font-semibold uppercase tracking-wider text-fg-faint">
                {results.length} result{results.length !== 1 && "s"}
              </p>
            </div>
            {results.map((r, i) => (
              <Link
                key={i}
                href={`/${r.sectionId}/${r.slug}`}
                onClick={onClose}
                className="flex items-start gap-3 px-5 py-3.5 hover:bg-brand-50/50 dark:hover:bg-[rgba(167,139,250,0.1)] transition-colors border-b border-border/50 dark:border-[#1F1F23] last:border-0 group"
              >
                <div className="w-7 h-7 rounded-md bg-brand-50 group-hover:bg-brand-100 flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                  <span className="text-brand-500 text-xs font-bold">#</span>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-fg group-hover:text-brand-600 transition-colors">
                    {r.title}
                  </p>
                  <p className="text-xs text-brand-500 mt-0.5">
                    {r.sectionTitle}
                  </p>
                  <p className="text-xs text-fg-muted mt-1 line-clamp-1">
                    {r.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}

        {query && results.length === 0 && (
          <div className="p-8 text-center">
            <p className="text-sm text-fg-muted">
              No results for &ldquo;{query}&rdquo;
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

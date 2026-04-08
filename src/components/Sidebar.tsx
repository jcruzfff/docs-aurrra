"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { sections } from "@/lib/content";

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<Set<string>>(() => {
    const initial = new Set<string>();
    for (const s of sections) {
      for (const p of s.pages) {
        if (pathname === `/${s.id}/${p.slug}`) {
          initial.add(s.id);
        }
      }
    }
    if (initial.size === 0) initial.add("getting-started");
    return initial;
  });

  useEffect(() => {
    for (const s of sections) {
      if (s.pages.some((p) => pathname === `/${s.id}/${p.slug}`)) {
        setExpanded((prev) => {
          if (prev.has(s.id)) return prev;
          const next = new Set(prev);
          next.add(s.id);
          return next;
        });
        break;
      }
    }
  }, [pathname]);

  const toggle = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <nav className="py-4 space-y-1">
      {sections.map((section, sectionIdx) => {
        if (section.standalone) {
          return (
            <div key={`standalone-${sectionIdx}`} className="space-y-0.5">
              {section.pages.map((page) => {
                const href = `/${section.id}/${page.slug}`;
                const isActive = pathname === href;

                return (
                  <Link
                    key={page.slug}
                    href={href}
                    onClick={onNavigate}
                    className={`block px-3 py-2 rounded-lg text-[0.8125rem] font-semibold transition-colors ${
                      isActive
                        ? "text-brand-600 dark:text-[#F4F4F5]"
                        : "text-fg dark:text-[#FAFAFA] hover:bg-surface-alt dark:hover:bg-[#27272A]"
                    }`}
                  >
                    {page.title}
                  </Link>
                );
              })}
            </div>
          );
        }

        const isExpanded = expanded.has(section.id);
        const hasActivePage = section.pages.some(
          (p) => pathname === `/${section.id}/${p.slug}`
        );

        return (
          <div key={section.id}>
            <button
              onClick={() => toggle(section.id)}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left text-[0.8125rem] font-semibold transition-colors ${
                hasActivePage
                  ? "text-brand-600 dark:text-[#F4F4F5]"
                  : "text-fg dark:text-[#FAFAFA] hover:bg-surface-alt dark:hover:bg-[#27272A]"
              }`}
            >
              <span className="flex-1">{section.title}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-fg-faint dark:text-[#52525B] transition-transform duration-200 ${
                  isExpanded ? "rotate-0" : "-rotate-90"
                }`}
              />
            </button>

            {isExpanded && (
              <div className="ml-4.5 pl-3 border-l border-border dark:border-[#27272A] space-y-0.5 mt-0.5 mb-2">
                {section.pages.map((page) => {
                  const href = `/${section.id}/${page.slug}`;
                  const isActive = pathname === href;

                  return (
                    <Link
                      key={page.slug}
                      href={href}
                      onClick={onNavigate}
                      className={`block px-3 py-1.5 rounded-md text-[0.8125rem] transition-colors ${
                        isActive
                          ? "text-brand-600 dark:text-[#F4F4F5] bg-brand-50 dark:bg-[#27272A] font-medium"
                          : "text-fg-muted dark:text-[#A1A1AA] hover:text-fg dark:hover:text-[#FAFAFA] hover:bg-surface-alt dark:hover:bg-[#27272A]"
                      }`}
                    >
                      {page.title}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}

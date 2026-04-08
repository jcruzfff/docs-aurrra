"use client";

import { useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X, ExternalLink } from "lucide-react";
import { Sidebar } from "./Sidebar";
import { SearchModal } from "./SearchModal";
import { ThemeToggle } from "./ThemeToggle";

export function DocsShell({ children }: { children: ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-[#121212]/90 backdrop-blur-md border-b border-border dark:border-[#27272A]">
        <div className="flex items-center justify-between h-14 px-4 lg:px-6">
          <div className="flex items-center gap-4">
            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="lg:hidden p-1.5 -ml-1.5 text-fg-muted hover:text-fg transition-colors"
            >
              {mobileNavOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>

            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="Aurrra"
                width={28}
                height={28}
                className="rounded-lg"
              />
              <span className="font-sans font-bold text-fg tracking-[-0.5px] text-[0.9375rem]">
                Aurrra
              </span>
              <span className="text-[0.625rem] font-semibold text-brand-500 bg-brand-50 border border-brand-100 rounded-full px-2 py-0.5 tracking-wide uppercase">
                Docs
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 h-9 px-3 rounded-md border border-border dark:border-[#3F3F46] bg-surface-alt dark:bg-[#121212] text-fg-muted text-sm hover:bg-gray-100 dark:hover:bg-[#27272A] dark:hover:border-[#52525B] transition-colors"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-fg-faint dark:text-[#52525B]">Search docs...</span>
              <kbd className="hidden sm:inline-flex items-center gap-0.5 text-[0.625rem] font-medium text-fg-faint dark:text-[#52525B] bg-surface-raised dark:bg-[#1F1F23] border border-border dark:border-[#27272A] rounded px-1.5 py-0.5 ml-2">
                ⌘K
              </kbd>
            </button>

            <ThemeToggle />

            <a
              href="https://app.aurrra.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 h-9 px-3 rounded-md text-sm font-medium text-fg-muted dark:text-[#A1A1AA] hover:bg-gray-100 dark:hover:bg-[#27272A] hover:text-fg dark:hover:text-[#FAFAFA] transition-colors"
            >
              Go to App
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-3.5rem)]">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block w-64 shrink-0 border-r border-border dark:border-[#27272A] dark:bg-[#121212] overflow-y-auto sticky top-14 h-[calc(100vh-3.5rem)] px-3">
          <Sidebar />
        </aside>

        {/* Mobile sidebar overlay */}
        {mobileNavOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileNavOpen(false)}
          >
            <div
              className="absolute left-0 top-14 bottom-0 w-72 bg-white dark:bg-[#121212] border-r border-border dark:border-[#27272A] overflow-y-auto px-3 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Sidebar onNavigate={() => setMobileNavOpen(false)} />
            </div>
          </div>
        )}

        {/* Main content */}
        <main className="flex-1 min-w-0 px-4 sm:px-8 lg:px-12 py-8 lg:py-10">
          <div className="max-w-5xl">{children}</div>

          <footer className="max-w-5xl mt-16 pt-6 border-t border-border dark:border-[#1F1F23]">
            <p className="text-xs text-fg-faint dark:text-[#52525B]">
              &copy; {new Date().getFullYear()} Aurrra. All rights reserved.
            </p>
          </footer>
        </main>
      </div>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

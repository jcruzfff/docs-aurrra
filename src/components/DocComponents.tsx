"use client";

import { ReactNode, useRef, useState, useCallback } from "react";
import {
  Info,
  Lightbulb,
  AlertTriangle,
  Zap,
  ChevronRight,
  ImageIcon,
} from "lucide-react";

/* ── Callout ─────────────────────────────────────────── */

type CalloutVariant = "info" | "tip" | "warning" | "note";

const calloutConfig: Record<
  CalloutVariant,
  { icon: ReactNode; bg: string; border: string; iconColor: string }
> = {
  info: {
    icon: <Info className="w-4 h-4" />,
    bg: "bg-blue-50 dark:bg-[rgba(59,130,246,0.1)]",
    border: "border-blue-200 dark:border-l-[3px] dark:border-[rgba(59,130,246,0.3)]",
    iconColor: "text-blue-500 dark:text-[#3B82F6]",
  },
  tip: {
    icon: <Lightbulb className="w-4 h-4" />,
    bg: "bg-brand-50 dark:bg-[rgba(167,139,250,0.1)]",
    border: "border-brand-200 dark:border-[rgba(167,139,250,0.3)]",
    iconColor: "text-brand-500 dark:text-[#A78BFA]",
  },
  warning: {
    icon: <AlertTriangle className="w-4 h-4" />,
    bg: "bg-amber-50 dark:bg-[rgba(234,179,8,0.1)]",
    border: "border-amber-200 dark:border-l-[3px] dark:border-[rgba(234,179,8,0.3)]",
    iconColor: "text-amber-500 dark:text-[#EAB308]",
  },
  note: {
    icon: <Zap className="w-4 h-4" />,
    bg: "bg-gray-50 dark:bg-[#121212]",
    border: "border-gray-200 dark:border-[#27272A]",
    iconColor: "text-gray-500 dark:text-[#A1A1AA]",
  },
};

export function Callout({
  variant = "info",
  title,
  children,
}: {
  variant?: CalloutVariant;
  title?: string;
  children: ReactNode;
}) {
  const c = calloutConfig[variant];
  return (
    <div
      className={`${c.bg} ${c.border} border rounded-xl p-4 my-5`}
    >
      <div className="flex gap-3">
        <div className={`${c.iconColor} mt-0.5 shrink-0`}>{c.icon}</div>
        <div className="min-w-0">
          {title && (
            <p className="font-semibold text-fg text-[0.9375rem] mb-1">
              {title}
            </p>
          )}
          <div className="text-[0.875rem] text-gray-600 dark:text-[#F4F4F5] leading-relaxed [&>p]:mb-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Numbered Steps ──────────────────────────────────── */

export function Steps({ children }: { children: ReactNode }) {
  return <div className="space-y-0 my-6">{children}</div>;
}

export function Step({
  number,
  title,
  children,
  last = false,
}: {
  number: number;
  title: string;
  children: ReactNode;
  last?: boolean;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 rounded-full bg-linear-to-br from-brand-400 to-brand-600 flex items-center justify-center shrink-0">
          <span className="text-sm font-semibold text-white">{number}</span>
        </div>
        {!last && <div className="w-0.5 flex-1 bg-brand-100 mt-2" />}
      </div>
      <div className={`flex-1 ${!last ? "pb-8" : ""}`}>
        <h4 className="text-fg font-semibold text-[0.9375rem] mb-2 font-sans">
          {title}
        </h4>
        <div className="text-gray-500 dark:text-[#A1A1AA] text-[0.875rem] leading-relaxed [&>p]:mb-2">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ── Image Zone (placeholder for screenshots) ────────── */

export function ImageZone({
  alt,
  caption,
  aspect = "video",
}: {
  alt: string;
  caption?: string;
  aspect?: "video" | "square" | "wide";
}) {
  const aspectClass =
    aspect === "square"
      ? "aspect-square"
      : aspect === "wide"
        ? "aspect-[21/9]"
        : "aspect-video";

  return (
    <figure className="my-6">
      <div
        className={`${aspectClass} w-full rounded-2xl border-2 border-dashed border-brand-200 bg-brand-50/50 flex flex-col items-center justify-center gap-2`}
      >
        <ImageIcon className="w-8 h-8 text-brand-300" />
        <span className="text-sm text-brand-400 font-medium px-4 text-center">
          {alt}
        </span>
      </div>
      {caption && (
        <figcaption className="text-center text-xs text-fg-muted mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/* ── Feature Card Grid ───────────────────────────────── */

export function CardGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 my-6 not-prose">
      {children}
    </div>
  );
}

export function FeatureCard({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon?: ReactNode;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setGlowPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <a
      ref={cardRef}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative block h-full overflow-hidden rounded-xl border border-border/80 dark:border-[#27272A] bg-white dark:bg-[#121212] p-3.5 transition-all duration-200 hover:border-brand-200 hover:shadow-[0_4px_20px_rgba(138,49,255,0.06)] dark:hover:shadow-none dark:hover:border-[#3F3F46] cursor-pointer"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 rounded-xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(250px circle at ${glowPos.x}px ${glowPos.y}px, rgba(138,49,255,0.08), transparent 70%)`,
        }}
      />
      <div className="relative z-10">
        {icon && (
          <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center text-brand-500 mb-2.5 group-hover:bg-brand-100 transition-colors [&>svg]:w-4 [&>svg]:h-4">
            {icon}
          </div>
        )}
        <h3 className="text-fg font-semibold text-[0.75rem] font-sans leading-snug mb-1 flex items-center gap-1">
          {title}
          <ChevronRight className="w-2.5 h-2.5 text-fg-faint opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-brand-500 transition-all duration-200" />
        </h3>
        <p style={{ fontSize: '0.75rem', lineHeight: '1.5', color: 'var(--card-desc-color)' }} className="m-0">
          {description}
        </p>
      </div>
    </a>
  );
}

/* ── Info Sections (prominent non-interactive feature blocks) ── */

export function InfoList({ children }: { children: ReactNode }) {
  return (
    <div className="my-8 not-prose space-y-6">
      {children}
    </div>
  );
}

export function InfoItem({
  title,
  description,
}: {
  title: string;
  description: string;
  icon?: ReactNode;
}) {
  return (
    <section className="border-l-2 border-brand-400 dark:border-brand-500 pl-4">
      <h3 className="text-fg font-semibold text-[1rem] font-sans tracking-tight m-0 mb-1.5">
        {title}
      </h3>
      <p className="text-[0.875rem] leading-relaxed m-0" style={{ color: 'var(--card-desc-color)' }}>
        {description}
      </p>
    </section>
  );
}

/* ── Credit Table ────────────────────────────────────── */

export function CreditTable({
  rows,
}: {
  rows: { action: string; cost: string; note?: string }[];
}) {
  return (
    <div className="overflow-x-auto my-6 rounded-xl border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-surface-alt">
            <th className="text-left font-semibold text-fg px-4 py-3 text-xs uppercase tracking-wide">
              Action
            </th>
            <th className="text-left font-semibold text-fg px-4 py-3 text-xs uppercase tracking-wide">
              Credits
            </th>
            <th className="text-left font-semibold text-fg px-4 py-3 text-xs uppercase tracking-wide">
              Note
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-border/50">
              <td className="px-4 py-3 text-fg font-medium">{r.action}</td>
              <td className="px-4 py-3 text-brand-600 font-semibold">
                {r.cost}
              </td>
              <td className="px-4 py-3 text-fg-muted">{r.note ?? "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── Plan Card ───────────────────────────────────────── */

export function PlanCard({
  name,
  monthlyPrice,
  annualPrice,
  credits,
  projects,
  highlighted = false,
  features,
}: {
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  credits: string;
  projects: string;
  highlighted?: boolean;
  features: string[];
}) {
  return (
    <div
      className={`rounded-2xl border p-6 ${
        highlighted
          ? "border-brand-500 ring-2 ring-brand-100 bg-white dark:bg-[#121212]"
          : "border-border dark:border-[#27272A] bg-white dark:bg-[#121212]"
      }`}
    >
      {highlighted && (
        <span className="inline-block text-xs font-semibold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full mb-3">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-bold text-fg font-sans">{name}</h3>
      <div className="mt-2 flex items-baseline gap-1">
        <span className="text-3xl font-bold text-fg">{monthlyPrice}</span>
        <span className="text-fg-muted text-sm">/mo</span>
      </div>
      <p className="text-xs text-fg-muted mt-1">
        or {annualPrice}/mo billed annually
      </p>
      <div className="mt-4 space-y-1 text-sm text-gray-600 dark:text-[#F4F4F5]">
        <p>
          <strong className="text-fg">{credits}</strong> credits/month
        </p>
        <p>
          <strong className="text-fg">{projects}</strong> projects
        </p>
      </div>
      <ul className="mt-4 space-y-2">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-[#F4F4F5]">
            <svg
              className="w-4 h-4 text-success mt-0.5 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── Keyboard Shortcut Badge ─────────────────────────── */

export function Kbd({ children }: { children: ReactNode }) {
  return (
    <kbd className="inline-flex items-center px-1.5 py-0.5 text-xs font-medium text-fg-muted dark:text-[#A1A1AA] bg-gray-100 dark:bg-[#1F1F23] border border-gray-200 dark:border-[#27272A] rounded">
      {children}
    </kbd>
  );
}

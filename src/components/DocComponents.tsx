"use client";

import { ReactNode } from "react";
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
    bg: "bg-blue-50 dark:bg-blue-500/10",
    border: "border-blue-200 dark:border-blue-500/20",
    iconColor: "text-blue-500 dark:text-blue-400",
  },
  tip: {
    icon: <Lightbulb className="w-4 h-4" />,
    bg: "bg-brand-50",
    border: "border-brand-200",
    iconColor: "text-brand-500",
  },
  warning: {
    icon: <AlertTriangle className="w-4 h-4" />,
    bg: "bg-amber-50 dark:bg-amber-500/10",
    border: "border-amber-200 dark:border-amber-500/20",
    iconColor: "text-amber-500 dark:text-amber-400",
  },
  note: {
    icon: <Zap className="w-4 h-4" />,
    bg: "bg-gray-50 dark:bg-[#1F1F23]",
    border: "border-gray-200 dark:border-[#27272A]",
    iconColor: "text-gray-500 dark:text-gray-400",
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
          <div className="text-[0.875rem] text-gray-600 dark:text-[#A1A1AA] leading-relaxed [&>p]:mb-0">
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
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shrink-0">
          <span className="text-sm font-semibold text-white">{number}</span>
        </div>
        {!last && <div className="w-0.5 flex-1 bg-brand-100 mt-2" />}
      </div>
      <div className={`flex-1 ${!last ? "pb-8" : ""}`}>
        <h4 className="text-fg font-semibold text-[0.9375rem] mb-2 font-sans">
          {title}
        </h4>
        <div className="text-gray-500 dark:text-[#71717A] text-[0.875rem] leading-relaxed [&>p]:mb-2">
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
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
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
  href?: string;
  icon?: ReactNode;
}) {
  const Wrapper = href ? "a" : "div";
  return (
    <Wrapper
      {...(href ? { href } : {})}
      className={`group block rounded-2xl border border-border/80 bg-white dark:bg-[#18181B] p-5 transition-all duration-200 ${
        href
          ? "hover:border-brand-200 hover:shadow-[0_4px_20px_rgba(138,49,255,0.06)] dark:hover:shadow-none cursor-pointer"
          : ""
      }`}
    >
      {icon && (
        <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center text-brand-500 mb-3 group-hover:bg-brand-100 transition-colors">
          {icon}
        </div>
      )}
      <h3 className="text-fg font-semibold text-[0.875rem] font-sans leading-snug mb-1.5 flex items-center gap-1">
        {title}
        {href && (
          <ChevronRight className="w-3 h-3 text-fg-faint opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-brand-500 transition-all duration-200" />
        )}
      </h3>
      <p className="text-fg-muted text-[0.8125rem] leading-relaxed">
        {description}
      </p>
    </Wrapper>
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
          ? "border-brand-500 ring-2 ring-brand-100 bg-white dark:bg-[#18181B]"
          : "border-border bg-white dark:bg-[#18181B]"
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
      <div className="mt-4 space-y-1 text-sm text-gray-600 dark:text-[#A1A1AA]">
        <p>
          <strong className="text-fg">{credits}</strong> credits/month
        </p>
        <p>
          <strong className="text-fg">{projects}</strong> projects
        </p>
      </div>
      <ul className="mt-4 space-y-2">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-[#A1A1AA]">
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
    <kbd className="inline-flex items-center px-1.5 py-0.5 text-xs font-medium text-fg-muted bg-gray-100 dark:bg-[#1F1F23] border border-gray-200 dark:border-[#27272A] rounded">
      {children}
    </kbd>
  );
}

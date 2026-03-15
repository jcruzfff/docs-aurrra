"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Callout } from "@/components/DocComponents";
import { PageNav } from "@/components/PageNav";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What is Aurrra?",
    answer:
      "Aurrra is an AI-powered content engine that helps creators research viral content, generate scripts in their own voice, and produce videos, thumbnails, and images — all in one platform.",
  },
  {
    question: "How does the free trial work?",
    answer:
      "Every new account gets a 10-day Pro trial with 100 credits. You get full access to all features. No credit card is required to start.",
  },
  {
    question: "What happens when I run out of credits?",
    answer:
      "You can purchase top-up packages at any time. Purchased credits never expire. You can also upgrade your plan for more monthly credits. Unlimited features (Vault, Collections, Instagram research, script editing, video editor, Voice & Avatar) continue to work regardless of your credit balance.",
  },
  {
    question: "Do unused monthly credits roll over?",
    answer:
      "Monthly credits reset at the start of each billing cycle and do not roll over. However, purchased credits (from top-ups) never expire and carry over indefinitely.",
  },
  {
    question: "Can I change my plan?",
    answer:
      "Yes. Go to Settings → Billing to upgrade, downgrade, or switch between monthly and annual billing at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    question: "Can I pause instead of canceling?",
    answer:
      "Yes. You can pause your subscription for $2.99/month. While paused, you keep access to your account and data but won't receive monthly credits. Reactivate anytime.",
  },
  {
    question: "Why do I need my own ElevenLabs / HeyGen API keys?",
    answer:
      "The Voice & Avatar workflow uses your personal API keys so you have full control over your voice clones and avatar assets. Usage on those platforms is billed directly by ElevenLabs and HeyGen.",
  },
  {
    question: "What AI model powers script generation?",
    answer:
      "Aurrra uses advanced AI to generate scripts. Your brand voice and niche from your profile settings are included in every generation to ensure the output matches your style.",
  },
  {
    question: "Is Instagram research really unlimited?",
    answer:
      "Yes. Instagram research is completely free on every plan — search and analyze as many creators and posts as you want.",
  },
  {
    question: "How does the video editor work?",
    answer:
      "The video editor is a timeline-based tool where you can add clips, captions, and transitions, then preview in real-time. Editing is unlimited — you only spend credits (10) when you export the final video.",
  },
  {
    question: "What video formats can I export?",
    answer:
      "Exports are processed as background jobs — you can track progress in the Video Edit Queue.",
  },
  {
    question: "How do I get help?",
    answer:
      "If you can't find what you need in these docs, reach out via the support channels listed in your account settings. We're here to help.",
  },
];

function FaqAccordion({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-surface-alt dark:hover:bg-[#1F1F23] transition-colors"
      >
        <span className="text-[0.9375rem] font-medium text-fg">
          {item.question}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-fg-faint shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-5 pb-4 text-[0.875rem] text-gray-600 dark:text-[#A1A1AA] leading-relaxed border-t border-border/50 pt-3">
          {item.answer}
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <div className="doc-prose">
      <h1>Frequently Asked Questions</h1>
      <p>Quick answers to the most common questions about Aurrra.</p>

      <div className="space-y-3 my-6 not-prose">
        {faqs.map((faq, i) => (
          <FaqAccordion key={i} item={faq} />
        ))}
      </div>

      <Callout variant="info" title="Still have questions?">
        <p>
          If you can&apos;t find what you&apos;re looking for, check the
          specific feature pages in the sidebar or reach out to our support
          team.
        </p>
      </Callout>

      <PageNav
        prev={{
          sectionId: "pricing",
          sectionTitle: "Plans & Pricing",
          slug: "credit-costs",
          title: "Credit Costs",
        }}
        next={{
          sectionId: "faq",
          sectionTitle: "FAQ",
          slug: "privacy-policy",
          title: "Privacy Policy",
        }}
      />
    </div>
  );
}

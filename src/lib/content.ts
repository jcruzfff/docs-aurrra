export interface DocPage {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
}

export interface DocSection {
  id: string;
  title: string;
  standalone?: boolean;
  pages: DocPage[];
}

export const sections: DocSection[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    pages: [
      {
        slug: "welcome",
        title: "Welcome to Aurrra",
        description:
          "An overview of Aurrra — your AI-powered content engine for researching, writing, and producing video content.",
        keywords: ["welcome", "overview", "introduction", "what is aurrra"],
      },
      {
        slug: "creating-your-account",
        title: "Creating Your Account",
        description:
          "Sign up, verify your email, and log in to Aurrra for the first time.",
        keywords: ["signup", "register", "account", "login", "email", "password"],
      },
      {
        slug: "onboarding",
        title: "Onboarding",
        description:
          "Set up your brand voice and content niche during the guided onboarding flow.",
        keywords: ["onboarding", "brand voice", "niche", "setup", "first time"],
      },
      {
        slug: "dashboard",
        title: "Dashboard Overview",
        description:
          "Navigate the main dashboard — your launchpad to Research, Write, and Produce workflows.",
        keywords: ["dashboard", "home", "navigation", "workflow"],
      },
      {
        slug: "understanding-credits",
        title: "Understanding Credits",
        description:
          "How the credit system works, what costs credits, and what's unlimited.",
        keywords: [
          "credits",
          "cost",
          "usage",
          "unlimited",
          "balance",
          "top-up",
        ],
      },
    ],
  },
  {
    id: "research",
    title: "Research",
    pages: [
      {
        slug: "youtube-research",
        title: "YouTube Research",
        description:
          "Search for viral videos, analyze outliers, and discover winning content patterns on YouTube.",
        keywords: [
          "youtube",
          "search",
          "viral",
          "outlier",
          "research",
          "channels",
        ],
      },
      {
        slug: "instagram-research",
        title: "Instagram Research",
        description:
          "Search and analyze Instagram creators and posts to find trending content.",
        keywords: ["instagram", "creators", "posts", "reels", "research"],
      },
      {
        slug: "watchlists",
        title: "Watchlists",
        description:
          "Create watchlists to track your favorite creators and stay updated on their latest content.",
        keywords: [
          "watchlist",
          "channels",
          "track",
          "creators",
          "monitor",
          "follow",
        ],
      },
      {
        slug: "collections",
        title: "Collections",
        description:
          "Curate and organize videos into collections for inspiration, reference, and analysis.",
        keywords: [
          "collections",
          "organize",
          "curate",
          "save",
          "videos",
          "filter",
        ],
      },
    ],
  },
  {
    id: "writing",
    title: "Writing",
    pages: [
      {
        slug: "vault",
        title: "The Vault",
        description:
          "Browse and save hooks, titles, captions, structures, styles, and frameworks extracted from top-performing content.",
        keywords: [
          "vault",
          "hooks",
          "titles",
          "captions",
          "structures",
          "styles",
          "frameworks",
          "templates",
        ],
      },
      {
        slug: "scripts",
        title: "Scripts",
        description:
          "Generate research reports, YouTube scripts, and short-form scripts using AI trained on your brand voice.",
        keywords: [
          "scripts",
          "generate",
          "youtube",
          "short-form",
          "research report",
          "AI",
          "writing",
        ],
      },
    ],
  },
  {
    id: "production",
    title: "Production",
    pages: [
      {
        slug: "voice-avatar",
        title: "Voice & Avatar",
        description:
          "Clone your voice with ElevenLabs and create AI avatars with HeyGen to produce talking-head videos.",
        keywords: [
          "voice",
          "avatar",
          "elevenlabs",
          "heygen",
          "clone",
          "talking head",
          "video",
        ],
      },
      {
        slug: "thumbnails",
        title: "Thumbnails",
        description:
          "Generate AI-powered YouTube thumbnails from URLs or reference photos with custom prompts.",
        keywords: [
          "thumbnail",
          "generate",
          "youtube",
          "AI",
          "reference",
          "photos",
        ],
      },
      {
        slug: "video-editor",
        title: "Video Editor",
        description:
          "Edit videos with a timeline-based editor — add clips, captions, transitions, and export.",
        keywords: [
          "video",
          "editor",
          "timeline",
          "clips",
          "captions",
          "transitions",
          "export",
        ],
      },
      {
        slug: "image-generator",
        title: "Image Generator",
        description: "Generate images using AI models for your content needs.",
        keywords: ["image", "generate", "AI", "standard", "pro"],
      },
      {
        slug: "video-generator",
        title: "Video Generator",
        description:
          "Generate AI videos at different quality tiers for your content.",
        keywords: ["video", "generate", "AI", "standard", "pro", "premium", "ultra"],
      },
    ],
  },
  {
    id: "settings",
    title: "Settings & Account",
    pages: [
      {
        slug: "profile",
        title: "Profile Settings",
        description:
          "Update your brand voice, niche, website URL, and calls-to-action.",
        keywords: [
          "profile",
          "brand voice",
          "niche",
          "website",
          "cta",
          "settings",
        ],
      },
      {
        slug: "billing",
        title: "Billing & Subscriptions",
        description:
          "Manage your plan, view credit usage, buy top-ups, and pause or cancel your subscription.",
        keywords: [
          "billing",
          "subscription",
          "plan",
          "credits",
          "top-up",
          "pause",
          "cancel",
        ],
      },
      {
        slug: "api-credentials",
        title: "API Credentials",
        description:
          "Connect your ElevenLabs and HeyGen accounts by adding your API keys and voice/avatar IDs.",
        keywords: [
          "api",
          "credentials",
          "elevenlabs",
          "heygen",
          "keys",
          "voice id",
          "avatar id",
        ],
      },
    ],
  },
  {
    id: "pricing",
    title: "Plans & Pricing",
    pages: [
      {
        slug: "plans",
        title: "Plan Comparison",
        description:
          "Compare Starter, Pro, and Gusto plans — features, credit allowances, and pricing.",
        keywords: [
          "plans",
          "starter",
          "pro",
          "gusto",
          "pricing",
          "compare",
          "features",
        ],
      },
      {
        slug: "credit-costs",
        title: "Credit Costs",
        description:
          "A complete breakdown of credit costs for every action in Aurrra.",
        keywords: [
          "credits",
          "costs",
          "pricing",
          "actions",
          "video",
          "script",
          "thumbnail",
          "research",
        ],
      },
    ],
  },
  {
    id: "faq",
    title: "FAQ",
    pages: [
      {
        slug: "frequently-asked-questions",
        title: "Frequently Asked Questions",
        description:
          "Answers to common questions about Aurrra, credits, billing, and workflows.",
        keywords: [
          "faq",
          "questions",
          "help",
          "support",
          "common",
          "troubleshooting",
        ],
      },
    ],
  },
  {
    id: "faq",
    title: "",
    standalone: true,
    pages: [
      {
        slug: "privacy-policy",
        title: "Privacy Policy",
        description:
          "How Aurrra collects, uses, and protects your personal information.",
        keywords: [
          "privacy",
          "policy",
          "data",
          "personal information",
          "cookies",
          "security",
          "gdpr",
        ],
      },
      {
        slug: "terms-of-service",
        title: "Terms of Service",
        description:
          "The terms and conditions governing your use of Aurrra.",
        keywords: [
          "terms",
          "service",
          "agreement",
          "conditions",
          "legal",
          "tos",
          "usage",
        ],
      },
    ],
  },
];

export function getAllPages(): (DocPage & { sectionId: string; sectionTitle: string })[] {
  return sections.flatMap((s) =>
    s.pages.map((p) => ({ ...p, sectionId: s.id, sectionTitle: s.title }))
  );
}

export function getPage(sectionId: string, slug: string) {
  const section = sections.find((s) => s.id === sectionId);
  if (!section) return null;
  const page = section.pages.find((p) => p.slug === slug);
  if (!page) return null;
  return { ...page, sectionId: section.id, sectionTitle: section.title };
}

export function getAdjacentPages(sectionId: string, slug: string) {
  const all = getAllPages();
  const idx = all.findIndex(
    (p) => p.sectionId === sectionId && p.slug === slug
  );
  return {
    prev: idx > 0 ? all[idx - 1] : null,
    next: idx < all.length - 1 ? all[idx + 1] : null,
  };
}

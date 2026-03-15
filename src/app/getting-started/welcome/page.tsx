import {
  Callout,
  CardGrid,
  FeatureCard,
  Kbd,
} from "@/components/DocComponents";
import { PageNav } from "@/components/PageNav";
import {
  Search,
  PenTool,
  Film,
  BookOpen,
  CreditCard,
  Settings,
  Mic,
  Image,
  Layers,
  BarChart3,
  Bookmark,
  Eye,
} from "lucide-react";

export default function WelcomePage() {
  return (
    <div className="doc-prose">
      <h1>Welcome to the Docs</h1>
      <p>
        Everything you need to get the most out of Aurrra — your AI-powered
        content engine for researching, writing, and producing video content.
      </p>

      <h2>What you can do with Aurrra</h2>
      <p>
        Aurrra covers every stage of the content creation process. Here&apos;s
        everything at your fingertips.
      </p>

      <CardGrid>
        <FeatureCard
          icon={<Search className="w-4 h-4" />}
          title="YouTube Research"
          description="Search millions of videos, spot outliers, and analyze what's going viral in any niche."
          href="/research/youtube-research"
        />
        <FeatureCard
          icon={<BarChart3 className="w-4 h-4" />}
          title="Instagram Research"
          description="Explore creators, posts, and Reels to find trending content patterns on Instagram."
          href="/research/instagram-research"
        />
        <FeatureCard
          icon={<Eye className="w-4 h-4" />}
          title="Watchlists"
          description="Track your favorite creators and stay updated on their latest content."
          href="/research/watchlists"
        />
        <FeatureCard
          icon={<Bookmark className="w-4 h-4" />}
          title="Collections"
          description="Curate and organize videos into collections for inspiration and reference."
          href="/research/collections"
        />
        <FeatureCard
          icon={<Layers className="w-4 h-4" />}
          title="The Vault"
          description="Browse proven hooks, titles, captions, structures, and frameworks from top content."
          href="/writing/vault"
        />
        <FeatureCard
          icon={<PenTool className="w-4 h-4" />}
          title="AI Script Generation"
          description="Generate research reports, YouTube scripts, and short-form scripts in your brand voice."
          href="/writing/scripts"
        />
        <FeatureCard
          icon={<Mic className="w-4 h-4" />}
          title="Voice & Avatar"
          description="Clone your voice and create AI avatars for talking-head video content."
          href="/production/voice-avatar"
        />
        <FeatureCard
          icon={<Image className="w-4 h-4" />}
          title="AI Thumbnails"
          description="Generate eye-catching YouTube thumbnails from URLs or reference photos."
          href="/production/thumbnails"
        />
        <FeatureCard
          icon={<Film className="w-4 h-4" />}
          title="Video Editor"
          description="Timeline-based editor with clips, captions, transitions, and one-click export."
          href="/production/video-editor"
        />
      </CardGrid>

      <h2>Explore the docs</h2>
      <p>
        New here? Start from the top. Already using Aurrra? Jump to what you
        need.
      </p>

      <CardGrid>
        <FeatureCard
          icon={<BookOpen className="w-4 h-4" />}
          title="Getting Started"
          description="Create your account, set up your brand voice, and tour the dashboard."
          href="/getting-started/creating-your-account"
        />
        <FeatureCard
          icon={<CreditCard className="w-4 h-4" />}
          title="Credits & Billing"
          description="How credits work, plan comparison, and managing your subscription."
          href="/getting-started/understanding-credits"
        />
        <FeatureCard
          icon={<Settings className="w-4 h-4" />}
          title="Settings"
          description="Profile, billing, and API credentials."
          href="/settings/profile"
        />
      </CardGrid>

      <Callout variant="tip" title="Quick navigation">
        <p>
          Press <Kbd>⌘ K</Kbd> anywhere in the docs to open search and jump to
          any page instantly.
        </p>
      </Callout>

      <PageNav
        prev={null}
        next={{
          sectionId: "getting-started",
          sectionTitle: "Getting Started",
          slug: "creating-your-account",
          title: "Creating Your Account",
        }}
      />
    </div>
  );
}

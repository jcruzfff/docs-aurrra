import {
  Callout,
  ImageZone,
  CardGrid,
  FeatureCard,
} from "@/components/DocComponents";
import { PageNav } from "@/components/PageNav";
import { Search, PenTool, Film } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="doc-prose">
      <h1>Dashboard Overview</h1>
      <p className="lead">
        The dashboard is your home base in Aurrra. From here you can jump into
        any part of your content workflow — research, writing, or production.
      </p>

      <ImageZone
        alt="Aurrra dashboard with sidebar and main content area"
        caption="The dashboard gives you a bird's-eye view of your workspace and quick access to every tool."
        aspect="video"
      />

      <Callout variant="info" title="First-time welcome overlay">
        <p>
          The first time you visit the dashboard, you'll see a welcome overlay
          with a quick tour of the interface. You can dismiss it at any time and
          revisit it from <strong>Settings &gt; Help</strong>.
        </p>
      </Callout>

      <h2>The three workflow sections</h2>
      <p>
        Aurrra organizes your tools around the three stages of content creation.
        Each section lives in the sidebar and contains everything you need for
        that stage.
      </p>

      <CardGrid>
        <FeatureCard
          icon={<Search className="w-5 h-5" />}
          title="Research"
          description="YouTube search, channel analysis, Instagram research, and video analysis — everything you need to find what's trending."
          href="/research/youtube-research"
        />
        <FeatureCard
          icon={<PenTool className="w-5 h-5" />}
          title="Write"
          description="Script generation, your script vault, and collections to keep your ideas organized and ready to produce."
          href="/write/scripts"
        />
        <FeatureCard
          icon={<Film className="w-5 h-5" />}
          title="Produce"
          description="Thumbnail creation, AI video generation, and the video editor — take your scripts from page to screen."
          href="/produce/thumbnails"
        />
      </CardGrid>

      <h2>Navigating the sidebar</h2>
      <p>
        The sidebar is always visible on the left side of the screen. It's
        organized into sections that mirror the three workflow stages, plus a
        settings area at the bottom.
      </p>
      <ul>
        <li>
          <strong>Research</strong> — YouTube Search, Channels, Instagram, Video
          Analysis
        </li>
        <li>
          <strong>Write</strong> — Scripts, Vault, Collections
        </li>
        <li>
          <strong>Produce</strong> — Thumbnails, AI Video, Video Editor
        </li>
        <li>
          <strong>Settings</strong> — Profile, Billing, Help
        </li>
      </ul>

      <h2>Top navigation</h2>
      <p>
        The top bar shows your current location in the app, your credit balance,
        and quick actions. You'll also find your account menu here for signing
        out or switching workspaces.
      </p>

      <ImageZone
        alt="Top navigation bar showing credit balance and account menu"
        caption="The top nav keeps your credit balance visible so you always know where you stand."
        aspect="wide"
      />

      <PageNav
        prev={{
          sectionId: "getting-started",
          sectionTitle: "Getting Started",
          slug: "onboarding",
          title: "Onboarding",
        }}
        next={{
          sectionId: "getting-started",
          sectionTitle: "Getting Started",
          slug: "understanding-credits",
          title: "Understanding Credits",
        }}
      />
    </div>
  );
}

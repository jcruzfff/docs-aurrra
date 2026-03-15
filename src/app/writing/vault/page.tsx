import {
  Callout,
  CardGrid,
  FeatureCard,
  ImageZone,
} from "@/components/DocComponents";
import { PageNav } from "@/components/PageNav";
import {
  Sparkles,
  MessageSquareQuote,
  Type,
  AlignLeft,
  Palette,
  LayoutGrid,
} from "lucide-react";

export default function VaultPage() {
  return (
    <>
      <div className="doc-prose">
        <h1>The Vault</h1>
      <p className="lead">
        A curated library of proven content patterns — hooks, titles, captions,
        structures, styles, and frameworks — extracted from top-performing videos
        by Aurrra's AI.
      </p>

      <ImageZone
        alt="The Vault interface showing content pattern categories"
        caption="Browse six categories of battle-tested content patterns, all sourced from real viral videos."
        aspect="video"
      />

      <h2>What's inside the Vault?</h2>
      <p>
        Every time you analyze a video in Aurrra, the AI doesn't just summarize
        it — it extracts the underlying patterns that made it work. Those
        patterns are saved to your Vault, organized into six categories you can
        browse, filter, and save at any time.
      </p>

      <CardGrid>
        <FeatureCard
          icon={<Sparkles className="w-5 h-5" />}
          title="Hooks"
          description="Opening lines and attention-grabbers that stop the scroll in the first 3 seconds."
        />
        <FeatureCard
          icon={<Type className="w-5 h-5" />}
          title="Titles"
          description="Headline formulas and title patterns that drive clicks and curiosity."
        />
        <FeatureCard
          icon={<MessageSquareQuote className="w-5 h-5" />}
          title="Captions"
          description="Caption styles and CTA patterns that boost engagement and shares."
        />
        <FeatureCard
          icon={<AlignLeft className="w-5 h-5" />}
          title="Structures"
          description="Video outlines and narrative arcs — the skeleton behind high-retention content."
        />
        <FeatureCard
          icon={<Palette className="w-5 h-5" />}
          title="Styles"
          description="Tonal and visual approaches — from storytelling to listicles, cinematic to raw."
        />
        <FeatureCard
          icon={<LayoutGrid className="w-5 h-5" />}
          title="Frameworks"
          description="Repeatable content formulas you can adapt to any topic or niche."
        />
      </CardGrid>

      <h2>How items get added</h2>
      <p>
        Vault items aren't manually curated — they're generated automatically
        every time you run a <strong>video analysis</strong>. Aurrra's AI watches
        the video, identifies what's working, and files each pattern into the
        right category. The more videos you analyze, the richer and more
        personalized your Vault becomes.
      </p>

      <Callout variant="info" title="Your Vault grows with your research">
        <p>
          Analyzing more videos doesn't just give you reports — it builds a
          deeper library of patterns tailored to your niche. Think of the Vault
          as your personal swipe file that gets smarter over time.
        </p>
      </Callout>

      <h2>Browsing and filtering</h2>
      <p>
        Use the category tabs at the top of the Vault to switch between Hooks,
        Titles, Captions, Structures, Styles, and Frameworks. Within each
        category you can:
      </p>
      <ul>
        <li>
          <strong>Search</strong> by keyword to find patterns related to a
          specific topic or style.
        </li>
        <li>
          <strong>Filter by source</strong> to see patterns from a particular
          video or channel you've analyzed.
        </li>
        <li>
          <strong>Save favorites</strong> to bookmark the patterns you want to
          reference again when writing scripts.
        </li>
      </ul>

      <h3>Saving favorites</h3>
      <p>
        Click the heart icon on any Vault item to save it to your favorites.
        Favorited items appear in a dedicated "Saved" tab so you can quickly
        pull up your go-to patterns without scrolling through everything.
      </p>

      <Callout variant="tip" title="Unlimited access">
        <p>
          Browsing, searching, and saving Vault items is completely free and
          unlimited on every plan. Use it as much as you want — no credits
          required.
        </p>
      </Callout>

      </div>
      <PageNav
        prev={{
          sectionId: "research",
          sectionTitle: "Research",
          slug: "collections",
          title: "Collections",
        }}
        next={{
          sectionId: "writing",
          sectionTitle: "Writing",
          slug: "scripts",
          title: "Scripts",
        }}
      />
    </>
  );
}

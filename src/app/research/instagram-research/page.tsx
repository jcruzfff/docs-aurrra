import {
  Callout,
  Steps,
  Step,
  ImageZone,
} from "@/components/DocComponents";
import { PageNav } from "@/components/PageNav";

export default function InstagramResearch() {
  return (
    <div className="doc-prose">
      <h1>Instagram Research</h1>
      <p>
        Aurrra&apos;s Instagram research gives you access to creator profiles,
        posts, and Reels across the platform. Use it to study what&apos;s
        working on Instagram and bring those insights into your content
        workflow.
      </p>

      <Callout variant="info" title="Unlimited usage">
        <p>
          Instagram research is included with every plan at no credit cost.
          Search as much as you like — there are no per-query charges.
        </p>
      </Callout>

      <ImageZone
        alt="Instagram Research search interface with creator results"
        caption="Search for creators or topics to explore Instagram content"
        aspect="video"
      />

      <h2>What You Can Do</h2>
      <p>
        The Instagram research tab lets you search for creators by username or
        keyword, browse their recent posts and Reels, and review engagement
        metrics like likes, comments, and shares. It&apos;s a great way to
        cross-reference trends you find on YouTube or discover platform-native
        content angles.
      </p>

      <h2>Step-by-Step</h2>

      <Steps>
        <Step number={1} title="Search for a creator or topic">
          <p>
            Navigate to <strong>Research → Instagram</strong> and enter a
            creator&apos;s handle or a keyword. Aurrra will pull matching
            profiles and surface their recent content.
          </p>
        </Step>

        <Step number={2} title="Browse posts and Reels">
          <p>
            Results display as a visual grid. Each card shows the post type
            (image, carousel, or Reel), caption preview, and engagement stats.
            Click any post to expand it and read the full caption.
          </p>
          <ImageZone
            alt="Instagram post grid with engagement metrics"
            caption="Visual grid makes it easy to scan a creator's content"
            aspect="wide"
          />
        </Step>

        <Step number={3} title="Analyze engagement patterns">
          <p>
            Look for posts that significantly outperform the creator&apos;s
            average — these are the Instagram equivalent of outliers. Pay
            attention to hooks in captions, content formats, and posting
            cadence.
          </p>
        </Step>

        <Step number={4} title="Save what inspires you" last>
          <p>
            Add standout posts to your collections or note the creator for a
            watchlist. Combining Instagram research with YouTube research gives
            you a multi-platform view of what resonates with your audience.
          </p>
        </Step>
      </Steps>

      <Callout variant="tip" title="Cross-platform research">
        <p>
          Many creators post across YouTube and Instagram. Use Instagram
          research to study their short-form strategy, then check their YouTube
          channel for long-form approaches to the same topics.
        </p>
      </Callout>

      <PageNav
        prev={{
          sectionId: "research",
          sectionTitle: "Research",
          slug: "youtube-research",
          title: "YouTube Research",
        }}
        next={{
          sectionId: "research",
          sectionTitle: "Research",
          slug: "watchlists",
          title: "Watchlists",
        }}
      />
    </div>
  );
}

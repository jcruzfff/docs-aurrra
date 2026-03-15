import {
  Callout,
  Steps,
  Step,
  ImageZone,
  CreditTable,
} from "@/components/DocComponents";
import { PageNav } from "@/components/PageNav";

export default function YouTubeResearch() {
  return (
    <div className="doc-prose">
      <h1>YouTube Research</h1>
      <p>
        Aurrra gives you a powerful YouTube research engine. Search for viral
        videos, spot outliers in any niche, and deep-dive into channels — all
        without leaving the app.
      </p>

      <ImageZone
        alt="YouTube Research search results with outlier scores"
        caption="Search results ranked by outlier score"
        aspect="video"
      />

      <h2>How It Works</h2>
      <p>
        Aurrra indexes millions of YouTube videos and calculates an{" "}
        <strong>outlier score</strong> for each one — a measure of how much a
        video over-performed relative to the channel&apos;s average. A score of
        10× means the video got ten times more views than that creator typically
        gets. This is your shortcut to finding proven content ideas.
      </p>

      <Callout variant="tip" title="Use specific keywords">
        <p>
          Narrow searches perform best. Instead of &quot;fitness,&quot; try
          &quot;morning routine for busy moms&quot; or &quot;home gym under
          $500.&quot; The more specific your query, the more relevant your
          outlier results will be.
        </p>
      </Callout>

      <h2>Step-by-Step</h2>

      <Steps>
        <Step number={1} title="Enter your search query">
          <p>
            Open <strong>Research → YouTube</strong> and type a topic, keyword,
            or phrase into the search bar. Hit enter or click <strong>Search</strong>{" "}
            to start searching.
          </p>
        </Step>

        <Step number={2} title="Browse results with outlier scores">
          <p>
            Results appear as a scrollable list sorted by relevance. Each video
            card shows the title, channel, view count, publish date, and its
            outlier score. Look for high outlier scores — those are the videos
            that broke through.
          </p>
          <ImageZone
            alt="Video card showing outlier score badge"
            caption="Each result includes an outlier score so you can spot winners fast"
            aspect="wide"
          />
        </Step>

        <Step number={3} title="Analyze a video">
          <p>
            Click any video to open the detail modal. From here you can view
            the full transcript, engagement stats, and AI-generated analysis.
            Analyzing a video costs <strong>5 credits</strong> and unlocks
            deeper insights you can reference later when writing scripts.
          </p>
          <ImageZone
            alt="Video detail modal with transcript and AI analysis"
            caption="The detail modal surfaces everything you need for content planning"
            aspect="video"
          />
        </Step>

        <Step number={4} title="Save to a collection" last>
          <p>
            Found something worth keeping? Click <strong>Save to Collection</strong>{" "}
            to add the video to any of your collections. This makes it easy to
            build a library of inspiration organized by topic, format, or
            project.
          </p>
        </Step>
      </Steps>

      <h2>Credit Costs</h2>
      <p>
        YouTube research uses credits from your monthly balance. Here&apos;s the
        breakdown:
      </p>

      <CreditTable
        rows={[
          {
            action: "Search",
            cost: "25",
            note: "Per search query",
          },
          {
            action: "Fetch channel",
            cost: "10",
            note: "Load a channel's video catalog",
          },
          {
            action: "Analyze video",
            cost: "5",
            note: "AI analysis + transcript extraction",
          },
        ]}
      />

      <Callout variant="info" title="Credits refresh monthly">
        <p>
          Your credit balance resets at the start of each billing cycle. Check
          your remaining credits anytime from the sidebar.
        </p>
      </Callout>

      <PageNav
        prev={{
          sectionId: "getting-started",
          sectionTitle: "Getting Started",
          slug: "understanding-credits",
          title: "Understanding Credits",
        }}
        next={{
          sectionId: "research",
          sectionTitle: "Research",
          slug: "instagram-research",
          title: "Instagram Research",
        }}
      />
    </div>
  );
}

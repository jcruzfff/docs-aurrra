import {
  Callout,
  Steps,
  Step,
  ImageZone,
} from "@/components/DocComponents";
import { PageNav } from "@/components/PageNav";

export default function Watchlists() {
  return (
    <div className="doc-prose">
        <h1>Watchlists</h1>
      <p>
        Watchlists let you track your favorite creators across platforms in one
        place. Add YouTube channels or Instagram profiles to a watchlist and
        Aurrra will keep their latest content at your fingertips — no more
        jumping between tabs to stay current.
      </p>

      <ImageZone
        alt="Watchlist view showing tracked creators and their latest videos"
        caption="Your watchlists keep creator content organized and up to date"
        aspect="video"
      />

      <h2>Why Watchlists?</h2>
      <p>
        Great content starts with knowing what&apos;s happening in your space.
        Watchlists turn passive browsing into active research by letting you
        curate a feed of creators whose work you want to study, learn from, or
        respond to.
      </p>

      <h2>Step-by-Step</h2>

      <Steps>
        <Step number={1} title="Create a watchlist">
          <p>
            Head to <strong>Watchlists</strong> in the sidebar and click{" "}
            <strong>New Watchlist</strong>. Give it a name that reflects the
            niche or theme — for example, &quot;Finance YouTubers&quot; or
            &quot;Fitness Reels Creators.&quot;
          </p>
        </Step>

        <Step number={2} title="Add channels and creators">
          <p>
            You can add creators directly from your research results. When
            you&apos;re viewing a YouTube channel or Instagram profile, click{" "}
            <strong>Add to Watchlist</strong> and pick the list you want. You
            can also add creators manually by pasting a channel or profile URL.
          </p>
          <ImageZone
            alt="Adding a creator to a watchlist from research results"
            caption="One click to start tracking a creator"
            aspect="wide"
          />
        </Step>

        <Step number={3} title="Browse their latest content" last>
          <p>
            Open any watchlist to see a combined feed of recent uploads from
            every creator in that list. Click into individual videos or posts
            to analyze them, or save them to a collection for later.
          </p>
        </Step>
      </Steps>

      <Callout variant="tip" title="Organize by niche">
        <p>
          Create separate watchlists for different niches or content formats.
          This keeps your research focused and makes it easy to spot trends
          within a specific space rather than across everything at once.
        </p>
      </Callout>

      <PageNav
        prev={{
          sectionId: "research",
          sectionTitle: "Research",
          slug: "instagram-research",
          title: "Instagram Research",
        }}
        next={{
          sectionId: "research",
          sectionTitle: "Research",
          slug: "collections",
          title: "Collections",
        }}
      />
    </div>
  );
}

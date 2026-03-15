import {
  Callout,
  Steps,
  Step,
  ImageZone,
} from "@/components/DocComponents";
import { PageNav } from "@/components/PageNav";

export default function Collections() {
  return (
    <div className="doc-prose">
      <h1>Collections</h1>
      <p>
        Collections are your personal library of saved videos and posts. Think
        of them as mood boards for content — curate the best examples
        you&apos;ve found during research, organize them by topic or project,
        and come back to them whenever you need inspiration.
      </p>

      <ImageZone
        alt="Collections page showing curated videos with filter controls"
        caption="Filter and sort your saved content to find exactly what you need"
        aspect="video"
      />

      <h2>How Collections Fit Your Workflow</h2>
      <p>
        As you research on YouTube and Instagram, you&apos;ll come across
        videos and posts worth revisiting. Instead of bookmarking URLs or
        keeping messy notes, save them to a collection. Later, when you sit
        down to write a script or plan a content calendar, your collections
        give you a curated starting point.
      </p>

      <h2>Step-by-Step</h2>

      <Steps>
        <Step number={1} title="Create a collection">
          <p>
            Go to <strong>Collections</strong> in the sidebar and click{" "}
            <strong>New Collection</strong>. Name it something descriptive —
            &quot;Hook Examples,&quot; &quot;Competitor Deep Dives,&quot; or
            &quot;Q2 Content Ideas&quot; all work well.
          </p>
        </Step>

        <Step number={2} title="Add videos from research">
          <p>
            While browsing YouTube or Instagram research results, click{" "}
            <strong>Save to Collection</strong> on any video or post. Pick the
            target collection from the dropdown and it&apos;s saved instantly.
            You can add the same item to multiple collections if it fits more
            than one theme.
          </p>
          <ImageZone
            alt="Save to Collection dropdown on a video card"
            caption="Save content to any collection right from your research results"
            aspect="wide"
          />
        </Step>

        <Step number={3} title="Filter and sort" last>
          <p>
            Open a collection to see everything you&apos;ve saved. Use the
            filter controls to narrow by platform (YouTube or Instagram) or
            analysis status (analyzed vs. not yet). Sort by date added, view
            count, or outlier score to surface the most relevant content for
            your current project.
          </p>
        </Step>
      </Steps>

      <Callout variant="tip" title="Collections for content planning">
        <p>
          Before starting a new script, create a dedicated collection for that
          project. Save 5–10 reference videos that nail the format, hook, or
          topic you&apos;re going for. When you move to the writing phase,
          you&apos;ll have a focused set of examples to draw from.
        </p>
      </Callout>

      <PageNav
        prev={{
          sectionId: "research",
          sectionTitle: "Research",
          slug: "watchlists",
          title: "Watchlists",
        }}
        next={{
          sectionId: "writing",
          sectionTitle: "Writing",
          slug: "vault",
          title: "The Vault",
        }}
      />
    </div>
  );
}

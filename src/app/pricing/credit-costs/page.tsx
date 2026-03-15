import { Callout, CreditTable } from "@/components/DocComponents";
import { PageNav } from "@/components/PageNav";

export default function CreditCostsPage() {
  return (
    <>
      <div className="doc-prose">
        <h1>Credit Costs</h1>
      <p>
        A complete reference for how many credits each action in Aurrra
        consumes.
      </p>

      <h2>Paid Actions</h2>
      <p>
        These actions deduct credits from your balance. Monthly credits are
        consumed first, then purchased credits.
      </p>

      <h3>Research</h3>
      <CreditTable
        rows={[
          {
            action: "YouTube Search",
            cost: "25",
            note: "Per search query",
          },
          {
            action: "YouTube Channel Fetch",
            cost: "10",
            note: "Fetch channel details and videos",
          },
          {
            action: "Video Analysis",
            cost: "5",
            note: "AI analysis of a single video",
          },
        ]}
      />

      <h3>Writing</h3>
      <CreditTable
        rows={[
          {
            action: "Script Generation",
            cost: "5",
            note: "Research report, YouTube, or short-form",
          },
        ]}
      />

      <h3>Thumbnails &amp; Images</h3>
      <CreditTable
        rows={[
          {
            action: "Thumbnail Generation",
            cost: "5",
            note: "One generation with variations",
          },
          {
            action: "Image — Standard",
            cost: "5",
            note: "Standard quality AI image",
          },
          {
            action: "Image — Pro",
            cost: "10",
            note: "Higher quality AI image",
          },
        ]}
      />

      <h3>Video</h3>
      <CreditTable
        rows={[
          { action: "Video Export", cost: "10", note: "Export from video editor" },
          {
            action: "AI Video — Standard",
            cost: "25",
            note: "Per 5 seconds of video",
          },
          {
            action: "AI Video — Pro",
            cost: "50",
            note: "Per 5 seconds of video",
          },
          {
            action: "AI Video — Premium",
            cost: "125",
            note: "Per 5 seconds of video",
          },
          {
            action: "AI Video — Ultra",
            cost: "250",
            note: "Per 5 seconds of video",
          },
        ]}
      />

      <Callout variant="warning" title="AI Video costs add up quickly">
        <p>
          A 30-second Ultra video would cost 1,500 credits (250 × 6 segments).
          Consider prototyping at Standard tier first, then upgrading the final
          version.
        </p>
      </Callout>

      <h2>Unlimited Actions</h2>
      <p>
        These features are <strong>completely free</strong> on every plan,
        including the trial:
      </p>
      <ul>
        <li>
          <strong>Instagram Research</strong> — search and analyze unlimited
          creators
        </li>
        <li>
          <strong>Script Editing</strong> — edit generated scripts as many times
          as you want
        </li>
        <li>
          <strong>Voice &amp; Avatar</strong> — generate unlimited voice and
          avatar content (uses your own API keys)
        </li>
        <li>
          <strong>Video Editor</strong> — edit on the timeline without limits
          (only export costs credits)
        </li>
        <li>
          <strong>The Vault</strong> — browse and save hooks, titles, and
          frameworks freely
        </li>
        <li>
          <strong>Collections</strong> — curate and organize unlimited
          collections
        </li>
      </ul>

      <Callout variant="tip" title="Maximize your credits">
        <p>
          Focus paid credits on high-value actions like YouTube research and
          script generation. Use the unlimited features — Vault, Collections,
          Instagram research, and the video editor — as much as you want.
        </p>
      </Callout>

      </div>
      <PageNav
        prev={{
          sectionId: "pricing",
          sectionTitle: "Plans & Pricing",
          slug: "plans",
          title: "Plan Comparison",
        }}
        next={{
          sectionId: "faq",
          sectionTitle: "FAQ",
          slug: "frequently-asked-questions",
          title: "Frequently Asked Questions",
        }}
      />
    </>
  );
}

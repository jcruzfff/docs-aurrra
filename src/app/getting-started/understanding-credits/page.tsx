import {
  Callout,
  CreditTable,
  ImageZone,
} from "@/components/DocComponents";
import { PageNav } from "@/components/PageNav";

export default function UnderstandingCreditsPage() {
  return (
    <>
      <div className="doc-prose">
        <h1>Understanding Credits</h1>
      <p className="lead">
        Credits are the currency that powers AI features in Aurrra. Every plan
        includes a monthly credit allowance, and different actions cost different
        amounts.
      </p>

      <h2>How credits work</h2>
      <p>
        Each billing cycle, your plan's credit allowance refreshes
        automatically. Use them for AI-powered actions like generating scripts,
        creating thumbnails, exporting videos, and running research queries.
      </p>
      <ul>
        <li>
          <strong>Monthly credits</strong> refresh at the start of each billing
          cycle. Unused monthly credits do not roll over.
        </li>
        <li>
          <strong>Purchased credits</strong> (top-ups) never expire and are used
          only after your monthly allowance runs out.
        </li>
      </ul>

      <h2>What's unlimited</h2>
      <p>
        Not everything costs credits. These features are available without
        limits on every plan:
      </p>
      <ul>
        <li>Instagram research and browsing</li>
        <li>Script editing and formatting</li>
        <li>Voice and avatar configuration</li>
        <li>Video editor (timeline, cuts, captions)</li>
        <li>Vault access and organization</li>
        <li>Collections management</li>
      </ul>

      <h2>Credit costs by action</h2>
      <p>
        Here's a full breakdown of how many credits each action uses. Costs are
        per individual action (e.g., per script generated, per video exported).
      </p>

      <CreditTable
        rows={[
          { action: "Video Analysis", cost: "5", note: "Per video analyzed" },
          { action: "Script Generation", cost: "5", note: "Per script generated" },
          { action: "Thumbnail Generation", cost: "5", note: "Per thumbnail" },
          { action: "Image (Standard)", cost: "5", note: "Standard quality" },
          { action: "Image (Pro)", cost: "10", note: "Higher resolution & detail" },
          { action: "Video Export", cost: "10", note: "Per exported video" },
          { action: "YouTube Channel Fetch", cost: "10", note: "Per channel analyzed" },
          { action: "YouTube Search", cost: "25", note: "Per search query" },
          { action: "AI Video (Standard / 5s)", cost: "25", note: "5-second clip" },
          { action: "AI Video (Pro / 5s)", cost: "50", note: "5-second clip, higher quality" },
          { action: "AI Video (Premium / 5s)", cost: "125", note: "5-second clip, premium quality" },
          { action: "AI Video (Ultra / 5s)", cost: "250", note: "5-second clip, best quality" },
        ]}
      />

      <ImageZone
        alt="Credit balance indicator in the top navigation bar"
        caption="Your remaining credits are always visible in the top nav."
        aspect="wide"
      />

      <Callout variant="tip" title="Check your balance anytime">
        <p>
          Your current credit balance is displayed in the top navigation bar.
          For a detailed usage breakdown, head to{" "}
          <strong>Settings &gt; Billing</strong> where you can see credits used,
          credits remaining, and your renewal date.
        </p>
      </Callout>

      <Callout variant="info" title="Need more credits?">
        <p>
          If you run out before your next billing cycle, you can purchase top-up
          packages from <strong>Settings &gt; Billing</strong>. Top-up credits
          never expire and stack on top of your monthly allowance.
        </p>
      </Callout>

      </div>
      <PageNav
        prev={{
          sectionId: "getting-started",
          sectionTitle: "Getting Started",
          slug: "dashboard",
          title: "Dashboard Overview",
        }}
        next={{
          sectionId: "research",
          sectionTitle: "Research",
          slug: "youtube-research",
          title: "YouTube Research",
        }}
      />
    </>
  );
}

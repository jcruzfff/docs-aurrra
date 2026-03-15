import { Callout, PlanCard, ImageZone } from "@/components/DocComponents";
import { PageNav } from "@/components/PageNav";

export default function PlansPage() {
  return (
    <div className="doc-prose">
      <h1>Plan Comparison</h1>
      <p>
        Every plan includes full access to all features. Choose based on how
        many credits and projects you need.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6 not-prose">
        <PlanCard
          name="Starter"
          monthlyPrice="$39"
          annualPrice="$29"
          credits="750"
          projects="2"
          features={[
            "YouTube & Instagram research",
            "AI script generation",
            "Voice & Avatar workflows",
            "Video editor & export",
            "Thumbnail generation",
            "Image & video generation",
            "Vault & Collections",
          ]}
        />
        <PlanCard
          name="Pro"
          monthlyPrice="$99"
          annualPrice="$79"
          credits="2,500"
          projects="10"
          highlighted
          features={[
            "Everything in Starter",
            "3.3× more monthly credits",
            "Up to 10 projects",
            "Priority support",
          ]}
        />
        <PlanCard
          name="Gusto"
          monthlyPrice="$249"
          annualPrice="$199"
          credits="7,500"
          projects="Unlimited"
          features={[
            "Everything in Pro",
            "10× more monthly credits",
            "Unlimited projects",
            "Priority support",
          ]}
        />
      </div>

      <h2>What&apos;s the Same Across All Plans</h2>
      <p>
        Every plan — including the trial — gives you access to the full Aurrra
        feature set:
      </p>
      <ul>
        <li>YouTube and Instagram research</li>
        <li>Watchlists and Collections</li>
        <li>The Vault (hooks, titles, captions, structures, styles, frameworks)</li>
        <li>AI script generation (research reports, YouTube, short-form)</li>
        <li>Voice &amp; Avatar workflows</li>
        <li>Thumbnail, image, and video generation</li>
        <li>Video editor with export</li>
      </ul>

      <h2>Annual Billing</h2>
      <p>
        Save up to <strong>25%</strong> by switching to annual billing. You can
        change your billing period at any time from the{" "}
        <strong>Settings → Billing</strong> page.
      </p>

      <h2>Free Trial</h2>
      <p>
        Every new account starts with a <strong>10-day Pro trial</strong>{" "}
        capped at <strong>100 credits</strong>. No credit card required to
        start exploring.
      </p>

      <Callout variant="tip" title="Not sure which plan?">
        <p>
          Start with the trial. If you&apos;re producing content regularly, Pro
          is the sweet spot. Gusto is for teams or heavy producers who need
          maximum throughput.
        </p>
      </Callout>

      <ImageZone
        alt="Screenshot of the plan selection interface in Settings → Billing"
        caption="Choose your plan in Settings → Billing"
      />

      <PageNav
        prev={{
          sectionId: "settings",
          sectionTitle: "Settings & Account",
          slug: "api-credentials",
          title: "API Credentials",
        }}
        next={{
          sectionId: "pricing",
          sectionTitle: "Plans & Pricing",
          slug: "credit-costs",
          title: "Credit Costs",
        }}
      />
    </div>
  );
}

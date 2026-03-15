import {
  Callout,
  ImageZone,
  PlanCard,
  CreditTable,
} from "@/components/DocComponents";
import { PageNav } from "@/components/PageNav";

export default function BillingPage() {
  return (
    <div className="doc-prose">
      <h1>Billing &amp; Subscriptions</h1>
      <p>
        Manage your plan, monitor credit usage, purchase top-ups, and control
        your subscription.
      </p>

      <ImageZone
        alt="Screenshot of the Billing page showing plan and credit usage"
        caption="Settings → Billing"
      />

      <h2>Your Plan</h2>
      <p>
        Aurrra offers three plans. All plans include full access to every
        feature — the difference is how many credits you receive each month and
        how many projects you can create.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6 not-prose">
        <PlanCard
          name="Starter"
          monthlyPrice="$39"
          annualPrice="$29"
          credits="750"
          projects="2"
          features={[
            "All features included",
            "YouTube & Instagram research",
            "AI script generation",
            "Video editor & export",
            "Thumbnail generation",
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
            "3× more credits",
            "10 projects",
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
            "10× more credits",
            "Unlimited projects",
            "Priority support",
          ]}
        />
      </div>

      <h2>Free Trial</h2>
      <p>
        New users start with a <strong>10-day Pro trial</strong> with a cap of{" "}
        <strong>100 credits</strong>. This gives you full access to every
        feature so you can explore before committing.
      </p>

      <h2>Credit Usage</h2>
      <p>
        The billing page shows your current credit balance broken down into:
      </p>
      <ul>
        <li>
          <strong>Monthly credits</strong> — refresh at the start of each
          billing cycle
        </li>
        <li>
          <strong>Purchased credits</strong> — bought via top-ups, never expire
        </li>
      </ul>
      <p>Monthly credits are consumed first, then purchased credits.</p>

      <h2>Top-Up Packages</h2>
      <p>Need more credits mid-cycle? Purchase a top-up package:</p>

      <CreditTable
        rows={[
          { action: "Small", cost: "375", note: "$19" },
          { action: "Medium", cost: "1,000", note: "$45" },
          { action: "Large", cost: "2,500", note: "$99" },
          { action: "XL", cost: "7,500", note: "$249" },
        ]}
      />

      <Callout variant="tip" title="Purchased credits never expire">
        <p>
          Unlike monthly credits, top-up credits carry over indefinitely — buy
          them whenever you need a boost.
        </p>
      </Callout>

      <h2>Pausing Your Subscription</h2>
      <p>
        If you need a break, you can <strong>pause</strong> your subscription
        for <strong>$2.99/month</strong> instead of canceling. While paused:
      </p>
      <ul>
        <li>You keep access to your account and data</li>
        <li>You won&apos;t receive monthly credits</li>
        <li>You can reactivate at any time to resume your plan</li>
      </ul>

      <h2>Managing Your Subscription</h2>
      <p>
        Click <strong>Manage Subscription</strong> on the billing page to open
        the payment portal. From there you can update your payment method,
        download invoices, or cancel.
      </p>

      <ImageZone
        alt="Screenshot of the payment management portal"
        caption="Payment portal for subscription management"
      />

      <PageNav
        prev={{
          sectionId: "settings",
          sectionTitle: "Settings & Account",
          slug: "profile",
          title: "Profile Settings",
        }}
        next={{
          sectionId: "settings",
          sectionTitle: "Settings & Account",
          slug: "api-credentials",
          title: "API Credentials",
        }}
      />
    </div>
  );
}

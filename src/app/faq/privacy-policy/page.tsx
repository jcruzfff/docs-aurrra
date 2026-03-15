import { PageNav } from "@/components/PageNav";

export default function PrivacyPolicyPage() {
  return (
    <div className="doc-prose">
      <h1>Privacy Policy</h1>
      <p>
        Last updated: March 2026
      </p>

      <h2>Introduction</h2>
      <p>
        Aurrra (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed
        to protecting your privacy. This Privacy Policy explains how we
        collect, use, disclose, and safeguard your information when you use our
        platform and services.
      </p>

      <h2>Information We Collect</h2>

      <h3>Account Information</h3>
      <p>
        When you create an account, we collect your email address and password.
        If you complete onboarding, we also store your brand voice description,
        content niche, website URL, and calls-to-action.
      </p>

      <h3>Usage Data</h3>
      <p>
        We automatically collect information about how you interact with
        Aurrra, including pages visited, features used, credit consumption, and
        general usage patterns. This helps us improve the product and your
        experience.
      </p>

      <h3>Content You Create</h3>
      <p>
        We store the content you create within Aurrra, including scripts,
        collections, watchlists, vault items, and generated assets (thumbnails,
        videos, images). This content is associated with your account and is
        necessary to provide our services.
      </p>

      <h3>Payment Information</h3>
      <p>
        Payment processing is handled by our third-party payment processor. We
        do not store your full credit card number, CVV, or other sensitive
        payment details on our servers. We receive and store transaction
        identifiers, plan details, and billing status.
      </p>

      <h3>Third-Party API Credentials</h3>
      <p>
        If you connect external services (such as ElevenLabs or HeyGen), we
        store the API keys and identifiers you provide. These are encrypted and
        used solely to operate the integrations you configure.
      </p>

      <h2>How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide, maintain, and improve Aurrra&apos;s features and services</li>
        <li>Process transactions and manage your subscription</li>
        <li>Personalize AI-generated content using your brand voice and niche</li>
        <li>Send important account notifications (billing, security, service updates)</li>
        <li>Monitor and analyze usage trends to improve the platform</li>
        <li>Detect, prevent, and address technical issues or abuse</li>
      </ul>

      <h2>Data Sharing</h2>
      <p>
        We do not sell your personal information. We may share data with:
      </p>
      <ul>
        <li>
          <strong>Service providers</strong> — Third-party services that help
          us operate Aurrra (payment processing, hosting, analytics). These
          providers only access data necessary to perform their functions.
        </li>
        <li>
          <strong>Legal requirements</strong> — If required by law, regulation,
          or legal process, we may disclose your information to comply with
          applicable obligations.
        </li>
      </ul>

      <h2>Data Security</h2>
      <p>
        We implement industry-standard security measures to protect your data,
        including encryption in transit (TLS) and at rest, secure
        authentication, and access controls. However, no method of electronic
        transmission or storage is 100% secure, and we cannot guarantee
        absolute security.
      </p>

      <h2>Data Retention</h2>
      <p>
        We retain your account data and content for as long as your account is
        active. If you cancel your subscription, your data is retained for a
        reasonable period to allow reactivation. You may request deletion of
        your account and associated data at any time by contacting us.
      </p>

      <h2>Your Rights</h2>
      <p>Depending on your jurisdiction, you may have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you</li>
        <li>Request correction of inaccurate data</li>
        <li>Request deletion of your data</li>
        <li>Object to or restrict certain processing</li>
        <li>Export your data in a portable format</li>
      </ul>
      <p>
        To exercise any of these rights, contact us at the email address listed
        below.
      </p>

      <h2>Cookies and Analytics</h2>
      <p>
        Aurrra uses essential cookies to maintain your session and
        authentication state. We also use analytics tools to understand usage
        patterns and improve the product. You can control cookie preferences
        through your browser settings.
      </p>

      <h2>Children&apos;s Privacy</h2>
      <p>
        Aurrra is not intended for use by anyone under the age of 13. We do
        not knowingly collect personal information from children. If we become
        aware that we have collected data from a child under 13, we will take
        steps to delete it.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you
        of material changes by posting the updated policy on this page and
        updating the &quot;Last updated&quot; date. Your continued use of
        Aurrra after changes constitutes acceptance of the updated policy.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy or your data, contact
        us at <strong>support@aurrrra.com</strong>.
      </p>

      <PageNav
        prev={{
          sectionId: "faq",
          sectionTitle: "FAQ",
          slug: "frequently-asked-questions",
          title: "Frequently Asked Questions",
        }}
        next={{
          sectionId: "faq",
          sectionTitle: "FAQ",
          slug: "terms-of-service",
          title: "Terms of Service",
        }}
      />
    </div>
  );
}

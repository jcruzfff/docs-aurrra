import {
  Callout,
  Steps,
  Step,
  ImageZone,
} from "@/components/DocComponents";
import { PageNav } from "@/components/PageNav";

export default function CreatingYourAccountPage() {
  return (
    <div className="doc-prose">
      <h1>Creating Your Account</h1>
      <p className="lead">
        Get up and running with Aurrra in under two minutes. All you need is an
        email address.
      </p>

      <Callout variant="info" title="Beta access">
        <p>
          Aurrra is currently in invite-only beta. You'll need an invitation
          link or access code to create your account. If you don't have one yet,
          join the waitlist at{" "}
          <a href="https://aurrrra.com" className="underline">
            aurrrra.com
          </a>
          .
        </p>
      </Callout>

      <ImageZone
        alt="Aurrra sign-up page"
        caption="The sign-up page — enter your email and choose a password to get started."
        aspect="video"
      />

      <h2>Sign-up steps</h2>

      <Steps>
        <Step number={1} title="Visit aurrrra.com">
          <p>
            Head to{" "}
            <a href="https://aurrrra.com" className="underline">
              aurrrra.com
            </a>{" "}
            and click <strong>Get Started</strong>. If you have a beta access
            code, you'll be prompted to enter it here.
          </p>
        </Step>

        <Step number={2} title="Enter your email and password">
          <p>
            Choose a strong password — at least 8 characters with a mix of
            letters and numbers. This is the email you'll use to log in and
            receive billing receipts.
          </p>
        </Step>

        <Step number={3} title="Verify your email">
          <p>
            Check your inbox for a verification email from Aurrra. Click the
            confirmation link to activate your account. If you don't see it
            within a few minutes, check your spam folder.
          </p>
        </Step>

        <Step number={4} title="Log in and start creating" last>
          <p>
            Head back to{" "}
            <a href="https://aurrrra.com" className="underline">
              aurrrra.com
            </a>{" "}
            and sign in with your new credentials. You'll be taken straight into
            the onboarding flow to set up your brand voice and niche.
          </p>
        </Step>
      </Steps>

      <Callout variant="tip" title="Trouble signing in?">
        <p>
          If your verification link has expired, click <strong>Resend</strong> on
          the login page. You can also reach us at{" "}
          <strong>support@aurrrra.com</strong> for help.
        </p>
      </Callout>

      <PageNav
        prev={{
          sectionId: "getting-started",
          sectionTitle: "Getting Started",
          slug: "welcome",
          title: "Welcome",
        }}
        next={{
          sectionId: "getting-started",
          sectionTitle: "Getting Started",
          slug: "onboarding",
          title: "Onboarding",
        }}
      />
    </div>
  );
}

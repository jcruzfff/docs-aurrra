import {
  Callout,
  Steps,
  Step,
  ImageZone,
} from "@/components/DocComponents";
import { PageNav } from "@/components/PageNav";

export default function OnboardingPage() {
  return (
    <>
      <div className="doc-prose">
        <h1>Onboarding</h1>
      <p className="lead">
        Before you dive in, Aurrra needs to learn a little about you. The
        onboarding flow takes about a minute and powers every AI feature in the
        app.
      </p>

      <ImageZone
        alt="Aurrra onboarding screen"
        caption="The onboarding flow walks you through brand voice and niche setup."
        aspect="video"
      />

      <h2>What you'll set up</h2>

      <Steps>
        <Step number={1} title="Brand Voice">
          <p>
            Describe how you talk to your audience. Think about your tone
            (casual, professional, energetic), your style (storytelling,
            educational, comedic), and who you're speaking to. The more detail
            you provide, the better Aurrra can match your voice when generating
            scripts.
          </p>
          <p>
            For example: <em>"I create fast-paced, hype-style commentary videos
            for Gen Z gamers. My tone is sarcastic but encouraging, and I use a
            lot of pop culture references."</em>
          </p>
        </Step>

        <Step number={2} title="Niche" last>
          <p>
            Select the content niche or category that best describes your
            channel. This helps Aurrra surface relevant research, suggest
            trending topics, and tailor script templates to your space.
          </p>
          <p>
            You can pick from categories like Tech, Gaming, Lifestyle, Finance,
            Health & Fitness, Education, and more. If your niche spans multiple
            categories, choose the one that best represents your primary content.
          </p>
        </Step>
      </Steps>

      <h2>Why this matters</h2>
      <p>
        Your brand voice and niche aren't just profile settings — they're woven
        into every AI interaction. When you generate a script, Aurrra uses your
        voice profile to write in <em>your</em> style. When you research
        content, your niche helps filter results to what's actually relevant.
      </p>

      <Callout variant="tip" title="You can always update these later">
        <p>
          Head to <strong>Settings &gt; Profile</strong> at any time to refine
          your brand voice or switch your niche. Changes take effect immediately
          on all future AI generations.
        </p>
      </Callout>

      </div>
      <PageNav
        prev={{
          sectionId: "getting-started",
          sectionTitle: "Getting Started",
          slug: "creating-your-account",
          title: "Creating Your Account",
        }}
        next={{
          sectionId: "getting-started",
          sectionTitle: "Getting Started",
          slug: "dashboard",
          title: "Dashboard Overview",
        }}
      />
    </>
  );
}

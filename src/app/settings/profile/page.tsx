import {
  Callout,
  Steps,
  Step,
  ImageZone,
} from "@/components/DocComponents";
import { PageNav } from "@/components/PageNav";

export default function ProfileSettingsPage() {
  return (
    <div className="doc-prose">
      <h1>Profile Settings</h1>
      <p>
        Customize your brand identity so every AI-generated script sounds like
        you.
      </p>

      <ImageZone
        alt="Screenshot of the Profile Settings page"
        caption="Settings → Profile"
      />

      <h2>What You Can Edit</h2>

      <h3>Brand Voice</h3>
      <p>
        A free-form description of how you speak, your tone, and your style.
        This is fed directly into every script generation prompt, so the more
        specific you are, the better the output matches your real voice.
      </p>
      <p>
        Good examples include details about humor style, sentence length
        preference, words you always use (or avoid), and how you address your
        audience.
      </p>

      <h3>Niche</h3>
      <p>
        Your content niche or category — for example <em>tech reviews</em>,{" "}
        <em>personal finance</em>, or <em>fitness motivation</em>. This helps
        the AI tailor research and scripts to your domain.
      </p>

      <h3>Website URL</h3>
      <p>
        Your main website or landing page. This can be referenced in generated
        CTAs and scripts.
      </p>

      <h3>Calls-to-Action</h3>
      <p>
        Add one or more CTAs that you regularly use — like &ldquo;Subscribe for
        more&rdquo; or &ldquo;Link in bio.&rdquo; The AI will weave these
        naturally into your scripts.
      </p>

      <Callout variant="tip" title="Be specific">
        <p>
          Instead of &ldquo;casual and fun,&rdquo; try &ldquo;I use short
          punchy sentences, lots of rhetorical questions, and never say
          &lsquo;guys&rsquo; — I say &lsquo;y&apos;all.&rsquo;&rdquo; The more
          detail, the better.
        </p>
      </Callout>

      <h2>How to Update</h2>

      <Steps>
        <Step number={1} title="Open Settings">
          <p>
            Click your profile icon in the sidebar or navigate to{" "}
            <strong>Settings → Profile</strong>.
          </p>
        </Step>
        <Step number={2} title="Edit any field">
          <p>
            Update your brand voice, niche, website, or CTAs. Changes are
            saved automatically.
          </p>
        </Step>
        <Step number={3} title="See it in action" last>
          <p>
            Generate a new script — you&apos;ll notice the output immediately
            reflects your updated profile.
          </p>
        </Step>
      </Steps>

      <Callout variant="info" title="First set during onboarding">
        <p>
          You originally configured these during onboarding. You can change them
          here at any time.
        </p>
      </Callout>

      <PageNav
        prev={{
          sectionId: "production",
          sectionTitle: "Production",
          slug: "video-generator",
          title: "Video Generator",
        }}
        next={{
          sectionId: "settings",
          sectionTitle: "Settings & Account",
          slug: "billing",
          title: "Billing & Subscriptions",
        }}
      />
    </div>
  );
}

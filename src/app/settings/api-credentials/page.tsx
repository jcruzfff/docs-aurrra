import {
  Callout,
  Steps,
  Step,
  ImageZone,
} from "@/components/DocComponents";
import { PageNav } from "@/components/PageNav";

export default function ApiCredentialsPage() {
  return (
    <div className="doc-prose">
      <h1>API Credentials</h1>
      <p>
        Connect your ElevenLabs and HeyGen accounts to unlock voice cloning and
        AI avatar features.
      </p>

      <Callout variant="info" title="Bring your own keys">
        <p>
          Aurrra integrates with ElevenLabs and HeyGen using your personal API
          keys. This means you have full control over your voice and avatar
          assets, and usage on those platforms is billed directly by them.
        </p>
      </Callout>

      <h2>ElevenLabs Setup</h2>
      <p>
        ElevenLabs powers voice cloning and text-to-speech in the Voice &amp;
        Avatar workflow.
      </p>

      <Steps>
        <Step number={1} title="Get your API key">
          <p>
            Log in to{" "}
            <a
              href="https://elevenlabs.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              elevenlabs.io
            </a>
            , go to <strong>Profile → API Keys</strong>, and copy your key.
          </p>
        </Step>
        <Step number={2} title="Find your Voice ID">
          <p>
            In the ElevenLabs dashboard, go to <strong>Voices</strong>, select
            your cloned voice, and copy the Voice ID from the details panel.
          </p>
        </Step>
        <Step number={3} title="Add to Aurrra" last>
          <p>
            In Aurrra, go to <strong>Settings → Profile</strong> (or the Voice
            &amp; Avatar onboarding), paste your API key and Voice ID, and save.
          </p>
        </Step>
      </Steps>

      <ImageZone
        alt="Screenshot of ElevenLabs API key and Voice ID fields in Aurrra"
        caption="Adding your ElevenLabs credentials"
      />

      <h2>HeyGen Setup</h2>
      <p>
        HeyGen provides AI avatars that lip-sync to your generated voice audio.
      </p>

      <Steps>
        <Step number={1} title="Get your API key">
          <p>
            Log in to{" "}
            <a
              href="https://heygen.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              heygen.com
            </a>
            , navigate to <strong>Settings → API</strong>, and copy your key.
          </p>
        </Step>
        <Step number={2} title="Find your Avatar ID">
          <p>
            In HeyGen, go to <strong>Avatars</strong>, select the avatar you
            want to use, and copy its ID.
          </p>
        </Step>
        <Step number={3} title="Add to Aurrra" last>
          <p>
            Paste both values into the HeyGen fields in Aurrra&apos;s settings
            and save.
          </p>
        </Step>
      </Steps>

      <ImageZone
        alt="Screenshot of HeyGen API key and Avatar ID fields in Aurrra"
        caption="Adding your HeyGen credentials"
      />

      <Callout variant="tip" title="Test your setup">
        <p>
          After adding your credentials, head to the{" "}
          <strong>Voice &amp; Avatar</strong> workflow and run a quick test
          generation to make sure everything is connected.
        </p>
      </Callout>

      <PageNav
        prev={{
          sectionId: "settings",
          sectionTitle: "Settings & Account",
          slug: "billing",
          title: "Billing & Subscriptions",
        }}
        next={{
          sectionId: "pricing",
          sectionTitle: "Plans & Pricing",
          slug: "plans",
          title: "Plan Comparison",
        }}
      />
    </div>
  );
}

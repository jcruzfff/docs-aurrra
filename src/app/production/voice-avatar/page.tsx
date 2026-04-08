import {
  Callout,
  ImageZone,
  Steps,
  Step,
  InfoList,
  InfoItem,
} from "@/components/DocComponents";
import { PageNav } from "@/components/PageNav";
import { Mic, Video } from "lucide-react";

export default function VoiceAvatarPage() {
  return (
    <div className="doc-prose">
        <h1>Voice & Avatar</h1>
      <p className="lead">
        Turn any script into a realistic voiceover — or a full AI avatar
        video — using ElevenLabs voice cloning and HeyGen digital avatars.
      </p>

      <ImageZone
        alt="Voice & Avatar workspace showing script input and generation controls"
        caption="The Voice & Avatar workspace — write your script, pick a mode, and generate."
        aspect="video"
      />

      <h2>Two generation modes</h2>
      <p>
        Depending on your needs, you can generate audio-only or a complete
        avatar video with lip-synced speech.
      </p>

      <InfoList>
        <InfoItem
          icon={<Mic className="w-5 h-5" />}
          title="Voice-Only"
          description="Generate a high-fidelity voiceover from your script using your cloned ElevenLabs voice. Perfect for podcasts, narration, and audio layers."
        />
        <InfoItem
          icon={<Video className="w-5 h-5" />}
          title="Voice + Avatar"
          description="Pair your cloned voice with a HeyGen AI avatar for a fully produced talking-head video — no camera required."
        />
      </InfoList>

      <h2>Getting started</h2>

      <Steps>
        <Step number={1} title="Add your ElevenLabs credentials">
          <p>
            Head to <strong>Settings &gt; API Credentials</strong> and enter
            your ElevenLabs API key and voice ID. Aurrra uses these to call
            ElevenLabs on your behalf.
          </p>
        </Step>
        <Step number={2} title="Optionally add HeyGen credentials">
          <p>
            If you want avatar videos, add your HeyGen API key and avatar ID
            in the same settings panel. Skip this step if you only need
            voiceovers.
          </p>
        </Step>
        <Step number={3} title="Enter your script">
          <p>
            Paste or type the text you want spoken. You can pull directly from
            a script you've already written in the Writing workspace.
          </p>
        </Step>
        <Step number={4} title="Generate" last>
          <p>
            Choose <strong>Voice Only</strong> or{" "}
            <strong>Voice + Avatar</strong>, then hit Generate. Your file will
            be ready to preview and download in moments.
          </p>
        </Step>
      </Steps>

      <ImageZone
        alt="Avatar preview showing a generated AI presenter"
        caption="Preview your avatar video before downloading."
        aspect="video"
      />

      <Callout variant="info" title="Unlimited usage — bring your own keys">
        <p>
          Voice & Avatar generation doesn't consume Aurrra credits. Usage is
          unlimited, but you'll need your own ElevenLabs and HeyGen API keys.
          Any costs are billed directly by those providers.
        </p>
      </Callout>

      <Callout variant="tip" title="Where to find your credentials">
        <p>
          Go to <strong>Settings &gt; API Credentials</strong> to add, update,
          or remove your third-party API keys at any time.
        </p>
      </Callout>

      <PageNav
        prev={{
          sectionId: "writing",
          sectionTitle: "Writing",
          slug: "scripts",
          title: "Scripts",
        }}
        next={{
          sectionId: "production",
          sectionTitle: "Production",
          slug: "thumbnails",
          title: "Thumbnails",
        }}
      />
    </div>
  );
}

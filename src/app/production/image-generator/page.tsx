import {
  Callout,
  CreditTable,
  ImageZone,
  Steps,
  Step,
} from "@/components/DocComponents";
import { PageNav } from "@/components/PageNav";

export default function ImageGeneratorPage() {
  return (
    <div className="doc-prose">
        <h1>Image Generator</h1>
      <p className="lead">
        Generate stunning AI images from a text prompt — choose between
        Standard and Pro quality depending on how polished you need the
        result.
      </p>

      <ImageZone
        alt="Image generator interface with prompt input and quality selector"
        caption="Type a prompt, pick your quality tier, and generate."
        aspect="video"
      />

      <h2>Quality tiers</h2>
      <p>
        Aurrra offers two quality levels so you can balance speed and credits
        against output fidelity.
      </p>

      <CreditTable
        rows={[
          {
            action: "Standard quality",
            cost: "5",
            note: "Great for concepts, social posts, and quick iterations",
          },
          {
            action: "Pro quality",
            cost: "10",
            note: "Higher detail and resolution for hero images and thumbnails",
          },
        ]}
      />

      <h2>How to generate</h2>

      <Steps>
        <Step number={1} title="Enter your prompt">
          <p>
            Describe the image you want. Be as specific as you like — style,
            subject, lighting, mood, color palette — the more detail, the
            better the result.
          </p>
        </Step>
        <Step number={2} title="Choose a quality tier">
          <p>
            Select <strong>Standard</strong> for fast, cost-effective
            generations or <strong>Pro</strong> for maximum detail and
            resolution.
          </p>
        </Step>
        <Step number={3} title="Generate" last>
          <p>
            Hit Generate and your image will appear in seconds. Download it
            directly or send it to another Aurrra tool like the Video Editor.
          </p>
        </Step>
      </Steps>

      <ImageZone
        alt="Generated image examples at Standard and Pro quality"
        caption="Standard (left) vs Pro (right) — both are great, Pro adds extra detail."
        aspect="wide"
      />

      <Callout variant="tip" title="Iterate quickly at Standard">
        <p>
          Use Standard quality to explore ideas and nail down your prompt,
          then switch to Pro for the final version. This keeps your credit
          spend efficient.
        </p>
      </Callout>

      <PageNav
        prev={{
          sectionId: "production",
          sectionTitle: "Production",
          slug: "video-editor",
          title: "Video Editor",
        }}
        next={{
          sectionId: "production",
          sectionTitle: "Production",
          slug: "video-generator",
          title: "Video Generator",
        }}
      />
    </div>
  );
}

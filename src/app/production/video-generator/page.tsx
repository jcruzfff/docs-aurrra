import {
  Callout,
  CreditTable,
  ImageZone,
  Steps,
  Step,
} from "@/components/DocComponents";
import { PageNav } from "@/components/PageNav";

export default function VideoGeneratorPage() {
  return (
    <div className="doc-prose">
        <h1>Video Generator</h1>
      <p className="lead">
        Generate AI video clips from a text prompt. Four quality tiers let you
        dial in the perfect balance between fidelity and credit cost.
      </p>

      <ImageZone
        alt="Video generator interface with prompt input and quality tier selector"
        caption="Describe your clip, pick a tier, and generate."
        aspect="video"
      />

      <h2>Quality tiers</h2>
      <p>
        Each tier produces a 5-second clip. Higher tiers deliver more
        realistic motion, lighting, and detail — but use more credits per
        generation.
      </p>

      <CreditTable
        rows={[
          {
            action: "Standard",
            cost: "25",
            note: "Fast drafts and storyboard-style clips",
          },
          {
            action: "Pro",
            cost: "50",
            note: "Sharper detail, smoother motion",
          },
          {
            action: "Premium",
            cost: "125",
            note: "Near-cinematic quality for hero content",
          },
          {
            action: "Ultra",
            cost: "250",
            note: "Maximum fidelity — best for final deliverables",
          },
        ]}
      />

      <h2>How to generate</h2>

      <Steps>
        <Step number={1} title="Enter your prompt">
          <p>
            Describe the scene — action, camera angle, lighting, style. The
            more vivid the description, the closer the output will match your
            vision.
          </p>
        </Step>
        <Step number={2} title="Choose a quality tier">
          <p>
            Start with Standard to prototype, then move up to Pro, Premium, or
            Ultra when you're ready for the final cut.
          </p>
        </Step>
        <Step number={3} title="Generate" last>
          <p>
            Hit Generate and your 5-second clip will render. Preview it
            in-app, download it, or send it straight to the Video Editor.
          </p>
        </Step>
      </Steps>

      <ImageZone
        alt="Side-by-side comparison of Standard, Pro, Premium, and Ultra quality clips"
        caption="Quality comparison across all four tiers."
        aspect="wide"
      />

      <Callout variant="warning" title="Higher tiers use significantly more credits">
        <p>
          An Ultra generation costs 10x more than Standard. Use lower tiers to
          experiment with prompts, then upgrade to a higher tier for your final
          clip.
        </p>
      </Callout>

      <Callout variant="tip" title="Prototype first, polish later">
        <p>
          Generate a few Standard clips to lock in the right prompt, then run
          a single Ultra generation for the finished product. You'll save
          credits and get a better result.
        </p>
      </Callout>

      <PageNav
        prev={{
          sectionId: "production",
          sectionTitle: "Production",
          slug: "image-generator",
          title: "Image Generator",
        }}
        next={{
          sectionId: "settings",
          sectionTitle: "Settings & Account",
          slug: "profile",
          title: "Profile Settings",
        }}
      />
    </div>
  );
}

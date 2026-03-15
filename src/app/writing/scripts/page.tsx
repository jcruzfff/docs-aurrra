import {
  Callout,
  CreditTable,
  ImageZone,
  Steps,
  Step,
  CardGrid,
  FeatureCard,
} from "@/components/DocComponents";
import { PageNav } from "@/components/PageNav";
import { FileText, Video, Clapperboard } from "lucide-react";

export default function ScriptsPage() {
  return (
    <>
      <div className="doc-prose">
        <h1>Scripts</h1>
      <p className="lead">
        Generate research reports, YouTube scripts, and short-form scripts — all
        written in your brand voice by Aurrra's AI. Each generation costs 5
        credits; editing is always unlimited.
      </p>

      <ImageZone
        alt="The Aurrra script editor with a generated YouTube script"
        caption="Write, refine, and polish scripts in a distraction-free editor."
        aspect="video"
      />

      <h2>Three script types</h2>
      <p>
        Every script is generated using AI trained on the brand voice you set
        up during onboarding. Pick the format that fits your content goal.
      </p>

      <CardGrid>
        <FeatureCard
          icon={<FileText className="w-5 h-5" />}
          title="Research Report"
          description="A structured deep-dive into any topic — perfect for building authority or repurposing into multiple pieces of content."
        />
        <FeatureCard
          icon={<Video className="w-5 h-5" />}
          title="YouTube Script"
          description="A full-length video script with hook, body, and CTA — optimized for retention and watch time."
        />
        <FeatureCard
          icon={<Clapperboard className="w-5 h-5" />}
          title="Short-form Script"
          description="A punchy script for Reels, TikTok, or Shorts — designed to grab attention in under 60 seconds."
        />
      </CardGrid>

      <h2>How to generate a script</h2>

      <Steps>
        <Step number={1} title="Choose your script type">
          <p>
            Open the Scripts page and select Research Report, YouTube Script, or
            Short-form Script. Each type produces a different structure and
            length.
          </p>
        </Step>
        <Step number={2} title="Provide a topic or reference">
          <p>
            Enter a topic, paste a URL, or reference a video you've already
            analyzed. The more context you give, the more tailored the output.
          </p>
        </Step>
        <Step number={3} title="Generate (5 credits)">
          <p>
            Hit <strong>Generate</strong> and Aurrra's AI will draft a complete
            script in your brand voice. This step costs 5 credits regardless of
            script type.
          </p>
        </Step>
        <Step number={4} title="Edit and refine" last>
          <p>
            Once generated, the script opens in the editor where you can rewrite
            sections, rearrange structure, and polish the final draft. All
            editing is unlimited — no extra credits.
          </p>
        </Step>
      </Steps>

      <h2>Credit costs</h2>
      <p>
        Script generation is the only action that uses credits. Everything else
        — editing, saving, duplicating — is free.
      </p>

      <CreditTable
        rows={[
          {
            action: "Generate Research Report",
            cost: "5 credits",
            note: "One full report per generation",
          },
          {
            action: "Generate YouTube Script",
            cost: "5 credits",
            note: "Full-length script with hook, body & CTA",
          },
          {
            action: "Generate Short-form Script",
            cost: "5 credits",
            note: "Optimized for Reels, TikTok & Shorts",
          },
          {
            action: "Edit any script",
            cost: "Free",
            note: "Unlimited edits after generation",
          },
        ]}
      />

      <h2>Your brand voice</h2>
      <p>
        Scripts are generated using the brand voice profile you created during
        onboarding. This includes your tone, vocabulary preferences, audience,
        and content style. If your voice feels off, you can update it anytime
        from <strong>Settings → Brand Voice</strong>.
      </p>

      <Callout variant="tip" title="Content classification">
        <p>
          After generating a script, Aurrra automatically classifies it by
          topic, format, and tone. This makes it easy to search and organize
          your scripts as your library grows.
        </p>
      </Callout>

      </div>
      <PageNav
        prev={{
          sectionId: "writing",
          sectionTitle: "Writing",
          slug: "vault",
          title: "The Vault",
        }}
        next={{
          sectionId: "production",
          sectionTitle: "Production",
          slug: "voice-avatar",
          title: "Voice & Avatar",
        }}
      />
    </>
  );
}

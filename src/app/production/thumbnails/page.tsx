import {
  Callout,
  CreditTable,
  ImageZone,
  Steps,
  Step,
} from "@/components/DocComponents";
import { PageNav } from "@/components/PageNav";

export default function ThumbnailsPage() {
  return (
    <div className="doc-prose">
        <h1>Thumbnails</h1>
      <p className="lead">
        Generate eye-catching YouTube thumbnails with AI — from a video URL or
        your own reference photos — and iterate until you land on the perfect
        click-magnet.
      </p>

      <ImageZone
        alt="Thumbnail generation workspace with prompt input and generated variations"
        caption="Enter a prompt, choose your input method, and generate thumbnail variations."
        aspect="video"
      />

      <h2>Two input methods</h2>
      <p>
        You can kick off a generation in whichever way feels most natural:
      </p>
      <ul>
        <li>
          <strong>YouTube URL</strong> — Paste a video link and Aurrra will
          analyze the content to produce relevant thumbnail concepts.
        </li>
        <li>
          <strong>Reference photos</strong> — Upload one or more images to
          guide the style, composition, or subject of your thumbnails.
        </li>
      </ul>

      <h2>How it works</h2>

      <Steps>
        <Step number={1} title="Choose your input method">
          <p>
            Paste a YouTube URL or upload reference photos. You can combine
            both for even more targeted results.
          </p>
        </Step>
        <Step number={2} title="Add a prompt or style direction">
          <p>
            Describe the look you're going for — bold text overlays, cinematic
            lighting, specific color palettes — whatever fits your brand.
          </p>
        </Step>
        <Step number={3} title="Generate (5 credits)">
          <p>
            Hit Generate and Aurrra will produce a set of thumbnail
            variations. Each generation costs 5 credits.
          </p>
        </Step>
        <Step number={4} title="Download or iterate" last>
          <p>
            Love one? Download it instantly. Want to explore further? Tweak
            your prompt and generate again.
          </p>
        </Step>
      </Steps>

      <h2>Credit cost</h2>

      <CreditTable
        rows={[
          {
            action: "Thumbnail generation",
            cost: "5",
            note: "Produces multiple variations per generation",
          },
        ]}
      />

      <Callout variant="tip" title="Get better results">
        <p>
          The more specific your prompt, the better your thumbnails. Try
          including details like facial expressions, text placement, and
          background style.
        </p>
      </Callout>

      <PageNav
        prev={{
          sectionId: "production",
          sectionTitle: "Production",
          slug: "voice-avatar",
          title: "Voice & Avatar",
        }}
        next={{
          sectionId: "production",
          sectionTitle: "Production",
          slug: "video-editor",
          title: "Video Editor",
        }}
      />
    </div>
  );
}

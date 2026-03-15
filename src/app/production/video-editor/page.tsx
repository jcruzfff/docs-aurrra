import {
  Callout,
  CreditTable,
  ImageZone,
  Steps,
  Step,
} from "@/components/DocComponents";
import { PageNav } from "@/components/PageNav";

export default function VideoEditorPage() {
  return (
    <div className="doc-prose">
      <h1>Video Editor</h1>
      <p className="lead">
        A full timeline-based video editor built right into Aurrra — arrange
        clips, add captions and transitions, tweak your canvas, and export
        production-ready video.
      </p>

      <ImageZone
        alt="Video editor interface showing the timeline, canvas, and clip library"
        caption="The editor workspace — timeline at the bottom, canvas in the center, clips on the side."
        aspect="video"
      />

      <h2>Key features</h2>
      <ul>
        <li>
          <strong>Clip management</strong> — Upload your own footage or import
          clips generated elsewhere in Aurrra.
        </li>
        <li>
          <strong>Captions & subtitles</strong> — Add styled text overlays
          that snap to your timeline.
        </li>
        <li>
          <strong>Transitions</strong> — Smooth cuts, fades, and wipes between
          clips.
        </li>
        <li>
          <strong>Canvas editing</strong> — Resize, reposition, and layer
          elements directly on the visual canvas.
        </li>
        <li>
          <strong>Real-time preview</strong> — Instantly preview your edit with
          the built-in player before committing to an export.
        </li>
      </ul>

      <h2>Step by step</h2>

      <Steps>
        <Step number={1} title="Upload or import clips">
          <p>
            Drag files into the editor or pull in clips you've already
            generated with the Video Generator or Voice & Avatar tools.
          </p>
        </Step>
        <Step number={2} title="Arrange on the timeline">
          <p>
            Drag clips along the timeline to set order and timing. Trim
            handles let you fine-tune in and out points.
          </p>
        </Step>
        <Step number={3} title="Add captions and transitions">
          <p>
            Drop text layers onto the timeline for captions, then pick a
            transition style for each cut.
          </p>
        </Step>
        <Step number={4} title="Preview your edit">
          <p>
            Hit the play button to see a real-time preview of your edit. Make
            adjustments until everything feels right.
          </p>
        </Step>
        <Step number={5} title="Export (10 credits)" last>
          <p>
            When you're happy, export your final video. The job enters a
            render queue — you can track progress from the dashboard.
          </p>
        </Step>
      </Steps>

      <ImageZone
        alt="Timeline view with clips, captions, and transition markers"
        caption="A closer look at the timeline — clips, caption layers, and transitions."
        aspect="wide"
      />

      <ImageZone
        alt="Canvas editing mode with layer controls"
        caption="Canvas mode lets you position and resize elements visually."
        aspect="video"
      />

      <h2>Credit cost</h2>

      <CreditTable
        rows={[
          {
            action: "Video export",
            cost: "10",
            note: "Editing and previewing are free",
          },
        ]}
      />

      <Callout variant="info" title="Editing is free — only exports cost credits">
        <p>
          You can arrange, preview, and tweak your project as many times as
          you like. Credits are only deducted when you export the final video.
        </p>
      </Callout>

      <PageNav
        prev={{
          sectionId: "production",
          sectionTitle: "Production",
          slug: "thumbnails",
          title: "Thumbnails",
        }}
        next={{
          sectionId: "production",
          sectionTitle: "Production",
          slug: "image-generator",
          title: "Image Generator",
        }}
      />
    </div>
  );
}

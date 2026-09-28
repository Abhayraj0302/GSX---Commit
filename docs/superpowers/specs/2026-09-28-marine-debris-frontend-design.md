# Marine Debris Frontend Design

## Goal

Create a standalone, polished frontend for the SIH26057 Marine Debris & Anomaly Detection project in `frontend/`. It should introduce the project and let visitors explore a clearly labeled, browser-only sample dashboard. The existing GSX site remains untouched.

## Scope

This is a frontend-only deliverable. It does not implement or connect to a detector, API, database, authentication, or navigation service. Use local sample content for the dashboard, and label it as sample/demo data wherever results are shown. An image selected by a visitor may be previewed locally in the browser; do not upload it or imply that it has been analyzed.

## Page Structure

Build a single responsive landing page with these sections:

1. **Navigation and hero** — project identity, short accurate summary, links to page sections, and a primary action that opens the sample workspace. Use the provided `TopoField` WebGL component as a subtle full-bleed hero background.
2. **Sample workspace** — a genuine frontend demonstration using an included illustrative sonar image and clearly marked sample detections. Show the image with bounding-box overlays, selected detection details, class, confidence, provenance, and location status. Keep the sample detections visibly separate from any user-selected image preview.
3. **Workflow** — concise explanation of Detect, Verify, Explain, Locate, and Prioritize, without claiming the frontend itself performs detection.
4. **Four supported classes** — Pipe, Shipwreck, Mine-like Contact, and Crab Pot. Treat Ghost Net only as an experimental extension and state that synthetic-only results do not establish field accuracy.
5. **Integrity and limitations** — show Real / Simulated / Unavailable location states clearly; make clear that the sample experience is not expert interpretation or physical confirmation.
6. **Footer** — section navigation, project identity, and concise privacy/terms links with accurate frontend-only wording.

## Visual Direction

- Use `#06131C` as the very dark navy background and slightly lighter navy cards. Use cyan/teal for primary actions, orange/red for detection warnings, green for safe/verified states, and white with muted blue-grey for text.
- Use the provided slowly moving topographic field at low visual intensity, with a solid readability overlay. Respect `prefers-reduced-motion` and provide a static fallback if WebGL is unavailable.
- Prefer clear typography, deliberate spacing, simple square-edged panels, and real product UI over decorative cards. Avoid harsh gradients, rainbow color, generic card grids, glass effects, heavy shadows, emoji, ornamental icon packs, fake testimonials, pricing tiers, decorative orbs/dot grids, terminal mockups, and gratuitous hover or arrow animations.
- Ensure the navigation, workspace, detection list, buttons, and footer reflow cleanly on small screens and remain usable by keyboard.

## Frontend Interactions

- Navigation links scroll to real sections; the hero action scrolls to the sample workspace.
- Visitors can choose or drag in an image for local preview and clear it. The UI must label this as a local preview and must not attach sample detections to it.
- The sample workspace has selectable sample detections and in-memory Confirm / Reject / Flag controls with visible state changes.
- JSON and CSV export buttons download the displayed sample records from the browser and identify the export as sample data.
- Buttons and links have clear focus, disabled, and active states. No control should imply a backend action.

## Technical Shape

- Keep this app isolated under `frontend/`, with its own Vite entry, React/TypeScript source, and styles.
- Put page sections and reusable UI in focused components. Integrate the supplied `TopoField` code as a local component under `frontend/src/components/ui/`; adapt only what is required for the standalone app and avoid importing unrelated GSX site code.
- Use existing installed dependencies where practical. Do not add a UI framework or icon package solely for this page.
- Keep demo records in a local static data module so the UI can later be connected to a real service without presenting mock data as real results.

## Acceptance Criteria

- The app can be started from `frontend/` with its documented Vite command.
- The landing page and sample workspace render at desktop and mobile widths.
- The requested topographic background is visible but remains subordinate to text and controls; reduced-motion and no-WebGL cases remain usable.
- Local image selection only previews the selected file; it does not display unrelated detections as if they came from that file.
- Sample selection, review status, JSON export, and CSV export work entirely in the browser and are clearly marked as sample data.
- No backend, model inference, API call, authentication, or real location claim is introduced.

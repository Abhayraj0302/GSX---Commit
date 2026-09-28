# Marine Debris Frontend Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a standalone, responsive, frontend-only Marine Debris & Anomaly Detection landing page and sample dashboard under `frontend/`.

**Architecture:** Create a small React/TypeScript/Vite app isolated from the existing GSX site. The landing page composes focused section components, local illustrative sample data, and the supplied TopoField background. All demo interactions stay in browser memory; selected files are preview-only and separate from sample detections.

**Tech Stack:** React 18, TypeScript, Vite 6, CSS, WebGL TopoField component, browser File/Blob APIs.

**Spec:** `docs/superpowers/specs/2026-09-28-marine-debris-frontend-design.md`

## Global Constraints

- Keep this app isolated under `frontend/`, with its own Vite entry, React/TypeScript source, and styles.
- Use `#06131C` as the very dark navy background with slightly lighter navy cards, cyan/teal primary accents, orange/red detection warnings, green safe/verified states, and white plus muted blue-grey text.
- Keep sample detections separate from user-selected image previews; label every sample/demo result clearly.
- Do not add a detector, API, database, authentication, navigation service, UI framework, or icon package.
- Do not imply that user-selected files are analyzed or uploaded.
- Respect `prefers-reduced-motion`; keep a usable static background if WebGL is unavailable.
- Ensure the page and controls are keyboard-usable and responsive at small widths.
- Ghost Net stays experimental; synthetic-only results do not establish field accuracy.

## Review Focus

- Non-image or unreadable selected files: show a clear message and keep the sample dashboard separate.
- Replacing or clearing a selected image: revoke prior object URLs and leave sample data untouched.
- WebGL unavailable or reduced motion enabled: show a static hero background and keep content readable.
- Narrow viewport and keyboard-only interaction: all navigation and workspace controls remain reachable and legible.
- Sample export values containing commas, quotes, or newlines: JSON remains valid and CSV fields are escaped.

---

### Task 1: Scaffold the isolated frontend app

**Files:**
- Create: `frontend/package.json`
- Create: `frontend/index.html`
- Create: `frontend/vite.config.ts`
- Create: `frontend/tsconfig.json`
- Create: `frontend/src/main.tsx`
- Create: `frontend/src/App.tsx`
- Create: `frontend/src/styles.css`

**Interfaces:**
- Produces: `src/main.tsx` mounts `App` and imports the global stylesheet; `App` owns the single-page section composition.

- [ ] Add `dev`, `build`, and `preview` scripts and declare React `18.3.1`, React DOM `18.3.1`, TypeScript `^7.0.2`, Vite `^6.0.0`, and `@vitejs/plugin-react` `^4.3.4`, matching the repository versions.
- [ ] Configure Vite to serve and build from `frontend/` without changing the root GSX app configuration.
- [ ] Add the HTML mount point, React entry, empty page shell, and baseline reset/color/font CSS.
- [ ] Run `npm run build` from `frontend/`; resolve configuration errors before adding page sections.

### Task 2: Integrate the topographic background

**Files:**
- Create: `frontend/src/components/ui/TopoField.tsx`
- Modify: `frontend/src/App.tsx`
- Modify: `frontend/src/styles.css`

**Interfaces:**
- Produces: `TopoField({ className }: { className?: string })` detects reduced-motion preference and WebGL support internally, then renders the animated field or a static fallback.

- [ ] Adapt the supplied TopoField source into a local React/TypeScript component; keep its isolated shader document self-contained and remove unrelated template content.
- [ ] Detect reduced-motion preference and WebGL availability; use a static CSS fallback when motion is reduced or WebGL is unavailable.
- [ ] Mount the field behind hero content at restrained opacity with a solid readability overlay.
- [ ] Manually inspect the hero with motion enabled, reduced motion, and static fallback states.

### Task 3: Build the landing shell and hero

**Files:**
- Create: `frontend/src/components/SiteNav.tsx`
- Create: `frontend/src/components/Hero.tsx`
- Modify: `frontend/src/App.tsx`
- Modify: `frontend/src/styles.css`

**Interfaces:**
- Consumes: `TopoField` from Task 2.
- Produces: navigation anchors for `#workspace`, `#workflow`, `#classes`, and `#limitations`; hero CTA targets `#workspace`.

- [ ] Implement project branding, accessible skip link, section navigation, and a compact mobile navigation treatment.
- [ ] Implement hero headline and concise positioning that describes a sonar-image decision-support prototype without claiming autonomous cleanup or real-time performance.
- [ ] Wire all navigation and CTA links to sections that exist in the page.
- [ ] Manually inspect keyboard focus and narrow-width navigation.

### Task 4: Create the sample workspace and local preview

**Files:**
- Create: `frontend/src/data/sampleDetections.ts`
- Create: `frontend/public/sample-sonar.svg`
- Create: `frontend/src/components/SampleWorkspace.tsx`
- Create: `frontend/src/components/SonarViewer.tsx`
- Create: `frontend/src/components/DetectionReview.tsx`
- Create: `frontend/src/lib/exportDetections.ts`
- Modify: `frontend/src/App.tsx`
- Modify: `frontend/src/styles.css`

**Interfaces:**
- `SampleDetection`: `{ id: string; className: 'Pipe' | 'Shipwreck' | 'Mine-like Contact' | 'Crab Pot'; confidence: number; provenance: string; location: { type: 'Real' | 'Simulated' | 'Unavailable'; label: string }; box: { x: number; y: number; width: number; height: number } }` with normalized 0–100 coordinates.
- `exportDetections(format: 'json' | 'csv', rows: SampleDetection[]): void` downloads a file explicitly named and labeled as sample data.

- [ ] Add 3–4 illustrative, clearly labeled sample records and an original SVG sonar-style illustration with matching bounding boxes.
- [ ] Build the sample viewer with selectable detections, class/confidence/provenance/location details, and visible Confirm / Reject / Flag state changes held in React state.
- [ ] Build a separate local image picker/drop target; accept readable image files, preview via an object URL, support clear/replace, report invalid files, and revoke object URLs during replacement and unmount.
- [ ] Keep uploaded-image preview visually distinct from the sample-results viewer; never place sample boxes over the selected image.
- [ ] Implement JSON and CSV browser downloads for displayed sample records, escaping CSV values correctly.
- [ ] Manually inspect selection, review states, invalid/unreadable-file feedback, clear/replace behavior, and both downloads; verify CSV quoting with a displayed field containing punctuation.

### Task 5: Add workflow, classes, limitations, and footer

**Files:**
- Create: `frontend/src/components/Workflow.tsx`
- Create: `frontend/src/components/ClassOverview.tsx`
- Create: `frontend/src/components/Limitations.tsx`
- Create: `frontend/src/components/SiteFooter.tsx`
- Modify: `frontend/src/App.tsx`
- Modify: `frontend/src/styles.css`

**Interfaces:**
- Produces: sections with IDs `workflow`, `classes`, and `limitations`, matching Task 3 navigation.

- [ ] Present Detect, Verify, Explain, Locate, and Prioritize as a short, honest workflow.
- [ ] Describe the four supported classes and a visually separate experimental Ghost Net note.
- [ ] Explain Real / Simulated / Unavailable location states and state that the demo is not expert interpretation or physical confirmation.
- [ ] Add accurate frontend-only privacy/terms copy and footer navigation; avoid claims about services that do not exist.
- [ ] Manually inspect all section anchors and responsive reading order.

### Task 6: Final app verification

**Files:**
- Modify as needed: `frontend/src/**`
- Modify as needed: `frontend/public/**`

- [ ] Run `npm run build` from `frontend/` and resolve build errors.
- [ ] Start `npm run dev` from `frontend/` and visually inspect desktop and mobile layouts in the browser.
- [ ] Check keyboard access, focus visibility, reduced-motion behavior, WebGL fallback, local preview separation, review controls, and sample exports against the spec.
- [ ] Confirm the root GSX files remain unchanged by this feature work.

# Changelog

All notable changes to the Tiger Team framework are documented here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/); versions use [Semantic Versioning](https://semver.org/).

---

## [2.0.0] — 2026-06-06

Renamed **project-squad → tiger-team** and converted from a copy-in command toolkit to a Claude Code plugin (**bs-tiger-team**).

### Changed (breaking)

- **Distribution is now a plugin.** The six commands became eight skills under `skills/` (`init`, `sprint`, `workshop`, `spike`, `import-personas`, `status`, `context`, `review-dissent`). Nothing is copied into host repos any more — personas, process, templates, and site assets travel with the plugin.
- **`init` merges `seed-project-context` + `init-project-squad`** and now: writes the project context to `research/PROJECT_CONTEXT.md` (legacy `_meta/` still read), detects an existing host decision log and writes `research/DECISIONS.md` in a provenance-only form, generates `research/README.md` lane governance, emits `note:` frontmatter on every living document, registers the lane in the host docs index and CLAUDE.md (offered, not silent), and no longer seeds empty `sprints/`/`workshops/`/`spikes/` directories.
- **`.squad/` → `team/`** — `project-squad.md` renamed `personas.md`; terminology updated from Project Squad to Tiger Team throughout.
- **Site assets ship with the plugin** (`assets/site/`) — skills copy them into the host on first use, replacing the "run `npx @by-sixteen/project-squad site`" pre-flight.
- **npm distribution retired** — `bin/cli.js`, `package.json`, `templates/`, and `DEPLOY.md` moved to `_archive/`.

### Added

- Per-skill evals (`skills/<name>/evals/evals.json`) and an `init` conformance benchmark (8/8 vs the v1 commands' 2/8 on a docs-first host fixture).
- Decision-graduation rule: where the host keeps its own decision log, team decisions graduate there and the research copy records provenance only.

### Unchanged

- The nine personas, their signature questions, and the mandatory-dissent rule.
- Output formats: `summary.json` schema, sprint/workshop/spike file templates, the First 20 Lines rule.

---

## [1.2.0] — 2026-03-05

### Added

- **Mode D — Revisit** input mode for `/create-sprint`: re-run a sprint on a topic with prior context, pre-populating Long-Term Goal, Target User, and Constraints from the existing brief. Sets `depends-on` automatically.
- **Context Detection** in Mode A Guided Wizard: checks `_meta/PROJECT_CONTEXT.md` and `research/sprint-status.md` before asking Questions 1, 4, and 5. Presents pre-filled values if prior context exists.
- **Specialist surfacing** at team selection in all three commands (`/create-sprint`, `/create-workshop`, `/create-spike`). Prompts users to check `.squad/specialists.md` for available specialist roles.
- **Backlog Divergence handling** in `/create-sprint` pre-flight: when the user declines a backlog candidate, asks whether to keep or remove it from the backlog.
- **Living Document Update Convention** in `/create-sprint` Phase 4 and `/create-workshop` Step 6: always append to existing tables, never add new section headers per sprint.
- **Flexible sketch word limit** in `/create-sprint` Phase 2: ~150 words for new topics, up to ~250 words for revisit sprints or when referencing prior evidence.
- **`feeds-into` Backfill** in `/create-sprint` Phase 1: after creating a brief with `depends-on`, automatically updates the referenced sprint's `feeds-into` field.
- **Site Asset Pre-Flight** in all three commands: verifies `site/styles.css` and `site/layout.js` exist before generating HTML. Prevents Claude from improvising a design system.
- **Quinn Adler — Sprint Facilitator** specialist in `.squad/specialists.md`. Signature question: "Are we following the process, or are we rationalising a shortcut?"
- **Backfilling Pre-Framework Sprints** guidance in `DEPLOY.md`.
- **Transition Check** in `/create-spike`: verifies question addressed, evidence supports confidence, and scope held before synthesising.
- **Dissent handling** in `/create-spike`: explicit instruction to record Elias Vance's dissent in `research/dissent-register.md` if overruled.
- **Living document updates** in `/create-spike` verification: now updates `research/sprint-status.md` and `research/sprint-backlog.md` on completion.
- **Elias Vance verification check** in `/create-spike` checklist: mandatory for all spike types.
- Backstory format explanation and Nara Shin's strategic importance documented in `README.md`.

### Changed

- `CLAUDE.md` version comment updated from `0.9.0` to `1.2.0`.
- `DEPLOY.md` version references updated to `1.2.0`.
- `init-project-squad.md` version string updated to `1.2.0`; persona list now includes all nine (was missing Nara Shin and Ines Alvarez).
- `README.md` Sprint Input Modes table expanded from three to four modes.
- `layout.js` header comment updated to include `"workshop"` in `data-layout` values and `data-workshop` attribute.
- `project-context-template.md` persona count corrected from "seven" to "nine"; Nara Shin and Ines Alvarez added to mapping table.
- `examples/sprints/sprint-000-foundation/brief.md` persona list and table updated to include all nine personas.
- `/create-workshop` Step 6 now includes `research/PRINCIPLES.md` in the living document update list.

### Fixed

- `bin/cli.js` `init()` now creates `research/workshops/` directory (was missing — workshops were non-functional via CLI).
- `bin/cli.js` `sync()` and `init()` now sync the `<!-- version: X.X.X -->` comment in the project's `CLAUDE.md` to match the current package version.

---

## [1.1.0] — 2026-03-04

### Added

- **Nara Shin** and **Ines Alvarez** fully wired into all commands and templates — persona selection tables, team guides, and phase responsibilities updated throughout.
- `create-workshop` — Transition Check before the Decide step: catches reframed questions and incomplete perspectives before they cascade.
- `create-workshop` — Mandatory Elias Vance note with instruction to reference client personas from `research/PERSONAS.md` by name.
- `create-workshop` — Nara Shin and Ines Alvarez added to persona selection table (evidence/research and UX/interaction decisions).
- `create-workshop` — Per-persona word count guide (75–100 words) added to Perspectives step.
- `create-workshop` — Output path corrected to `research/workshops/workshop-NNN-[topic]/` (was incorrectly `research/sprints/workshop-NNN-[topic]/`).
- `init-project-squad` — Strict rule: creates exactly six living documents, no additional process guides or methodology files.
- `init-project-squad` — `create-workshop.md` and `import-personas.md` added to the Portable Toolkit copy list.
- `init-project-squad` — Nine-persona references throughout; next steps updated to mention workshops and import-personas.

### Changed

- `templates/` synced to match current source files — all commands and `.squad/` files updated to reflect the above.

---

## [1.0.0] — 2026-03-04

Initial npm package release (`@by-sixteen/project-squad`). No framework changes from 0.9.0. Adds `bin/cli.js` with `init`, `sync`, `version`, and `help` commands for installing the framework via `npx`.

---

## [0.9.0] — 2026-03-04

### Added

- Phase Transition Protocol in `/create-sprint` and `/create-workshop` — silent quality gates between phases that catch scope drift, incomplete outputs, or reframed questions before they cascade.
- **Riley Tanaka — Quality Assurance Specialist** in `.squad/specialists.md`. Signature question: "How will we know this actually worked?" Ensures acceptance criteria are measurable before crossing the validation boundary.
- Acceptance Criteria Quality Check in creative brief phase — applies Riley Tanaka's testability lens even when Riley is not a sprint participant.
- Validation Recommendation section in spike output for medium/low confidence results — defines what evidence would raise confidence and the cheapest test to run.
- `feeds-from` frontmatter in sprint output templates (`sketches.md`, `decision.md`, `synthesis.md`) — makes the phase-to-phase data chain self-documenting.
- Elias Vance now explicitly references client personas from `research/PERSONAS.md` by name during Sketch and Decide phases.

### Changed

- `CLAUDE.md` — Added Key Rule 9: Claude is the facilitator. Added Key Rule 10: init creates exactly six living documents.
- Workshop persona selection table updated to reference Key Rule 4 (Elias mandatory dissent).
- Version numbers reset to 0.x.y (semver pre-release) — the framework is still in active development and not yet committed to backwards compatibility.

---

## [0.8.0] — 2026-03-04

### Added

- **Nara Shin — UX Researcher** (persona #8). The Evidence Hunter. Signature question: "What does the evidence say?" Leads evidence gathering in Map phase, validates solutions against external research.
- **Ines Alvarez — UX Designer** (persona #9). The Interaction Architect. Signature question: "Where will users get stuck?" Leads interaction design in Sketch phase, evaluates usability and task completion.
- Functional Spike type added to Team Selection Guide (Ines, Lena, Kira).
- Research Checkpoint (Question 7) added to `/create-sprint` Map phase — Dr. Aris Thorne asks for evidence before committing to a pattern.

### Changed

- `.squad/project-squad.md` — Expanded from 7 to 9 core personas.
- Team Selection Guide updated: Nara included in research-heavy sprints and Research Spikes. Ines included in UX/experience, Brand, and Design Spikes.
- All framework files updated to reference nine personas (previously seven).

### Breaking

- **Persona count changed from 7 to 9.** Projects using the framework should update their `CLAUDE.md` and any hardcoded persona references. Full Sprint teams should now include all 9 personas.

---

## [0.7.0] — 2026-03-02

### Added

- `examples/spikes/spike-000-example/output.md` — Complete example of a finished spike output, demonstrating the Answer-First structure, evidence tables, persona perspectives, and raw research appendix. Previously only `brief.md` existed.
- `examples/spikes/spike-000-example/summary.json` — Machine-readable spike summary example, matching the format produced by `/create-spike`.
- `CHANGELOG.md` — This file. Enables projects to track which version of the framework they are running.
- `.squad/specialists.md` — Optional specialist roles file for teams that need domain-specific expertise beyond the core personas. Additive — does not modify the portable constant.
- `examples/sprint-retrospective-template.md` — Lightweight retrospective template for use at the end of a Full Design Sprint.
- `examples/sprint-backlog-template.md` — Lightweight backlog for managing sprint and spike candidates across a project.

### Changed

- `DEPLOY.md` — Added a `CLAUDE.md` Merge Guide section explaining how to combine Project Squad rules with a project's own technical context.
- `DEPLOY.md` — Added version tracking guidance.
- `.claude/commands/init-project-squad.md` — Pre-flight check now reads `_meta/PROJECT_CONTEXT.md` if it exists, using its content to pre-populate living documents automatically.
- `.claude/commands/init-project-squad.md` — Now generates `research/sprint-backlog.md` as part of the Project Context scaffold.
- `.claude/commands/create-sprint.md` — Pre-flight check now scans `research/dissent-register.md` for entries with a matching Review Trigger before starting a new sprint.
- `.claude/commands/create-sprint.md` — Pre-flight check now reads `research/sprint-backlog.md` and offers to pull the next candidate from it.
- `.claude/commands/create-spike.md` — Pre-flight check now reads `research/sprint-backlog.md` and offers to pull the next spike candidate from it.
- `research/dissent-register.md` template — Added `Review Trigger` column to enable active revisiting of overruled concerns.

---

## [0.1.0] — 2026-02-01

### Added

- Initial release of the Project Squad framework.
- `.squad/project-squad.md` — Nine persona definitions (the portable constant).
- `.claude/commands/init-project-squad.md` — Scaffolding command.
- `.claude/commands/create-sprint.md` — Full Design Sprint command with Knapp's Monday Questions.
- `.claude/commands/create-spike.md` — Technical spike command with Qualification Test and Question Formulation Framework.
- `CLAUDE.md` — AI context file with key rules.
- `DEPLOY.md` — Human-readable deployment guide.
- `README.md` — Project overview and quick start.
- `examples/sprints/sprint-000-foundation/` — Foundation sprint template.
- `examples/spikes/spike-000-example/brief.md` — Spike brief template.
- `examples/decisions/000-adr-template.md` — ADR template.
- `examples/project-context-template.md` — Project context template.

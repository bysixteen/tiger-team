# Living-document templates

Templates for the files `init` scaffolds. Substitute `[PROJECT NAME]` and `[DATE]`; pre-populate real entries from `research/PROJECT_CONTEXT.md` wherever it has answers — placeholders are the fallback, not the default. Add a `note:` frontmatter line to each file (shown on README.md; mirror any host-repo frontmatter conventions found in pre-flight).

## `research/README.md`

```markdown
---
note: "Index and governance for the Tiger Team research lane — sprints, workshops, spikes, and the living documents they maintain."
type: index
---

# Research — Tiger Team lane

Working lane for the [Tiger Team framework](https://github.com/bysixteen/tiger-team) (bs-tiger-team plugin). The framework's personas and process travel with the plugin; this directory holds only what is project-specific.

## Living documents

| File | What it is |
|---|---|
| `PROJECT_CONTEXT.md` | Distilled project context — read by every team skill |
| `PRINCIPLES.md` | Design + technical principles, updated at sprint end |
| `PERSONAS.md` | Client personas — the real users the team designs for |
| `DECISIONS.md` | [Decision log / Provenance log — decisions graduate to [host log]] |
| `sprint-status.md` | One row per run |
| `sprint-backlog.md` | Candidate sprints and spikes |
| `dissent-register.md` | Overruled dissent, each entry with a review trigger |

## Run outputs

Sprints, workshops, and spikes write dated folders under `sprints/`, `workshops/`, and `spikes/` (created on first use). In each folder, **`summary.json` is the canonical machine-readable record** — the markdown files are the human narrative.

## Edit rules

- Living documents refresh in place; run outputs are snapshots and are never rewritten after completion.
- Tables append; no per-run section headers.
- Every decision in a run must land in the decision log the same day it is made.
```

## `research/PRINCIPLES.md`

```markdown
---
note: "Core design and technical principles guiding decisions on this project — living, updated at the end of each sprint."
type: living
---

# [PROJECT NAME] — Design & Technical Principles

**Last updated:** [DATE] — Sprint 000 (Foundation)
**Next review:** Sprint 002

## Design Principles

_Add project-specific design principles here. Examples:_
- _Accessibility is not optional — every feature must meet WCAG 2.1 AA._
- _Mobile-first: design for the smallest screen first._

## Technical Principles

_Add project-specific technical principles here. Examples:_
- _No new dependencies without a spike to evaluate the trade-offs._
- _All new components must be added to the design system._

## What "Good" Looks Like on This Project

_Describe the quality bar. What does a well-executed piece of work look like here?_
```

## `research/PERSONAS.md`

```markdown
---
note: "Client personas — the real users of this product, distinct from the Tiger Team archetypes that think about it."
type: living
---

# [PROJECT NAME] — User Personas

**Last updated:** [DATE] — Sprint 000 (Foundation)
**Next review:** Sprint 002

> **Note:** these are the project's *user* personas — real people who will use the product. They are distinct from the Tiger Team personas (the nine archetypes shipped with the plugin).

---

## Persona 1: [Name]

**Role:** [e.g., New Member, Club Admin, Casual Visitor]
**Goal:** [What are they trying to achieve?]
**Frustrations:** [What gets in their way?]
**Key Quote:** [A sentence that captures their perspective.]

---

_Add more personas as needed, or import research-backed ones with the import-personas skill._
```

## `research/DECISIONS.md`

Default form:

```markdown
---
note: "High-level log of significant decisions made during sprints, workshops, and spikes — follow ADR links for full rationale."
type: living
---

# [PROJECT NAME] — Decision Log

**Last updated:** [DATE] — Sprint 000 (Foundation)

| # | Decision | Sprint / Spike | Date | ADR |
|---|----------|----------------|------|-----|
| — | _No decisions yet._ | — | — | — |
```

Provenance-only form (when the host repo has its own decision log — name it explicitly):

```markdown
---
note: "Provenance log only — decisions graduate to [host decision log path], the project's single source of truth; this table records which run produced each call."
type: living
---

# [PROJECT NAME] — Decision Provenance

**Last updated:** [DATE]

> This project's decision log is **[host decision log path]**. Every team decision
> graduates there as a dated entry. This table records provenance only: which
> sprint, workshop, or spike produced the call.

| Decision (as logged in [host log]) | Run | Date | Run folder |
|---|---|---|---|
| — | — | — | — |
```

## `research/sprint-status.md`

```markdown
---
note: "One row per sprint, workshop, or spike run — the team's run history and current state."
type: living
---

# [PROJECT NAME] — Sprint Status

**Last updated:** [DATE]

| # | Type | Topic | Date | Status | Personas | Folder |
|---|------|-------|------|--------|----------|--------|
| — | — | _No runs yet._ | — | — | — | — |
```

## `research/sprint-backlog.md`

```markdown
---
note: "Lightweight backlog of sprint and spike candidates — the sprint and spike skills offer to pull the next candidate from here."
type: living
---

# [PROJECT NAME] — Sprint & Spike Backlog

**Last updated:** [DATE]

**How to use:** add a row per candidate. `Status`: Candidate → In Progress → Done. `Priority`: High / Medium / Low. `Blocking`: what cannot start until this completes.

| # | Type | Topic / Question | Priority | Status | Blocking |
|---|------|-----------------|----------|--------|----------|
| 000 | Sprint | Foundation — establish shared context, principles, and personas | High | Candidate | — |
```

## `research/dissent-register.md`

```markdown
---
note: "All significant overruled dissent — primarily Elias Vance's — each entry with a review trigger so concerns are revisited, not lost."
type: living
---

# [PROJECT NAME] — Dissent Register

**Last updated:** [DATE] — Sprint 000 (Foundation)

Dissent is a feature. Recording it ensures overruled concerns are not lost. The `Review Trigger` column states the condition under which a view is actively revisited — the sprint skill scans it before every run.

| Sprint / Spike | Topic | Dissenting Persona | Dissenting View | Outcome | Review Trigger |
|---|---|---|---|---|---|
| — | _No dissent recorded yet._ | — | — | — | — |
```

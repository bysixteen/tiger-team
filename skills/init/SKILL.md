---
name: init
description: >-
  Bootstrap the Tiger Team framework in the current project — distil a source
  document (RFP, brief, pitch deck, research report) into a project context
  file and scaffold the research/ living documents the sprint, workshop, and
  spike skills read and write. Use when the user wants to set up the tiger
  team, "init the squad", start using sprints in a new project, or any tiger-team
  skill finds no research/ lane. Run once per project; safe to re-run (adds
  missing files, never overwrites).
---

# init — bootstrap the framework in a project

Set up the Tiger Team lane in a host project: seed the project context, then scaffold the living documents. Nothing else — the personas and process travel with this plugin, so **no commands, persona files, or process docs are copied into the host repo**.

## Pre-flight checks

1. **Existing scaffold?** If `research/` already exists with living documents: "This project already has a Tiger Team lane. Re-running adds any missing files but never overwrites. Proceed?"
2. **Existing project context?** Check `research/PROJECT_CONTEXT.md`, then the legacy location `_meta/PROJECT_CONTEXT.md`. If found, read it silently and use it to pre-populate the living documents.
3. **Host conventions.** Read the host repo's `CLAUDE.md` and root README if present. Note:
   - **An existing decision log** (e.g. `docs/decisions.md`, `DECISIONS.md`, an ADR directory). If one exists, the project log stays the single source of truth: team decisions *graduate* there, and `research/DECISIONS.md` records provenance only (which sprint/workshop produced the call). Configure the header of `research/DECISIONS.md` accordingly.
   - **Frontmatter / index conventions** (e.g. a `note:` one-liner per doc, a docs index). Generated files carry matching frontmatter so they conform from birth.

## Part 1 — Seed the project context (skip if it already exists)

Ask: "Where is your source material? A file path, a URL, pasted content — or I can interview you."

Accepted sources: RFP, project brief, pitch deck, research report — anything that describes the project. Extract:
- Project name · one-line description ("a ___ that helps ___ do ___")
- Primary goal / North Star · problem being solved · explicit out-of-scope
- User personas (roles, goals, frustrations)
- Design and technical principles / constraints · known tech-stack decisions
- Open questions (sprint/spike candidates) · timeline, budget, regulatory constraints

Mark gaps `[TBD — ask in Sprint 000]` rather than inventing answers — the personas work better with explicit unknowns than with guesses.

Map the extraction onto `${CLAUDE_PLUGIN_ROOT}/team/project-context-template.md` and write it to `research/PROJECT_CONTEXT.md`. Summarise for the user: sections fully populated, sections with gaps, and which gaps matter most for Sprint 000.

## Part 2 — Scaffold the living documents

Create `research/` and generate the files below from the templates in [references/templates.md](references/templates.md), pre-populated from the project context. Skip any file that already exists.

| File | Purpose |
|---|---|
| `research/README.md` | The lane's index and governance — what each file is, edit rules, that `summary.json` is canonical for runs |
| `research/PRINCIPLES.md` | Design + technical principles; updated at sprint end |
| `research/PERSONAS.md` | Client personas (real users) — seeded from context, or via the import-personas skill |
| `research/DECISIONS.md` | Decision log — or provenance-only pointer if the host has its own log |
| `research/sprint-status.md` | One row per sprint/workshop/spike run |
| `research/sprint-backlog.md` | Candidate sprints and spikes |
| `research/dissent-register.md` | Overruled dissent, each entry with a review trigger |

**Do not create** `research/sprints/`, `research/workshops/`, or `research/spikes/` — the sprint, workshop, and spike skills create run folders just-in-time. Empty seeded directories are structure without content.

Every generated file carries frontmatter (`note:` one-liner + `type:`), matching any host conventions found in pre-flight.

## Part 3 — Register with the host repo

1. **Index entry:** if the host keeps a docs index (e.g. `docs/README.md`), offer to add one line routing to `research/README.md`.
2. **CLAUDE.md section:** offer to append a short section to the host's `CLAUDE.md` so future agents know the lane exists. Keep it to ~6 lines: the lane's purpose, that `research/README.md` governs it, that `summary.json` files are canonical run records, and where decisions graduate to. Show the user the text before writing it.

## Part 4 — Confirm and guide

```
✓ Tiger Team initialised for: [PROJECT NAME]

Created:
  research/README.md            (lane index + governance)
  research/PROJECT_CONTEXT.md   (distilled from [source])
  research/PRINCIPLES.md
  research/PERSONAS.md
  research/DECISIONS.md         [(provenance-only — decisions graduate to docs/decisions.md)]
  research/sprint-status.md
  research/sprint-backlog.md
  research/dissent-register.md

Next steps:
  1. Review PERSONAS.md — import real personas with the import-personas skill if you have them.
  2. Add known candidates to sprint-backlog.md.
  3. Run the sprint skill to start Sprint 000 (Foundation).

The nine personas travel with the bs-tiger-team plugin — nothing to maintain in this repo.
```

List only the files actually created this run; note any that already existed and were left untouched.

---
name: import-personas
description: >-
  Import externally-created client personas into the Tiger Team framework so
  the team can design for real, research-backed users instead of generating
  personas from scratch. Use whenever the user has existing personas from a
  previous project, client workshop, or UX research report and wants them
  available to sprints and spikes — "import these personas", "we already have
  personas", pasting persona descriptions, or invoking /import-personas.
---

# import-personas — bring real users into the framework

Import externally-created client personas so the Tiger Team can use them during sprints and spikes.

**What this is not:** a replacement for Sprint 000 (Foundation). It replaces only the persona-generation step *within* Sprint 000 — principles and decisions still need establishing.

## Pre-flight check

1. `research/PERSONAS.md` — if personas already exist, this **merges**, never overwrites.
2. `research/PROJECT_CONTEXT.md` (older projects: `_meta/PROJECT_CONTEXT.md`) — were personas seeded during init?
3. `research/sprint-status.md` — if Sprint 000 has already run, confirm with the user before modifying `PERSONAS.md`.

If the project has no `research/` lane yet, run the **init** skill first.

## Step 1 — Choose the import method

**(A) Paste content** — any format: bullets, a table, a Figma export, a report excerpt.
**(B) Describe verbally** — the user describes; extract the structured fields.
**(C) Reference a file** — a path in the project; read and extract.

## Step 2 — Extract and normalise

For each persona, extract the fields below. Mark missing fields `[Not provided — to be established in Sprint 000]` rather than inventing them.

```yaml
---
name: "[Persona name or label, e.g. 'The Overwhelmed Secretary' or 'Sarah']"
type: client-persona
source: "[Where this persona came from — e.g. 'BNY UX Research, Jan 2025']"
imported: YYYY-MM-DD
---

## Role
[Job title or role in the context of this product.]

## Goal
[What they are trying to achieve. One sentence.]

## Frustration
[The single biggest pain point this product could solve.]

## Key Quote
> "[Verbatim or representative quote, if available.]"

## Behaviours
- [Observable behaviour 1]
- [Observable behaviour 2]

## Context
[Device usage, environment, technical literacy, constraints.]

## What the Team Should Know
[Nuance that affects how the team thinks about this persona in sprints.]

## Open Questions
- [What we don't yet know that a sprint could answer.]
```

Accepted input formats: research report excerpts, Figma/Miro exports, bullet lists, tables, verbal descriptions — all normalise to the structure above.

## Step 3 — Confirm with the user

Present the normalised personas back **before writing anything**:
1. "Does this accurately represent [Persona Name]?"
2. "Any fields missed or misrepresented?"
3. "Mark any as **primary** (the one the team optimises for) or **secondary**?"

## Step 4 — Write to PERSONAS.md

**If `PERSONAS.md` is empty or placeholder-only**, write all personas preceded by:

```markdown
# Project Personas

> Imported from external research — the real users of this product.
> Source: [source description] · Imported: YYYY-MM-DD
>
> **Note:** distinct from the Tiger Team personas (Leo, Lena, Marcus, etc.),
> which are portable archetypes that *think about* the product. These are the
> *actual users* the team designs for.

---
```

**If `PERSONAS.md` has content**, append below a `---` separator:

```markdown
---
## Imported Personas — [Source] — [Date]

> Imported from [source] on [date]. They supplement the personas established in Sprint 000.
```

## Step 5 — Update the backlog

For each sprint candidate in `research/sprint-backlog.md` now better informed by an imported persona, add: `[Persona note: "[Name]" is now available. Reference their frustration: "[frustration]".]`

## Step 6 — Confirm completion

```
✓ [N] persona(s) imported into research/PERSONAS.md
✓ Source recorded: [source]
✓ Sprint backlog updated with [N] persona notes

The team will reference these personas in all future sprints and spikes.
Elias Vance will speak on their behalf during every Decide phase.

Next: run the sprint skill for Sprint 000 (Foundation), or continue the backlog.
```

## Important notes

- **Imported personas do not replace the team.** The nine Tiger Team personas are the voices that *think about* the product; client personas are the users those voices think about.
- **Elias Vance speaks for the client personas.** His signature question becomes "Does this solve a real problem for [Persona Name]?"
- **Personas can be updated** when sprints reveal new information — edit `PERSONAS.md` directly and log the change in `research/DECISIONS.md` with the sprint reference.
- **Multiple persona sets are supported** — each set appends under its own source header.

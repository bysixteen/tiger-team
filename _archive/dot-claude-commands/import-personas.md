---
name: import-personas
description: Import externally-created client personas into the Project Squad framework. Use when the user runs /import-personas or has existing research-backed personas from a previous project, UX research report, or client workshop.
argument-hint: "[paste content, file path, or link]"
disable-model-invocation: true
allowed-tools: Read, Write, Edit, Glob
---

# /import-personas

**Purpose:** Import externally-created client personas into the Project Squad framework so they can be used by the squad during sprints and spikes.

**When to use:** When you already have research-backed personas from a previous project, a client workshop, a UX research report, or any external source — and you want the squad to use them rather than generating new ones from scratch.

**What this is not:** This command does not replace Sprint 000 (Foundation). It replaces the persona-generation step *within* Sprint 000. You still run Sprint 000 to establish principles and decisions — you just skip the persona-creation phase because your personas already exist.

---

## Pre-flight Check

Before running this command, read:

1. `research/PERSONAS.md` — check if personas already exist. If they do, this command will **merge**, not overwrite.
2. `_meta/PROJECT_CONTEXT.md` — check if any personas were seeded during init.
3. `research/sprint-status.md` — check if Sprint 000 has already run. If it has, confirm with the user before modifying `PERSONAS.md`.

---

## Step 1 — Choose your import method

Ask the user which method they are using:

**(A) Paste content** — The user will paste persona descriptions directly into the chat. They can be in any format: bullet points, a table, a Figma export, a Word document paste, a research report excerpt.

**(B) Describe verbally** — The user will describe the personas in their own words. Claude extracts the structured fields.

**(C) Reference a file** — The user provides a path to a file in the project (e.g., `_meta/client-personas-raw.md`). Claude reads and extracts.

---

## Step 2 — Extract and normalise

For each persona provided, extract the following fields. If a field is missing, mark it as `[Not provided — to be established in Sprint 000]` rather than inventing it.

```yaml
---
name: "[Persona name or label, e.g. 'The Overwhelmed Secretary' or 'Sarah']"
type: client-persona          # Always 'client-persona' for imported personas
source: "[Where this persona came from — e.g. 'BNY UX Research, Jan 2025']"
imported: YYYY-MM-DD
---

## Role
[Their job title or role in the context of this product.]

## Goal
[What they are trying to achieve. One sentence.]

## Frustration
[The single biggest pain point this product could solve for them.]

## Key Quote
> "[A verbatim or representative quote, if available. Otherwise leave blank.]"

## Behaviours
- [Observable behaviour 1]
- [Observable behaviour 2]
- [Observable behaviour 3]

## Context
[Relevant background — device usage, environment, technical literacy, constraints.]

## What the Squad Should Know
[Any nuance that affects how the squad should think about this persona during sprints.]

## Open Questions
- [What we don't yet know about this persona that a sprint could answer.]
```

---

## Step 3 — Confirm with the user

Present the normalised personas back to the user before writing anything. Ask:

1. "Does this accurately represent [Persona Name]?"
2. "Are there any fields I've missed or misrepresented?"
3. "Should any of these personas be marked as **primary** (the one the squad optimises for) or **secondary** (considered but not the primary focus)?"

Do not write to `PERSONAS.md` until the user confirms.

---

## Step 4 — Write to PERSONAS.md

**If `PERSONAS.md` is empty or only has placeholder content:**
Write all imported personas to `research/PERSONAS.md`, preceded by this header:

```markdown
# Project Personas

> These personas were imported from external research. They represent real users of this product.
> Source: [source description]
> Imported: YYYY-MM-DD
>
> **Note:** These are distinct from the Project Squad personas (Leo, Lena, Marcus, etc.), which are portable archetypes used to *think about* the product. These are the *actual users* the squad is designing for.

---
```

**If `PERSONAS.md` already has content:**
Append the new personas below a `---` separator with a note:

```markdown
---
## Imported Personas — [Source] — [Date]

> The following personas were imported from [source] on [date].
> They supplement the personas established in Sprint 000.
```

---

## Step 5 — Update sprint-backlog.md

For each imported persona, check `research/sprint-backlog.md`. If there are sprint candidates that are now better informed by the imported personas, add a note to those candidates:

```
[Persona note: "[Persona Name]" is now available. Update the sprint brief to reference their specific frustration: "[frustration]".]
```

---

## Step 6 — Confirm completion

Report to the user:

```
✓ [N] persona(s) imported and written to research/PERSONAS.md
✓ Source recorded: [source]
✓ Sprint backlog updated with [N] persona notes

The squad will now reference these personas during all future sprints and spikes.
Elias Vance will speak on behalf of these users during the Decide phase.

Recommended next step: Run /create-sprint to begin Sprint 000 (Foundation),
or if Sprint 000 is already complete, proceed to the next sprint in your backlog.
```

---

## Client Persona Format Reference

When providing personas to import, any of the following formats are accepted:

| Format | Example |
|--------|---------|
| Research report excerpt | "Sarah, 34, Operations Manager. She manages 12 clubs and spends 3 hours a week on admin..." |
| Figma/Miro export | Any structured card format |
| Bullet list | "Name: Sarah / Role: Ops Manager / Pain: Too much admin" |
| Table | Markdown or plain text table with persona attributes |
| Verbal description | "We have a persona called The Overwhelmed Secretary — she's the one who..." |

The command normalises all of these into the standard format above.

---

## Important Notes

- **Imported personas do not replace the squad.** The nine Project Squad personas (Leo, Lena, Marcus, Kira, Aris, Rowan, Elias, Nara, Ines) are still the voices that *think about* the product. Imported client personas are the *users* those voices think about.
- **Elias Vance speaks for the client personas.** His mandatory dissent is always framed from the perspective of the imported personas. If you have imported a persona, Elias's signature question becomes: "Does this solve a real problem for [Persona Name]?"
- **Personas can be updated.** If a sprint reveals new information about a persona, update `PERSONAS.md` directly. Log the change in `research/DECISIONS.md` with the sprint reference.
- **Multiple persona sets are supported.** If you have personas from multiple sources (e.g., BNY research + new user interviews), each set is appended with its own source header.

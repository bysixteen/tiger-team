---
name: init-project-squad
description: Bootstrap the Project Squad framework in a project. Use when the user runs /init-project-squad or wants to set up the Project Squad framework in a new project for the first time.
disable-model-invocation: true
allowed-tools: Read, Write, Edit, Glob, Bash
---

# Command: /init-project-squad

## Purpose

Bootstrap the Project Squad framework in the current project. This command creates the full directory scaffold, copies the Portable Toolkit, and generates the Project Context templates. Run this once per project.

---

## CRITICAL — Files to Create

This command creates **exactly these files and no others**:
- The directory structure (Step 1)
- The Portable Toolkit files (Step 2)
- The six living documents listed in Step 3

Do NOT create any additional files — no `SPRINT_PROCESS.md`, no `METHODOLOGY.md`, no process guides, no role descriptions. The sprint process is defined in `.claude/commands/create-sprint.md`. Do not summarise or re-describe it here.

Do NOT use generic role names (Designer, Engineer, Challenger, Scribe, etc.) anywhere in the generated files. The Project Squad personas are fixed: Leo Finch, Dr. Lena Petrova, Marcus Thorne, Kira Sharma, Dr. Aris Thorne, Rowan Vale, Elias Vance, Nara Shin, and Ines Alvarez. Their definitions live in `.squad/project-squad.md` — refer to them only by these names.

---

## Pre-Flight Checks

Before creating anything, perform these checks in order:

1. **Check for existing scaffold:** Does a `.squad/` or `research/` directory already exist?
   - If yes: Inform the user — "This project appears to already have a Project Squad framework. Running this command again will not overwrite existing files, but will add any missing ones. Proceed? (y/n)"
   - If no: Proceed immediately.

2. **Check for a Project Context file:** Does `_meta/PROJECT_CONTEXT.md` exist?
   - If yes: Read it silently. You will use its content to pre-populate the living documents in Step 3. Inform the user: "Found `_meta/PROJECT_CONTEXT.md` — will use it to pre-populate your living documents."
   - If no: Ask the user: "What is the name of this project? This will be used to pre-fill documentation headers." Proceed with the name they provide.

---

## Execution Steps

### Step 1 — Create Directories

Create the following directories (skip if they already exist):

```
.squad/
.claude/commands/
research/
research/sprints/
research/workshops/
research/spikes/
docs/
docs/decisions/
```

### Step 2 — Copy Portable Toolkit

Copy the following files from the toolkit source to the project (do not overwrite if they already exist):

- `.squad/project-squad.md` — The nine persona definitions. This file is the portable constant.
- `.claude/commands/create-sprint.md` — The sprint command.
- `.claude/commands/create-workshop.md` — The workshop command.
- `.claude/commands/create-spike.md` — The spike command.
- `.claude/commands/import-personas.md` — The persona import command.

If `.squad/specialists.md` exists in the toolkit source, copy it as well. It is optional and additive.

### Step 3 — Generate Project Context Scaffold

Create the following files using the templates below. If a file already exists, skip it.

If `_meta/PROJECT_CONTEXT.md` was found in the pre-flight check, use its content to pre-populate the placeholders in each template rather than leaving them blank. Specifically:
- Use the project name, description, and tech stack to populate `PRINCIPLES.md` and `DECISIONS.md` headers.
- Use any persona or user role information to seed `PERSONAS.md` with real entries instead of placeholders.
- Use any stated principles or constraints to seed `PRINCIPLES.md` with real entries.

**`research/PRINCIPLES.md`** — See template in this file.
**`research/PERSONAS.md`** — See template in this file.
**`research/DECISIONS.md`** — See template in this file.
**`research/sprint-status.md`** — See template in this file.
**`research/sprint-backlog.md`** — See template in this file.
**`research/dissent-register.md`** — See template in this file.

### Step 4 — Confirm and Guide

Print the following success message:

```
✓ Project Squad framework v1.2.0 initialized for: [PROJECT NAME]

Files created:
  .squad/project-squad.md
  .claude/commands/create-sprint.md
  .claude/commands/create-workshop.md
  .claude/commands/create-spike.md
  .claude/commands/import-personas.md
  research/PRINCIPLES.md
  research/PERSONAS.md
  research/DECISIONS.md
  research/sprint-status.md
  research/sprint-backlog.md
  research/dissent-register.md

Next steps:
  1. Customize research/PERSONAS.md with your project's user personas,
     or run /import-personas if you already have research-backed personas.
  2. Add any known design or technical principles to research/PRINCIPLES.md.
  3. Run /create-sprint to start your first sprint (Sprint 000 Foundation).
  4. Run /create-workshop when a quick decision is needed under time pressure.
  5. Run /create-spike when you encounter a question that needs investigation.

The Project Squad personas in .squad/project-squad.md are portable archetypes — do not modify them.
```

---

## File Templates

### Template: `research/PRINCIPLES.md`

```markdown
# [PROJECT NAME] — Design & Technical Principles

**Last updated:** [DATE] — Sprint 000 (Foundation)
**Next review:** Sprint 002

This document captures the core principles that guide design and technical decisions on this project. It is a living document, updated at the end of each sprint.

---

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

### Template: `research/PERSONAS.md`

```markdown
# [PROJECT NAME] — User Personas

**Last updated:** [DATE] — Sprint 000 (Foundation)
**Next review:** Sprint 002

> **Note:** These are the project's *user* personas — the real people who will use the product. They are distinct from the Project Squad personas (the nine archetypes in `.squad/project-squad.md`).

---

## Persona 1: [Name]

**Role:** [e.g., New Member, Club Admin, Casual Visitor]
**Goal:** [What are they trying to achieve?]
**Frustrations:** [What gets in their way?]
**Key Quote:** [A sentence that captures their perspective.]

---

## Persona 2: [Name]

_Add more personas as needed._
```

### Template: `research/DECISIONS.md`

```markdown
# [PROJECT NAME] — Decision Log

**Last updated:** [DATE] — Sprint 000 (Foundation)

This document is a high-level log of significant decisions made during sprints and spikes. For full rationale, follow the ADR links.

| # | Decision | Sprint / Spike | Date | ADR |
|---|----------|----------------|------|-----|
| — | _No decisions yet._ | — | — | — |
```

### Template: `research/sprint-status.md`

```markdown
# [PROJECT NAME] — Sprint Status

**Last updated:** [DATE]

| Sprint # | Topic | Date | Status | Personas | Folder |
|----------|-------|------|--------|----------|--------|
| 000 | Foundation | [DATE] | Complete | All | `research/sprints/sprint-000-foundation/` |
```

### Template: `research/sprint-backlog.md`

```markdown
# [PROJECT NAME] — Sprint & Spike Backlog

**Last updated:** [DATE]

This document is a lightweight backlog of sprint and spike candidates. It is the input to `/create-sprint` and `/create-spike` — those commands will read this file and offer to pull the next candidate from it.

**How to use:**
- Add a row whenever a new sprint or spike candidate is identified.
- Set `Status` to `Candidate` when first added, `In Progress` when running, and `Done` when complete.
- Set `Priority` to `High`, `Medium`, or `Low`.
- The `Blocking` column identifies what work cannot start until this sprint or spike is complete.

| # | Type | Topic / Question | Priority | Status | Blocking |
|---|------|-----------------|----------|--------|----------|
| 000 | Sprint | Foundation — establish shared context, principles, and personas | High | Candidate | — |
```

### Template: `research/dissent-register.md`

```markdown
# [PROJECT NAME] — Dissent Register

**Last updated:** [DATE] — Sprint 000 (Foundation)

This document records all significant dissenting opinions raised during sprints and spikes, primarily from Elias Vance (the Mandatory Challenger). Dissent is a feature. Recording it ensures that overruled concerns are not lost and can be revisited.

The `Review Trigger` column specifies the condition under which a dissenting view should be actively revisited. The `/create-sprint` command scans this column before each sprint and surfaces any entries whose trigger matches the upcoming sprint's topic.

| Sprint / Spike | Topic | Dissenting Persona | Dissenting View | Outcome | Review Trigger |
|---|---|---|---|---|---|
| — | _No dissent recorded yet._ | — | — | — | — |
```

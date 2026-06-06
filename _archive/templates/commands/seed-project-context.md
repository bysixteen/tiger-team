---
name: seed-project-context
description: Transform source documents into a Project Squad PROJECT_CONTEXT.md file. Use when the user runs /seed-project-context or wants to prepare project context from a brief, RFP, or research doc before running /init-project-squad.
argument-hint: "[paste content, file path, or link]"
disable-model-invocation: true
allowed-tools: Read, Write, Edit, Glob
---

# Command: /seed-project-context

## Purpose

Transform an existing source document (RFP, brief, pitch deck, research report) into the `_meta/PROJECT_CONTEXT.md` file that `/init-project-squad` expects. Run this **before** `/init-project-squad`.

**Common source types:**
- **RFP (Request for Proposal)** — client requirements, constraints, scope
- **Project brief** — internal summary of goals and approach
- **Pitch deck** — problem/solution framing, target users
- **Research report** — user insights, pain points, opportunities

---

## Pre-Flight Checks

1. **Check for source material:** Ask the user: "Where is your source document? Provide a file path or paste the content."
   - If file path: Read it.
   - If pasted content: Use it directly.
   - If neither: Offer to interview them with the questions below.

2. **Check for existing PROJECT_CONTEXT.md:** Does `_meta/PROJECT_CONTEXT.md` exist?
   - If yes: Inform the user and ask whether to overwrite or merge.
   - If no: Proceed.

---

## Execution Steps

### Step 1 — Extract from Source

Read the source document and extract answers to these questions. If information is missing, mark it as `[TBD — ask in Sprint 000]` rather than inventing answers.

**Required extractions:**
- Project name
- One-line description (the "This is a _____ that helps _____ do _____" sentence)
- Primary goal / North Star
- Problem being solved
- What is out of scope
- User personas (roles, goals, frustrations)
- Design principles / constraints
- Technical principles / constraints
- Known tech stack decisions
- Open questions (sprint/spike candidates)
- Timeline, budget, or regulatory constraints

### Step 2 — Map to Template

Use the template structure from `.squad/project-context-template.md` (or the embedded template below if that file doesn't exist).

Fill each section with extracted content. Be honest about gaps — the squad personas work better with explicit unknowns than with guesses.

### Step 3 — Write the File

Write the completed context to `_meta/PROJECT_CONTEXT.md`.

### Step 4 — Summarise Gaps

Print a summary of:
- Sections that were fully populated from the source
- Sections marked as `[TBD]` that need attention
- Recommended next step: either fill the gaps manually or let Sprint 000 address them

```
✓ PROJECT_CONTEXT.md created at _meta/PROJECT_CONTEXT.md

Populated from source:
  ✓ Project Overview
  ✓ Users (2 personas extracted)
  ✓ Tech Stack (partial)

Needs attention:
  ⚠ Design Principles — only 1 extracted, consider adding more
  ⚠ Open Questions — none found, add sprint/spike candidates
  ✗ Constraints — no timeline or budget mentioned

Next steps:
  1. Review _meta/PROJECT_CONTEXT.md and fill any [TBD] placeholders
  2. Run /init-project-squad to scaffold the living documents
```

---

## Interview Mode (No Source Document)

If no source document is provided, conduct a brief interview. Ask these questions one at a time, waiting for answers:

1. "What do you call this project?"
2. "In one sentence, what does it do and who is it for?"
3. "If this project succeeds, what changes for the user in 12 months?"
4. "What problem exists today that this solves?"
5. "What are you explicitly NOT building?"
6. "Who are the 2-3 main types of users? What does each one want?"
7. "Any non-negotiable principles — things that must always be true?"
8. "Any known tech stack decisions?"
9. "What questions don't you have answers to yet?"
10. "Any hard constraints — deadlines, budgets, regulations?"

After collecting answers, proceed to Step 2.

---

## Embedded Template

If `.squad/project-context-template.md` is not available, use this structure:

```markdown
---
title: "[Project Name] — Project Context"
type: project-context
version: "1.0"
date: YYYY-MM-DD
---

# [Project Name] — Project Context

> This file is read by `/init-project-squad` to pre-populate your living documents.

---

## 1. Project Overview

**Project name:**
**One-line description:**
**Primary goal (the North Star):**
**What problem does this solve today?**
**What is explicitly out of scope?**

---

## 2. The Users

**Persona 1: [Name]**
- **Role:**
- **Goal:**
- **Frustration:**
- **Key quote:**

**Persona 2: [Name]**
- **Role:**
- **Goal:**
- **Frustration:**
- **Key quote:**

---

## 3. Design Principles

**Design Principles**
- [Principle 1]
- [Principle 2]

**Technical Principles**
- [Principle 1]
- [Principle 2]

---

## 4. Known Decisions

| Decision | Date | Rationale | Rejected Alternative |
|----------|------|-----------|----------------------|
| | | | |

---

## 5. Tech Stack

| Layer | Choice | Notes |
|-------|--------|-------|
| Frontend | | |
| Backend / API | | |
| Database | | |
| Auth | | |
| Hosting / Infra | | |

---

## 6. Open Questions (Sprint Backlog Seeds)

**Feature questions**
- [Question 1]

**Technical questions**
- [Question 1]

---

## 7. Constraints

**Timeline:**
**Budget:**
**Regulatory / compliance:**
**Team:**
**Existing systems:**

---

## Notes

[Anything else the squad should know]
```

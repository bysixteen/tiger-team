---
title: "Decision Guide: Choosing the Right Skill"
note: "Decision tree for picking sprint vs workshop vs spike — and when none of them is the right tool."
type: guide
status: stable
---

**TL;DR:** Use the lightest tool that gets you a decision you can build on. Sprint for foundational product decisions, Workshop to align on a leading option under time pressure, Spike to resolve a specific unknown that's blocking progress.

---

## Is this process worth it?

The honest answer: **the cost of a bad foundational decision almost always exceeds the cost of running the process.**

Each command produces a decision, the rationale behind it, and a clear next action. What varies is how much process you need to get there with confidence.

- A sprint produces a `creative-brief.md` with success criteria — that becomes the validation checklist for whatever gets built
- A spike produces an answer that unblocks a stuck decision — you stop arguing about the unknown
- A workshop produces a decision memo that replaces a 3-hour stakeholder meeting with a 30-minute read

If you skip the process and build the wrong thing, you don't get the time back.

---

## Which command should I use?

| | `the sprint skill` | `the workshop skill` | `the spike skill` |
|---|---|---|---|
| **Time** | Half-day to 1 day | 2–3 hours | 1–4 hours |
| **Best for** | Foundational product decisions — you don't know what to build yet | Aligning on a leading option — you need to stress-test it, not discover it | Resolving one specific unknown that is blocking a decision or estimate |
| **Use when** | You're defining a user moment, a feature direction, or a product principle for the first time | A stakeholder, deadline, or previous sprint is forcing a decision and you already have a leading candidate | A decision cannot be made without first answering a concrete question (technical, user research, or design) |
| **Skip when** | A workshop or spike would get there faster | You haven't formed a view yet — run a sprint instead | There are multiple open questions; split into multiple spikes |
| **Primary output** | `decision.md` + `creative-brief.md` + `synthesis.md` | `workshop.md` | `output.md` (answer-first format) |
| **Also produces** | `brief.md`, `sketches.md`, `ideas.md`, `summary.json` | `summary.json` | `brief.md`, `summary.json`, ADR (if technical) |

---

## Decision flow

**Start here:**

1. Can you articulate what you are deciding in one sentence?
   - No → You may not have a clear enough problem yet. Run a Sprint (Map phase will sharpen it).
   - Yes → Continue.

2. Do you already have a leading option?
   - No → Run a **Sprint**.
   - Yes → Continue.

3. Is a decision needed within 24–48 hours, or are you under external time pressure?
   - Yes → Run a **Workshop** to stress-test the leading option.
   - No → Run a **Sprint** to evaluate it properly.

4. Are you blocked by a specific unknown (technical, research, or design)?
   - Yes → Run a **Spike** first, then return to step 1.
   - No → You have enough to decide. Run a **Workshop** or **Sprint**.

---

## Sequencing patterns

Commands are often stacked. Common patterns:

**Spike → Sprint**
An unknown is blocking the sprint. Resolve it first, then run the sprint with the answer in hand.

**Sprint → Workshop**
A sprint produced a foundational decision. A follow-up question needs quick alignment before the next build cycle.

**Workshop → Spike**
A workshop surfaced an assumption the team can't validate without research. A spike answers it before the next sprint.

**Sprint → Sprint**
Each sprint's `synthesis.md` and `summary.json` feed the next one. Sprint 000 (Foundation) sets up client personas, principles, and first decisions; subsequent sprints build on them.

---

## What you walk away with

### `the sprint skill`
- `brief.md` — the sprint challenge and questions
- `sketches.md` — all persona perspectives (archived, not handed to builders)
- `decision.md` — the decision, rationale, rejected alternatives, Elias's dissent
- `creative-brief.md` — the spec: positioning, success criteria, guardrails (produced for user-facing features)
- `ideas.md` — opportunities that surfaced but weren't the focus
- `synthesis.md` — what changed, what the next sprint should know
- `summary.json` — machine-readable record read by future sprint pre-flight checks

### `the workshop skill`
- `workshop.md` — decision memo: context, decision, rationale, rejected options, Elias's position, next action
- `summary.json`

### `the spike skill`
- `brief.md` — the specific question, acceptance criteria, and investigation angles
- `output.md` — answer first, then evidence and recommendation (read only the top half in practice)
- `summary.json`
- ADR in `docs/decisions/` (if a significant technical decision was made)

---

## The handoff

**Builders (developers, designers) receive:**
- `creative-brief.md` — the spec and success criteria
- `decision.md` — the rationale and what was rejected
- Spike `output.md` — if a specific unknown was resolved upstream

**They do not receive:**
- `sketches.md` — internal reasoning, archived for traceability
- `brief.md` — context for the sprint, not operational for builders

The `creative-brief.md` success criteria become the validation checklist. If validation fails, the finding is logged in `research/DECISIONS.md` and a new sprint is triggered — not a patch to the prototype.

---

## See also

- `docs/VALIDATION-BOUNDARY.md` — where the framework ends and delivery begins
- `README.md` — Workshop Trigger Conditions and Spike Qualification Test (detailed gatekeeping criteria)

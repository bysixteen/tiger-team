---
name: sprint
description: >-
  Run a Full or Lite Design Sprint with the Tiger Team — nine named personas
  who map the problem, sketch perspectives, decide with mandatory dissent, and
  synthesise into living documents. Use whenever the user wants to run a design
  sprint, sprint session, structured product exploration, or asks the team /
  squad to work through a challenge — even if they don't say "sprint". Also use
  when the user invokes /sprint or /create-sprint, or picks a candidate from the
  sprint backlog.
---

# sprint — Design Sprint orchestrator

Run a structured design sprint using the Tiger Team framework. Guides the user through problem definition, persona selection, and the four sprint phases, producing synthesis-friendly outputs that don't burn context.

## Critical — read before anything else

**Read `${CLAUDE_PLUGIN_ROOT}/team/personas.md` in full before taking any action.** It defines the nine Tiger Team personas. Use them verbatim — exact names, roles, and signature questions. Never substitute generic role names (Designer, Engineer, Challenger, Scribe, etc.). The nine are fixed and non-negotiable:

- **Leo Finch** — Visual Designer ("Does this feel like us?")
- **Dr. Lena Petrova** — Design Engineer ("How will we build, test, and maintain this?")
- **Marcus Thorne** — Senior Developer ("What are we NOT building here?")
- **Kira Sharma** — Developer ("What does the implementation actually look like?")
- **Dr. Aris Thorne** — Strategist ("What is the real problem we are trying to solve?")
- **Rowan Vale** — Craftsman ("What is the feeling we want to create?")
- **Elias Vance** — Client ("Does this solve a real problem for my users?") — **mandatory in every Decide phase**
- **Nara Shin** — UX Researcher ("What does the evidence say?")
- **Ines Alvarez** — UX Designer ("Where will users get stuck?")

## Pre-flight checks

If the project has no `research/` lane yet, run the **init** skill first — it scaffolds the living documents this sprint reads and writes.

Read the following living documents to establish project context:
- `research/PRINCIPLES.md`
- `research/PERSONAS.md`
- `research/DECISIONS.md`
- `research/sprint-status.md`
- `research/sprint-backlog.md` (if it exists)
- `research/dissent-register.md` (if it exists)

Determine the next sprint number from `sprint-status.md`. If the file is empty or missing, this is Sprint 001.

**Sprint backlog check:** If `research/sprint-backlog.md` has candidates with `Status: Candidate`, present the top candidate(s): "Your sprint backlog has a candidate ready: [topic]. Would you like to run this sprint, or define a new one?"

**Backlog divergence:** If the user declines the backlog candidate and defines a new topic, ask whether to keep the backlog candidate or remove it; update `research/sprint-backlog.md` before Step 0.

**Dissent register scan:** Scan the `Review Trigger` column of `research/dissent-register.md` for entries relevant to the upcoming topic. Surface any hit before Step 0: "Before we start — the dissent register has a flagged concern that may be relevant: [view] (raised in [sprint/spike], Review Trigger: [trigger]). Factor it in?"

## Step 0 — Input mode & team selection

Present:

```
Welcome to the sprint.

1. What's the challenge? (One sentence — a problem to solve, not a solution to build.)

2. How do you want to provide context?
   (A) Guided Wizard — structured questions step by step.
   (B) Paste Content — share a doc, brief, notes, or thread; I'll extract the key inputs.
   (C) Link — provide a URL; I'll read it and extract the key inputs.
   (D) Revisit — re-run a sprint on a topic with prior context, pre-populated.

3. Sprint format?
   (Full) Four phases: Map → Sketch → Decide → Synthesise
   (Lite) Two phases: Map → Decide (faster, for lower-stakes decisions)
   (Workshop) → use the workshop skill instead (see its trigger conditions)

4. Which Tiger Team personas are joining?
   [Display the team selection guide from team/personas.md and recommend personas for the challenge type.]
   Specialists needed? Check ${CLAUDE_PLUGIN_ROOT}/team/specialists.md — specialists are additive, never replacements.

5. Will this sprint produce a creative brief?
   (Yes) — user-facing features where the next step is "build this thing"
   (No)  — technical/architectural decisions or early exploration
```

## Input mode behaviour

### Mode A — Guided Wizard (Knapp's Monday questions)

Walk through these in order; each builds on the last.

**Context detection:** Before Question 1, check `research/PROJECT_CONTEXT.md` (older projects: `_meta/PROJECT_CONTEXT.md`) and `research/sprint-status.md`. If a Long-Term Goal is already recorded, present it: "Your recorded Long-Term Goal is: [goal]. Still the North Star, or has it shifted?" Same pattern for Questions 4 (Target User) and 5 (Constraints). Only ask from scratch when no prior context exists.

**Q1 — The Long-Term Goal (optimistic):** "Fast forward 6–12 months. If this project is a wild success, what will be different? Present tense, as if it has already happened." *Why:* the North Star — ambitious, measurable, inspiring. Good: "Members manage their entire club relationship through one app; admin overhead down 50%." Bad: "We will have launched the feature."

**Q2 — The Sprint Questions (pessimistic):** "What could go wrong on the path to that goal? What assumptions might be false?" Reframe each concern as a testable question ("Can we...?" / "Will users...?") and confirm. Test: answerable through user testing or a prototype within the sprint timeframe? If not, too broad.

**Q3 — The Map and Target:** "Who are the key actors, and what are the steps from first interaction to the long-term goal?" Produce a simple text map, then: "Where is the single most critical moment — riskiest, or biggest opportunity? That's the sprint target."

**Q4 — Target User:** "Which persona in PERSONAS.md is primary for this sprint? Or describe them if not yet in the file."

**Q5 — Constraints:** technical, budget, timeline, regulatory, explicit out-of-scope.

**Q6 — Known data and assumptions:** existing research, analytics, prior decisions; unvalidated assumptions.

**Q7 — Research checkpoint (led by Dr. Aris Thorne):** "Do we have evidence the proposed approach is right for this context — or are we adopting a pattern because it's familiar?" *Why:* prevents adopting patterns without evidence (a real failure: a UI pattern built and removed within one sprint cycle). If gaps surface, suggest the **spike** skill or inline research first.

### Mode B — Paste content

Extract: challenge statement, goals/success criteria, constraints, named users/personas, existing decisions. Present "Here's what I found:" per field; confirm, correct, fill gaps. Be forgiving of messy input.

### Mode C — Link

Fetch the URL; apply Mode B extraction. Fall back to Mode A if inaccessible or thin.

### Mode D — Revisit

Read the most recent sprint folder for the topic. Pre-populate Long-Term Goal, Target User, and Constraints from its `brief.md`; ask only what has changed. Set `depends-on` in the new brief to the prior sprint. Do not double-prompt the Mode A context questions.

## Phase 1 — Map (led by Dr. Aris Thorne)

Aris hunts the real problem beneath the stated problem. Generate 5–10 "How Might We" questions from the challenge and Step 0 inputs; the user curates down to 3–5.

**Output:** `research/sprints/sprint-NNN-[topic]/brief.md` — template in [references/output-templates.md](references/output-templates.md).

**`feeds-into` backfill:** after creating `brief.md`, open each sprint in its `depends-on` and add this sprint's number to that brief's `feeds-into`. Keeps the bidirectional chain current.

## Phase transition protocol

Between phases, run a silent self-check (output only on failure):
1. **Completeness** — did the previous phase produce all required outputs?
2. **Coherence** — is there sufficient input for the next phase to produce quality?
3. **Scope** — has the work drifted from the challenge in `brief.md`?

On failure, pause: "Before we move to [next phase], I want to flag: [issue]. Address it, or proceed as-is?" Facilitation is part of executing this skill, not a named character.

## Phase 2 — Sketch (Lightning Docs)

Each selected persona writes a perspective **in their own voice**, signature question as the lens. ~150 words for new topics; up to ~250 for revisits or perspectives citing specific prior evidence. Quality over brevity. Present all perspectives for adjustment before Decide.

**Output:** `research/sprints/sprint-NNN-[topic]/sketches.md` — template in [references/output-templates.md](references/output-templates.md). Elias's sketch must reference client personas from `research/PERSONAS.md` by name and steelman the alternative.

## Phase 3 — Decide

Present the options from Sketch. Facilitate the decision. Record Elias Vance's dissent even if overruled; if significant, add it to `research/dissent-register.md` with a review trigger.

**Output:** `research/sprints/sprint-NNN-[topic]/decision.md` — template in [references/output-templates.md](references/output-templates.md).

## Phase 3b — Creative brief *(only if selected at Step 0, Q5)*

User-facing feature sprints only. Led by Leo Finch and Dr. Aris Thorne — forward-looking and prescriptive, unlike the retrospective `synthesis.md`.

**Acceptance-criteria quality check** before writing: each Success Criterion must be observable or measurable (bad: "Users like it"; good: "80% complete the flow without support"), testable within one sprint cycle, and specific to *this* decision. Rewrite failures, noting original and revised wording.

**Output:** `research/sprints/sprint-NNN-[topic]/creative-brief.md` — template in [references/output-templates.md](references/output-templates.md).

## Phase 4 — Synthesise (led by Dr. Aris Thorne)

Auto-update the living documents:
- `research/DECISIONS.md` — add the decision, linked to `decision.md`. If the host project keeps its own decision log (e.g. `docs/decisions.md`), graduate the decision there too — the research copy records provenance, the project log stays the single source of truth.
- `research/sprint-status.md` — mark the sprint Complete with participants.
- `research/PERSONAS.md` / `research/PRINCIPLES.md` — update only if the sprint revealed new insights or principles.

**Living-document convention:** append to existing tables; never add per-sprint section headers. New sections only for genuinely new *types* of content.

**Outputs:** `ideas.md`, `synthesis.md`, `summary.json` in the sprint folder — templates in [references/output-templates.md](references/output-templates.md). `ideas.md` captures ideas worth future sprints (not open questions, not rejected alternatives); record "no ideas surfaced" explicitly rather than omitting.

**Site page:** verify `site/styles.css` and `site/layout.js` exist in the project; if missing, copy them from `${CLAUDE_PLUGIN_ROOT}/assets/site/`. Then create `site/sprints/sprint-NNN/index.html` (hero, decision pull-quote, rationale, dissent, NOT-doing list, next action, artifacts; `<body data-layout="sprint" data-root="../.." data-sprint="NNN">`, link `../../styles.css` + `../../layout.js`) and append the sprint entry to `site/sprints.json` — schema in [references/output-templates.md](references/output-templates.md).

## Output synthesis rules (all files)

1. YAML frontmatter mandatory — type, status, date, sprint, tags.
2. TL;DR or Decision is always the first body section.
3. Tables over prose for structured data.
4. Appendices below a `---` rule — the "stop reading here" signal.
5. Explicit null values — "Blockers: None", never an omitted section.
6. Past tense for decisions — signals finality.
7. ADR references inline for significant decisions.
8. Bidirectional links in frontmatter (`feeds-into`, `depends-on`) and body.
9. One sprint question per sprint — if multiple, rank them.
10. < 700 lines per file — split into progressive disclosure if longer.

**The First 20 Lines rule:** an LLM reading only the first 20 lines must be able to determine relevance, extract the key decision, and know where detail lives. Frontmatter + TL;DR fit within 20 lines.

## Verification checklist

- [ ] `brief.md` — frontmatter + TL;DR within first 20 lines.
- [ ] `sketches.md` — every selected persona, in their own voice.
- [ ] `decision.md` — Elias Vance's dissent recorded.
- [ ] `ideas.md` created (even if "none surfaced").
- [ ] Creative brief (if requested) — first-20-lines compliant; success criteria measurable.
- [ ] `synthesis.md` created.
- [ ] `summary.json` valid JSON; `creative_brief` + `ideas_count` populated.
- [ ] `site/sprints/sprint-NNN/index.html` created against the shared design system.
- [ ] `site/sprints.json` updated.
- [ ] `research/DECISIONS.md`, `research/sprint-status.md` updated; `research/dissent-register.md` if dissent was significant.

Then print:

```
✓ Sprint NNN complete.

Site updated: site/sprints/sprint-NNN/index.html
Open in browser → file:///[project-root]/site/sprints/sprint-NNN/index.html
```

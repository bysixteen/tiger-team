---
name: create-sprint
description: Run a Full or Lite Design Sprint using the Project Squad framework. Use when the user runs /create-sprint or wants to run a design sprint, sprint session, or structured product exploration with the squad.
argument-hint: "[sprint topic or user moment]"
disable-model-invocation: true
allowed-tools: Read, Write, Edit, Glob
---

# Command: /create-sprint

## Purpose

Run a structured design sprint using the Project Squad framework. Guides the user through problem definition, persona selection, and the four sprint phases, producing synthesis-friendly outputs that don't burn context.

---

## CRITICAL — Read Before Anything Else

**Read `.squad/project-squad.md` in full before taking any action.** This file defines the nine Project Squad personas. You must use them verbatim — their exact names, roles, and signature questions. Never substitute generic role names (Designer, Engineer, Challenger, Scribe, etc.) for the Project Squad personas. The nine personas are fixed and non-negotiable:

- **Leo Finch** — Visual Designer ("Does this feel like us?")
- **Dr. Lena Petrova** — Design Engineer ("How will we build, test, and maintain this?")
- **Marcus Thorne** — Senior Developer ("What are we NOT building here?")
- **Kira Sharma** — Developer ("What does the implementation actually look like?")
- **Dr. Aris Thorne** — Strategist ("What is the real problem we are trying to solve?")
- **Rowan Vale** — Craftsman ("What is the feeling we want to create?")
- **Elias Vance** — Client ("Does this solve a real problem for my users?") — **mandatory in every Decide phase**
- **Nara Shin** — UX Researcher ("What does the evidence say?")
- **Ines Alvarez** — UX Designer ("Where will users get stuck?")

---

## Pre-Flight Checks

Before starting, read the following living documents to establish project context:
- `research/PRINCIPLES.md`
- `research/PERSONAS.md`
- `research/DECISIONS.md`
- `research/sprint-status.md`
- `research/sprint-backlog.md` (if it exists)
- `research/dissent-register.md` (if it exists)

Determine the next sprint number from `sprint-status.md`. If the file is empty or missing, this is Sprint 001.

**Sprint Backlog Check:** If `research/sprint-backlog.md` exists and has candidates with `Status: Candidate`, present the top candidate(s) to the user and ask: "Your sprint backlog has a candidate ready: [topic]. Would you like to run this sprint, or define a new one?"

**Backlog Divergence:** If the user declines the backlog candidate and defines a new sprint topic, ask: "Do you want to keep '[backlog topic]' as a Candidate for a future sprint, or remove it from the backlog?" Update `research/sprint-backlog.md` accordingly before proceeding to Step 0.

**Dissent Register Scan:** If `research/dissent-register.md` exists, scan the `Review Trigger` column for any entries whose trigger is relevant to the upcoming sprint's topic. If any are found, surface them before Step 0: "Before we start — the dissent register has a flagged concern that may be relevant to this sprint: [dissenting view] (raised in [sprint/spike], Review Trigger: [trigger]). Do you want to factor this in?"

---

## Step 0 — Input Mode & Team Selection

Present the following to the user:

```
Welcome to /create-sprint.

Before we begin, I need to understand the challenge.

1. What's the challenge? (One sentence — a problem to solve, not a solution to build.)

2. How do you want to provide context?
   (A) Guided Wizard — I'll ask you structured questions step by step.
   (B) Paste Content — Share a doc, brief, notes, or Slack thread and I'll extract the key inputs.
   (C) Link — Provide a URL and I'll read it and extract the key inputs.
   (D) Revisit — Re-run a sprint on a topic with prior context. I'll read the previous sprint and pre-populate.

3. Sprint format?
   (Full) Four phases: Map → Sketch → Decide → Synthesise
   (Lite) Two phases: Map → Decide (faster, for lower-stakes decisions)
   (Workshop) → Run /create-workshop instead (see Workshop Trigger Conditions in CLAUDE.md)

4. Which Project Squad personas are joining this sprint?
   [Display the team selection guide from .squad/project-squad.md and recommend personas based on the challenge type.]
   Are any specialists needed? Check `.squad/specialists.md` for available specialist roles. Specialists are additive — they supplement the core squad and do not replace a persona.

5. Will this sprint produce a creative brief?
   (Yes) — For user-facing features where the next step is "build this thing"
   (No)  — For technical/architectural decisions or early exploration
```

---

## Input Mode Behaviour

### Mode A — Guided Wizard (Knapp's Monday Questions)

Walk the user through these questions in order. Do not rush. Each question builds on the last.

**Context Detection:** Before asking Question 1, check `_meta/PROJECT_CONTEXT.md` and `research/sprint-status.md`. If a Long-Term Goal is already recorded, present it: "Your recorded Long-Term Goal is: [goal]. Is this still the North Star for this sprint, or has it shifted?" Apply the same pattern to Questions 4 (Target User) and 5 (Constraints). Only ask from scratch if no prior context exists.

**Question 1 — The Long-Term Goal (Optimistic)**
> "Fast forward 6 to 12 months. If this project is a wild success, what will be different? Describe it in the present tense, as if it has already happened."

*Why this matters:* This establishes the North Star. It forces the team to think beyond the immediate feature and align on the ultimate purpose of the work. A strong goal is ambitious, measurable, and inspiring.
*Good input:* "Our members manage their entire relationship with the club through a single, intuitive app, and admin overhead has dropped by 50%."
*Bad input:* "We will have launched the new feature."

**Question 2 — The Sprint Questions (Pessimistic)**
> "Now let's be pessimistic. On the path to that long-term goal, what could go wrong? What assumptions are we making that might be false? What obstacles will we face?"

*After the user responds:* Reframe each concern as a testable sprint question using the format "Can we...?" or "Will users...?" Present the reframed questions and ask the user to confirm or adjust.
*Test for each question:* "Can this question be answered through user testing or a prototype within the sprint timeframe?" If not, it is too broad.

**Question 3 — The Map and Target**
> "Let's map the user's journey. Who are the key actors, and what are the steps from their first interaction to the long-term goal? Walk me through it."

*After the user describes the journey:* Produce a simple text-based map. Then ask:
> "Looking at this map, where is the single most critical moment? Which part is the riskiest, or offers the biggest opportunity? That will be the target for this sprint."

**Question 4 — Target User**
> "Which of the user personas in PERSONAS.md is the primary user for this sprint? Or describe the user if they're not in the file yet."

**Question 5 — Constraints**
> "What constraints should the squad be aware of? Consider: technical limitations, budget, timeline, regulatory requirements, or things that are explicitly out of scope."

**Question 6 — Known Data and Assumptions**
> "What do we already know? What existing research, analytics, or prior decisions are relevant? What assumptions are we making that we haven't validated yet?"

**Question 7 — Research Checkpoint (Led by Dr. Aris Thorne)**
> "Do we have evidence that the proposed approach is correct for this context? Are we adopting a pattern, technology, or solution because it's familiar, or because it's validated? What should we research before committing?"

*Why this matters:* This checkpoint prevents the team from adopting patterns without evidence — a gap identified in Sprint 002 when a UI pattern was built and removed in one sprint cycle. If the user identifies research gaps, suggest running `/create-spike` first or conducting inline research (web search, pattern analysis) before proceeding to the next phase.

---

### Mode B — Paste Content

Accept raw, unstructured text from the user. Extract the following fields:
- Challenge statement
- Any goals or success criteria mentioned
- Constraints mentioned
- Named users or personas
- Any existing decisions or context

Present a structured summary: "Here's what I found:" with each field listed. Ask the user to confirm or correct. Ask for anything missing. Be forgiving of messy, informal input.

---

### Mode C — Link

Fetch the URL provided. Apply the same extraction logic as Mode B. Fall back to Mode A if the URL is inaccessible or returns insufficient content.

---

### Mode D — Revisit

When the user selects Mode D, read the most recent sprint folder for the stated topic (or the sprint the user specifies). Surface what was decided in the prior sprint.

Pre-populate the following fields from the existing `brief.md`:
- **Long-Term Goal** — present it and ask: "Is this still the North Star, or has it shifted?"
- **Target User** — present and confirm
- **Constraints** — present and ask what has changed

Set `depends-on` in the new brief's frontmatter to reference the prior sprint automatically. Ask the user only to confirm or adjust the pre-populated values, and to state **what has changed** since the last sprint. This replaces the Mode A context detection for Questions 1, 4, and 5 — do not double-prompt.

---

## Phase 1 — Map (Led by Dr. Aris Thorne)

**Persona voice:** Aris leads this phase. He is looking for the real problem beneath the stated problem.

Generate 5–10 "How Might We" (HMW) questions from the challenge and the inputs collected in Step 0. Present them to the user for curation. Ask the user to select the 3–5 most important ones.

**Output:** Create `research/sprints/sprint-NNN-[topic]/brief.md` using the following template:

```yaml
---
title: "Sprint NNN: [Topic]"
type: sprint-brief
status: in-progress
date: YYYY-MM-DD
sprint: NNN
personas: [leo, lena, marcus, kira, aris, rowan, elias]
depends-on: []
feeds-into: []
tags: []
---

**TL;DR:** [One sentence: what is this sprint trying to answer?]

---

## Sprint Challenge

[The one-sentence problem statement.]

## Long-Term Goal

[The optimistic 6–12 month vision, present tense.]

## Sprint Questions

1. [Can we...?]
2. [Will users...?]
3. [Can we...?]

## Target User

[Name from PERSONAS.md, or description.]

## Target Moment on the Map

[The single most critical moment identified in the Map phase.]

## Project Squad

| Persona | Name | Role in This Sprint |
|---------|------|---------------------|
| Visual Designer | Leo Finch | Sketch phase |
| Design Engineer | Dr. Lena Petrova | Map + Sketch |
| Senior Developer | Marcus Thorne | Sketch + Decide |
| Developer | Kira Sharma | Sketch |
| Strategist | Dr. Aris Thorne | Map lead + Synthesise |
| Craftsman | Rowan Vale | Sketch |
| Client | Elias Vance | Decide (mandatory) |
| UX Researcher | Nara Shin | Map + Sketch |
| UX Designer | Ines Alvarez | Sketch + Decide |

## How Might We Questions

1. HMW [...]
2. HMW [...]
3. HMW [...]

## Constraints

[List constraints from Step 0.]

## Known Data and Assumptions

[List known data and unvalidated assumptions from Step 0.]
```

---

**`feeds-into` Backfill:** After creating this sprint's `brief.md`, check its `depends-on` field. For each sprint listed in `depends-on`, open that sprint's `brief.md` and add this sprint's number to its `feeds-into` field. This keeps the bidirectional link chain current without requiring a separate command.

---

## Phase Transition Protocol

Between each phase, perform a silent self-check before proceeding. Do not output this to the user unless a check fails.

1. **Completeness check:** Did the previous phase produce all required outputs?
2. **Coherence check:** Does the output from the previous phase provide sufficient input for the next phase to produce quality results?
3. **Scope check:** Has the scope drifted from the original challenge statement in `brief.md`?

If any check fails, pause and inform the user:
> "Before we move to [next phase], I want to flag: [the issue]. Should we address this before continuing, or proceed as-is?"

This protocol applies at every phase boundary. Claude performs facilitation as part of the command execution, not as a named character.

---

## Phase 2 — Sketch (Lightning Docs)

Each selected persona writes a perspective **in their own voice**, using their signature question as the lens. Target ~150 words for new topics; up to ~250 words for revisit sprints (Mode D) or when a persona needs to reference specific prior evidence or decisions. Quality over brevity — a sketch that references concrete prior context is more valuable than one that fits a word count. Generate all perspectives. Present them to the user and ask if they want to adjust any before proceeding to the Decide phase.

**Output:** Create `research/sprints/sprint-NNN-[topic]/sketches.md` using the following template:

```markdown
---
title: "Sprint NNN: Sketches"
type: sprint-sketches
status: complete
date: YYYY-MM-DD
sprint: NNN
feeds-from: "brief.md"
---

## Leo Finch — Visual Designer
> "Does this feel like us?"

[Brand and visual angle. How does this strengthen or threaten the brand identity? What visual direction would make this feel authentic?]

---

## Dr. Lena Petrova — Design Engineer
> "How will we build, test, and maintain this?"

[Design system and build feasibility. Which components exist? What needs to be created? What is the maintenance overhead?]

---

## Marcus Thorne — Senior Developer
> "What are we NOT building here?"

[Architectural angle. What is explicitly out of scope? What long-term risks does this introduce? What decisions will be hard to reverse?]

---

## Kira Sharma — Developer
> "What does the implementation actually look like?"

[Build reality. What are the code paths? What integrations are required? What is the realistic effort estimate?]

---

## Dr. Aris Thorne — Strategist
> "What is the real problem we are trying to solve?"

[Research and user angle. Does this solution address the root cause? What does the evidence say? Is there a simpler solution we're overlooking?]

---

## Rowan Vale — Craftsman
> "What is the feeling we want to create?"

[End-to-end experience. What happens before and after the screen? What is the emotional arc of the user's journey? What touchpoints are we missing?]

---

## Elias Vance — Client (Mandatory Dissent)
> "Does this solve a real problem for my users?"

[Reality check. Reference specific client personas from research/PERSONAS.md by name — speak on behalf of their stated goals, frustrations, and context. What assumption is this solution making about them? What is the strongest argument against proceeding? Steelman the alternative.]

---

## Nara Shin — UX Researcher
> "What does the evidence say?"

[Evidence and validation. What do competitor products do? What does the research show? What patterns have been tested and validated in similar contexts? What are we assuming without evidence?]

---

## Ines Alvarez — UX Designer
> "Where will users get stuck?"

[Interaction design. What is the user flow? Where are the decision points, dead ends, and error states? Is the information architecture intuitive? Can users complete their task efficiently?]
```

---

## Phase 3 — Decide

Present the options from the Sketch phase. Facilitate the decision. Record Elias Vance's dissent, even if the team overrules him.

If the dissent is significant, add it to `research/dissent-register.md`.

**Output:** Create `research/sprints/sprint-NNN-[topic]/decision.md` using the following template:

```yaml
---
title: "Sprint NNN: Decision"
type: sprint-decision
status: complete
date: YYYY-MM-DD
sprint: NNN
decision: "[One sentence — the chosen direction, past tense.]"
feeds-from: "sketches.md"
---

## Decision

[One paragraph — the chosen direction and the primary reason for choosing it. Answer first, rationale second.]

## Rationale

[Why this option over the alternatives? What evidence or reasoning was decisive?]

## Elias Vance's Dissent

[Record Elias's challenge, even if overruled. If he agreed, state that explicitly: "Elias agreed with the decision."]

## What We Are NOT Doing

[Explicitly list the options that were considered and rejected, and why.]

## Next Action

[The single most important next step to take after this sprint.]
```

---

## Phase 3b — Creative Brief *(skip if user selected No at Step 0, question 5)*

> This phase applies to user-facing feature sprints only. Skip for technical/architectural decisions.

Led by **Leo Finch** and **Dr. Aris Thorne**. The creative brief translates the decision into actionable direction for building. It is forward-looking and prescriptive — unlike `synthesis.md`, which is retrospective.

**Acceptance Criteria Quality Check:** Before writing the creative brief, review each Success Criterion from the decision. For each one, apply Riley Tanaka's lens even if Riley is not a sprint participant:
- Is this criterion observable or measurable? (Bad: "Users like it." Good: "80% of users complete the flow without support.")
- Can this criterion be tested within one sprint cycle?
- Is it specific to *this* decision, or is it a generic quality bar?

If any criterion fails the check, rewrite it in the creative brief. Note the original wording and the revised version.

**Output:** Create `research/sprints/sprint-NNN-[topic]/creative-brief.md`:

```yaml
---
title: "Sprint NNN: Creative Brief"
type: sprint-creative-brief
status: complete
date: YYYY-MM-DD
sprint: NNN
decision: "decision.md"
---

**TL;DR:** [One sentence: what are we building, for whom, and why?]

---

## Positioning

[One sentence a stakeholder could repeat. What is this thing?]

## Target User

[Primary persona from PERSONAS.md + their specific context for this feature.]

## The Problem

[The validated problem from decision.md — what's broken today, in plain language.]

## Solution Direction

[What we decided to build, framed as user benefit — not a technical spec.]

## Design Direction

[How should it feel? Which PRINCIPLES.md entries apply? Tone, emotional register, key interactions.]

## Success Criteria

1. [Observable or measurable outcome]
2. [Observable or measurable outcome]
3. [Observable or measurable outcome]

## Constraints

[Technical, brand, timeline — from brief.md constraints plus anything new from the sprint.]

## What This Is NOT

[From decision.md "What We Are NOT Doing" — reframed as guardrails for the people building this.]
```

---

## Phase 4 — Synthesise (Led by Dr. Aris Thorne)

Auto-update the following living documents:
- `research/DECISIONS.md` — Add the decision with a link to `decision.md`.
- `research/sprint-status.md` — Update the sprint row to "Complete" and add participating personas.
- `research/PERSONAS.md` — Update if the sprint revealed new insights about user personas.
- `research/PRINCIPLES.md` — Update if the sprint established new design or technical principles.

**Living Document Update Convention:** Always append to existing tables — do not add new section headers per sprint. `DECISIONS.md` has a decisions table; add a new row. `sprint-status.md` has a status table; add a new row. `PERSONAS.md` has persona entries; update the relevant entry in place. Only create a new section when a new *type* of content is being introduced (e.g., a new persona who has never appeared before).

**Output:** Create the following files in `research/sprints/sprint-NNN-[topic]/`:
- `ideas.md` — ideas and opportunities captured during the sprint
- `synthesis.md` — retrospective synthesis
- `summary.json` — machine-readable output

**Site Asset Pre-Flight:** Before generating any HTML page, verify that `site/styles.css` and `site/layout.js` exist. If either is missing, do not generate the HTML page. Instead, tell the user: "The shared design system files are missing. Run `project-squad site` (or `npx @by-sixteen/project-squad site`) to restore them, then re-run this command."

**Generate sprint HTML page:** Create `site/sprints/sprint-NNN/index.html` — a browsable HTML page rendering the sprint decision, rationale, dissent, and next action. Use the shared design system:
- Link to `../../styles.css` for shared tokens and components
- Link to `../../layout.js` for header and sidebar injection
- Set `<body data-layout="sprint" data-root="../.." data-sprint="NNN">`
- Page-specific styles go in a `<style>` block in `<head>`
- Structure: sprint hero (number + topic + date), decision block (prominent pull-quote), rationale, dissent block, "what we are NOT doing" list, next action, artifacts list
- Create the `site/sprints/sprint-NNN/` directory if it doesn't exist

**Update sprint manifest:** Append an entry to `site/sprints.json`. If the file doesn't exist, create it as a JSON array. Each entry has:
```json
{
  "type": "sprint",
  "id": "sprint-NNN",
  "number": "NNN",
  "topic": "[Topic]",
  "date": "YYYY-MM-DD",
  "status": "complete",
  "decision": "[One-sentence decision from decision.md]",
  "personas": ["[Participating personas]"],
  "href": "sprints/sprint-NNN/index.html"
}
```

**Generating `ideas.md`:** Review `sketches.md` and discussion from all phases. Extract ideas, feature suggestions, and opportunities that were mentioned but not pursued. Record them in `ideas.md`. These are not open questions (unknowns) or rejected alternatives (non-decisions) — they are things worth exploring in future sprints. If no ideas surfaced beyond the sprint scope, record that explicitly.

**`ideas.md` template:**

```yaml
---
title: "Sprint NNN: Ideas & Opportunities"
type: sprint-ideas
status: complete
date: YYYY-MM-DD
sprint: NNN
---

**TL;DR:** [N] ideas captured during this sprint for future exploration.

---

| # | Idea | Source Phase | Suggested By | Priority |
|---|------|-------------|-------------|----------|
| 1 | [Short description] | [Map / Sketch / Decide] | [Persona or User] | [High / Medium / Low] |
| 2 | | | | |
| 3 | | | | |

---

## Notes

[Optional: brief context on the most promising ideas. Keep short — each idea that gets pursued becomes its own sprint or spike.]
```

---

**`synthesis.md` template:**

```yaml
---
title: "Sprint NNN: Synthesis"
type: sprint-synthesis
status: complete
date: YYYY-MM-DD
sprint: NNN
feeds-from: "decision.md"
---

**TL;DR:** [One sentence: what did this sprint decide and what happens next?]

---

## What Changed

[What living documents were updated and why?]

## What the Next Sprint Should Know

1. [Key insight 1]
2. [Key insight 2]
3. [Key insight 3]

## Ideas & Opportunities

[Ideas, feature suggestions, and directions that surfaced during the sprint but weren't the focus. These are not unknowns — they are things worth exploring in future sprints. Reference `ideas.md` for the full list.]

## Open Questions

[Questions that emerged from this sprint but were not answered. Candidates for future spikes.]

---

_Appendix: Full sprint folder at `research/sprints/sprint-NNN-[topic]/`_
```

**`summary.json` template:**

```json
{
  "type": "sprint",
  "sprint_id": "sprint-NNN",
  "topic": "[Topic]",
  "date_completed": "YYYY-MM-DD",
  "long_term_goal": "[The long-term goal from the brief.]",
  "sprint_questions": [
    "[Sprint question 1]",
    "[Sprint question 2]"
  ],
  "key_question_answered": "[The most important sprint question and whether it was answered.]",
  "key_decision": "[One sentence — the decision made.]",
  "squad_participants": [
    "Leo Finch (Visual Designer)",
    "Dr. Lena Petrova (Design Engineer)"
  ],
  "elias_dissent": "[Elias's dissent, or 'None — Elias agreed with the decision.']",
  "living_docs_updated": [
    "research/DECISIONS.md",
    "research/sprint-status.md"
  ],
  "next_action": "[The single most important next step.]",
  "open_questions": [
    "[Open question 1]"
  ],
  "ideas_count": 0,
  "creative_brief": false
}
```

---

## Output Synthesis Rules (Applied to All Files)

All sprint output files must follow these 10 rules:

1. **YAML frontmatter is mandatory** — type, status, date, sprint, tags.
2. **TL;DR or Decision is always the first body section** — never bury the conclusion.
3. **Tables over prose** for structured data (reduces token count by ~30%).
4. **Appendices below a `---` horizontal rule** — clear "stop reading here" signal.
5. **Explicit null values** — "Blockers: None" not an omitted section.
6. **Past tense for decisions** — signals finality.
7. **ADR references inline** — every significant decision links to its record.
8. **Bidirectional links** — in frontmatter (`feeds-into`, `depends-on`) and body.
9. **One sprint question per sprint** — if multiple, rank them.
10. **< 700 lines per file** — if longer, split into multi-file progressive disclosure.

### The "First 20 Lines" Rule

Design every output so an LLM reading only the first 20 lines can determine relevance, extract the key decision, and know where to find detail. YAML frontmatter + TL;DR block must fit within 20 lines.

---

## Verification Checklist

After completing the sprint, verify:
- [ ] `brief.md` has YAML frontmatter + TL;DR within first 20 lines.
- [ ] `sketches.md` has all selected personas represented in their own voice.
- [ ] `decision.md` has Elias Vance's dissent recorded.
- [ ] `ideas.md` has been created (even if "No ideas surfaced beyond the sprint scope").
- [ ] If creative brief was requested: `creative-brief.md` has YAML frontmatter + TL;DR within first 20 lines.
- [ ] If creative brief was requested: Success criteria are measurable or observable — not aspirational.
- [ ] `synthesis.md` has been created.
- [ ] `summary.json` has been created, is valid JSON, and `creative_brief` + `ideas_count` fields are populated.
- [ ] `site/sprints/sprint-NNN/index.html` has been created with shared design system (`styles.css` + `layout.js`).
- [ ] `site/sprints.json` has been updated with the new sprint entry.
- [ ] `research/DECISIONS.md` has been updated.
- [ ] `research/sprint-status.md` has been updated with participating personas.
- [ ] `research/dissent-register.md` has been updated if dissent was significant.

---

**After completing all checklist items, print this to the user:**

```
✓ Sprint NNN complete.

Site updated: site/sprints/sprint-NNN/index.html
Open in browser → file:///[project-root]/site/sprints/sprint-NNN/index.html
```

Substitute the actual sprint number for `NNN` and the absolute path to the project root directory for `[project-root]`.

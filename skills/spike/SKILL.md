---
name: spike
description: >-
  Run a time-boxed Tiger Team spike to answer one specific unknown that is
  blocking a decision or estimate. A spike produces knowledge, not features.
  Use whenever the user wants to investigate a well-defined question before
  committing to a direction — "can we even do X?", "which library should we
  use?", "is this feasible?" — or invokes /spike or /create-spike. One question
  per spike; multiple questions are multiple spikes.
---

# spike — time-boxed investigation

Run a structured, time-boxed investigation to reduce excess uncertainty before committing to development. A spike answers a specific question so a decision can be made or a story estimated.

> **Critical:** Read `${CLAUDE_PLUGIN_ROOT}/team/personas.md` before starting. Assign investigation angles to named Tiger Team personas — never generic roles. Elias Vance must provide a user-impact perspective in the spike output.

## Pre-flight checks

Read `research/DECISIONS.md`, `research/sprint-status.md`, and `research/sprint-backlog.md` (if present). Determine the next spike number from the spikes folder. If the project has no `research/` lane yet, run the **init** skill first.

**Backlog check:** if `research/sprint-backlog.md` has spike candidates with `Status: Candidate`, offer the top one before defining a new spike.

## Step 0 — The spike qualification test

A spike is for **excess** uncertainty — a genuine blocker — not the normal uncertainty in every task. Present:

```
1. Can you confidently estimate the effort required to complete this work?
   (If YES → probably a regular task, not a spike.)

2. Is this uncertainty actively blocking a decision or a larger piece of work?
   (If NO → may not be urgent enough for a spike.)

3. Is the primary goal to gain knowledge, not to ship a feature?
   (If NO → this is a feature, not a spike.)
```

Qualifying answers: No / Yes / Yes. Otherwise: "This looks like a regular development task rather than a spike — I'd recommend a standard story instead. Proceed as a spike anyway, or reframe?"

## Step 1 — Input mode

(A) **Guided Wizard** — the Question Formulation Framework below.
(B) **Paste Content** — extract: core question, blocked decision, known options, constraints, consumer. Present a structured summary to confirm.
(C) **Link** — fetch and apply the Mode B extraction; fall back to A if inaccessible.

### Mode A — Question Formulation Framework

```
Step 1: We need to decide: [DECISION]
Step 2: We cannot decide because we don't know: [UNCERTAINTY]
Step 3: This spike will answer: [QUESTION — specific, testable, time-boxed]
Step 4: Once answered, we will be able to: [NEXT ACTION — what gets unblocked]
```

Then collect:
- **Spike type:** Technical (feasibility, architecture, integration) · Functional (how a feature should behave) · Design (visual direction, UX approach) · Research (user needs, market context)
- **Acceptance criteria** — knowledge outcomes, NOT task lists: "We will know whether [X]" / "We will have decided between [A] and [B]" / "We will have a [prototype / ADR / comparison matrix] showing [X]."
- **Timebox** — default 2 days, proportional to the uncertainty. Can't answer in 2 days → the question is too broad; split it.
- **Constraints** — tech stack, budget, compliance, team skills.
- **Known options** — A vs. B to compare, or options to be discovered.
- **What we already know** — prior decisions and ruled-out options; don't re-investigate the settled.
- **Expected output format** — ADR · comparison matrix · proof-of-concept · recommendation doc · benchmark report.
- **Consumer** — who needs this answer; what story, decision, or sprint is waiting.

## Step 2 — Persona assignment

| Spike type | Recommended personas |
|---|---|
| Technical | Dr. Lena Petrova, Marcus Thorne, Kira Sharma |
| Functional | Ines Alvarez, Dr. Lena Petrova, Kira Sharma |
| Design | Ines Alvarez, Leo Finch, Rowan Vale, Dr. Lena Petrova |
| Research | Nara Shin, Dr. Aris Thorne, Elias Vance |

Confirm or adjust with the user. Specialists: `${CLAUDE_PLUGIN_ROOT}/team/specialists.md` — additive only.

## Step 3 — Investigation phase

Each assigned persona contributes their investigation angle, in their voice.

**Output:** `research/spikes/spike-NNN-[topic]/brief.md`:

```yaml
---
title: "Spike NNN: [Question]"
type: spike-brief
status: in-progress
date: YYYY-MM-DD
spike-type: technical | functional | design | research
timebox: "2 days"
question: "[The specific question this spike will answer.]"
consumer: "[Story or decision waiting on this answer.]"
personas: [lena, marcus, kira]
depends-on: []
feeds-into: []
tags: []
---

**TL;DR:** [One sentence: what question is this spike answering and why does it matter?]

---

## The Question

[The specific, testable question.]

## Why We Need to Know

We need to decide: [DECISION]
We cannot decide because: [UNCERTAINTY]
Once answered, we will be able to: [NEXT ACTION]

## Acceptance Criteria

- We will know whether [X].
- We will have decided between [A] and [B].
- We will have a [output format] showing [X].

## Timebox

[N days. Start: YYYY-MM-DD. End: YYYY-MM-DD.]

## Constraints

[List constraints.]

## Known Options

[List, or "Options to be discovered during investigation."]

## What We Already Know

[Prior decisions, ruled-out options, existing research.]

---

## Investigation Angles

### [Persona Name] — [Persona Role]
> "[Signature question]"

[What they will look at and try to answer from their lens.]
```

## Transition check

Before synthesising: (1) the original question has been directly addressed; (2) the confidence level is supported by the evidence; (3) scope held — no expansion beyond the question. Pause and tell the user if any check fails.

**Dissent handling:** if Elias Vance's perspective is overruled or deprioritised, record it in `research/dissent-register.md` with a review trigger — consistent with sprints and workshops.

## Step 4 — Spike output (answer-first)

The answer comes first. Never bury the conclusion.

**Output:** `research/spikes/spike-NNN-[topic]/output.md`:

```yaml
---
title: "Spike NNN: [Question] — Output"
type: spike-output
status: complete
date: YYYY-MM-DD
spike-type: technical | functional | design | research
timebox: "2 days"
question: "[The specific question.]"
answer: "[One-sentence answer — yes/no/option chosen/recommendation.]"
confidence: high | medium | low
consumer: "[Story or decision now unblocked.]"
adr: "[Path to ADR if produced, or 'None'.]"
tags: []
---

**Answer:** [One sentence — the conclusion, stated directly.]

---

## Recommendation

[What should the team do next, based on this answer?]

## Evidence

| Option | Pros | Cons | Verdict |
|--------|------|------|---------|
| [A] | ... | ... | [Chosen / Rejected] |
| [B] | ... | ... | [Chosen / Rejected] |

## Constraints Discovered

[Things we didn't know before the spike.]

## Decision

[The chosen option, past tense. Link to ADR if produced.]

## Validation Recommendation *(only if confidence is medium or low)*

[What evidence would raise confidence to high? Cheapest test? Timeline? This is the handoff to whoever picks up the work.]

---

_Appendix: Raw Research_

[Full notes, links, raw data below this line — the "stop reading here" signal.]
```

**`summary.json`:**

```json
{
  "type": "spike",
  "spike_id": "spike-NNN",
  "topic": "[Topic]",
  "spike_type": "technical | functional | design | research",
  "date_completed": "YYYY-MM-DD",
  "question": "[The question answered.]",
  "answer": "[One-sentence answer.]",
  "confidence": "high | medium | low",
  "summary_of_findings": "[2–3 sentences.]",
  "adr_reference": "[Path, or 'None'.]",
  "unblocked_work": "[The story, decision, or sprint now unblocked.]",
  "constraints_discovered": ["[Constraint 1]"],
  "squad_participants": ["Dr. Lena Petrova (Design Engineer)"]
}
```

## Output synthesis rules

Same 10 rules as sprint outputs (see the sprint skill). Spike-critical:
- **One question per spike.** Multiple questions → multiple spikes.
- **Answer is always the first body section.**
- **Raw research below the `---` rule.**
- **ADR reference mandatory** for significant technical decisions.
- **`summary.json` mandatory** — future pre-flights read it.

## Site page

Verify `site/styles.css` and `site/layout.js` exist; if missing, copy from `${CLAUDE_PLUGIN_ROOT}/assets/site/`. Create `site/spikes/spike-NNN/index.html` (hero, question block, answer block with confidence badge, evidence table, constraints, unblocked work, artifacts; `<body data-layout="spike" data-root="../.." data-spike="NNN">`). Append to `site/sprints.json`:

```json
{
  "type": "spike",
  "id": "spike-NNN",
  "number": "SNNN",
  "topic": "[Topic]",
  "date": "YYYY-MM-DD",
  "status": "complete",
  "decision": "[One-sentence answer from output.md]",
  "confidence": "high | medium | low",
  "href": "spikes/spike-NNN/index.html"
}
```

## Verification checklist

Update living documents: `research/sprint-status.md` (spike row) · `research/sprint-backlog.md` (mark Done if from backlog) · `research/DECISIONS.md` (if a decision was made) · `research/dissent-register.md` (if Elias overruled).

- [ ] `brief.md` — frontmatter + TL;DR within first 20 lines.
- [ ] `output.md` — Answer first; raw research below a `---` rule.
- [ ] Elias Vance's perspective included (all spike types).
- [ ] `summary.json` valid JSON.
- [ ] Site page created; `site/sprints.json` updated.
- [ ] ADR created in `docs/decisions/` if warranted.
- [ ] The spike branch (if used) has NOT been merged to `main` or `dev`.

Then print:

```
✓ Spike NNN complete.

Site updated: site/spikes/spike-NNN/index.html
Open in browser → file:///[project-root]/site/spikes/spike-NNN/index.html
```

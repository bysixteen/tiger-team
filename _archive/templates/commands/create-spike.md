---
name: create-spike
description: Run a time-boxed Project Squad spike to answer a specific unknown. Use when the user runs /create-spike or wants to investigate a single well-defined question before committing to a direction.
argument-hint: "[specific question to answer]"
disable-model-invocation: true
allowed-tools: Read, Write, Edit, Glob
---

# Command: /create-spike

## Purpose

Run a structured, time-boxed investigation to reduce excess uncertainty before committing to development. A spike produces knowledge, not features. It answers a specific question so that a decision can be made or a story can be estimated.

> **CRITICAL:** Read `.squad/project-squad.md` before starting. Assign investigation angles to named Project Squad personas — never use generic roles (Researcher, Analyst, Engineer, etc.). Elias Vance must provide a perspective on user impact in the spike output.

---

## Pre-Flight Checks

Before starting, read the following living documents:
- `research/DECISIONS.md`
- `research/sprint-status.md`
- `research/sprint-backlog.md` (if it exists)

Determine the next spike number from the spikes folder.

**Sprint Backlog Check:** If `research/sprint-backlog.md` exists and has spike candidates with `Status: Candidate`, present the top candidate(s) to the user and ask: "Your sprint backlog has a spike candidate ready: [topic]. Would you like to investigate this, or define a new spike?"

---

## Step 0 — The Spike Qualification Test

Before proceeding, run this three-question test to confirm that a spike is the right tool. If the answers don't qualify, suggest a regular task or story instead.

Present the following:

```
Before we start, let's confirm this is the right tool for the job.

A spike is for excess uncertainty — a genuine blocker to estimation or decision-making.
It is not for normal uncertainty, which is part of every development task.

Answer these three questions:

1. Can you confidently estimate the effort required to complete this work?
   (If YES → this is probably a regular task, not a spike.)

2. Is this uncertainty actively blocking a decision or a larger piece of work?
   (If NO → this may not be urgent enough for a spike.)

3. Is the primary goal to gain knowledge, not to ship a feature?
   (If NO → this is a feature, not a spike.)
```

**If the answers qualify (No / Yes / Yes):** Proceed to Step 1.
**If the answers don't qualify:** Respond with: "Based on your answers, this looks like a regular development task rather than a spike. A spike is specifically for excess uncertainty that blocks estimation or decision-making. I'd recommend creating a standard user story instead. Would you like to proceed as a spike anyway, or shall we reframe this as a task?"

---

## Step 1 — Input Mode

```
How do you want to provide context for this spike?

(A) Guided Wizard — I'll walk you through the Question Formulation Framework.
(B) Paste Content — Share notes, a Slack thread, or a brief and I'll extract the key inputs.
(C) Link — Provide a URL and I'll read it and extract the key inputs.
```

---

## Input Mode Behaviour

### Mode A — Guided Wizard (Question Formulation Framework)

Walk the user through this framework to build a precise, answerable spike question:

```
Step 1: We need to decide: [DECISION]
Step 2: We cannot decide because we don't know: [UNCERTAINTY]
Step 3: This spike will answer: [QUESTION — specific, testable, time-boxed]
Step 4: Once answered, we will be able to: [NEXT ACTION — what gets unblocked]
```

After the framework, collect:

**Spike Type:**
> "What type of spike is this?"
> - Technical (feasibility, architecture, integration)
> - Functional (how a feature should behave)
> - Design (visual direction, UX approach)
> - Research (user needs, market context)

**Acceptance Criteria (Knowledge Outcomes, NOT task lists):**
> "How will you know the spike is complete? Define knowledge outcomes, not deliverables."
> Examples:
> - "We will know whether [X] is technically feasible."
> - "We will have decided between [A] and [B]."
> - "We will have a [prototype / ADR / comparison matrix] showing [X]."

**Timebox:**
> "How long should this spike run? Default is 2 days. Suggest based on complexity."
> Rule: The timebox should be proportional to the uncertainty. If you can't answer the question in 2 days, the question is probably too broad — split it into two spikes.

**Constraints:**
> "What constraints apply? Tech stack, budget, compliance, team skills."

**Known Options:**
> "Are there specific options to compare (A vs. B), or should the spike discover the options?"

**What We Already Know:**
> "What prior decisions or ruled-out options are relevant? Don't re-investigate what's already settled."

**Expected Output Format:**
> "What format should the spike produce?"
> - ADR (Architecture Decision Record)
> - Comparison matrix
> - Proof-of-concept
> - Recommendation document
> - Benchmark report

**Consumer:**
> "Who needs this answer? What story, decision, or sprint is waiting on this spike?"

---

### Mode B — Paste Content

Accept raw, unstructured text. Extract:
- The core question
- The decision being blocked
- Any known options
- Constraints mentioned
- The consumer (what's waiting on this)

Present a structured summary and ask the user to confirm or correct.

---

### Mode C — Link

Fetch the URL. Apply the same extraction logic as Mode B. Fall back to Mode A if inaccessible.

---

## Step 2 — Persona Assignment

Based on the spike type, suggest the appropriate Project Squad personas from `.squad/project-squad.md`:

| Spike Type | Recommended Personas |
|---|---|
| Technical | Dr. Lena Petrova, Marcus Thorne, Kira Sharma |
| Functional | Ines Alvarez, Dr. Lena Petrova, Kira Sharma |
| Design | Ines Alvarez, Leo Finch, Rowan Vale, Dr. Lena Petrova |
| Research | Nara Shin, Dr. Aris Thorne, Elias Vance |

Ask the user to confirm or adjust the selection. Are any specialists needed? Check `.squad/specialists.md` for available specialist roles. Specialists are additive — they supplement the core squad and do not replace a persona.

---

## Step 3 — Investigation Phase

Each assigned persona contributes their investigation angle to the brief. Generate these perspectives in the persona's voice.

**Output:** Create `research/spikes/spike-NNN-[topic]/brief.md` using the following template:

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

[The specific, testable question this spike will answer.]

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

[List known options, or "Options to be discovered during investigation."]

## What We Already Know

[Prior decisions, ruled-out options, existing research.]

---

## Investigation Angles

### [Persona Name] — [Persona Role]
> "[Signature question]"

[Their investigation angle — what they will look at, what questions they will try to answer from their specific lens.]

### [Persona Name] — [Persona Role]
> "[Signature question]"

[Their investigation angle.]
```

---

## Transition Check

Before synthesising findings, verify:
1. **Question addressed:** The original spike question has been directly addressed by the investigation.
2. **Evidence supports confidence:** The confidence level is supported by the evidence gathered.
3. **Scope held:** The investigation has not expanded beyond the original question.

If any check fails, pause and inform the user before proceeding.

**Dissent Handling:** If Elias Vance's perspective is overruled or deprioritised, record the dissent in `research/dissent-register.md` with a review trigger, consistent with the sprint and workshop commands.

---

## Step 4 — Spike Output (Answer-First Structure)

After the investigation is complete, produce the final output file. The answer must come first. Never bury the conclusion.

**Output:** Create `research/spikes/spike-NNN-[topic]/output.md` using the following template:

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
consumer: "[Story or decision that is now unblocked.]"
adr: "[Path to ADR if one was produced, or 'None'.]"
tags: []
---

**Answer:** [One sentence — the conclusion, stated directly.]

---

## Recommendation

[What should the team do next, based on this answer?]

## Evidence

[Comparison tables, benchmark data, proof-of-concept results. Use tables over prose.]

| Option | Pros | Cons | Verdict |
|--------|------|------|---------|
| [A] | ... | ... | [Chosen / Rejected] |
| [B] | ... | ... | [Chosen / Rejected] |

## Constraints Discovered

[Things we didn't know before the spike that the team needs to be aware of.]

## Decision

[The chosen option, stated in past tense. Link to ADR if produced.]

## Validation Recommendation *(include only if confidence is "medium" or "low")*

[What specific evidence would raise confidence to "high"? What is the cheapest test to run? What is the timeline for that test? This section is the handoff to whoever picks up the work after the spike.]

---

_Appendix: Raw Research_

[Full notes, links, and raw data below this line. This is the "stop reading here" signal for LLMs.]
```

**`summary.json` template:**

```json
{
  "type": "spike",
  "spike_id": "spike-NNN",
  "topic": "[Topic]",
  "spike_type": "technical | functional | design | research",
  "date_completed": "YYYY-MM-DD",
  "question": "[The specific question this spike answered.]",
  "answer": "[One-sentence answer.]",
  "confidence": "high | medium | low",
  "summary_of_findings": "[2-3 sentences summarising what was discovered.]",
  "adr_reference": "[Path to ADR, or 'None'.]",
  "unblocked_work": "[The story, decision, or sprint that is now unblocked.]",
  "constraints_discovered": [
    "[Constraint 1]"
  ],
  "squad_participants": [
    "Dr. Lena Petrova (Design Engineer)",
    "Marcus Thorne (Senior Developer)"
  ]
}
```

---

## Output Synthesis Rules

All spike output files must follow the same 10 rules as sprint outputs (see `create-sprint.md`). Key rules for spikes:

- **One question per spike.** If you have multiple questions, create multiple spikes.
- **Answer is always the first body section.** Never bury the conclusion.
- **Raw research goes below the `---` rule.** This is the "stop reading here" signal.
- **ADR reference is mandatory** if a significant technical decision was made.
- **`summary.json` is mandatory.** This is the machine-readable summary for future context.

**Site Asset Pre-Flight:** Before generating any HTML page, verify that `site/styles.css` and `site/layout.js` exist. If either is missing, do not generate the HTML page. Instead, tell the user: "The shared design system files are missing. Run `project-squad site` (or `npx @by-sixteen/project-squad site`) to restore them, then re-run this command."

**Generate spike HTML page:** Create `site/spikes/spike-NNN/index.html` — a browsable HTML page rendering the spike question, answer, evidence, and constraints. Use the shared design system:
- Link to `../../styles.css` for shared tokens and components
- Link to `../../layout.js` for header and sidebar injection
- Set `<body data-layout="spike" data-root="../.." data-spike="NNN">`
- Structure: spike hero (number + topic + date), question block (purple), answer block (green with confidence badge), evidence table, constraints discovered, unblocked work, artifacts list
- Create the `site/spikes/spike-NNN/` directory if it doesn't exist

**Update sprint manifest:** Append an entry to `site/sprints.json`. If the file doesn't exist, create it as a JSON array. Each entry has:
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

---

## Verification Checklist

After completing the spike, update the following living documents:
- **`research/sprint-status.md`** — Add a row for this spike (type: spike, status: complete).
- **`research/sprint-backlog.md`** — If this spike originated from the backlog, mark the entry as Done.
- **`research/DECISIONS.md`** — Add the decision if one was made.
- **`research/dissent-register.md`** — If Elias's perspective was overruled, log with a review trigger.

Then verify:
- [ ] `brief.md` has YAML frontmatter + TL;DR within first 20 lines.
- [ ] `output.md` has the Answer as the first body section.
- [ ] `output.md` has raw research below a `---` horizontal rule.
- [ ] Elias Vance's perspective is included (mandatory for all spike types).
- [ ] `summary.json` has been created and is valid JSON.
- [ ] `site/spikes/spike-NNN/index.html` has been created with shared design system (`styles.css` + `layout.js`).
- [ ] `site/sprints.json` has been updated with the new spike entry.
- [ ] `research/sprint-status.md` has been updated with the spike row.
- [ ] `research/DECISIONS.md` has been updated if a decision was made.
- [ ] ADR has been created in `docs/decisions/` if a significant technical decision was made.
- [ ] The spike branch (if used) has NOT been merged to `main` or `dev`.

---

**After completing all checklist items, print this to the user:**

```
✓ Spike NNN complete.

Site updated: site/spikes/spike-NNN/index.html
Open in browser → file:///[project-root]/site/spikes/spike-NNN/index.html
```

Substitute the actual spike number for `NNN` and the absolute path to the project root directory for `[project-root]`.

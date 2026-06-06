---
name: workshop
description: >-
  Run a compressed 2–3 hour Tiger Team workshop to stress-test a decision under
  time pressure — the team already has a leading option and needs alignment
  fast. Use whenever the user needs a quick structured decision, says "workshop
  this", "stress-test this decision", "we need to decide by tomorrow", or
  invokes /workshop or /create-workshop. If the question is open-ended or the
  solution space is unexplored, route to the sprint skill instead.
---

# workshop — compressed decision stress-test

Run a compressed, time-boxed sprint when a decision is needed quickly and the full sprint format is not appropriate.

> **Critical:** Read `${CLAUDE_PLUGIN_ROOT}/team/personas.md` before starting. Use the Tiger Team personas by name — never generic roles. Elias Vance must participate in the Decide step of every workshop.

**Time:** 2–3 hours (vs. half-day for a Full Sprint)
**Output:** `workshop.md` + `summary.json` — same machine-readable format as a sprint, compatible with all pre-flight checks.

## Workshop vs. sprint — when to use which

| Situation | Use |
|---|---|
| High-stakes decision, complex solution space, first exploration | sprint (Full) |
| Lower-stakes refinement, constrained space, team aligned on direction | sprint (Lite) |
| **Time pressure, alignment needed fast, decision partially formed, stakeholder deadline** | **workshop** |
| Specific technical unknown blocking progress | spike |

**Trigger conditions** — run a workshop when at least two are true:
1. A decision is needed within 24–48 hours.
2. The team already has a leading option — the workshop stress-tests it, not discovers it.
3. A stakeholder, client, or deadline is forcing a decision before a full sprint is practical.
4. The question is well-defined but the team has not formally aligned on the answer.
5. A previous sprint's synthesis raised a follow-up question needing a quick answer.

**Do not use a workshop to shortcut a genuinely complex problem.** If you cannot articulate the decision in one sentence, run a sprint.

## Pre-flight check

Read (and report a one-paragraph context summary before proceeding):
1. `research/PERSONAS.md` — who are we designing for?
2. `research/PRINCIPLES.md` — what constraints apply?
3. `research/DECISIONS.md` — what relevant calls already exist?
4. `research/dissent-register.md` — any overruled concerns whose review trigger matches this topic?
5. `research/sprint-backlog.md` — is this addressing a backlog candidate?

If the project has no `research/` lane yet, run the **init** skill first.

## Step 1 — Define the decision

A workshop has one job: produce a decision. Ask: "What is the one decision this workshop needs to produce?"

The answer must be binary or multiple-choice, not open-ended. Good: "Option A or B for [feature]?" · "Proceed with [approach] or pause for research?" · "Which of these three designs?" Open-ended ("How should we approach X?") → suggest a sprint.

Record:

```yaml
decision_question: "[The decision, phrased as a question with a finite answer set]"
options: ["[Option A]", "[Option B]", "[Option C if applicable]"]
deadline: "YYYY-MM-DD"
trigger: "[Which trigger condition(s) applied]"
```

## Step 2 — Compressed map (15 minutes)

Skip the full journey map. Answer three questions only, output as a `## Context` block:
1. **Who is affected?** (Name the primary persona from `PERSONAS.md`.)
2. **What is the moment?** (The specific user moment this decision affects.)
3. **What is the risk of getting it wrong?** (One sentence.)

## Step 3 — Rapid perspectives (30 minutes)

**Elias Vance is mandatory in all workshops.** Select 2–4 additional personas — not all nine:

| Always include | Include if relevant |
|---|---|
| Elias Vance (Mandatory Dissent) | Leo Finch (visual/brand decision) |
| Dr. Aris Thorne (strategic framing) | Dr. Lena Petrova (technical decision) |
| Marcus Thorne (scope/constraints) | Kira Sharma (implementation detail) |
| | Nara Shin (evidence/research needed) |
| | Ines Alvarez (UX/interaction decision) |

Specialists: check `${CLAUDE_PLUGIN_ROOT}/team/specialists.md` — additive only.

Ground Elias's perspective in the client personas from `research/PERSONAS.md` by name — their stated goals and frustrations, not generic user advocacy.

Each persona gets a **single paragraph (75–100 words)** in their voice — immediate reaction to the decision question and options. No sketches, no extended exploration.

```markdown
### [Persona Name] — [Role]
> "[Signature question]"

[One paragraph — their position on the decision, in their voice.]
```

## Transition check

Before Decide, verify: all assigned personas contributed; perspectives address the decision question (not adjacent concerns); no persona has fundamentally reframed the question. If reframed, pause: "The perspectives suggest the real question might be [reframed]. Proceed with the original, or adjust?"

## Step 4 — Decide (15 minutes)

Present the options with perspectives alongside. Ask which option to proceed with. If undecided, Elias casts the deciding question: "Which option most directly solves the problem for [primary persona]?"

Record the decision. If Elias was overruled, log it in `research/dissent-register.md` with a review trigger.

## Step 5 — Synthesise

**Output:** `research/workshops/workshop-NNN-[topic]/workshop.md`:

```yaml
---
title: "Workshop NNN: [Decision Question]"
type: workshop
status: complete
date: YYYY-MM-DD
decision_question: "[The decision question]"
decision: "[The chosen option — one sentence, past tense]"
options_considered: ["[Option A]", "[Option B]"]
trigger: "[Workshop trigger condition(s)]"
personas: [aris, marcus, elias]
adr: ""
feeds-into: []
depends-on: []
tags: []
---

**TL;DR:** [One sentence: what was decided and why.]

---

## Context

**Who is affected:** [Primary persona + one sentence]
**The moment:** [The specific user moment]
**Risk of getting it wrong:** [One sentence]

## Decision

**We chose:** [Option chosen]

**Rationale:** [2–3 sentences]

**Rejected:** [Option(s) not chosen + one-line reason each]

## Persona Perspectives

### [Persona Name] — [Role]
> "[Signature question]"

[Their paragraph]

### Elias Vance — Client (External) ⚠️ MANDATORY DISSENT
> "Does this solve a real problem for my users?"

[His paragraph — even if aligned, he must articulate why the chosen option serves the user]

## Conditions and Risks

[Conditions on the decision — "This holds unless X". Risks to monitor.]

## Next Action

[What happens next.]

## Ideas & Opportunities

| # | Idea | Suggested By |
|---|------|-------------|
| 1 | | |
```

**`summary.json`:**

```json
{
  "type": "workshop",
  "workshop_id": "workshop-NNN",
  "topic": "[Topic]",
  "date_completed": "YYYY-MM-DD",
  "decision_question": "[The decision question]",
  "decision": "[The chosen option — one sentence]",
  "options_considered": ["[Option A]", "[Option B]"],
  "trigger": "[Workshop trigger condition(s)]",
  "rationale": "[2–3 sentence rationale]",
  "elias_dissent": "[Elias's position — 'Aligned' or summary of concern]",
  "dissent_logged": true,
  "next_action": "[What happens next]",
  "squad_participants": ["Dr. Aris Thorne (Strategist)", "Elias Vance (Client)"]
}
```

## Step 6 — Update living documents

1. `research/DECISIONS.md` — add the decision with a reference to the workshop folder. If the host project keeps its own decision log (e.g. `docs/decisions.md`), graduate the decision there — the research copy records provenance.
2. `research/sprint-status.md` — add a row (type: workshop).
3. `research/dissent-register.md` — overruled dissent gets a review trigger.
4. `research/PERSONAS.md` / `research/PRINCIPLES.md` — only if the workshop revealed new information.

Append to existing tables; never per-workshop section headers. Significant technical decision → ADR in `docs/decisions/`, set the `adr:` frontmatter field.

## Step 7 — Generate site page

Verify `site/styles.css` and `site/layout.js` exist in the project; if missing, copy them from `${CLAUDE_PLUGIN_ROOT}/assets/site/`. Create `site/workshops/workshop-NNN/index.html` (hero, decision pull-quote, rationale, Elias's position, next action, artifacts; `<body data-layout="workshop" data-root="../.." data-workshop="NNN">`, link `../../styles.css` + `../../layout.js`). Append to `site/sprints.json`:

```json
{
  "type": "workshop",
  "id": "workshop-NNN",
  "number": "NNN",
  "topic": "[Decision topic]",
  "date": "YYYY-MM-DD",
  "status": "complete",
  "decision": "[One-sentence decision]",
  "personas": ["[Participating personas]"],
  "href": "workshops/workshop-NNN/index.html"
}
```

## Verification checklist

- [ ] `workshop.md` — frontmatter + TL;DR within first 20 lines; decision in past tense.
- [ ] Elias Vance's perspective included; overruled dissent logged with review trigger.
- [ ] `summary.json` valid JSON.
- [ ] Site page created; `site/sprints.json` updated.
- [ ] `research/DECISIONS.md` + `research/sprint-status.md` updated.
- [ ] ADR created if a significant technical decision was made.

Then print:

```
✓ Workshop NNN complete.

Site updated: site/workshops/workshop-NNN/index.html
Open in browser → file:///[project-root]/site/workshops/workshop-NNN/index.html
```

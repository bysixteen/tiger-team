---
name: create-workshop
description: Run a compressed 2-3 hour Project Squad workshop to stress-test a decision under time pressure. Use when the user runs /create-workshop or needs a fast decision and the full sprint format is not practical.
argument-hint: "[decision or question to stress-test]"
disable-model-invocation: true
allowed-tools: Read, Write, Edit, Glob
---

# /create-workshop

**Purpose:** Run a compressed, time-boxed design sprint when a decision is needed quickly and the full sprint format is not appropriate.

> **CRITICAL:** Read `.squad/project-squad.md` before starting. Use the Project Squad personas by name — never substitute generic roles (Designer, Engineer, Challenger, etc.). Elias Vance must participate in the Decide phase of every workshop.

**Time:** 2–3 hours (vs. half-day for a Full Sprint)

**Output:** A `workshop.md` synthesis document and `summary.json` — same machine-readable format as a sprint, compatible with all pre-flight checks.

---

## Workshop vs. Sprint — When to use which

| Situation | Use |
|---|---|
| High-stakes decision, complex solution space, first time exploring this territory | `/create-sprint` (Full) |
| Lower-stakes refinement, constrained solution space, team already aligned on direction | `/create-sprint` (Lite) |
| **Time pressure, alignment needed fast, decision partially formed, stakeholder deadline** | `/create-workshop` |
| Specific technical unknown blocking progress | `/create-spike` |

**The Workshop Trigger Conditions.** Use `/create-workshop` when at least two of the following are true:

1. A decision is needed within 24–48 hours.
2. The team already has a leading option — the workshop is to stress-test it, not discover it.
3. A stakeholder, client, or deadline is forcing a decision before a full sprint is practical.
4. The question is well-defined but the team has not formally aligned on the answer.
5. A previous sprint's synthesis raised a follow-up question that needs a quick answer.

**Do not use `/create-workshop` to shortcut a genuinely complex problem.** If you cannot articulate the decision in one sentence, run a full sprint instead.

---

## Pre-flight Check

Before running the workshop, read:

1. `research/PERSONAS.md` — who are we designing for?
2. `research/PRINCIPLES.md` — what constraints apply?
3. `research/DECISIONS.md` — what has already been decided that is relevant?
4. `research/dissent-register.md` — are there any overruled concerns with a review trigger that matches this topic?
5. `research/sprint-backlog.md` — is this workshop addressing a backlog candidate?

Report a one-paragraph context summary to the user before proceeding.

---

## Step 1 — Define the Decision

A workshop has one job: produce a decision. Ask the user:

> "What is the one decision this workshop needs to produce?"

The answer must be a binary or multiple-choice decision, not an open-ended question. If it is open-ended, suggest a full sprint instead.

**Good workshop decisions:**
- "Should we use Option A or Option B for [feature]?"
- "Do we proceed with [approach] or pause for more research?"
- "Which of these three designs do we move forward with?"

**Not a workshop decision (run a sprint instead):**
- "How should we approach [feature]?"
- "What should [feature] look like?"

Once confirmed, record:

```yaml
decision_question: "[The decision, phrased as a question with a finite answer set]"
options: ["[Option A]", "[Option B]", "[Option C if applicable]"]
deadline: "YYYY-MM-DD"
trigger: "[Which trigger condition(s) applied — see above]"
```

---

## Step 2 — Compressed Map (15 minutes)

Skip the full journey map. Instead, answer three questions only:

1. **Who is affected?** (Reference `PERSONAS.md` — name the primary persona.)
2. **What is the moment?** (The specific user moment this decision affects.)
3. **What is the risk of getting it wrong?** (One sentence — what breaks if we choose badly?)

Output these three answers as a `## Context` block in the workshop document.

---

## Step 3 — Rapid Perspectives (30 minutes)

**Elias Vance is mandatory in all workshops** (Key Rule 4). Select 2–4 additional personas from the table below. You do not need all nine.

When generating Elias's perspective, reference the client personas in `research/PERSONAS.md` by name. His dissent should be grounded in their specific goals and frustrations, not generic user advocacy.

| Always include | Include if relevant |
|---|---|
| Elias Vance (Mandatory Dissent) | Leo Finch (if visual/brand decision) |
| Dr. Aris Thorne (strategic framing) | Dr. Lena Petrova (if technical decision) |
| Marcus Thorne (scope/constraints) | Kira Sharma (if implementation detail) |
| | Nara Shin (if evidence/research needed) |
| | Ines Alvarez (if UX/interaction decision) |

Are any specialists needed? Check `.squad/specialists.md` for available specialist roles. Specialists are additive — they supplement the core squad and do not replace a persona.

For each assigned persona, generate a **single paragraph (75–100 words)** in their voice. No sketches. No extended exploration. Just their immediate reaction to the decision question and the options on the table.

**Format:**

```markdown
### [Persona Name] — [Role]
> "[Signature question]"

[One paragraph — their position on the decision, in their voice.]
```

---

## Transition Check

Before moving to the Decide step, verify:
- All assigned personas have contributed their perspective.
- The perspectives actually address the decision question (not adjacent concerns).
- No persona has raised an issue that fundamentally reframes the decision question.

If the decision question has been reframed by the perspectives, pause:
> "The perspectives suggest the real question might be [reframed question]. Should we proceed with the original question, or adjust?"

---

## Step 4 — Decide (15 minutes)

Present the options with the persona perspectives alongside them. Ask the user:

> "Based on these perspectives, which option do you want to proceed with?"

If the user is undecided, ask Elias Vance to cast the deciding question:

> "Elias asks: 'Which of these options most directly solves the problem for [primary persona]?' Does that change your view?"

Record the decision. If Elias's perspective was overruled, log it in `research/dissent-register.md` with a review trigger.

---

## Step 5 — Synthesise

**Output:** Create `research/workshops/workshop-NNN-[topic]/workshop.md` using the following template:

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

**Who is affected:** [Primary persona name and one-sentence description]
**The moment:** [The specific user moment this decision affects]
**Risk of getting it wrong:** [One sentence]

## Decision

**We chose:** [Option chosen]

**Rationale:** [2–3 sentences — why this option, what made it the right call]

**Rejected:** [Option(s) not chosen and the one-line reason for each]

## Persona Perspectives

### [Persona Name] — [Role]
> "[Signature question]"

[Their paragraph]

### [Persona Name] — [Role]
> "[Signature question]"

[Their paragraph]

### Elias Vance — Client (External) ⚠️ MANDATORY DISSENT
> "Does this solve a real problem for my users?"

[His paragraph — even if aligned, he must articulate why the chosen option serves the user]

## Conditions and Risks

[Any conditions on the decision — "This holds unless X". Any risks to monitor.]

## Next Action

[What happens next as a result of this decision.]

## Ideas & Opportunities

[Ideas that surfaced during the workshop but weren't the focus of the decision. Keep brief — each one that gets pursued becomes its own sprint or spike.]

| # | Idea | Suggested By |
|---|------|-------------|
| 1 | | |
```

**`summary.json` template:**

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
  "squad_participants": [
    "Dr. Aris Thorne (Strategist)",
    "Marcus Thorne (Senior Developer)",
    "Elias Vance (Client)"
  ]
}
```

---

## Step 6 — Update Living Documents

After writing the workshop output, update the following living documents:

1. **`research/DECISIONS.md`** — Add the decision with a reference to the workshop folder.
2. **`research/sprint-status.md`** — Add a row for this workshop (type: workshop).
3. **`research/dissent-register.md`** — If Elias's dissent was overruled, log it with a review trigger condition.
4. **`research/PERSONAS.md`** — If the workshop revealed new information about a client persona, update their entry.
5. **`research/PRINCIPLES.md`** — If the workshop surfaced new design or technical principles, update.

**Living Document Update Convention:** Always append to existing tables — do not add new section headers per workshop. `DECISIONS.md` has a decisions table; add a new row. `sprint-status.md` has a status table; add a new row. `PERSONAS.md` has persona entries; update the relevant entry in place. Only create a new section when a new *type* of content is being introduced (e.g., a new persona who has never appeared before).

If a significant technical decision was made, create an ADR in `docs/decisions/` and set the `adr:` field in the workshop frontmatter.

---

## Step 7 — Generate Site

**Site Asset Pre-Flight:** Before generating any HTML page, verify that `site/styles.css` and `site/layout.js` exist. If either is missing, do not generate the HTML page. Instead, tell the user: "The shared design system files are missing. Run `project-squad site` (or `npx @by-sixteen/project-squad site`) to restore them, then re-run this command."

**Generate workshop HTML page:** Create `site/workshops/workshop-NNN/index.html` — a browsable HTML page rendering the workshop decision, rationale, Elias's position, and next action. Use the shared design system:
- Link to `../../styles.css` for shared tokens and components
- Link to `../../layout.js` for header and sidebar injection
- Set `<body data-layout="workshop" data-root="../.." data-workshop="NNN">`
- Page-specific styles go in a `<style>` block in `<head>`
- Structure: workshop hero (number + decision topic + date), decision block (prominent pull-quote), rationale, Elias's position, next action, artifacts list
- Create the `site/workshops/workshop-NNN/` directory if it doesn't exist

**Update sprint manifest:** Append an entry to `site/sprints.json`. If the file doesn't exist, create it as a JSON array. Each entry has:
```json
{
  "type": "workshop",
  "id": "workshop-NNN",
  "number": "NNN",
  "topic": "[Decision topic]",
  "date": "YYYY-MM-DD",
  "status": "complete",
  "decision": "[One-sentence decision from workshop.md]",
  "personas": ["[Participating personas]"],
  "href": "workshops/workshop-NNN/index.html"
}
```

---

## Output Synthesis Rules

Workshop outputs follow the same 10 rules as sprint and spike outputs. Key rules:

- **TL;DR is always the first body section.**
- **Decision is stated in past tense** — signals finality.
- **Elias Vance must always appear**, even in a compressed format.
- **`summary.json` is mandatory** — future sprint pre-flights read this.
- **If a significant technical decision was made**, create an ADR in `docs/decisions/`.

---

## Verification Checklist

After completing the workshop, verify:

- [ ] `workshop.md` has YAML frontmatter + TL;DR within first 20 lines.
- [ ] Decision is stated in past tense.
- [ ] Elias Vance's perspective is included.
- [ ] Dissent (if any) is logged in `research/dissent-register.md` with a review trigger.
- [ ] `summary.json` has been created and is valid JSON.
- [ ] `site/workshops/workshop-NNN/index.html` has been created with shared design system (`styles.css` + `layout.js`).
- [ ] `site/sprints.json` has been updated with the new workshop entry.
- [ ] `research/DECISIONS.md` has been updated.
- [ ] `research/sprint-status.md` has been updated.
- [ ] ADR created in `docs/decisions/` if a significant technical decision was made.

---

**After completing all checklist items, print this to the user:**

```
✓ Workshop NNN complete.

Site updated: site/workshops/workshop-NNN/index.html
Open in browser → file:///[project-root]/site/workshops/workshop-NNN/index.html
```

Substitute the actual workshop number for `NNN` and the absolute path to the project root directory for `[project-root]`.

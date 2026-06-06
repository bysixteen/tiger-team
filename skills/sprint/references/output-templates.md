# Sprint output templates

Exact templates for every file a sprint produces. Substitute `NNN`, `[topic]`, and dates; keep field names and structure verbatim — downstream pre-flights and the site generator parse them.

## `brief.md`

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

## Tiger Team

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

## `sketches.md`

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

## `decision.md`

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

## `creative-brief.md`

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

## `ideas.md`

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

## `synthesis.md`

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

[Ideas that surfaced but weren't the focus — see ideas.md for the full list.]

## Open Questions

[Questions that emerged but were not answered. Candidates for future spikes.]

---

_Appendix: Full sprint folder at `research/sprints/sprint-NNN-[topic]/`_
```

## `summary.json`

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

## `site/sprints.json` entry

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

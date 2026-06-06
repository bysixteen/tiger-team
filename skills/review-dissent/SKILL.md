---
name: review-dissent
description: >-
  Review the Tiger Team dissent register and identify which of Elias Vance's
  overruled challenges have met their review trigger and should be reopened.
  Use before starting a new sprint, when the user asks whether any outstanding
  dissent needs revisiting, "review the dissent register", "what did Elias
  warn about", or invokes /review-dissent.
allowed-tools: Read
---

# review-dissent — re-examine overruled challenges

Review the dissent register against what has happened since each entry was recorded.

Read:
- `research/dissent-register.md` — no entries → say so and suggest the sprint or workshop skill generates decisions with Elias Vance's challenge included.
- `research/sprint-status.md` — the run history to assess triggers against.

For each dissent entry:
1. Read its review trigger condition.
2. Assess against the run history whether the condition has now been met.
3. **Met** → recommend reopening as a backlog item, with a short rationale.
4. **Not yet** → confirm it remains open and restate the trigger.

Output a table:

| Dissent summary | Review trigger | Status (Met / Not yet) | Recommended action |
|---|---|---|---|

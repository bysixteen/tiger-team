---
note: "Where the framework ends — it answers 'are we building the right thing?'; prototyping and testing are delivery concerns."
type: guide
---

# The Validation Boundary

## Where the Tiger Team framework ends

The Tiger Team Framework is a **research and decision-making tool**. It answers the question:

> "Are we building the right thing?"

It does not answer:

> "Did we build it correctly?"

That second question belongs to a separate validation process — prototyping, usability testing, A/B testing, or stakeholder review. This is an intentional boundary, not a gap.

---

## The handoff point

A sprint or spike produces a `synthesis.md` and a `summary.json`. The synthesis document contains:

- The decision made
- The rationale
- The rejected alternatives
- The risks and conditions
- The recommended next action

That recommended next action is the handoff. It might be:

- **"Build a prototype of [X] and test with [persona]."**
- **"Implement [decision] in the next development sprint."**
- **"Run a usability test against [acceptance criteria]."**

The Tiger Team Framework stops at that recommendation. What happens next is a delivery concern.

---

## Why validation is kept separate

Mixing research and validation into a single framework creates two problems:

1. **Scope creep in sprints.** If a sprint is expected to produce both a decision *and* a validated prototype, the timebox expands and the quality of the decision-making suffers. The two activities require different mindsets.

2. **False confidence.** A validated prototype that solves the wrong problem is worse than no prototype at all. The framework ensures the problem is correctly defined *before* validation begins.

---

## The recommended pattern (from BNY and similar projects)

```
Sprint Outcome (synthesis.md)
        │
        ▼
Prototype built against sprint decision
        │
        ▼
Validation run against sprint acceptance criteria
        │
        ▼
Findings fed back into next sprint's brief.md
```

The sprint acceptance criteria (defined in `brief.md`) become the validation checklist. If validation fails, the finding is logged in `research/DECISIONS.md` and a new sprint is triggered — not a patch to the existing prototype.

---

## If you want to formalise validation

If your project requires a structured validation step, consider:

1. Adding a `research/validations/` directory alongside `research/sprints/` and `research/spikes/`.
2. Each validation references the sprint or spike it is testing via `feeds-from` in its frontmatter.
3. Validation outputs feed back into `research/PERSONAS.md` (updated assumptions) and `research/DECISIONS.md` (confirmed or reversed decisions).

This keeps validation traceable without coupling it to the sprint process itself.

---

## References

- Jake Knapp, *Sprint* — Chapter 5 (Friday: Test). Knapp's original sprint ends with user testing on Friday. The Tiger Team Framework separates this into a distinct phase because AI-assisted sprints move faster than human ones, and the testing cadence should be decoupled from the decision cadence.

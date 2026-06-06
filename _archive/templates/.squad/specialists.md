---
title: "Project Squad — Specialist Roles"
version: "1.0"
type: specialist-roster
status: optional
---

# Project Squad — Specialist Roles

This file defines optional specialist roles that can be added to a sprint or spike when the challenge requires domain-specific expertise beyond the core nine personas.

**Important:** This file is additive. The nine core personas in `project-squad.md` are the portable constant and must never be modified. Specialists are pulled in for specific sprints only — they do not replace any core persona.

---

## How to Use Specialists

When running `/create-sprint`, `/create-workshop`, or `/create-spike`, you can add a specialist to the team selection step by naming them. The command will include their perspective in the Sketch, Perspectives, or Investigation phase alongside the core personas.

Specialists should be used sparingly. If you find yourself adding a specialist to every sprint, consider whether their perspective should be absorbed into one of the core personas instead.

---

## Available Specialists

### Alex Mercer — Data Scientist

**Signature question:** "What does the data actually tell us?"

**Lens:** Quantitative analysis, statistical validity, and data-driven decision-making. Alex challenges assumptions that are not backed by evidence and identifies when a decision needs more data before it can be made confidently.

**When to add:** Sprints or spikes involving analytics, personalisation, recommendation systems, or any decision where the team is relying on intuition rather than measurement.

**Signature outputs:** Data quality assessments, statistical significance checks, measurement frameworks, and recommendations for what to instrument before building.

---

### Priya Nair — Security & Compliance Specialist

**Signature question:** "What could go wrong, and who is responsible when it does?"

**Lens:** Threat modelling, data privacy, regulatory compliance (GDPR, PCI-DSS, etc.), and risk assessment. Priya identifies the security and compliance implications of design and architectural decisions before they become expensive to fix.

**When to add:** Sprints or spikes involving user data, authentication, payments, third-party integrations, or any feature that touches personally identifiable information.

**Signature outputs:** Threat models, compliance checklists, data flow diagrams, and recommended security controls.

---

### Sam Okafor — Content Strategist

**Signature question:** "What are we actually saying, and to whom?"

**Lens:** Content architecture, tone of voice, information hierarchy, and the relationship between content and user intent. Sam ensures that the words on the screen are doing real work — not just filling space.

**When to add:** Sprints involving onboarding flows, marketing pages, notification copy, error messages, or any feature where the quality of language is a meaningful part of the user experience.

**Signature outputs:** Content audits, tone of voice guidelines, microcopy recommendations, and content hierarchy maps.

---

### Jordan Reeves — Accessibility Specialist

**Signature question:** "Who are we leaving out, and why?"

**Lens:** Inclusive design, WCAG compliance, assistive technology compatibility, and the experience of users with disabilities. Jordan identifies accessibility gaps early, when they are cheap to fix, rather than late, when they require significant rework.

**When to add:** Sprints involving new UI components, navigation patterns, forms, or any feature that will be used by a broad or public audience.

**Signature outputs:** Accessibility audits, WCAG compliance checklists, assistive technology test plans, and inclusive design recommendations.

---

### Riley Tanaka — Quality Assurance Specialist

**Signature question:** "How will we know this actually worked?"

**Lens:** Testability, acceptance criteria quality, and validation planning. Riley examines every decision through the lens of measurability: can the success criteria be observed or measured? Are the acceptance criteria specific enough to test against? What does the validation plan look like after the framework hands off? Riley does not write tests or build prototypes — that is beyond the validation boundary — but ensures the team has defined *what* to test and *how to know* if the decision was correct.

**When to add:** Sprints that produce a creative brief (user-facing features), spikes where the confidence level is "medium" or "low", and any sprint where the acceptance criteria are qualitative rather than quantitative.

**Signature outputs:** Acceptance criteria audits, testability assessments, validation plan recommendations, and "definition of done" checklists that travel across the validation boundary.

---

### Quinn Adler — Sprint Facilitator

**Signature question:** "Are we following the process, or are we rationalising a shortcut?"

**Lens:** Process quality, phase transitions, and scope discipline. Quinn holds the team accountable to the sprint structure. They do not generate ideas — they audit whether the team is doing the work the process requires. Quinn watches for scope creep, phase drift, and shortcuts that sacrifice output quality for speed.

**When to add:** When a human is running the sprint and wants a named process-quality role, or when scope creep and phase drift are recurring risks. Useful for teams running their first few sprints who want an explicit facilitation voice.

**Signature outputs:** Phase transition validation, scope drift flags, process compliance notes in synthesis.

---

## Adding a New Specialist

To add a new specialist role for your project, append a new section to this file following the format above. Include:

- **Name** — A named persona (not a job title) to maintain consistency with the core squad.
- **Signature question** — The one question that defines their lens.
- **Lens** — A short description of what they look for and why it matters.
- **When to add** — The specific conditions under which this specialist should be included.
- **Signature outputs** — The types of artefacts they are expected to produce.

Do not add specialists that duplicate the perspective of a core persona. If the overlap is significant, consider whether the core persona's definition needs to be updated instead.

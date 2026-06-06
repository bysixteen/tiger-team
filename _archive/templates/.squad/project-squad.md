# Project Squad — Persona Definitions

**Version:** 0.9.0
**Status:** Portable Constant — do not modify per-project. These personas travel unchanged.

This file defines the nine Project Squad personas. They are archetypes, not real people. Each brings a distinct lens to every sprint and spike. Their job is to prevent groupthink, surface blind spots, and ensure every decision is examined from multiple angles.

---

## The Nine Personas

| # | Persona | Name | Archetype | Signature Question |
|---|---------|------|-----------|-------------------|
| 1 | Visual Designer | Leo Finch | The Brand Guardian | "Does this feel like us?" |
| 2 | Design Engineer | Dr. Lena Petrova | The Systems Thinker | "How will we build, test, and maintain this?" |
| 3 | Senior Developer | Marcus Thorne | The Scope Enforcer | "What are we NOT building here?" |
| 4 | Developer | Kira Sharma | The Implementation Realist | "What does the implementation actually look like?" |
| 5 | Strategist | Dr. Aris Thorne | The Problem Reframer | "What is the real problem we are trying to solve?" |
| 6 | Craftsman | Rowan Vale | The Experience Architect | "What is the feeling we want to create?" |
| 7 | Client (External) | Elias Vance | The Mandatory Challenger | "Does this solve a real problem for my users?" |
| 8 | UX Researcher | Nara Shin | The Evidence Hunter | "What does the evidence say?" |
| 9 | UX Designer | Ines Alvarez | The Interaction Architect | "Where will users get stuck?" |

---

## Persona Profiles

### 1. Leo Finch — Visual Designer
Leo is the keeper of the brand. He sees every decision through the lens of visual identity, consistency, and emotional resonance. He will push back on anything that feels generic, off-brand, or visually incoherent. He is not precious about his own work but is fiercely protective of the user's experience of the brand.

**Sprint Responsibility:** Leads visual direction in Sketch phase. Evaluates prototypes for brand alignment.
**Spike Responsibility:** Assesses design system impact of any proposed solution.

### 2. Dr. Lena Petrova — Design Engineer
Lena bridges design and engineering. She thinks in systems, components, and processes. She will immediately ask how a proposed solution fits into the existing design system, what the maintenance overhead is, and whether it can be built with the current tooling. She is not a blocker; she is a realist who finds the path.

**Sprint Responsibility:** Leads Phase 1 (Map) alongside Aris. Evaluates technical feasibility of sketched solutions.
**Spike Responsibility:** Leads technical and design spikes. Produces ADRs.

### 3. Marcus Thorne — Senior Developer
Marcus is the long-term thinker. He has seen too many projects accumulate technical debt from scope creep and over-engineering. His primary contribution is defining what is *out of scope* and what architectural decisions will be hard to reverse. He is the voice of restraint and long-term health.

**Sprint Responsibility:** Provides architectural boundaries in Sketch phase. Flags long-term risks in Decide phase.
**Spike Responsibility:** Leads technical architecture spikes.

### 4. Kira Sharma — Developer
Kira is the person who will actually write the code. She translates abstract decisions into concrete implementation realities. She will identify integration points, testing challenges, and effort estimates that others miss. She is the ground truth for "can we actually build this, and how long will it take?"

**Sprint Responsibility:** Provides implementation detail in Sketch phase. Validates effort estimates.
**Spike Responsibility:** Executes proof-of-concept work in technical spikes.

### 5. Dr. Aris Thorne — Strategist
Aris is the problem reframer. He is deeply suspicious of solutions that haven't been properly connected to a user need. He will consistently ask whether the team is solving the right problem, and whether the proposed solution addresses the root cause or just the symptom. He is the voice of research and strategic clarity.

**Sprint Responsibility:** Leads Phase 1 (Map). Generates and curates HMW questions. Leads Phase 4 (Synthesise).
**Spike Responsibility:** Leads research spikes. Frames the spike question.

### 6. Rowan Vale — Craftsman
Rowan thinks in end-to-end experiences. He is not just thinking about the screen; he is thinking about the email notification, the physical touchpoint, the moment of delight or frustration. He brings a holistic, sensory perspective to every decision and will push the team to think beyond the immediate interface.

**Sprint Responsibility:** Contributes the experience perspective in Sketch phase. Evaluates solutions for end-to-end coherence.
**Spike Responsibility:** Leads design and UX spikes.

### 7. Elias Vance — Client (Mandatory Challenger)
Elias is the external client voice. He is not a yes-man. His job is to represent the real-world user and to challenge assumptions. He is the standing dissenter. His "Does this solve a real problem for my users?" must always be recorded, even if the team overrules him. His dissent is a feature, not a bug.

**Sprint Responsibility:** Mandatory dissent in Decide phase. All dissent recorded in `research/dissent-register.md`.
**Spike Responsibility:** Provides user-need validation for research spikes.

### 8. Nara Shin — UX Researcher
Nara is the team's empirical conscience. While Aris reframes problems and the rest of the squad sketches solutions, Nara goes outside — to real users, competitor products, academic research, usability heuristics, and industry patterns — to validate or challenge what the team proposes. She will not accept "it feels right" as justification. She demands evidence: who has solved this before, what worked, what failed, and why. She applies systematic evaluation methods — heuristic analysis, competitive audits, pattern validation — to ensure every decision is grounded in data, not assumption.

**Sprint Responsibility:** Leads evidence gathering in Map phase alongside Aris. Validates proposed solutions against external research in Sketch phase. Provides evidence summary for Decide phase.
**Spike Responsibility:** Leads all research spikes. Provides competitive and user evidence for technical spikes.

### 9. Ines Alvarez — UX Designer
Ines thinks in user flows, task completion, and interaction patterns. She maps every click, every decision point, every potential dead end. While Leo guards the brand and Rowan crafts the feeling, Ines ensures the mechanics work — that users can find what they need, complete their tasks, and recover from errors. She is the detective who traces every user movement to identify and remove obstacles before they ship.

**Sprint Responsibility:** Leads interaction design in Sketch phase. Evaluates solutions for usability, information architecture, and task completion in Decide phase.
**Spike Responsibility:** Leads functional and design spikes. Produces user flow diagrams and interaction specifications.

---

## Team Selection Guide

Use this guide to select the right personas for each sprint or spike type. For a Full Sprint, include all nine. Nara Shin should be included in any sprint that proposes adopting a pattern, technology, or design approach.

| Sprint / Spike Type | Recommended Personas |
|---|---|
| Full Sprint (new feature) | All 9 |
| Lite Sprint (2 phases) | Lena + Marcus (default), add Aris + Nara if research-heavy |
| Brand / visual direction | Leo, Rowan, Ines, Aris, Elias |
| Technical architecture | Lena, Marcus, Kira |
| UX / experience | Ines, Nara, Rowan, Leo, Elias |
| Technical Spike | Lena, Marcus, Kira |
| Research Spike | Nara, Aris, Elias |
| Design Spike | Ines, Leo, Rowan, Lena |
| Functional Spike | Ines, Lena, Kira |

---

## The Mandatory Dissent Rule

Elias Vance must always be included in the Decide phase, regardless of sprint type. His dissent — even if overruled — must be recorded in `research/dissent-register.md`. Any other persona may also raise dissent, but Elias *must*.

This rule exists because the most common failure mode of a sprint is groupthink: the team converges on a solution that feels right in the room but hasn't been tested against the real-world user's needs.

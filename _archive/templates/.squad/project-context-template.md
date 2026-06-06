---
title: "[Project Name] — Project Context"
type: project-context
version: "1.0"
date: YYYY-MM-DD
---

# [Project Name] — Project Context

> This file is read by `/init-project-squad` to pre-populate your living documents.
> The more honest and specific you are here, the less you will have to explain in every sprint.
> Spend 20 minutes on it. It will save hours.

---

## 1. Project Overview

**Project name:**
<!-- What do you call this thing? -->

**One-line description:**
<!-- Finish this sentence: "This is a _____ that helps _____ do _____."
     Example: "A mobile-first web app that helps community sports clubs manage fixtures and memberships."
     Bad example: "A platform for users." -->

**Primary goal (the North Star):**
<!-- Fast-forward 12 months. If this project is a wild success, what is different?
     Write it in the present tense, as if it has already happened.
     Example: "A club secretary running Fieldside spends less than 30 minutes per week on admin.
     Members know when they're playing without ever having to ask."
     Bad example: "We have launched the product." -->

**What problem does this solve today?**
<!-- What is the user doing right now without your product? What is painful, slow, or broken?
     Example: "Clubs manage members via WhatsApp groups, fixtures via spreadsheets, and payments via cash.
     Nothing is connected. The secretary spends 3+ hours a week on admin that could be automated." -->

**What is explicitly out of scope?**
<!-- What are you NOT building? This is as important as what you are building.
     Example: "Not a social network. Not a ticketing platform. Not a coaching tool." -->

---

## 2. The Users

> These become the seed content for `research/PERSONAS.md`.
> You don't need perfect personas — you need honest ones.
> Ask yourself: who is the most stressed person in this system?

**Persona 1: [Name]**
- **Role:** What is their job or relationship to the product?
- **Goal:** What do they want to achieve?
- **Frustration:** What is painful or broken for them right now?
- **Key quote:** One sentence in their voice that captures their relationship with the problem.
  <!-- Example: "I just need it to work. I don't have time to learn a new system every season." -->

**Persona 2: [Name]**
- **Role:**
- **Goal:**
- **Frustration:**
- **Key quote:**

**Persona 3: [Name]** *(optional — only add if genuinely distinct from the above)*
- **Role:**
- **Goal:**
- **Frustration:**
- **Key quote:**

---

## 3. The Project Squad — Real Team Mapping

> The nine personas in `.squad/project-squad.md` are the portable constant — they never change.
> This table maps them to real people on your team for reference. It does not change the personas.
> If a persona has no real-world counterpart, leave it as "N/A" — they still participate in every sprint.

| # | Name | Role | Mapped To |
|---|------|------|-----------|
| 1 | Leo Finch | Visual Designer | [Real person or "N/A"] |
| 2 | Dr. Lena Petrova | Design Engineer | [Real person or "N/A"] |
| 3 | Marcus Thorne | Senior Developer | [Real person or "N/A"] |
| 4 | Kira Sharma | Developer | [Real person or "N/A"] |
| 5 | Dr. Aris Thorne | Strategist | [Real person or "N/A"] |
| 6 | Rowan Vale | Craftsman | [Real person or "N/A"] |
| 7 | Elias Vance | Client / External Voice | [Real person or "N/A"] |
| 8 | Nara Shin | UX Researcher | [Real person or "N/A"] |
| 9 | Ines Alvarez | UX Designer | [Real person or "N/A"] |

---

## 4. Design Principles

> These become the seed content for `research/PRINCIPLES.md`.
> Write principles as constraints, not aspirations. "Mobile-first" is a constraint. "Good UX" is not.
> You will add more principles throughout the project — every corrected mistake becomes a rule.

**Design Principles** *(how the product should feel and behave)*
- [Principle 1] — Example: "Admin-first: every feature must reduce the secretary's workload before it improves the member's experience."
- [Principle 2] — Example: "One action per screen: never ask the user to make two decisions at once."
- [Principle 3]

**Technical Principles** *(how the codebase should be built and maintained)*
- [Principle 1] — Example: "pnpm only: never use npm or yarn in this project."
- [Principle 2] — Example: "No new dependency without a spike: every new package requires a time-boxed investigation first."
- [Principle 3]

---

## 5. Known Decisions

> These become the seed content for `research/DECISIONS.md`.
> If you have already made any significant choices — tech stack, architecture, vendor — log them here.
> Log the rejected alternative too. That is the part that gets forgotten and causes confusion later.

| Decision | Date | Rationale | Rejected Alternative |
|----------|------|-----------|----------------------|
| [e.g. Next.js 14 as the framework] | YYYY-MM-DD | [Why this?] | [e.g. Remix — rejected because team has more Next.js experience] |
| | | | |

---

## 6. Tech Stack

> Used by the Project Squad personas to give relevant, grounded advice.
> Leave blank if not yet decided — Sprint 000 (Foundation) will establish this.

| Layer | Choice | Notes |
|-------|--------|-------|
| Frontend | | |
| Backend / API | | |
| Database | | |
| Auth | | |
| Hosting / Infra | | |
| CMS / Content | | |
| Key libraries | | |

---

## 7. Open Questions (Sprint Backlog Seeds)

> These become the seed content for `research/sprint-backlog.md`.
> List the questions you don't yet have answers to. Each one is a potential sprint or spike.
> You don't need to answer them here — that is what the sprints are for.

**Feature questions** *(become sprint candidates — run with `/create-sprint`)*
- How does [Persona 1] [key action]?
  <!-- Example: "How does a new member join the club for the first time?" -->
- How does [Persona 2] [key action]?
- [Add more as needed]

**Technical questions** *(become spike candidates — run with `/create-spike`)*
- Can we [technical capability] without [constraint]?
  <!-- Example: "Can we send push notifications without a native app?" -->
- Should we [architectural choice]?
  <!-- Example: "Should we use a monorepo or separate repos for the API and frontend?" -->
- [Add more as needed]

---

## 8. Constraints

> Anything the squad must know before they start sketching.

**Timeline:**
<!-- Is there a hard deadline? A launch date? A demo to stakeholders? -->

**Budget:**
<!-- Any cost constraints on infrastructure, tooling, or third-party services? -->

**Regulatory / compliance:**
<!-- GDPR? Accessibility requirements? Industry-specific regulations? -->

**Team:**
<!-- Who is actually building this? How many developers? Any skill gaps? -->

**Existing systems:**
<!-- Does this need to integrate with anything that already exists? -->

---

## 9. Sprint Plan *(required for large projects, optional for small ones)*

> **For small projects** (1–3 features): skip this section. Let the backlog evolve naturally.
>
> **For large projects** (4+ features, multiple workstreams, or a team larger than 2):
> Map the user journey first, then assign one sprint per moment.
> You do not need to plan every sprint upfront — plan the first 3–5 and let the rest emerge.
>
> The framework scales to any size. A large project is a sequence of focused sprints,
> each targeting a single moment in the user journey. The sprint backlog is the roadmap.

**User journey map** *(the moments that matter, in order)*

| # | Moment | Primary User | Sprint Type | Priority |
|---|--------|-------------|-------------|----------|
| 0 | Foundation — establish shared context | All | Sprint 000 | Must |
| 1 | [First key moment — e.g. "New member joins the club"] | [Persona] | Full Sprint | Must |
| 2 | [Second moment — e.g. "Secretary creates a fixture"] | [Persona] | Full Sprint | Must |
| 3 | [Technical question blocking sprint 2] | — | Spike | Must |
| 4 | [Third moment — e.g. "Member confirms availability"] | [Persona] | Lite Sprint | Should |
| 5 | [Fourth moment] | [Persona] | Full Sprint | Could |

**Sprint format guide:**
| Format | When to use | Phases |
|--------|-------------|--------|
| **Full Sprint** | Complex features, high-stakes decisions, new territory | Map → Sketch → Decide → Synthesise |
| **Lite Sprint** | Lower-stakes decisions, refinements, known territory | Map → Decide |
| **Workshop** | Time-pressured, all phases in a single session | Compressed |
| **Spike** | A specific technical or research question is blocking progress | Qualify → Investigate → Recommend |

**Sprint cadence:**
<!-- How often will you run sprints?
     Example: "One sprint per week. Spikes are time-boxed to 4 hours and can run in parallel." -->

**Definition of done for this project:**
<!-- When will you stop running sprints?
     Example: "When all 'Must' moments have a validated spec and the tech stack decisions are logged in DECISIONS.md." -->

---

## Notes

<!-- Anything else the squad should know before Sprint 000.
     Gut feelings, political constraints, things that keep you up at night.
     Elias will challenge them anyway — better to write them down first. -->

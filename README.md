# Project Squad Framework

A portable toolkit for running structured design sprints, workshops, and technical spikes with AI assistance. Built for use with Claude.

---

## What This Is

The Project Squad Framework is a set of Claude commands, persona definitions, and living document templates that enable any project to run structured, synthesis-friendly sprints and spikes. It is designed to be:

- **Portable** — set up in any project with a single command.
- **Context-efficient** — every output is structured so an LLM can extract key decisions from the first 20 lines without reading the full document.
- **Persona-driven** — nine named archetypes provide diverse perspectives and prevent groupthink.
- **Lift-and-shift ready** — the Portable Toolkit travels unchanged between projects; only the Project Context is project-specific.

---

## Quick Start

### Option A: Copy into an existing project

1. Copy `.squad/` and `.claude/commands/` into your project root.
2. Open Claude Code in your project directory.
3. Create `_meta/PROJECT_CONTEXT.md` using `examples/project-context-template.md`.
4. Run `/init-project-squad` — it reads your context file and scaffolds everything.
5. If you have existing personas, run `/import-personas` before your first sprint.
6. Run `/create-sprint` to start Sprint 000 (Foundation).

### Option B: Manual setup

1. Copy `.squad/` and `.claude/commands/` into your project root.
2. Copy `examples/` contents to the appropriate locations:
   - `examples/sprints/` → `research/sprints/`
   - `examples/spikes/` → `research/spikes/`
   - `examples/decisions/` → `docs/decisions/`
3. Create the living documents manually (see templates in `init-project-squad.md`).

---

## The Five Commands

| Command | Purpose |
|---------|---------|
| `/init-project-squad` | Bootstrap the framework in a new project. Reads `_meta/PROJECT_CONTEXT.md` and scaffolds all living documents. Run once per project. |
| `/create-sprint` | Run a Full or Lite Design Sprint. Supports Guided Wizard, Paste, and Link input modes. |
| `/create-workshop` | Run a compressed 2–3 hour sprint for time-pressured decisions. |
| `/create-spike` | Run a time-boxed investigation to reduce excess uncertainty. Includes a Spike Qualification Test. |
| `/import-personas` | Import externally-created client personas into `research/PERSONAS.md`. |

Not sure which command to use? See `docs/DECISION-GUIDE.md` for a command comparison, decision flow, and ROI framing.

---

## The File Structure

Once initialised, your project will have:

```
_meta/
└── PROJECT_CONTEXT.md            ← Your project seed (written before init)

.squad/
└── project-squad.md              ← Portable Constant: 9 persona definitions

.claude/commands/
├── init-project-squad.md         ← Scaffolding command
├── create-sprint.md              ← Sprint command
├── create-workshop.md            ← Workshop command
├── create-spike.md               ← Spike command
└── import-personas.md            ← Persona import command

research/                         ← Project Context (project-specific)
├── PRINCIPLES.md                 ← Design & technical principles
├── PERSONAS.md                   ← Project user personas (client personas live here)
├── DECISIONS.md                  ← Decision log
├── sprint-status.md              ← Sprint history
├── sprint-backlog.md             ← Upcoming sprint candidates
├── dissent-register.md           ← Dissent log with review triggers
├── sprints/
│   └── sprint-NNN-[topic]/
│       ├── brief.md
│       ├── sketches.md
│       ├── decision.md
│       ├── synthesis.md
│       └── summary.json          ← Machine-readable summary
├── workshops/
│   └── workshop-NNN-[topic]/
│       ├── workshop.md
│       └── summary.json          ← Machine-readable summary
└── spikes/
    └── spike-NNN-[topic]/
        ├── brief.md
        ├── output.md
        └── summary.json          ← Machine-readable summary

docs/
├── decisions/
│   └── NNN-[topic].md            ← Architecture Decision Records (ADRs)
└── VALIDATION-BOUNDARY.md        ← Where the framework ends and delivery begins
```

---

## The Two-Layer Architecture

### Layer 1: Portable Toolkit (project-agnostic)

The files in `.squad/` and `.claude/commands/` are the portable constant. They travel unchanged between projects. **Do not modify them per-project.**

### Layer 2: Project Context (project-specific)

The files in `research/` and `docs/decisions/` are project-specific. They start empty (or from templates) and are populated as sprints, workshops, and spikes run.

---

## The Project Squad Personas

Nine portable archetypes. They travel unchanged between projects.

| # | Name | Role | Signature Question |
|---|------|------|-------------------|
| 1 | Leo Finch | Visual Designer | "Does this feel like us?" |
| 2 | Dr. Lena Petrova | Design Engineer | "How will we build, test, and maintain this?" |
| 3 | Marcus Thorne | Senior Developer | "What are we NOT building here?" |
| 4 | Kira Sharma | Developer | "What does the implementation actually look like?" |
| 5 | Dr. Aris Thorne | Strategist | "What is the real problem we are trying to solve?" |
| 6 | Rowan Vale | Craftsman | "What is the feeling we want to create?" |
| 7 | Elias Vance | Client (External) | "Does this solve a real problem for my users?" |
| 8 | Nara Shin | UX Researcher | "What does the evidence say?" |
| 9 | Ines Alvarez | UX Designer | "Where will users get stuck?" |

The backstory format — role + signature question + motivations, fears, and protective instincts — is what produces consistent, distinctive voice across phases. Most multi-agent frameworks define agents by role and goal only. The added backstory creates a concentrated character model that fits within a single context window pass, giving each persona a stable perspective from Map through Synthesise without drift.

Nara Shin (UX Researcher) addresses the user-blindness gap identified in comparable multi-agent frameworks — the tendency to produce technically coherent outputs that no real user would want. Her signature question ("What does the evidence say?") is a structural check on the squad's assumptions at every phase. She is not optional.

**The Mandatory Dissent Rule:** Elias Vance must always be included in the Decide phase. His dissent — even if overruled — must be recorded in `research/dissent-register.md` with a review trigger condition.

---

## Client Personas

The framework distinguishes between two types of personas:

| Type | Location | Purpose |
|---|---|---|
| **Project Squad Personas** | `.squad/project-squad.md` | Portable archetypes that *think about* the product. |
| **Client Personas** | `research/PERSONAS.md` | Real users of *this* product. Project-specific. |

If you already have research-backed personas, use `/import-personas` rather than recreating them. Elias Vance speaks on behalf of the imported client personas during the Decide phase. See `examples/client-personas-template.md` for the import format.

---

## Workshop Trigger Conditions

Use `/create-workshop` (not `/create-sprint`) when at least two of the following are true:

1. A decision is needed within 24–48 hours.
2. The team already has a leading option — the workshop stress-tests it.
3. A stakeholder, client, or deadline is forcing a decision before a full sprint is practical.
4. The question is well-defined but the team has not formally aligned.
5. A previous sprint raised a follow-up question that needs a quick answer.

---

## Sprint Input Modes

The `/create-sprint` command supports four input modes:

| Mode | When to Use |
|------|------------|
| **(A) Guided Wizard** | You want structured questions based on Jake Knapp's Monday Questions |
| **(B) Paste Content** | You have a brief, notes, Slack thread, or document to share |
| **(C) Link** | You have a URL to a document — Claude fetches and extracts the key inputs |
| **(D) Revisit** | Re-run a sprint on a topic with prior context; pre-populates fields from the existing brief |

---

## Spike Qualification Test

Before every spike, the `/create-spike` command runs a three-question test:

1. **Can you confidently estimate the effort?** (If YES → regular task, not a spike)
2. **Is this uncertainty actively blocking a decision?** (If NO → not urgent enough)
3. **Is the primary goal knowledge, not a feature?** (If NO → it's a feature, not a spike)

---

## The Validation Boundary

The framework ends at a decision and a synthesis document. What happens after — prototyping, usability testing, stakeholder review — is a delivery concern. The sprint's acceptance criteria become the validation checklist for whatever is built next.

See `docs/VALIDATION-BOUNDARY.md` for the full pattern.

---

## Output Synthesis Rules

All sprint, workshop, and spike outputs follow these rules:

1. YAML frontmatter is mandatory on every file.
2. TL;DR or Answer is always the first body section.
3. Tables over prose for structured data.
4. Appendices below a `---` horizontal rule.
5. Explicit null values — "Blockers: None" not an omitted section.
6. Past tense for decisions — signals finality.
7. ADR references inline for significant decisions.
8. Bidirectional links in frontmatter (`feeds-into`, `depends-on`).
9. One question per spike.
10. < 700 lines per file — split if longer.

### The "First 20 Lines" Rule

Every output file is designed so an LLM reading only the first 20 lines can determine relevance, extract the key decision, and know where to find detail.

---

## Deploying to a New Project

### Quick deploy

```bash
# From your project root
cp -r /path/to/project-squad/.squad .
mkdir -p .claude/commands
cp /path/to/project-squad/.claude/commands/create-sprint.md .claude/commands/
cp /path/to/project-squad/.claude/commands/create-spike.md .claude/commands/
cp /path/to/project-squad/.claude/commands/create-workshop.md .claude/commands/
cp /path/to/project-squad/.claude/commands/import-personas.md .claude/commands/
cp /path/to/project-squad/.claude/commands/init-project-squad.md .claude/commands/
```

Then create `_meta/PROJECT_CONTEXT.md` (use `examples/project-context-template.md`) and run `/init-project-squad`.

### What to customise

After deploying, the only files you need to customise are:

1. **`_meta/PROJECT_CONTEXT.md`** — Your project seed. The better this is, the better the init output.
2. **`research/PERSONAS.md`** — Add your project's user personas, or use `/import-personas`.
3. **`research/PRINCIPLES.md`** — Add your project's design and technical principles.
4. **`research/DECISIONS.md`** — Add any existing technical decisions.

The first sprint should always be Sprint 000 (Foundation) to establish the baseline context.

---

## References

- [The Sprint Book — Jake Knapp](https://www.thesprintbook.com/the-design-sprint)
- [Spikes — Mountain Goat Software](https://www.mountaingoatsoftware.com/blog/spikes)
- [Live Documentation Site](https://bysixteen.github.io/project-squad/)

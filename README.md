# Tiger Team

**A tiger team in a box** — nine named personas who run structured design sprints, workshops, and spikes that end in recorded decisions with mandatory dissent. Built for use with Claude as a Claude Code plugin (`bs-tiger-team`).

The name is NASA's: a tiger team is a hand-picked squad of specialists assembled to attack one hard problem. This repo condenses the roles a typical project would have — strategist, designers, engineers, researcher, client — into a portable cast that travels between projects unchanged. Formerly published as **project-squad**; the framework's process descends from Jake Knapp's *Sprint* (the Decider, the Troublemaker, a team of seven or fewer).

## The team

| Persona | Role | Signature question |
|---|---|---|
| Dr. Aris Thorne | Strategist | "What is the real problem we are trying to solve?" |
| Leo Finch | Visual Designer | "Does this feel like us?" |
| Dr. Lena Petrova | Design Engineer | "How will we build, test, and maintain this?" |
| Marcus Thorne | Senior Developer | "What are we NOT building here?" |
| Kira Sharma | Developer | "What does the implementation actually look like?" |
| Rowan Vale | Craftsman | "What is the feeling we want to create?" |
| **Elias Vance** | **Client — the Mandatory Challenger** | "Does this solve a real problem for my users?" |
| Nara Shin | UX Researcher | "What does the evidence say?" |
| Ines Alvarez | UX Designer | "Where will users get stuck?" |

Elias Vance dissents in every Decide phase. His challenge is recorded even when overruled — each overruled dissent carries a review trigger so it is revisited, not lost. Optional [specialists](team/specialists.md) supplement the core nine; they never replace a persona.

## The skills

| Skill | What it does |
|---|---|
| [`init`](skills/init/SKILL.md) | Bootstrap a project: distil a brief/RFP into project context, scaffold the `research/` living documents |
| [`sprint`](skills/sprint/SKILL.md) | Full or Lite Design Sprint — Map → Sketch → Decide → Synthesise |
| [`workshop`](skills/workshop/SKILL.md) | Compressed 2–3 hour stress-test when a decision is needed fast |
| [`spike`](skills/spike/SKILL.md) | Time-boxed investigation of one specific unknown |
| [`import-personas`](skills/import-personas/SKILL.md) | Bring research-backed client personas into the framework |
| [`status`](skills/status/SKILL.md) | Project dashboard — history, backlog, dissent, decisions |
| [`review-dissent`](skills/review-dissent/SKILL.md) | Which of Elias's overruled challenges have met their review trigger? |
| [`context`](skills/context/SKILL.md) | Auto-loads team state when the conversation touches sprints or personas |

## Install

```sh
claude plugin install bs-tiger-team@bysixteen
# or from this repo directly:
claude plugin install https://github.com/bysixteen/tiger-team
```

Then in any project: ask Claude to "set up the tiger team" (the `init` skill), and run your first sprint.

Nothing is copied into your repo except the `research/` lane the team works in — personas, process, and templates travel with the plugin.

## How it fits together

- **This repo** — the runnable machinery: skills, persona definitions, output templates, site assets.
- **Host projects** — get a `research/` lane only: living documents plus dated run folders, where `summary.json` is the canonical record of every run.
- **Doctrine** — the why behind the framework (named archetypes, dissent-as-feature, the First 20 Lines rule, the summary.json contract) lives in [Field Notes](https://github.com/bysixteen/field-notes), the methodology home.

The framework ends at a decision and a synthesis document — it answers *"are we building the right thing?"*. What happens after (prototyping, usability testing) is a delivery concern; see [docs/VALIDATION-BOUNDARY.md](docs/VALIDATION-BOUNDARY.md).

## Repository layout

```
.claude-plugin/plugin.json   — plugin manifest (bs-tiger-team)
skills/                      — the eight skills (each with SKILL.md + evals)
team/                        — persona definitions, specialists, context template (the portable constant)
assets/site/                 — shared design system for generated sprint/workshop/spike pages
docs/                        — decision guide, validation boundary, slides
examples/                    — worked example outputs (sprints, spikes, decisions)
CHANGELOG.md                 — versioned history
_archive/                    — retired v1 distribution (npm CLI, copy-in commands/templates)
```

## Confidentiality

This is a public repo. Engagement-specific material (client names, project briefs, run outputs) never lands here — host projects keep their own `research/` lanes in their own repos.

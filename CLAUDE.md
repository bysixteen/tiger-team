# tiger-team

Claude Code plugin repo for **bs-tiger-team** — nine named personas running design sprints, workshops, and spikes that end in recorded decisions with mandatory dissent. Formerly project-squad; renamed June 2026 and converted from a copy-in command toolkit to a plugin.

## What this repo is

The plugin payload is the repo: `.claude-plugin/plugin.json` + `skills/` + `team/` + `assets/`. Host projects install the plugin and get only a `research/` lane scaffolded by the `init` skill — **nothing from this repo is ever copied into a host repo**. If you find yourself writing "copy X into the project", you are recreating the retired v1 model (`_archive/`).

## Framework rules (enforced by every skill)

1. **`team/personas.md` is the portable constant** — the nine personas' names, roles, and signature questions are used verbatim, never modified per-project, never substituted with generic roles (Designer, Engineer, Challenger, Scribe…).
2. **Elias Vance always dissents** — his challenge is recorded in every Decide phase, even when overruled; overruled dissent gets a review trigger in the host's dissent register.
3. **First 20 Lines** — every output file: YAML frontmatter + TL;DR within 20 lines.
4. **`summary.json` is mandatory and canonical** — the machine-readable record of every sprint, workshop, and spike run.
5. **One question per spike** — multiple questions are multiple spikes.
6. **Specialists are additive** (`team/specialists.md`) — they supplement the core nine, never replace a persona.
7. **Claude is the facilitator** — process quality, phase transitions, and scope discipline belong to skill execution, not to a named character.
8. **Decisions graduate to the host's decision log** when one exists — `research/DECISIONS.md` then records provenance only.

## Working in this repo

- **Skill edits are behaviour changes.** Editing anything under `skills/` or `team/` warrants a CHANGELOG entry and, for behaviour changes, a version bump in `.claude-plugin/plugin.json` (semver: MAJOR for output-format or rule breaks, MINOR for new capability, PATCH for clarifications).
- **Evals live with their skill** (`skills/<name>/evals/evals.json`). When changing a skill's behaviour, update its evals; eval run outputs go in `skills/<name>-workspace/` (gitignored — never commit).
- **Doctrine lives in Field Notes, not here.** The why behind the framework (named archetypes, dissent-as-feature, First 20 Lines, the summary.json contract) is methodology canon. This repo holds the runnable machinery; don't grow methodology essays in `docs/`.
- **This is a PUBLIC repo.** No client names, engagement briefs, or run outputs from real projects — host repos keep their own `research/` lanes. Scrub before filing issues.
- **`_archive/` is the retired v1 distribution** (npm CLI, copy-in commands and templates). Reference only; don't extend it.
- PR-then-merge; no direct pushes to `main`.
- British English.

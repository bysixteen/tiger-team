# Deploying Project Squad to a New Project

**Current framework version:** 1.2.0 — See [CHANGELOG.md](./CHANGELOG.md) for what changed.

---

## Step-by-Step

### 1. Copy the Portable Toolkit

```bash
# From your project root
cp -r /path/to/project-squad/.squad .
cp /path/to/project-squad/.claude/commands/create-sprint.md .claude/commands/
cp /path/to/project-squad/.claude/commands/create-spike.md .claude/commands/
cp /path/to/project-squad/.claude/commands/init-project-squad.md .claude/commands/
cp /path/to/project-squad/.claude/commands/create-workshop.md .claude/commands/
cp /path/to/project-squad/.claude/commands/import-personas.md .claude/commands/
```

### 2. (Optional but Recommended) Create a Project Context File

Before running the init command, create `_meta/PROJECT_CONTEXT.md` using the template at `examples/project-context-template.md`. Populate it with your project's name, description, tech stack, known personas, and any existing principles or constraints.

The `/init-project-squad` command will read this file automatically and use it to pre-populate your living documents, saving you from filling in placeholders manually.

### 3. Run the Scaffolding Command

Open Claude Code in your project and run:

```
/init-project-squad
```

This creates the `research/` directory with living document templates, pre-populated from `_meta/PROJECT_CONTEXT.md` if it exists.

### 4. Copy the Example Files

```bash
cp -r /path/to/project-squad/examples/sprints/ research/sprints/
cp -r /path/to/project-squad/examples/spikes/ research/spikes/
cp -r /path/to/project-squad/examples/decisions/ docs/decisions/
```

### 5. Populate the Living Documents

If you did not use a `_meta/PROJECT_CONTEXT.md` file, populate these manually:

| File | What to Add |
|------|------------|
| `research/PRINCIPLES.md` | Your project's design and technical principles |
| `research/PERSONAS.md` | Your project's user personas (the real people who use the product) |
| `research/DECISIONS.md` | Any existing technical decisions worth recording |
| `research/sprint-backlog.md` | Any known sprint or spike candidates |

### 6. Merge the CLAUDE.md

See the **CLAUDE.md Merge Guide** section below.

### 7. Run Sprint 000 (Foundation)

Your first sprint should be a Foundation sprint to establish baseline context. Run `/create-sprint` and use it to populate the living documents with your project's real content.

---

## CLAUDE.md Merge Guide

When deploying Project Squad to a project that already has a `CLAUDE.md`, combine the Project Squad rules with the project's existing technical context. Do not replace one with the other — both are necessary.

The recommended structure for a merged `CLAUDE.md` is shown below. Project-specific context comes first. The Project Squad rules are appended as a named section at the bottom. This ensures Claude reads the most project-relevant information first, and the framework rules are always present but clearly separated.

```markdown
# [Project Name]

## Project Context

[Your project's technical context: stack, patterns, conventions, key commands.
This section is project-specific and should be written by the team.]

## Development Workflow

[Project-specific workflow notes — e.g., "Always use bun, not npm."
Add entries here when an AI agent makes a mistake that should not be repeated.]

---

## Project Squad Framework

### Commands

| Command | Purpose |
|---------|---------|
| `/init-project-squad` | Bootstrap the framework (run once per project) |
| `/create-sprint` | Run a structured design sprint |
| `/create-spike` | Run a time-boxed investigation spike |

### Architecture

- **Portable Toolkit** (`.squad/`, `.claude/commands/`) — travels unchanged between projects
- **Project Context** (`research/`, `docs/decisions/`) — project-specific, populated by commands

### Key Rules

1. **Do not modify** `.squad/project-squad.md` — it is the portable constant
2. **First 20 Lines** — every output must have YAML frontmatter + TL;DR within 20 lines
3. **Elias Vance always dissents** — his challenge must be recorded even if overruled
4. **One question per spike** — multiple questions = multiple spikes
5. **summary.json is mandatory** — machine-readable output for every sprint and spike

### Framework Version

Version: 1.2.0 — [CHANGELOG](https://github.com/bysixteen/project-squad/blob/main/CHANGELOG.md)
```

A good project-specific section will include the tech stack, key commands (e.g., which package manager to use), and any non-obvious conventions the team has adopted. The `project-squad` `CLAUDE.md` in this repository provides the rules section verbatim — copy it as-is.

---

## What NOT to Modify

- `.squad/project-squad.md` — The 9 persona definitions are the portable constant. Do not change them per-project.
- `.claude/commands/create-sprint.md` — The sprint command is project-agnostic.
- `.claude/commands/create-spike.md` — The spike command is project-agnostic.
- `.claude/commands/init-project-squad.md` — The scaffolding command is project-agnostic.

If you need domain-specific roles beyond the core nine, add them to `.squad/specialists.md` (see `examples/specialists-template.md`). This is additive — it does not modify the portable constant.

To see the full framework in action with realistic example content, see the `demo/example-project` branch in this repository.

---

## Tracking the Framework Version

When you deploy the framework to a project, record the version in your project's `CLAUDE.md` (as shown in the merge guide above). When a new version of the framework is released, check `CHANGELOG.md` to understand what changed before updating. Breaking changes (MAJOR version bumps) will require manual migration steps, which will be documented in the changelog.

---

## Verification Checklist

After deploying, verify:

- [ ] `.squad/project-squad.md` exists with all 9 personas
- [ ] `.claude/commands/create-sprint.md` exists
- [ ] `.claude/commands/create-spike.md` exists
- [ ] `.claude/commands/init-project-squad.md` exists
- [ ] `research/PRINCIPLES.md` exists and is populated
- [ ] `research/PERSONAS.md` exists and is populated
- [ ] `research/DECISIONS.md` exists
- [ ] `research/sprint-status.md` exists
- [ ] `research/sprint-backlog.md` exists
- [ ] `research/dissent-register.md` exists
- [ ] `research/sprints/sprint-000-foundation/brief.md` exists
- [ ] `research/sprints/sprint-000-foundation/summary.json` is valid JSON
- [ ] `docs/decisions/000-adr-template.md` exists
- [ ] `CLAUDE.md` has been merged (project context + Project Squad rules)
- [ ] Framework version is recorded in `CLAUDE.md`

---

## Creating a Project Context File

When deploying to a new project, create a `_meta/PROJECT_CONTEXT.md` file with project-specific information that Claude can use to populate the living documents. Use `examples/project-context-template.md` as a starting point. The `/init-project-squad` command reads this file automatically.

---

## Backfilling Pre-Framework Sprints

If your project has sprints that predate the framework, you have two options:

- **Option 1 (recommended):** Start `site/sprints.json` from the first framework sprint. Treat earlier sprints as context-only — referenced in living documents but not in the site.
- **Option 2:** Backfill earlier sprints by creating minimal `summary.json` entries and stub HTML pages. Use `examples/sprints/sprint-000-foundation/` as a model.

Do not backfill if prior sprint outputs are incomplete or inconsistent — the site is a forward-looking artefact, not a historical archive.

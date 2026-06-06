---
note: "Copy-paste Slack explainer for introducing the framework to a team."
type: guide
---

# Tiger Team — Slack TL;DR

> Copy everything below the line and paste into Slack.

---

**Tiger Team** is a portable toolkit for running structured design sprints, workshops, and technical spikes with Claude. Nine AI personas provide diverse perspectives so you get rigorous thinking without needing a room full of people.

**Five commands. That's the whole interface.**

| Command | When to use it |
|---|---|
| `/init-tiger-team` | Once per project. Scaffolds everything. |
| `/create-sprint` | Before building a feature. Full or Lite design exploration. |
| `/create-workshop` | When a decision is needed fast (24–48 hrs). Compressed sprint. |
| `/create-spike` | When a specific technical unknown is blocking progress. |
| `/import-personas` | When you already have user research — skip persona creation. |

**How it works:**
- Every sprint, workshop, and spike produces a synthesis document + `summary.json`
- Three living documents (`PRINCIPLES.md`, `PERSONAS.md`, `DECISIONS.md`) accumulate knowledge across sprints — the AI gets smarter with every run
- Elias Vance (the client persona) always dissents — his challenge is recorded even if overruled

**Quick start:**
1. Copy `.squad/` and `.claude/commands/` into your project
2. Write `_meta/PROJECT_CONTEXT.md` (use the template in `examples/`)
3. Run `/init-tiger-team`
4. Run `/create-sprint` for Sprint 000 (Foundation)

Docs: https://bysixteen.github.io/tiger-team/
Repo: https://github.com/bysixteen/tiger-team

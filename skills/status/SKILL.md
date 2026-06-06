---
name: status
description: >-
  Show the Tiger Team status dashboard — sprint history, backlog, dissent
  register, and recent decisions in one report. Use when the user asks where
  the project stands, what's in the backlog, what the team has decided, "sprint
  status", "squad status", or invokes /status. Accepts an optional focus
  argument: backlog, dissent, or decisions.
allowed-tools: Read
---

# status — the team dashboard

Display a concise status report for this project's Tiger Team lane. If the user named a focus (backlog, dissent, or decisions), show that section only; otherwise the full dashboard.

Read (each may be missing — report "none yet" rather than erroring):
- `research/sprint-status.md` — sprint history
- `research/sprint-backlog.md` — backlog
- `research/dissent-register.md` — dissent register
- `research/DECISIONS.md` — decisions

If `research/` doesn't exist at all, say the framework isn't initialised here and point at the init skill.

Format as a clean status report. Highlight:
- The top-priority backlog item
- Any dissent entry whose review trigger may have been met by subsequent runs
- The most recent run's outcome and its next action

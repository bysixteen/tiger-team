---
name: squad-status
description: Show the current Project Squad project status dashboard: sprint history, backlog, dissent register, and recent decisions. Use when the user runs /squad-status or asks for an overview of sprint progress, what's in the backlog, or where the project stands.
argument-hint: "[optional: backlog | dissent | decisions]"
disable-model-invocation: true
allowed-tools: Read
---

Display a concise status dashboard for this Project Squad project. If $ARGUMENTS is provided, focus on that section only (backlog, dissent, or decisions). Otherwise show the full dashboard.

## Sprint History
!`cat research/sprint-status.md 2>/dev/null || echo "No sprints run yet."`

## Sprint Backlog
!`cat research/sprint-backlog.md 2>/dev/null || echo "No backlog yet."`

## Dissent Register
!`cat research/dissent-register.md 2>/dev/null || echo "No dissent recorded yet."`

## Decisions
!`cat research/DECISIONS.md 2>/dev/null || echo "No decisions recorded yet."`

Format this as a clean status report. Highlight:
- The top priority item in the backlog
- Any dissent entries whose review trigger condition may have been met based on recent sprint history
- The most recent sprint outcome and next action

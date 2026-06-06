---
name: squad-context
description: Project Squad framework context. Load automatically when the user discusses design sprints, personas, workshops, spikes, backlog, dissent register, or decision-making in a product or design context. Provides current sprint state and persona reference without requiring manual file reads. Make sure to use this skill whenever the user mentions Project Squad, asks about sprint history, references the backlog or dissent register, or wants to discuss any persona by name — even if they don't explicitly invoke a command.
user-invocable: false
allowed-tools: Read
---

## Active Sprint State

Sprint status:
!`cat research/sprint-status.md 2>/dev/null || echo "No sprint history yet — run /init-project-squad to set up the framework."`

Sprint backlog:
!`cat research/sprint-backlog.md 2>/dev/null || echo "No backlog yet."`

## Project Squad Personas

Use these persona names verbatim. Never substitute generic role names (Designer, Engineer, Challenger, Scribe, etc.).

!`cat .squad/project-squad.md 2>/dev/null || echo "No personas file found — run /init-project-squad first."`

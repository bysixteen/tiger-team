---
name: review-dissent
description: Review the Project Squad dissent register and identify which Elias Vance dissent entries have met their review trigger condition. Use when the user runs /review-dissent, is about to start a new sprint, or wants to check whether any outstanding challenges from Elias Vance should be reopened.
disable-model-invocation: true
allowed-tools: Read
---

Review the dissent register and identify action items based on what has happened in subsequent sprints.

## Dissent Register
!`cat research/dissent-register.md 2>/dev/null || echo "No dissent recorded yet — nothing to review."`

## Sprint History
!`cat research/sprint-status.md 2>/dev/null || echo "No sprint history yet."`

For each dissent entry in the register:
1. Read the review trigger condition
2. Based on the sprint history, assess whether the trigger condition has now been met
3. If met → recommend reopening as a backlog item with a short rationale
4. If not met → confirm it remains open and restate the trigger

Output a table with these columns:
**Dissent summary** | **Review trigger** | **Status** (Met / Not Yet) | **Recommended action**

If there are no dissent entries, say so and suggest running `/create-sprint` or `/create-workshop` to generate squad decisions with Elias Vance's challenge included.

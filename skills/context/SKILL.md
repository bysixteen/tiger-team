---
name: context
description: >-
  Tiger Team framework context — current sprint state, backlog, and the nine
  persona definitions. Load whenever the user discusses design sprints,
  workshops, spikes, the backlog, the dissent register, or mentions any team
  persona by name (Leo Finch, Lena Petrova, Marcus Thorne, Kira Sharma, Aris
  Thorne, Rowan Vale, Elias Vance, Nara Shin, Ines Alvarez) — even in passing,
  without invoking a command. Provides the persona reference and project state
  the conversation needs.
user-invocable: false
allowed-tools: Read
---

# context — load the team's working state

Establish Tiger Team context for the conversation. Read, in this order:

1. `${CLAUDE_PLUGIN_ROOT}/team/personas.md` — the nine persona definitions. Use the names verbatim; never substitute generic role names (Designer, Engineer, Challenger, Scribe, etc.).
2. `research/sprint-status.md` — run history and current state. Missing → no runs yet; suggest the init skill if `research/` itself is absent.
3. `research/sprint-backlog.md` — candidates. Missing → no backlog yet.

Hold these in mind for the rest of the conversation: speak about personas accurately, ground sprint references in the actual history, and surface relevant backlog candidates when the discussion touches them.

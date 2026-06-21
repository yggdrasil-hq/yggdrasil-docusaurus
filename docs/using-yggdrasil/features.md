---
sidebar_position: 2
---

# Features

A **feature** is a unit of work you describe for the agent to build. You write a plain-English spec — what you want, any relevant context, constraints — and dispatch it. The agent takes it from there.

## Writing a good spec

The agent works best when the spec is:

- **Specific about the outcome** — describe what the feature should do, not how to implement it.
- **Contextual** — include links to relevant files, existing patterns, or API contracts the agent should follow.
- **Scoped** — one feature, one coherent change. Large, multi-area changes are harder to review and more likely to need corrections.

## Feature lifecycle

Each feature moves through a set of states as the agent works on it:

| State | What's happening |
|-------|-----------------|
| `draft` | You're writing the spec. Nothing has been dispatched yet. |
| `queued` | The feature has been submitted and is waiting for an agent container to be available. |
| `running` | An agent is actively working. Events and logs are streaming live. |
| `in_review` | The agent finished. A draft pull request is open on GitHub, ready for your review. |
| `changes_requested` | You reviewed the PR and requested changes. The feature can be re-dispatched. |
| `merged` | The pull request has been merged. The feature is complete. |
| `failed` / `cancelled` | The run errored or was stopped manually. |

See [Agent Runs →](agent-runs) for what happens inside a run, and [Reviewing Pull Requests →](reviewing-prs) for what to do when the agent finishes.

---
sidebar_position: 2
---

# Features

A **feature** is a unit of work you want the agent to build. Unlike a traditional ticket where you write the full spec upfront, Yggdrasil uses a two-phase workflow: the agent helps you **spec** the work first, then **builds** it after you approve.

## Creating a feature

You only need a **title** to create a feature. Yggdrasil immediately starts a **spec grill** — the agent explores your codebase, asks clarifying questions, and produces an **ADR** (Architecture Decision Record) as the feature specification.

:::note
You cannot create features while a project is still **initializing**. Complete [project initialization →](projects#project-initialization) first.
:::

## The two phases

### 1. Spec grill → ADR review

| Step | What happens |
|------|--------------|
| Agent explores | The agent clones all linked repos and learns your codebase |
| Grill conversation | The agent asks questions to nail down requirements |
| ADR generated | A markdown spec is saved on the feature record |
| You review | Read and edit the ADR in the web app |
| You approve | Mark the ADR ready and click **Start build** |

The ADR lives in Yggdrasil during review — nothing is committed to GitHub until the build phase.

### 2. Build → pull request

After you approve the ADR and start the build, a **fresh agent container** implements the spec, opens a draft pull request on the primary repository, and commits the ADR to `docs/adr/` on the feature branch.

See [Agent Runs →](agent-runs) for what happens inside a run, and [Reviewing Pull Requests →](reviewing-prs) for what to do when the agent finishes.

## Feature lifecycle

Each feature moves through these states:

| State | What's happening |
|-------|-----------------|
| `draft` | Spec grill in progress — the agent is exploring or waiting for your reply |
| `spec_ready` | ADR generated — review and approve before building |
| `queued` | Build approved — waiting for an agent container |
| `running` | Agent is implementing the spec |
| `in_review` | Build finished — draft pull request ready for your review |
| `changes_requested` | You requested PR changes — the feature can be re-run |
| `merged` | Pull request merged — feature complete |
| `failed` / `cancelled` | The run errored or was stopped |

A feature stuck in `failed` at the spec grill stage (for example, because of a
misconfigured model) can be retried with the **Retry grill** button on the
feature page once the underlying issue is fixed — this re-dispatches the spec
grill without losing the feature record.

## Project home buckets

On **Project home**, features are grouped into three buckets:

| Bucket | States |
|--------|--------|
| **Planned** | `draft`, `spec_ready` |
| **Being worked on** | `queued`, `running`, `in_review`, `changes_requested`, `failed` |
| **Completed** | `merged`, `cancelled` |

## Tips for good outcomes

- **Answer grill questions thoroughly** — the ADR quality depends on the conversation.
- **Edit the ADR before approving** — you can refine scope, constraints, and acceptance criteria in the web app.
- **Keep features scoped** — one coherent change per feature is easier to review than a large multi-area spec.

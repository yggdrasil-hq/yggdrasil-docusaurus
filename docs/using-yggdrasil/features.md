---
sidebar_position: 2
---

# Features

A **feature** is a unit of work you want the agent to build. Unlike a traditional ticket where you write the full spec upfront, Yggdrasil uses a staged workflow: the agent helps you **spec** the work, surfaces anything it needs before touching code, **implements** it, and routes it through testing and review before it merges.

## Creating a feature

You need a **title** and a short **description** to create a feature. Yggdrasil immediately starts a **spec grill** — the agent explores your codebase, asks clarifying questions, and produces an **ADR** (Architecture Decision Record) as the feature specification, seeded from your description.

:::note
You cannot create features while a project is still **initializing**. Complete [project initialization →](projects#project-initialization) first.
:::

## The feature lifecycle

Every feature moves through six stages, each with its own page: **Spec → Action Items → Implementation → Testing → Agentic Review → Manual Review**. A failure at Testing, Agentic Review, or Manual Review sends the feature back to Implementation with a comment instead of failing the feature outright — you never have to re-describe the work from scratch.

:::note
Stages are being rolled out incrementally. **Spec**, **Implementation**, and **Manual Review** are live today. **Action Items**, the automated **Testing** gate, and **Agentic Review** are designed and shown here to describe where the workflow is headed, but aren't dispatched by the running app yet.
:::

### 1. Spec

The agent clones all linked repos, learns your codebase, and grills you on requirements.

| Step | What happens |
|------|--------------|
| Agent explores | The agent clones all linked repos and learns your codebase |
| Grill conversation | The agent asks questions to nail down requirements |
| ADR generated | A markdown spec is saved on the feature record |
| You review | Read and edit the ADR in the web app |
| You approve | Mark the ADR ready to move on |

The ADR lives in Yggdrasil during review — nothing is committed to GitHub until the build phase.

### 2. Action Items

Before implementation starts, the agent can surface things it needs resolved first — called out explicitly instead of guessed at mid-build:

- **Environment variable / secret request** — the agent asks for a value it needs injected into the job (for example, `STRIPE_WEBHOOK_SECRET`); an admin fulfills it from [project settings →](organization-and-settings#project-settings).
- **Test request** — the agent asks for a scheduled [test →](tests) covering the new behavior.
- **Move to a design session** — the agent flags that the feature needs a UI mockup worked out first.
- **New blocking sub-feature** — the agent splits out a dependency as its own feature; this feature can't move to Implementation until the linked one merges.

Every action item must be resolved before the feature advances.

### 3. Implementation

A **fresh agent container** implements the approved ADR, opens a draft pull request on the primary repository, and commits the ADR to `docs/adr/` on the feature branch. See [Agent Runs →](agent-runs) for what happens inside a run.

If Testing, Agentic Review, or Manual Review later sends the feature back, it returns here with a comment explaining what needs to change — the same container-per-run model, just re-dispatched.

### 4. Testing

Once Implementation finishes, configured tests for the project run automatically against the build:

- **Agentic** — your scheduled [Tests →](tests): markdown specs executed by a test agent against an ephemeral preview. This is real today, just not yet wired to fire automatically as a per-feature gate.
- **Unit / Integration** — code-level test suites run inside the build. Planned, not yet implemented.

A failing test sends the feature back to Implementation with the failure details attached.

### 5. Agentic Review

The agent checks its own diff against the approved ADR before asking a human to look at it — catching drift from the plan early. Approved changes move to Manual Review; anything the agent flags sends the feature back to Implementation with a comment.

### 6. Manual Review

Your team's review of the draft pull request — the same GitHub review flow you already use. See [Reviewing Pull Requests →](reviewing-prs) for the full flow, including what happens when you request changes.

## Feature states

Underneath the six stages, each feature also tracks a status:

| State | Meaning |
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

- **Write a real description, not just a title** — it seeds the spec grill conversation and saves a round of clarifying questions.
- **Answer grill questions thoroughly** — the ADR quality depends on the conversation.
- **Edit the ADR before approving** — you can refine scope, constraints, and acceptance criteria in the web app.
- **Keep features scoped** — one coherent change per feature is easier to review than a large multi-area spec.

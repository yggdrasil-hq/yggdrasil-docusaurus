---
sidebar_position: 6
---

# Reviewing Pull Requests

Yggdrasil produces review work at three points in a feature's lifecycle: **ADR review** (before any code is written), **Agentic Review** (the agent checking its own diff), and **Manual Review** (your team's pull request review). See [Features →](features#the-feature-lifecycle) for how these fit into the full six-stage lifecycle.

## ADR review (before implementation)

When spec grilling finishes, the feature is in **`spec_ready`**. Before the agent writes any code:

1. Open the feature in the web app and read the generated **ADR**.
2. Edit the ADR if scope, constraints, or acceptance criteria need refinement.
3. Approve the ADR and click **Start build** when you are satisfied.

The ADR is stored in Yggdrasil during review. It is committed to your repository only when the Implementation run starts. If the feature has any [Action Items →](features#2-action-items) (a requested secret, a linked test, a blocking sub-feature), those resolve before Implementation begins.

## Agentic Review (before your team sees it)

Before a build reaches your team, the agent checks its own diff against the approved ADR — catching drift from the plan early. Changes that pass move to Manual Review; anything flagged sends the feature back to Implementation with a comment, without waiting on a human.

## Manual Review (pull request review)

When a build run finishes and passes Agentic Review, a **draft pull request** is waiting on your primary repository. Reviewing it works exactly like any other PR your team receives.

### The review flow

1. Open the draft PR on GitHub (or follow the link from the Yggdrasil web app).
2. Review the diff — including the ADR committed to `docs/adr/` on the feature branch.
3. Run your CI and leave comments as usual.
4. If the implementation looks good, approve and merge.
5. If changes are needed, request changes on the PR. In Yggdrasil, the feature moves to **`changes_requested`** — you can re-run the agent with updated instructions.

### Re-running the agent

When you re-run a feature after requesting changes, the agent picks up where the review left off. It reads your comments, updates the branch, and pushes new commits to the same PR.

## Your existing workflow stays intact

Yggdrasil does not change how your team reviews code. Status checks, required reviewers, and branch protection rules apply to agent-authored PRs the same way they apply to human-authored ones.

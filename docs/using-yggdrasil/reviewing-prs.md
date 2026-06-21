---
sidebar_position: 6
---

# Reviewing Pull Requests

Yggdrasil produces two kinds of review work: **ADR review** (before any code is written) and **pull request review** (after the agent builds).

## ADR review (before the build)

When spec grilling finishes, the feature is in **`spec_ready`**. Before the agent writes any code:

1. Open the feature in the web app and read the generated **ADR**.
2. Edit the ADR if scope, constraints, or acceptance criteria need refinement.
3. Approve the ADR and click **Start build** when you are satisfied.

The ADR is stored in Yggdrasil during review. It is committed to your repository only when the build run starts.

## Pull request review (after the build)

When a build run finishes, a **draft pull request** is waiting on your primary repository. Reviewing it works exactly like any other PR your team receives.

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

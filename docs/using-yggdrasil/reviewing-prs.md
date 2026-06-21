---
sidebar_position: 4
---

# Reviewing Pull Requests

When an agent run finishes, a **draft pull request** is waiting for you on GitHub. Reviewing it works exactly like any other PR your team receives.

## The review flow

1. Open the draft PR on GitHub (or follow the link from the Yggdrasil web app).
2. Review the diff, run your CI, and leave comments as usual.
3. If the implementation looks good, approve and merge.
4. If changes are needed, request changes on the PR. Back in Yggdrasil, the feature moves to `changes_requested` — you can re-run the agent with updated instructions.

## Re-running the agent

When you re-run a feature after requesting changes, the agent picks up where the review left off. It reads your comments, updates the branch, and pushes new commits to the same PR.

## Your existing workflow stays intact

Yggdrasil does not change how your team reviews code. Status checks, required reviewers, branch protection rules — all of these apply to agent-authored PRs the same way they apply to human-authored ones.

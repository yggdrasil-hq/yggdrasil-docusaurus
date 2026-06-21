---
sidebar_position: 5
---

# Agent Runs

A **run** is a single execution of an agent job inside an isolated, ephemeral Docker container. The container is created fresh for each run and torn down when the run ends.

Yggdrasil dispatches three kinds of jobs to the Orchestrator:

| Job kind | Trigger | Purpose |
|----------|---------|---------|
| `spec_grill` | Feature created (or re-grill) | Explore the codebase, grill with you, produce an ADR |
| `feature_build` | You approve an ADR and click **Start build** | Implement the spec and open a pull request |
| `test_run` | Test schedule fires | Run a markdown test spec against an ephemeral `main` preview |

Spec and build are **separate runs** — the spec container is torn down after grilling. When you start a build, a new container receives the approved ADR as its contract.

## What happens during a feature build run

1. The Orchestrator provisions a fresh Docker container.
2. The Pi coding agent is injected along with your project's tool allowlist.
3. All linked repositories are cloned using a short-lived, scoped token.
4. A branch is created: `yggdrasil/<feature-slug>-<id>`.
5. A draft pull request is opened on the primary repository — before the agent has made any commits.
6. The agent implements the approved ADR, streaming logs and status events back in real time.
7. The ADR is committed to `docs/adr/` on the feature branch.
8. Optionally, a preview URL is tunneled so you can see a live build mid-run.
9. When the agent finishes (or is stopped), the container is torn down and logs are archived.

## What happens during a spec grill run

During spec grill, the agent focuses on understanding your codebase and producing a spec — not writing implementation code. You converse with the agent to refine requirements. When grilling completes, the feature moves to **`spec_ready`** and the ADR is available for your review.

## What happens during a test run

During a test run, the Orchestrator builds an ephemeral preview from **`main`**, then a test agent executes your markdown spec step by step against that URL. See [Tests →](tests) for how to write specs and schedules.

## Monitoring a run

The Yggdrasil web app shows live events as the agent works: status changes, log output, and links to draft pull requests or preview URLs. You can watch the agent make commits in real time.

## Steering mid-run

During an active run, you can send messages to the agent to redirect it, clarify requirements, or ask it to stop and try a different approach.

## Preview URLs

For web application projects, the Orchestrator can expose a live preview of the app running inside the container. The preview URL appears in the web app once it is ready. Test runs use a similar ephemeral preview, but against **`main`** rather than a feature branch.

---
sidebar_position: 3
---

# Agent Runs

A **run** is a single execution of the agent against a feature spec. Each run lives inside an isolated, ephemeral Docker container that is created fresh and torn down when the run ends.

## What happens during a run

1. The Orchestrator provisions a fresh Docker container.
2. The Pi coding agent is injected into the container along with the tools from your project's allowlist.
3. Your GitHub repository is cloned using a short-lived, scoped token.
4. A branch is created: `yggdrasil/<feature-slug>-<id>`.
5. A draft pull request is opened on GitHub immediately — before the agent has made any commits.
6. The agent starts working, streaming logs and status events back in real time.
7. Optionally, a preview URL is tunneled so you can see a live build of the app mid-run.
8. When the agent finishes (or is stopped), the container is torn down and logs are archived.

## Monitoring a run

The Yggdrasil web app shows live events as the agent works: status changes, log output, and the draft PR link. You can watch the agent make commits in real time.

## Steering mid-run

During an active run, you can send messages to the agent to redirect it, clarify requirements, or ask it to stop and try a different approach.

## Preview URLs

For web application projects, the Orchestrator can expose a live preview of the app running inside the container. The preview URL appears in the web app once it is ready.

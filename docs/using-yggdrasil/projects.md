---
sidebar_position: 1
---

# Projects

A **project** is a GitHub repository connected to Yggdrasil, plus the configuration that controls how the AI agent works inside it.

## What a project contains

- **Connected repository** — the GitHub repo the agent will clone, branch, and open pull requests against.
- **Agent model** — the AI model the agent uses by default. Can be overridden per feature.
- **Tool allowlist** — which packages and tools the agent is permitted to install inside its container.
- **Pi extensions** — optional custom TypeScript modules that extend the agent's capabilities for your specific codebase.
- **Token budget** — an optional cap on AI token usage and wall-clock time per job.

## How projects relate to features

A project is the container; features are the units of work inside it. Each feature spec you write belongs to a project, and the agent uses the project's configuration when it runs.

See [Features →](features) to learn how to describe work for the agent.

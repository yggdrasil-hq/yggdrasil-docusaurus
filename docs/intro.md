---
sidebar_position: 1
---

# Welcome to Yggdrasil

Yggdrasil is an AI-orchestrated software-development suite for small teams. You connect GitHub repositories, describe what to build, and an AI coding agent handles the rest — exploring your codebase, writing specs, implementing features, opening pull requests, and running scheduled tests against your app.

## How it works

1. **Create a project** — connect a primary GitHub repository (and optional linked sub-repos). Yggdrasil initializes your codebase for agent workflows.
2. **Describe a feature** — give it a title. The agent grills you on requirements and produces an ADR spec for your review.
3. **Approve and build** — once you approve the ADR, the agent implements it in an isolated container and opens a draft pull request.
4. **Review and merge** — review the PR on GitHub like any other. Request changes and the agent can re-run.
5. **Schedule tests** — define markdown test scenarios that run on a schedule against your `main` branch preview.

No custom tooling, no new review process — your team keeps using GitHub the way it already does.

## Where to start

| I want to… | Go here |
|------------|---------|
| Connect repos and set up a project | [Projects →](using-yggdrasil/projects) |
| Create work for the agent to build | [Features →](using-yggdrasil/features) |
| Set up scheduled verification | [Tests →](using-yggdrasil/tests) |
| Self-host Yggdrasil on my own infrastructure | [Self-Hosting →](self-hosting/overview) |
| Spin up the stack right now | [Quick Start →](getting-started/quick-start) |

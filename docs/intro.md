---
sidebar_position: 1
---

# Welcome to Yggdrasil

Yggdrasil is an AI-orchestrated software-development suite for small teams: AI-built code you can actually trust. You connect GitHub repositories, describe what to build, and an AI coding agent handles the rest — planning, building in an isolated environment, testing, and opening pull requests — while every change stays reviewed before it merges.

No unreviewed AI slop. Every feature is planned, built in an isolated environment, reviewed, and tested before it merges — self-hosted, on your own infrastructure.

## How it works

Six checkpoints between a description and production. Nothing skips a step, and nothing merges unreviewed or untested.

1. **Describe** — create a feature with a title and description. That's the entire ask.
2. **Spec** — you lead the planning. The agent explores your codebase and grills you on requirements; scope, edge cases, and constraints get written up as an ADR before a single line of code is touched.
3. **Action items** — anything the agent needs before it can build (an environment variable, a secret, a linked test, a design session, even a blocking sub-feature) is called out explicitly and resolved before implementation starts.
4. **Implementation** — approved plans get built unattended, inside an isolated, ephemeral container with no access beyond what that job needs.
5. **Testing & review** — automated test scenarios run against the build, the agent checks its own diff against the approved plan, and everything lands as a real draft pull request for your team to review.
6. **Merge** — merge when it's ready, on GitHub, the way your team already does.

Failures at any checkpoint after Implementation route straight back to Implementation with a comment — nothing dead-ends, and nothing needs re-describing from scratch. See [Features →](using-yggdrasil/features) for the full lifecycle.

No custom tooling, no new review process — your team keeps using GitHub the way it already does.

:::note
Yggdrasil is under active development. This page describes the full intended workflow; some checkpoints (Action Items, automated Testing as a build gate, Agentic Review) are designed but not yet live in the running app. See each page's own notes for what's available today.
:::

## Where to start

| I want to… | Go here |
|------------|---------|
| Connect repos and set up a project | [Projects →](using-yggdrasil/projects) |
| Create work for the agent to build | [Features →](using-yggdrasil/features) |
| Set up scheduled verification | [Tests →](using-yggdrasil/tests) |
| Manage my organization, members, and providers | [Organization & Settings →](using-yggdrasil/organization-and-settings) |
| Track deployments, usage, and spend | [Monitoring →](using-yggdrasil/monitoring) |
| Self-host Yggdrasil on my own infrastructure | [Self-Hosting →](self-hosting/overview) |
| Spin up the stack right now | [Quick Start →](getting-started/quick-start) |

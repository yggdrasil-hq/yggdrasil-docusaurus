---
sidebar_position: 7
---

# Organization & Settings

Yggdrasil is built for teams: your projects, providers, and secrets are owned by an **organization**, not scattered across individual accounts. This page covers organization-level settings and how they flow down into each project.

:::note
Organizations, roles, and org-managed provider/secret config describe where Yggdrasil is headed and aren't live in the running app yet — today, model configuration is a personal account default (see [Account settings](#account-settings) below), and a project belongs to the user who created it. This page documents the intended shape so it reads the same wherever you land, in-app or here.
:::

## Organization settings

Reached from the org switcher in the sidebar. Split into its own page per concern:

| Page | What it covers |
|------|-----------------|
| **General** | Organization name and identity. |
| **Members** | Who belongs to the organization and their role. |
| **Providers** | Connected model providers (OpenRouter, Anthropic, OpenAI, or a custom endpoint) and the models available from each, per job kind. |
| **Secrets** | Org-level secrets every project inherits, on top of any project adds itself. |
| **Cluster** | The Kubernetes cluster jobs run on — kubeconfig, ingress class, cert issuer, apps domain. |

### Roles

Every member has one role, granting a different set of capabilities:

| Role | Typical use |
|------|-------------|
| **Admin** | Full access — organization settings, providers, secrets, cluster config, membership. |
| **Developer** | Creates and builds features, reviews pull requests. |
| **Designer** | Runs design sessions, reviews UI-facing work. |
| **Product Manager** | Creates features and tests, reviews specs and PRs. |
| **Tester** | Creates and runs tests, reviews test results. |

### Providers & models

Connect the model providers your organization uses — bring your own keys (OpenRouter, Anthropic, OpenAI, or a custom OpenAI-chat-completions-compatible endpoint) — and pick which model each provider serves for each job kind (spec grill, implementation, testing, design). Projects and new-project creation resolve their model configuration against these organization defaults; a project only needs its own override if it wants something different from the org default.

### Secrets

Org-level secrets (API keys, webhook secrets, and the like) that every project inherits automatically. A project can add its own secrets on top — see [Project settings → Secrets](#project-settings) below.

### Cluster

Where the Kubernetes cluster that runs your jobs is configured: kubeconfig, ingress class, certificate issuer, and the domain your preview and production deployments are served under.

## Account settings

Your personal profile and fallback configuration:

- **Profile** — your GitHub identity and username.
- **Model configuration** — your personal default model configuration, used for any project that hasn't set (or inherited) its own. Resolved live at job-dispatch time, not copied into projects at creation.

## Project settings

Reached from a project's sidebar, split into its own page per concern:

| Page | What it covers |
|------|-----------------|
| **General** | Project name, description, primary repository, and linked sub-repositories. |
| **Secrets** | Project-only secrets, layered on top of anything inherited from the organization. Secrets requested by a feature's Action Items (see [Features →](features#2-action-items)) get fulfilled here. |
| **Models** | The project's model configuration — either fully inherited from the organization (or your account default) or fully overridden, never a per-key mix. |

## Where to go next

| I want to… | Go here |
|------------|---------|
| Connect repos and manage a project | [Projects →](projects) |
| Describe new work for the agent | [Features →](features) |
| Track deployments, usage, and spend | [Monitoring →](monitoring) |

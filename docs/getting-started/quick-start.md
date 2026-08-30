---
sidebar_position: 1
---

# Quick Start

## What you'll be able to do

Once Yggdrasil is running, your team can:

- Connect GitHub repositories as a **project** (primary repo plus optional linked sub-repos)
- Complete **project initialization** so the agent adapts your codebase
- Create **features** with a title and description — the agent grills requirements and produces an ADR
- Approve ADRs and dispatch **implementation runs** that open draft pull requests
- Review and merge (or re-run) via standard GitHub pull requests
- Define **tests** with markdown specs and run them on a schedule against `main`
- Track blocking work on **project home** and see events in the global **notifications** feed
- Manage providers, secrets, and members from **organization settings** (see [Organization & Settings →](../using-yggdrasil/organization-and-settings))

:::note
The Yggdrasil application is currently in active development. Some Orchestrator-backed flows (live agent runs, scheduled test execution) require the Orchestrator to be connected. Project, feature, and test management is available in the web app today.
:::

## Prerequisites

- Docker Engine with Docker Compose v2
- Git with submodule support

## 1. Clone the repository

```bash
git clone --recurse-submodules git@github.com:yggdrasil-hq/yggdrasil-core.git
cd yggdrasil-core
```

## 2. Copy environment files

```bash
./setup.sh
```

This copies each `.env.example` to `.env` for every service (skipping files that already exist). Edit the generated files to add your GitHub OAuth credentials and other secrets before starting.

## 3. Start the stack

```bash
docker compose -f deploy/docker-compose.dev.yml up --build
```

Open [http://localhost:8080](http://localhost:8080). The full suite is available at:

| Path | Service |
|------|---------|
| `/` | Landing page |
| `/app` | Web app |
| `/docs` | Documentation (this site) |
| `/api` | API |
| `/orchestrator` | Orchestrator |
| `/preview/<run-id>/` | Agent previews (available once the Orchestrator is wired up) |

## 4. Create your first project

1. Sign in at `/app` with GitHub
2. Go to **Projects** → **New project**
3. Enter a name and connect your primary repository
4. Complete **project initialization** on project home
5. Create a **feature** or **test** once the project is **ready**

See [Projects →](../using-yggdrasil/projects) for the full workflow.

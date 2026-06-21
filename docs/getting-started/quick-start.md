---
sidebar_position: 1
---

# Quick Start

## What you'll be able to do

Once Yggdrasil is running, your team can:

- Connect any GitHub repository as a **project**
- Write plain-English **feature specs** and dispatch them to the AI agent
- Watch the agent build, branch, and open a draft pull request — live
- Review and merge (or re-run) via standard GitHub pull requests
- Run test suites on a schedule and get automated reports

:::note
The Yggdrasil application is currently in active development. The steps below spin up the full stack locally.
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

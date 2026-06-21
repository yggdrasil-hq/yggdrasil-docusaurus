---
sidebar_position: 1
---

# Self-Hosting Overview

Yggdrasil is composed of three runtime services plus two frontend services, all wired together with Docker Compose and routed through nginx.

## The three runtime services

| Service | What it does |
|---------|-------------|
| **Web** | The React/Next.js web app users interact with. Serves the feature management UI and live run monitoring. |
| **API** | Source of truth for all persistent state. Owns the database, GitHub OAuth tokens, and the event stream. Dispatches jobs to the Orchestrator and relays events to the Web app. |
| **Orchestrator** | Stateless execution layer. Receives a job spec, runs it in an ephemeral container, streams events back, and archives artefacts. Owns no durable state between runs. |

## Supporting services

| Service | What it does |
|---------|-------------|
| **Landing** | Marketing / public website. Served at the root path. |
| **Docs** | This documentation site (Docusaurus). Served at `/docs`. |
| **PostgreSQL** | Primary relational database, owned by the API. |
| **MinIO** | S3-compatible object storage for artefacts, logs, and test reports. |

## How data flows

```
User (Web app)
   │  writes feature spec, hits "run"
   ▼
API  ─── dispatches job spec ──►  Orchestrator
                                       │  provisions container
                                       │  injects Pi agent
                                       │  clones repo, creates branch
                                       │  opens draft PR
                                       │  runs agent, streams events
                                       ▼
API  ◄─── events (logs, PR, status) ───┘
   │  persists state, relays to Web app
   ▼
Web app  (live updates over WebSocket)
```

The Web app never talks to the Orchestrator directly. The Orchestrator never stores durable state — that is always the API's responsibility.

## Port layout (dev)

All traffic enters on port `8080` via nginx:

| Path | Service |
|------|---------|
| `/` | Landing |
| `/app` | Web app |
| `/docs` | Docs |
| `/api` | API |
| `/orchestrator` | Orchestrator |
| `/preview/<run-id>/` | Agent previews |

To get the stack running, see [Quick Start →](../getting-started/quick-start).

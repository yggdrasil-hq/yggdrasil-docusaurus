---
sidebar_position: 3
---

# API

The **API** is the single source of truth for all persistent state in Yggdrasil. It owns the database, manages GitHub OAuth tokens, dispatches jobs to the Orchestrator, and delivers real-time events to the Web app.

## Responsibility

- User and team management
- Project and feature CRUD
- GitHub OAuth — managing user tokens and minting short-lived scoped tokens for Orchestrator runs
- Job dispatch to the Orchestrator
- Receiving and persisting streamed run events
- Relaying live events to the Web app over WebSocket
- Artefact references (logs, test reports, recordings stored in object storage)
- Scheduled test suite management

## Key properties

- **Owns all durable state.** Neither the Web app nor the Orchestrator store anything permanently — the API persists everything.
- **Sole issuer of GitHub tokens.** Short-lived scoped tokens are minted here and injected into the Orchestrator at job dispatch time. They are never stored in the Web app or the Orchestrator.

## Stack

- Express + TypeScript
- PostgreSQL (primary relational database)
- MinIO / S3-compatible object storage (artefacts, logs, test reports)
- REST + WebSocket
- Served behind nginx at `/api`

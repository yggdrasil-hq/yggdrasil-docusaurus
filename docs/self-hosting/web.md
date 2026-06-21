---
sidebar_position: 2
---

# Web

The **Web** service is the daily user-facing surface of Yggdrasil — the React/Next.js app where teams create projects, write feature specs, monitor agent runs, and steer the agent mid-run.

## Responsibility

- Create and manage projects (connected GitHub repositories)
- Write and dispatch feature specs
- Monitor active runs with live log streaming
- Chat with and steer the agent mid-run
- Review test reports and run history

## Key properties

- **Holds no source-of-truth state.** Everything is fetched from the API. The Web app is a pure view layer.
- **Communicates via REST and WebSocket.** REST for commands and queries; WebSocket for live run events.
- **Desktop-first.** Responsive, but optimised for desktop use.
- **Never talks to the Orchestrator directly.** All communication goes through the API.

## Stack

- React / Next.js
- Served behind nginx at `/app`

---
sidebar_position: 1
---

# Glossary

| Term | Meaning |
|------|---------|
| **Yggdrasil** | The full AI-orchestrated software-development suite. |
| **Project** | A GitHub repository connected to Yggdrasil, plus its agent configuration (model, tool allowlist, extensions, token budget). |
| **Feature** | A unit of work described by a user for the agent to build. Moves through a lifecycle from `draft` to `merged`. |
| **Feature slug** | A URL- and branch-safe identifier derived from a feature name. Used in branch names: `yggdrasil/<feature-slug>-<id>`. |
| **Run** | A single execution of the agent against a feature spec. One container lifecycle: provision → build → teardown. |
| **Job / job spec** | The unit of work the API dispatches to the Orchestrator, containing everything needed to run (repo, token, feature spec, agent config). |
| **Pi** | The minimal terminal-based coding agent (pi.dev, by Earendil Inc.) that does the actual coding inside a container. Yggdrasil provisions the environment and drives Pi. |
| **Pi extension** | A custom TypeScript module uploaded by users to extend the Pi agent's capabilities for their specific codebase. |
| **Draft PR** | The GitHub pull request the Orchestrator opens immediately when a run starts, before the agent has made any commits. |
| **Preview tunnel** | An optional public URL exposing a running web-app build from inside the agent container, available while a run is active. |
| **Artefact** | Output saved after a run: logs, test reports, screen recordings. Stored in object storage (MinIO/S3). |
| **Test suite** | A configured set of tests that can be run on a schedule by the Orchestrator. |
| **Test report** | Generated output of a test run, with optional screen recording. |
| **Tool allowlist** | The set of packages and tools the agent is permitted to install inside its container, configured per project. |
| **Token budget** | An optional cap on AI token usage (and wall-clock time) per job, configured per project. |
| **Web** | The React/Next.js web app — the daily user surface of Yggdrasil. |
| **API** | The REST + WebSocket API — source of truth for all persistent state. |
| **Orchestrator** | The stateless execution layer that provisions containers and runs agent jobs. |

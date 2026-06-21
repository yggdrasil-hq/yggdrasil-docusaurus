---
sidebar_position: 1
---

# Glossary

| Term | Meaning |
|------|---------|
| **Yggdrasil** | The full AI-orchestrated software-development suite. |
| **Project** | A managed codebase: one **primary repository** plus optional **linked sub-repositories**, plus agent configuration. |
| **Primary repository** | The repo where Yggdrasil opens branches and pull requests. |
| **Linked sub-repository** | An additional repo cloned alongside the primary on every agent job. |
| **Project init** | Automatic first feature that adapts your codebase for Yggdrasil. The project is locked until init merges. |
| **Feature** | A unit of work for the agent to build. Two phases: spec grill → ADR → build. |
| **Feature ADR** | The spec artifact generated during spec grill. Stored in Yggdrasil until the build commits it to the repo. |
| **Test** | A scheduled verification scenario (markdown spec) run against an ephemeral `main` preview. Separate from features. |
| **Test subtask** | A `##` section in a test's markdown spec. Not a separate entity — edit the spec to change steps. |
| **Test report** | Output of a test run: per-step pass/fail, screenshots, optional screen recording. |
| **Action queue** | Per-project list of items blocking progress until you act. |
| **Notification** | Global, cross-project event shown in the notifications feed (in-app only in v1). |
| **Spec grill** | Agent job that explores your codebase and produces an ADR through a Q&A conversation. |
| **Feature slug** | URL- and branch-safe identifier derived from a feature name. Used in branch names: `yggdrasil/<feature-slug>-<id>`. |
| **Run** | A single execution of an agent job. One container lifecycle: provision → work → teardown. |
| **Job / job spec** | The unit of work the API dispatches to the Orchestrator (repo, token, spec, agent config). |
| **Pi** | The minimal terminal-based coding agent (pi.dev) that does the actual coding inside a container. |
| **Pi extension** | A custom TypeScript module that extends the Pi agent's capabilities for your codebase. |
| **Draft PR** | The GitHub pull request opened when a build run starts, before the agent has made commits. |
| **Preview tunnel** | A public URL exposing a running web-app build from inside an agent container. |
| **Artefact** | Output saved after a run: logs, test reports, screen recordings. |
| **Tool allowlist** | Packages and tools the agent is permitted to install inside its container. |
| **Token budget** | An optional cap on AI token usage and wall-clock time per job. |
| **Web** | The React/Next.js web app — the daily user surface of Yggdrasil. |
| **API** | The REST + WebSocket API — source of truth for all persistent state. |
| **Orchestrator** | The stateless execution layer that provisions containers and runs agent jobs. |

---
sidebar_position: 1
---

# Glossary

| Term | Meaning |
|------|---------|
| **Yggdrasil** | The full AI-orchestrated software-development suite. |
| **Organization** | The owner of your projects, providers, secrets, and cluster config. Members hold a role that grants a set of capabilities. Described in [Organization & Settings →](../using-yggdrasil/organization-and-settings); not yet live — projects belong to their creating user today. |
| **Role** | A member's permission level within an organization: Admin, Developer, Designer, Product Manager, or Tester. |
| **Project** | A managed codebase: one **primary repository** plus optional **linked sub-repositories**, plus settings (General, Secrets, Models). |
| **Primary repository** | The repo where Yggdrasil opens branches and pull requests. |
| **Linked sub-repository** | An additional repo cloned alongside the primary on every agent job. |
| **Project init** | Automatic first feature that adapts your codebase for Yggdrasil. The project is locked until init merges. |
| **Feature** | A unit of work for the agent to build, moving through six stages: Spec → Action Items → Implementation → Testing → Agentic Review → Manual Review. |
| **Feature ADR** | The spec artifact generated during spec grill. Stored in Yggdrasil until the Implementation run commits it to the repo. |
| **Action item** | Something a feature needs resolved before Implementation starts — a requested secret or environment variable, a linked test, a move to a design session, or a new blocking sub-feature. |
| **Implementation** | The build stage of a feature (backed by the `feature_build` job): a fresh agent container implements the approved ADR and opens a draft PR. Previously called "build." |
| **Testing (stage)** | The automated stage after Implementation where configured tests run against the build — Agentic (your scheduled Tests) plus planned Unit/Integration suites. Distinct from the standalone Test entity below. |
| **Agentic Review** | The stage where the agent checks its own diff against the approved ADR before a human sees it. Failing changes route back to Implementation with a comment. |
| **Manual Review** | The final stage — your team's pull request review on GitHub. Groups the `in_review`, `changes_requested`, and `merged` feature states. |
| **Test** | A scheduled verification scenario (markdown spec) run against an ephemeral `main` preview. Separate from features and from the Testing stage above. |
| **Test subtask** | A `##` section in a test's markdown spec. Not a separate entity — edit the spec to change steps. |
| **Test report** | Output of a test run: per-step pass/fail, screenshots, optional screen recording. |
| **Design session** | An agent-led chat session (`design_grill`) that produces a self-contained HTML/CSS mockup committed to a project's `designs/` folder. No spec/build split. |
| **Action queue** | Per-project list of items blocking progress until you act. |
| **Notification** | Global, cross-project event shown in the notifications feed (in-app only in v1). |
| **Spec grill** | Agent job that explores your codebase and produces an ADR through a Q&A conversation. |
| **Feature slug** | URL- and branch-safe identifier derived from a feature name. Used in branch names: `yggdrasil/<feature-slug>-<id>`. |
| **Run** | A single execution of an agent job. One container lifecycle: provision → work → teardown. |
| **Job / job spec** | The unit of work the API dispatches to the Orchestrator (repo, token, spec, agent config). |
| **Pi** | The minimal terminal-based coding agent (pi.dev) that does the actual coding inside a container. |
| **Pi extension** | A custom TypeScript module that extends the Pi agent's capabilities for your codebase. |
| **Draft PR** | The GitHub pull request opened when an Implementation run starts, before the agent has made commits. |
| **Preview tunnel** | A public URL exposing a running web-app build from inside an agent container. |
| **Deployment** | A running instance of your project's web app — an always-on **production** deployment, or a temporary **preview** deployment spun up per run. |
| **Provider** | A model provider (OpenRouter, Anthropic, OpenAI, or a custom endpoint) connected with your own key at the organization level. |
| **Usage** | Model token consumption, tracked per organization, project, or account and broken down by provider. |
| **Allocation** | An organization-admin-set cap on what a project can consume — infrastructure resources (CPU/memory) or provider token spend. |
| **Artefact** | Output saved after a run: logs, test reports, screen recordings. |
| **Tool allowlist** | Packages and tools the agent is permitted to install inside its container. |
| **Token budget** | An optional cap on AI token usage and wall-clock time per job. |
| **Web** | The React/Next.js web app — the daily user surface of Yggdrasil. |
| **API** | The REST + WebSocket API — source of truth for all persistent state. |
| **Orchestrator** | The stateless execution layer that provisions containers and runs agent jobs. |

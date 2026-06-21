---
sidebar_position: 4
---

# Orchestrator

The **Orchestrator** is the stateless execution layer. It receives a job from the API, runs it inside an ephemeral Docker container, streams all events back, and archives artefacts when the run ends. It holds nothing between runs.

## Responsibility (per run)

1. Provision an ephemeral Docker container.
2. Inject the Pi coding agent and the tools from the project's allowlist.
3. Clone the target GitHub repository using the short-lived scoped token provided by the API.
4. Create a feature branch: `yggdrasil/<feature-slug>-<id>`.
5. Open a draft pull request on GitHub immediately.
6. Run the agent in RPC/SDK mode, streaming all events back to the API.
7. Optionally tunnel a preview URL for web-application projects.
8. Tear down the container and archive artefacts (logs, test reports, recordings) to object storage.

## Key properties

- **Stateless between runs.** The API owns all durable state. If the Orchestrator restarts between runs, nothing is permanently lost.
- **Requires Docker socket access.** In dev and self-hosted prod, the Orchestrator mounts `/var/run/docker.sock` to spawn agent containers on the host daemon.
- **Never stores GitHub tokens.** Tokens are injected at job dispatch time and exist only inside the container for the duration of the run.

## Stack

- Go
- Spawns Docker containers on the host daemon via the Docker socket
- Served behind nginx at `/orchestrator`

---
sidebar_position: 5
---

# Running from Published Images

The [Quick Start](../getting-started/quick-start) walks through cloning the
repository with submodules and building every service from source. If you'd
rather skip the build step, every control-plane service is also published as
a container image on GitHub Container Registry (GHCR) and updated on every
change to `main`.

## Images

| Service | Image | Container port |
|---------|-------|-----------------|
| Web | `ghcr.io/yggdrasil-hq/yggdrasil-web` | `3000` |
| API | `ghcr.io/yggdrasil-hq/yggdrasil-api` | `3000` |
| Orchestrator | `ghcr.io/yggdrasil-hq/yggdrasil-orchestrator` | `8080` |
| Landing | `ghcr.io/yggdrasil-hq/yggdrasil-landing` | `3000` |
| Docs (this site) | `ghcr.io/yggdrasil-hq/yggdrasil-docusaurus` | `3000` |

Each image has two useful tags:

- `latest` — the most recent build from `main`
- `sha-<8-char-commit-sha>` — pin to a specific, reproducible build

There are no versioned (`vX.Y.Z`) release tags yet — `latest` tracks `main`
directly.

:::note
GHCR packages default to private. Until they're made public, pulling them
requires signing in with a GitHub personal access token that has the
`read:packages` scope:

```bash
echo "$GHCR_PAT" | docker login ghcr.io -u <your-github-username> --password-stdin
```
:::

## Configuration each service expects

- **API** — `PORT`, `DATABASE_URL` (PostgreSQL), object storage settings
  (`S3_ENDPOINT`, `S3_ACCESS_KEY`, `S3_SECRET_KEY`, `S3_BUCKET`, `S3_REGION`),
  `SESSION_SECRET`, `APP_PUBLIC_URL` / `API_PUBLIC_URL`, GitHub OAuth
  credentials (`GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` — this is the only
  sign-in method), a `SECRETS_ENCRYPTION_KEY` (32 random bytes, base64
  encoded), and `INTERNAL_API_TOKEN` (a shared secret with the Orchestrator).
- **Web** — `NEXT_PUBLIC_API_BASE_URL` (the browser-facing API URL),
  `API_INTERNAL_URL` (how the Web app's server reaches the API directly).
- **Orchestrator** — `DATABASE_URL` (same database as the API), a
  `KUBECONFIG` for the Kubernetes cluster it targets, `API_INTERNAL_URL` /
  `INTERNAL_API_TOKEN` (shared with the API), and the per-job-kind agent
  images it dispatches (also private on GHCR by default, so your cluster
  needs its own pull secret for them).
- **Landing** — no configuration required.
- **Docs** — `DOCS_BASE_URL` and `DOCS_SITE_URL` (site root vs. a path
  prefix, depending on how you route it).

## Example: running the Web and API images

```yaml
services:
  api:
    image: ghcr.io/yggdrasil-hq/yggdrasil-api:latest
    environment:
      PORT: "3000"
      DATABASE_URL: postgresql://user:pass@postgres:5432/yggdrasil
      S3_ENDPOINT: http://minio:9000
      S3_ACCESS_KEY: minioadmin
      S3_SECRET_KEY: change-me
      S3_BUCKET: yggdrasil
      S3_REGION: us-east-1
      SESSION_SECRET: change-me
      APP_PUBLIC_URL: https://app.example.com
      API_PUBLIC_URL: https://api.example.com
      GITHUB_CLIENT_ID: ${GITHUB_CLIENT_ID}
      GITHUB_CLIENT_SECRET: ${GITHUB_CLIENT_SECRET}
      SECRETS_ENCRYPTION_KEY: ${SECRETS_ENCRYPTION_KEY}
      INTERNAL_API_TOKEN: ${INTERNAL_API_TOKEN}
    ports:
      - "3001:3000"

  web:
    image: ghcr.io/yggdrasil-hq/yggdrasil-web:latest
    environment:
      NEXT_PUBLIC_API_BASE_URL: https://api.example.com
      API_INTERNAL_URL: http://api:3000
    ports:
      - "3000:3000"
```

This is a starting point, not a full production stack — it leaves out
PostgreSQL/MinIO themselves, the Orchestrator's Kubernetes cluster, and a
reverse proxy with TLS in front of everything. Add those, point
`*_PUBLIC_URL` at your real hostnames, and you have a from-images deployment
that doesn't need the source repositories checked out at all.

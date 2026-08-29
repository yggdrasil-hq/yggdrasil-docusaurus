# Docs site — internal architecture

**Read this when:** you need to understand how this repo is structured internally.
**Skip if:** you only need the suite-wide picture — see
`../../../docs/overview/architecture.md` in the meta repo.

## What this is

A static [Docusaurus](https://docusaurus.io) site — no backend, no API
integration, no database. Everything a viewer sees is either build-time
static output or (for `docusaurus build`) a pre-rendered React app.

## Directory layout

- `docs/` — the published content, *not* this repo's agent/developer docs
  (see the "two `docs/` trees" note in `../../CLAUDE.md`):
  - `getting-started/` — quick start
  - `using-yggdrasil/` — projects, features, agent runs, reviewing PRs,
    tests, notifications
  - `self-hosting/` — deployment overview, per-service config, running from
    published images
  - `reference/` — glossary
  - `intro.md`, `branding.mdx` — site landing/misc pages
- `src/pages/`, `src/css/` — custom React pages and site-wide styling outside
  the `docs/` content tree
- `static/` — assets served as-is (images, branding)
- `docusaurus.config.*`, `sidebars.*` — site config and the docs sidebar
- `deploy/Dockerfile.{dev,prod,test}` — container build for each environment

## Key modules / boundaries

There's no application logic to speak of — this is content plus Docusaurus's
own build pipeline. The only "boundary" worth naming is the two `docs/`
directories problem: this repo's own agent-facing docs (`overview/`,
`conventions/`, this file included) live *inside* the same top-level `docs/`
folder that Docusaurus publishes. Keep user-facing product guides under the
existing published subfolders (`getting-started/`, `using-yggdrasil/`,
`self-hosting/`, `reference/`) and agent/developer docs under `overview/` and
`conventions/` — don't let the two blend.

## External dependencies

- Docusaurus core + the classic preset (search, sidebar, MDX)
- No database, no object storage, no other Yggdrasil service at runtime

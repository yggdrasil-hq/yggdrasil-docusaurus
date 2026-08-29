# Docs site — local conventions

**Read this when:** you need conventions specific to this repo (style, patterns,
structure) that aren't covered by the suite-wide conventions.
**Skip if:** the topic is shared — see the meta repo's `../../../docs/conventions/`
(git/branching, documentation guide, repo structure).

> Only document what's *different* or *additional* here. Don't restate shared
> conventions.

## Content style

- Every published page targets the **end user**, not a developer or agent —
  write in terms of what they see in the Web app, not internal implementation
  (job kinds, table names, event types). If a concept needs both an
  end-user explanation and an internal one, the internal one belongs in the
  meta repo's `docs/concepts/`, not here.
- Each `using-yggdrasil/` page ends with a "Where to go next" table linking
  to related pages — keep that pattern when adding new pages.
- Don't document a feature here before it's actually usable end-to-end. If a
  decision (ADR) exists but the feature isn't shipped, it doesn't belong in
  this site yet.

## Two `docs/` trees (repeat of `../../CLAUDE.md`, worth restating locally)

This repo's own agent/developer docs (`overview/`, `conventions/` — including
this file) live inside the same `docs/` directory Docusaurus publishes.
Keep agent docs strictly under `overview/` and `conventions/`; everything
else under `docs/` is published, user-facing content.

## Testing conventions

- `npm test` runs `vitest run` — currently limited to smoke-level checks; no
  content-rendering test suite yet.

## Anything component-specific agents should know

- No backend, no database, no live data — every page is either static
  Markdown/MDX or a small custom React page under `src/pages/`.

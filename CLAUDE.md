# CLAUDE.md — Docs site (Yggdrasil Docs)

> Canonical agent guide for this repo. `AGENTS.md` is a thin pointer to this
> file. This repo is a **git submodule** of the Yggdrasil meta repo.

## Context discipline (read first)

1. This router is short on purpose. Find your task in the routing table and open
   **only** the doc(s) it points to.
2. Each doc starts with `**Read this when:**` — use it to decide before reading.
3. For **suite-wide** context (product, architecture, glossary, cross-component
   contracts), don't restate it here — follow the up-links to the meta repo.

## What this repo is

End-user product documentation for Yggdrasil, built with Docusaurus. This is
**not** the agent/developer docs tree — those live in each repo's `docs/` folder
and in the meta repo's `docs/`.

- **Role in Yggdrasil:** Docs site
- **Stack:** Docusaurus
- **Talks to:** No API integration — published static documentation

## Two different `docs/` trees (important)

- **`docs/` in this repo (Docusaurus content):** user-facing how-tos and product
  guides. This is what gets published to the public docs site.
- **`docs/` agent folders (meta repo + submodules):** agent and developer
  context. Do not move agent docs into Docusaurus or user how-tos into agent docs.

## Suite-wide context (up-links to the meta repo)

> These resolve when this repo is checked out inside the Yggdrasil meta repo.

- Product & scope: `../docs/overview/product.md`
- Architecture / data flow: `../docs/overview/architecture.md`
- Glossary: `../docs/overview/glossary.md`
- This component's bridge page: `../docs/components/docusaurus.md`
- Roadmap & open questions: `../docs/roadmap/`

## Routing table (this repo)

| If your task is about…        | Read                          |
|-------------------------------|-------------------------------|
| Orientation / how it's built  | `docs/overview/architecture.md` |
| Local dev / setup             | `docs/overview/setup.md`      |
| Conventions specific to here  | `docs/conventions/`           |

Full index: `docs/README.md`.

## Standing rules

- Keep docs in sync with code in the same change.
- One concern per doc; route, don't dump. (See the meta repo's
  `../docs/conventions/documentation-guide.md`.)
- Suite-wide facts live in the meta repo — link up, don't copy.

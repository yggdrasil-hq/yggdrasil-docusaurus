# Docusaurus — local setup

**Read this when:** you're setting up or running the user docs site locally.

## Full stack (recommended)

From the meta repo root:

```bash
./setup.sh
docker compose -f deploy/docker-compose.dev.yml up --build docusaurus
```

Docs: http://localhost:8080/docs/ (via nginx, `DOCS_BASE_URL=/docs/`).

## This repo only

```bash
npm install
DOCS_BASE_URL=/ npm run dev
```

## Tests

```bash
npm test
```

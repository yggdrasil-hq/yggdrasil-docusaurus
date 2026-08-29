# Docs site — local setup

**Read this when:** you're setting up or running this component locally.

## Full stack (recommended)

From the meta repo root:

```bash
./setup.sh
docker compose -f deploy/docker-compose.dev.yml up --build docusaurus
```

Site: http://localhost:8080/docs (via nginx).

## This repo only

```bash
npm install
npm run dev
```

Serves at http://localhost:3000 with hot reload.

## Build / serve a production build

```bash
npm run build
npm run start
```

## Tests

```bash
npm test
```

## Type checking

```bash
npm run typecheck
```

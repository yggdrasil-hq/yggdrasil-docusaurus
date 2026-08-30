---
sidebar_position: 8
---

# Monitoring

Monitoring surfaces exist at two scopes — organization-wide and per-project — so you can see what's deployed, what it's costing, and how your cluster is holding up, without leaving Yggdrasil.

:::note
This page describes the intended shape of Yggdrasil's monitoring surfaces. **Deployments** reflects real, built functionality for production; everything else on this page — preview deployment status, Usage, Analytics, Infrastructure, and Allocations — is designed but not yet backed by live data in the running app.
:::

## Deployments

Every project with a web app gets an always-on **production deployment**, redeployed automatically on merge to `main`. The Deployments page (org-wide, or scoped to one project) lists:

- **Production** — your live, always-on deployment.
- **Preview** — a temporary deployment spun up per run (spec grill, implementation, or test run) so you can see a change working before you approve it.

Not every project has something to deploy — a project still `initializing`, or one without a web app, shows no deployment rows.

## Usage

Tracks model token consumption per organization, project, or account, broken down by connected provider. Since providers are bring-your-own-key, Yggdrasil doesn't bill or own a quota — usage numbers and reset dates reflect whatever your provider reports back on its own billing cycle. The organization view is the authoritative one; project and account views show that project's or your own share of the total.

## Analytics

A breakdown of agent session activity — design sessions, spec grills, implementations, and test runs — by project, by user, and over time, plus a contribution-graph-style heatmap of run activity. Useful for spotting which projects or job kinds are consuming the most agent time.

## Infrastructure

Organization-only, read-only view of the Kubernetes cluster your jobs run on (configured in [Organization Settings → Cluster](organization-and-settings#cluster)): namespace-per-project isolation, sandboxed job pods, live resource usage, and per-job-kind resource defaults.

## Allocations

Organization-admin controls for capping what a project can consume:

- **Infrastructure allocations** — per-project Kubernetes resource caps (CPU/memory), layered on top of the org's cluster-wide defaults.
- **API allocations** — which connected providers a project may draw from, and an optional monthly token cap per project. A cap throttles a project's draw against the organization's own provider key — it doesn't create a separate billing quota.

## Where to go next

| I want to… | Go here |
|------------|---------|
| Manage providers, secrets, and cluster config | [Organization & Settings →](organization-and-settings) |
| Connect repos and manage a project | [Projects →](projects) |

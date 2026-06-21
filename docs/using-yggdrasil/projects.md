---
sidebar_position: 1
---

# Projects

A **project** is how you connect one or more GitHub repositories to Yggdrasil and manage all the work inside them — features, tests, and agent configuration.

## What a project contains

- **Primary repository** — the repo where Yggdrasil opens branches and pull requests. This is the coordination root for the project.
- **Linked sub-repositories** *(optional)* — additional repos cloned alongside the primary on every agent job. Use these when your app spans multiple repos (for example, a frontend and a backend).
- **Agent configuration** — model, tool allowlist, Pi extensions, and optional token budget. The agent uses this configuration on every job in the project.

Every feature and test run clones **all** linked repositories — there is no per-feature repo scoping. Single-repo projects are the common case: just a primary repository, no sub-repos.

## Creating a project

From the **Projects** page, click **New project** and provide:

1. A **name** and short **description**
2. The **primary repository** (`owner/repo`)
3. Any **linked sub-repositories** you need

Yggdrasil requests GitHub access for every linked repository when you connect them.

## Project initialization

When you create a project, Yggdrasil automatically starts **project initialization**. This is a special first feature (`project_init`) that adapts your codebase for Yggdrasil — build commands, conventions, and project settings.

While initialization is running, the project status is **`initializing`**. During this phase you **cannot** create other features or define tests.

The project becomes **`ready`** when project initialization completes and its pull request is **merged**. Only then can you add features and tests.

:::tip
Open **Project home** to track initialization progress and see what needs your attention.
:::

## Project home

Each project has a **home page** that gives you an at-a-glance view of progress:

- **Feature counts** — how many features are planned, being worked on, and completed
- **Action queue** — items blocking progress until you act (for example, an ADR waiting for review or a pull request ready for merge)

The action queue is sorted oldest-first. Each row links directly to the screen where you can resolve it.

## Where to go next

| I want to… | Go here |
|------------|---------|
| Describe new work for the agent | [Features →](features) |
| Set up scheduled verification | [Tests →](tests) |
| See events across all projects | [Notifications →](notifications) |

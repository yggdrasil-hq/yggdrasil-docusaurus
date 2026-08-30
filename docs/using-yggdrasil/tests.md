---
sidebar_position: 3
---

# Tests

A **test** is a scheduled verification scenario. Unlike a feature (which builds new code), a test checks that your app on **`main`** still behaves correctly. Tests are a separate entity with their own lifecycle.

:::note
Don't confuse this with the **Testing** stage inside a feature's lifecycle ([Features →](features#4-testing)) — that stage runs your existing tests automatically as a gate after Implementation. This page covers creating and scheduling the tests themselves.
:::

## When you can add tests

Tests can only be created when the project status is **`ready`** — after [project initialization →](projects#project-initialization) completes.

## What a test contains

Each test has:

- **Name** — a short label (for example, "Auth flow")
- **Markdown spec** — instructions for the test agent, written in plain language
- **Schedule** — how often the test runs (presets or a custom cron expression)
- **Enabled toggle** — pause or resume scheduled runs without deleting the test

## Writing the markdown spec

The spec is a markdown document. Use **`##` headings** for ordered subtasks — the agent follows them in sequence.

```markdown
# Login flow

Verify a user can sign in with email and password.

## Step 1: Open the login page
Navigate to /login and confirm the form is visible.

## Step 2: Submit valid credentials
Enter test@example.com and the test password, then submit.
Success looks like a redirect to the dashboard.
```

Each `##` section is one subtask. You do not create subtasks separately in the UI — edit the markdown spec to add, remove, or reorder steps.

## Scheduling

Choose from presets or enter a custom cron expression:

| Preset | Interval |
|--------|----------|
| Every hour | Once per hour |
| Every 6 hours | Four times per day |
| Daily at 9:00 AM | Once per day |
| Weekly on Monday at 9:00 AM | Once per week |
| Custom | Your own cron expression |

The minimum interval is **one hour**. If a scheduled run is still in progress when the next fire time arrives, the overlapping run is **skipped** — runs do not stack.

## What happens on a scheduled run

When a test fires on schedule, Yggdrasil dispatches a **test run** job:

1. All linked repositories are cloned at **`main`**
2. An ephemeral preview of the app is built and exposed via a tunnel URL
3. A test agent executes your markdown spec against that preview
4. A **test report** is produced (per-step pass/fail, screenshots, optional screen recording)
5. The preview and container are torn down

If a step fails, the run stops and the failure appears in your [project action queue →](projects#project-home) and [notifications →](notifications).

:::note
Scheduled test runs require the Orchestrator to be connected. You can define and edit tests in the web app before the Orchestrator is wired up.
:::

## Editing a test

Open a test from the **Tests** list to edit its name, spec, schedule, or enabled state. **Save changes** is only available after you modify something — unchanged tests cannot be saved accidentally.

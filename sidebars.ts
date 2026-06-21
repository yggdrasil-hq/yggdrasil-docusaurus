import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    "intro",
    {
      type: "category",
      label: "Getting Started",
      items: ["getting-started/quick-start"],
    },
    {
      type: "category",
      label: "Using Yggdrasil",
      items: [
        "using-yggdrasil/projects",
        "using-yggdrasil/features",
        "using-yggdrasil/tests",
        "using-yggdrasil/notifications",
        "using-yggdrasil/agent-runs",
        "using-yggdrasil/reviewing-prs",
      ],
    },
    {
      type: "category",
      label: "Self-Hosting",
      items: [
        "self-hosting/overview",
        "self-hosting/web",
        "self-hosting/api",
        "self-hosting/orchestrator",
      ],
    },
    {
      type: "category",
      label: "Reference",
      items: ["reference/glossary", "branding"],
    },
  ],
};

export default sidebars;

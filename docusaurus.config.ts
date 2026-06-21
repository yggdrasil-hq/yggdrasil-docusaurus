import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const baseUrl = process.env.DOCS_BASE_URL ?? "/docs/";
const siteUrl = process.env.DOCS_SITE_URL ?? "http://localhost:8080";

const config: Config = {
  title: "Yggdrasil Docs",
  tagline: "Product documentation",
  url: siteUrl,
  baseUrl,
  organizationName: "yggdrasil-hq",
  projectName: "yggdrasil-docusaurus",
  onBrokenLinks: "throw",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  favicon: "favicon.ico",
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "Yggdrasil",
      logo: {
        alt: "Yggdrasil",
        src: "img/branding/svg/mark.svg",
        width: 28,
        height: 28,
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

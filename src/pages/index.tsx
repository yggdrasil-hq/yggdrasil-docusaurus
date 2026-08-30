import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import clsx from "clsx";

const steps = [
  {
    title: "Describe",
    description:
      "Create a feature with a title and description in the web app. That's the entire ask.",
  },
  {
    title: "Plan & design review",
    description:
      "The agent grills you on requirements; scope, edge cases, and constraints get written up as an ADR before any code is touched.",
  },
  {
    title: "Agent builds",
    description:
      "Approved plans get implemented unattended, inside an isolated, ephemeral environment with no access beyond what the job needs.",
  },
  {
    title: "Automated tests",
    description:
      "Test scenarios run against the build automatically, catching regressions before anyone has to go looking for them.",
  },
  {
    title: "Agent & user review",
    description:
      "The agent checks its diff against the approved plan first. Then it lands as a real pull request your team reviews on GitHub.",
  },
  {
    title: "Merge",
    description:
      "Merge when it's ready, the way your team already does — deployment is automated from there.",
  },
];

const quickLinks = [
  {
    title: "Using Yggdrasil",
    description:
      "Projects, features, agent runs, organization settings, monitoring, and PR review.",
    to: "/using-yggdrasil/projects",
  },
  {
    title: "Self-hosting",
    description: "Run the full stack on your own infrastructure.",
    to: "/self-hosting/overview",
  },
  {
    title: "Quick start",
    description: "Spin up the dev stack and explore the suite locally.",
    to: "/getting-started/quick-start",
  },
  {
    title: "Glossary",
    description: "Terms for jobs, runs, orchestration, and more.",
    to: "/reference/glossary",
  },
];

export default function Home(): JSX.Element {
  const logoSrc = useBaseUrl("/img/branding/svg/horizontal-lockup.svg");

  return (
    <Layout
      title="Yggdrasil Docs"
      description="Product documentation for Yggdrasil — the AI-orchestrated software development suite for small teams."
    >
      <header className="docs-landing-hero">
        <div className="docs-landing-hero__inner">
          <img
            className="docs-landing-hero__logo"
            src={logoSrc}
            alt="Yggdrasil"
          />
          <Heading as="h1" className="docs-landing-hero__title">
            AI-built code you can actually trust
          </Heading>
          <p className="docs-landing-hero__tagline">
            Yggdrasil is an AI-orchestrated software-development suite for small
            teams. You describe what to build; an agent plans it, builds it in
            an isolated environment, tests it, and opens a pull request —
            reviewed by the agent and your team before anything merges.
          </p>
          <div className="docs-landing-hero__actions">
            <Link className="button button--primary button--lg" to="/intro">
              Read the overview
            </Link>
            <Link className="button button--outline button--primary button--lg" to="/getting-started/quick-start">
              Quick start
            </Link>
          </div>
        </div>
      </header>

      <main className="docs-landing-main">
        <section className="docs-landing-section">
          <Heading as="h2" className="docs-landing-section__title">
            How it works
          </Heading>
          <p className="docs-landing-hero__tagline" style={{ marginTop: "-0.5rem", marginBottom: "1.5rem" }}>
            Six checkpoints between a description and production. See{" "}
            <Link to="/using-yggdrasil/features">Features</Link> for what's
            live today versus still rolling out.
          </p>
          <ol className="docs-landing-steps">
            {steps.map((step, index) => (
              <li key={step.title} className="docs-landing-steps__item">
                <span className="docs-landing-steps__number">{index + 1}</span>
                <div>
                  <Heading as="h3" className="docs-landing-steps__title">
                    {step.title}
                  </Heading>
                  <p className="docs-landing-steps__description">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="docs-landing-section">
          <Heading as="h2" className="docs-landing-section__title">
            Explore the docs
          </Heading>
          <div className="docs-landing-grid">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                className={clsx("docs-landing-card", "card")}
                to={link.to}
              >
                <Heading as="h3" className="docs-landing-card__title">
                  {link.title}
                </Heading>
                <p className="docs-landing-card__description">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}

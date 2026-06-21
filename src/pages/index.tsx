import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import clsx from "clsx";

const steps = [
  {
    title: "Describe a feature",
    description:
      "Write a plain-English spec in the web app and point it at your GitHub repository.",
  },
  {
    title: "The agent builds it",
    description:
      "Yggdrasil spins up an isolated container, clones your repo, and opens a draft pull request.",
  },
  {
    title: "Review on GitHub",
    description:
      "Approve, request changes, or iterate — your team keeps the same PR workflow it already uses.",
  },
];

const quickLinks = [
  {
    title: "Using Yggdrasil",
    description: "Projects, features, agent runs, and PR review.",
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
            Build features with AI agents
          </Heading>
          <p className="docs-landing-hero__tagline">
            Yggdrasil is an AI-orchestrated software-development suite for small
            teams. You describe what to build; an agent builds it in an isolated
            container, opens a pull request, and streams progress back in real
            time.
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

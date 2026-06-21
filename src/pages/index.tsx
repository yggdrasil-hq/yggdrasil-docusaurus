import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";

export default function Home(): JSX.Element {
  return (
    <Layout title="Yggdrasil Docs" description="Product documentation">
      <main style={{ padding: "2rem", fontFamily: "system-ui" }}>
        <h1>Yggdrasil documentation</h1>
        <p>
          <Link to="/intro">Get started</Link>
        </p>
      </main>
    </Layout>
  );
}

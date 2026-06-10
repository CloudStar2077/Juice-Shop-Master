import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Welcome"
      description="My cybersecurity and software development portfolio">
      <main className="container margin-vert--xl">
        <Heading as="h1">Welcome to my Portfolio</Heading>
        <p>
          This site documents my projects in software development, security, and operations — hands-on DevSecOps in practice.
        </p>
        <Heading as="h2">Projects</Heading>
        <ul>
          <li>
            <Link to="/docs/juice-shop-master">Juice Shop Master</Link> — OWASP Juice Shop vulnerability writeups
          </li>
          <li>more coming soon...</li>
        </ul>
      </main>
    </Layout>
  );
}

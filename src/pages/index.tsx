import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Home(): ReactNode {
  return (
    <Layout
      title="Welcome"
      description="My DevSecOps portfolio">
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
        textAlign: 'center',
        padding: '2rem',
      }}>
        <Heading as="h1" style={{fontSize: '3rem', marginBottom: '1rem'}}>
          Welcome to my Portfolio
        </Heading>
        <p style={{fontSize: '1.2rem', maxWidth: '600px', marginBottom: '3rem', opacity: 0.8}}>
          This site documents my projects in software development, security, and operations — hands-on DevSecOps in practice.
        </p>
        <Heading as="h2" style={{marginBottom: '1.5rem'}}>Projects</Heading>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          maxWidth: '900px',
          width: '100%',
        }}>
          <Link
            to="/docs/juice-shop-master"
            style={{textDecoration: 'none'}}>
            <div style={{
              border: '1px solid var(--ifm-color-emphasis-300)',
              borderRadius: '8px',
              padding: '1.5rem',
              transition: 'border-color 0.2s',
            }}>
              <Heading as="h3" style={{marginBottom: '0.5rem'}}>🧃 Juice Shop Master</Heading>
              <p style={{opacity: 0.8, margin: 0}}>OWASP Juice Shop vulnerability writeups</p>
            </div>
          </Link>
          <div style={{
            border: '1px solid var(--ifm-color-emphasis-200)',
            borderRadius: '8px',
            padding: '1.5rem',
            opacity: 0.5,
          }}>
            <Heading as="h3" style={{marginBottom: '0.5rem'}}>🔜 More coming soon</Heading>
            <p style={{margin: 0}}>More projects will be added here</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

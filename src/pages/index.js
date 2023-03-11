import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ThemedImage from '@theme/ThemedImage';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';


function HomepageHeader() {

  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <div className='logo_main' style={{ width: 200, height: 200, borderRadius: '50%', display: 'inline-flex' }}>
          <ThemedImage
            sources={{
              light: '/img/logo.svg',
              dark: '/img/logo_dark.svg',
            }}
            style={{
              width: 150,
              height: 150,
              borderRadius: '50%',
              margin: 'auto',
            }}
          />
        </div>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p>Este sitio es un recurso dinámico que se nutre por el conocimiento y el aporte colaborativo.</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/blog/colaborar">
            ¿ Cómo colaboro ?
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {

  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

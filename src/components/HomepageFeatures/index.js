import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Histología',
    image_light: '/img/histologia_light.jpg',
    image_dark: '/img/histologia_dark.jpg',
    description: (
      <>
        Rama de la anatomía que estudia los tejidos de animales y plantas.
      </>
    ),
    link: 'docs/histologia/',
  },
  {
    title: 'Anatomía',
    image_light: '/img/anatomia_light.jpg',
    image_dark: '/img/anatomia_dark.jpg',
    description: (
      <>
        Ciencia que estudia la estructura del cuerpo.
      </>
    ),
    link: 'docs/anatomia/',
  },
];

function Feature({ image_light, image_dark, title, description, link }) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Link
          to={link}>
          <ThemedImage
            sources={{
              light: image_light,
              dark: image_dark,
            }}
            className={styles.featureImage}
          />
        </Link>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

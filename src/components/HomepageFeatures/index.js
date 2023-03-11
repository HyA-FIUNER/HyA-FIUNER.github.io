import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Histología',
    image: '/img/histologia.png',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Rama de la anatomía que estudia los tejidos de animales y plantas.
      </>
    ),
    link: 'docs/histologia/',
  },
  {
    title: 'Anatomía',
    image: '/img/anatomia.jpg',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Ciencia que estudia la estructura del cuerpo.
      </>
    ),
    link: 'docs/anatomia/',
  },
];

function Feature({Svg, image, title, description, link}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Link
          to={link}>
          <img className={styles.featureImage} src={image} alt={title} /> 
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

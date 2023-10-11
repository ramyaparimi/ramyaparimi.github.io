import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Empathy',
    Svg: require('/static/img/undraw_blooming_re_2kc4.svg').default,
    description: (
      <>
      With empathy as my superpower, I uncover hidden challenges 
      and design thoughtful solutions that create a positive impact.
      </>
    ),
  },
  {
    title: 'Passion for Open Source',
    Svg: require('/static/img/undraw_open_source_-1-qxw.svg').default,
    description: (
      <>
      I believe that knowledge is most valuable when shared with all, 
      and I strongly resonate with the <a href="https://opensource.com/open-source-way">principles</a> of the open source.
      </>
    ),
  },
  {
    title: 'Data Driven',
    Svg: require('/static/img/undraw_design_data_re_0s26.svg').default,
    description: (
      <>
      Data drives my precise decisions, 
      leading to well-informed victories. 
      It's my North Star in the journey of decision-making.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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

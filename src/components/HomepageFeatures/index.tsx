import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';


export type FeatureItem = {
  title: string;
  img: React.ComponentType<React.ComponentProps<'img'>>;
  description: ReactNode;
};

type FeatureItems = {
  items: FeatureItem[]
};


function Feature({ title, img: Img, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Img className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures({items}: FeatureItems): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {items.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

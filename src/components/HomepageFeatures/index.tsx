import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'قبل القدوم إلى ألمانيا',
    Svg: require('@site/static/img/pre-arrival.svg').default,
    description: (
      <>
        دليل شامل حول التأشيرات، الأوراق المطلوبة، ونصائح للاستعداد قبل الانتقال إلى ألمانيا.
      </>
    ),
  },
  {
    title: 'الحياة في ألمانيا',
    Svg: require('@site/static/img/daily_life.svg').default,
    description: (
      <>
        معلومات عن السكن، المواصلات، الرعاية الصحية، والعمل في ألمانيا للمغتربين المصريين.
      </>
    ),
  },
  {
    title: 'المجتمع والدعم',
    Svg: require('@site/static/img/community_support.svg').default,
    description: (
      <>
        تعرف على الجمعيات، المنتديات، والمصادر التي يمكن أن تساعدك على الاندماج والتواصل مع الجالية المصرية.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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

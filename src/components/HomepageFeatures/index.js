import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Your Success, Our Priority',
    img: require('@site/static/img/values-1.png').default,
    description: (
      <>
        Our primary focus is our clients. 
        Our client-first approach is not just a buzzword; it's the cornerstone of our services.
      </>
    ),
  },
  {
    title: 'Strong Expertise',
    img: require('@site/static/img/hero-img.png').default,
    description: (
      <>
        With a proven track record of delivering cutting-edge IT solutions, 
        we stand ready to elevate your business with our seasoned professionals.
      </>
    ),
  },
  {
    title: 'Quality We Trust',
    img: require('@site/static/img/values-3.png').default,
    description: (
      <>
        While we're dedicated to delivering on time, we also maintain the highest 
        standards of quality in all our work, ensuring your project's success.
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={img} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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

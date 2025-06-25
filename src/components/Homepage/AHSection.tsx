import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './AHSection.module.css';

type SiteItem = {
  link: string;
  title: string;
  image: string;
};

type AHSectionProps = {
  title: string;
  sites: SiteItem[];
};

function SiteCard({ site }: { site: SiteItem }) {
  return (
    <a
      href={site.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.siteCard}
    >
      <div className={styles.windowHeader}>
        <div className={styles.windowDot} style={{ background: '#ff5f56' }}></div>
        <div className={styles.windowDot} style={{ background: '#ffbd2e' }}></div>
        <div className={styles.windowDot} style={{ background: '#27c93f' }}></div>
      </div>
      <div className={styles.windowBody} style={{ backgroundImage: `url(${site.image})` }}>
      </div>
    </a>
  );
}

export default function AHSection({ title, sites }: AHSectionProps) {
  if (!sites || sites.length === 0) {
    return null;
  }

  return (
    <section className={styles.section}>
      <div className={styles.contentWrapper}>
        <Heading as="h2" className={styles.sectionTitle}>
          {title}
        </Heading>
        <div className={styles.sitesContainer}>
          {sites.map((site, idx) => (
            <SiteCard key={idx} site={site} />
          ))}
        </div>
      </div>
      <a
        href="https://altruistic-hive.org"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.footerBanner}
      >
        <span>go to Altruistic Hive Homepage &rarr;</span>
      </a>
    </section>
  );
}

import React, { useState } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './FeaturedWorksSection.module.css';

type WorkItem = {
  title: string;
  description: string;
  image: string;
  link: string;
};

type FeaturedWorksProps = {
  title: string;
  works: WorkItem[];
};

export default function FeaturedWorksSection({ title, works }: FeaturedWorksProps) {
  const [activeWork, setActiveWork] = useState(works[0]);
  if (!works || works.length === 0) {
    return null;
  }

  return (
    <section id="works" className={styles.section}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          {title}
        </Heading>
        <div className={styles.worksContainer}>
          <div className={styles.worksList}>
            {works.map((work, idx) => (
              <button
                key={idx}
                className={clsx(
                  styles.workItemButton,
                  activeWork.title === work.title && styles.activeButton,
                )}
                onClick={() => setActiveWork(work)}>
                {work.title}
              </button>
            ))}
          </div>
          <div className={styles.imageContainer}>
            <a href={activeWork.link} target="_blank" rel="noopener noreferrer">
              <img
                src={activeWork.image}
                alt={activeWork.title}
                className={styles.worksImage}
                key={activeWork.image}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

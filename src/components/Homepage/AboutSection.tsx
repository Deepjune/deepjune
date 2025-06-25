import React, { useState } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './AboutSection.module.css';

type HistoryItem = {
  period: string;
  details: string;
  image: string;
};

type AboutSectionProps = {
  name: string;
  description: string;
  history: HistoryItem[];
  defaultImage: string;
};

export default function AboutSection({
  name,
  description,
  history,
  defaultImage,
}: AboutSectionProps) {
  const [currentImage, setCurrentImage] = useState(defaultImage);

  return (
    <section id="about" className={clsx(styles.section, styles.sectionGray)}>
      <div className="container">
        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <Heading as="h2" className={styles.aboutName}>
              {name}
            </Heading>
            <p>{description}</p>
            <div className={styles.historySection}>
              <Heading as="h4">주요 연혁</Heading>
              <ul
                className={styles.historyList}
                onMouseLeave={() => setCurrentImage(defaultImage)}>
                {history.map((item, idx) => (
                  <li
                    key={idx}
                    onMouseEnter={() => setCurrentImage(item.image)}>
                    <strong>{item.period}</strong>
                    <span>{item.details}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.aboutImageContainer}>
            <img
              className={styles.aboutImage}
              src={currentImage}
              alt={`${name}의 활동 이미지`}
              key={currentImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

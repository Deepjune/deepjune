import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './HeroSection.module.css';

const GithubIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.578.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"/></svg>
);

const EmailIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
);

export default function HeroSection() {
    const [typedText, setTypedText] = useState('');
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const phrases = [
      "보이지 않는 곳에서 묵묵히 신뢰를 쌓아갑니다.",
      "견고한 네트워크는 비즈니스의 기반입니다.",
      "기술은 신뢰를 기반으로 가치를 만듭니다.",
      "문제 해결을 통해 더 나은 시스템을 구축합니다.",
    ];
  
    useEffect(() => {
      const currentPhrase = phrases[phraseIndex];
      const typingSpeed = 100;
      const deletingSpeed = 50;
      const delayAfterTyping = 2000;
  
      const handleTyping = () => {
        if (isDeleting) {
          if (typedText.length > 0) {
            setTypedText(currentPhrase.substring(0, typedText.length - 1));
          } else {
            setIsDeleting(false);
            setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          }
        } else {
          if (typedText.length < currentPhrase.length) {
            setTypedText(currentPhrase.substring(0, typedText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), delayAfterTyping);
          }
        }
      };
  
      const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
  
      return () => clearTimeout(timer);
    }, [typedText, isDeleting, phraseIndex]);

    return (
        <header className={clsx('hero', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className={styles.heroTitle}>
                    Deepjune,
                    <br />
                    네트워크 엔지니어 포트폴리오
                </Heading>
                <p className={styles.heroSubtitle}>
                    {typedText}
                    <span className={styles.typingCursor}>|</span>
                </p>
                <div className={styles.socialLinks}>
                    <a
                        href="https://github.com/altruistic-hive"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}>
                        <GithubIcon />
                        GitHub
                    </a>
                    <a
                        href="mailto:your-email@example.com"
                        className={styles.socialLink}>
                        <EmailIcon />
                        Email
                    </a>
                </div>
            </div>
            <a className={styles.scrollArrowContainer} href="#about">
                <div className={styles.scrollArrow}></div>
            </a>
        </header>
    );
}

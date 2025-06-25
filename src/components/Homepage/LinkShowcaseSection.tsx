import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './LinkShowcaseSection.module.css';

type PostItem = {
  link: string;
  image?: string;
  title?: string;
  description?: string;
};

type LinkShowcaseProps = {
  title: string;
  posts: PostItem[];
};

const fetchMetadata = async (url: string): Promise<Omit<PostItem, 'link'>> => {
  console.log(`Fetching metadata for ${url}... (simulated)`);
  return {
    title: `제목: ${url.split('/').pop() || 'Untitled'}`,
    description: `이 링크에 대한 설명입니다. 실제로는 OG 태그에서 가져옵니다.`,
    image: `https://placehold.co/600x400/EEE/31343C?text=OG+Image`,
  };
};

function PostCard({ post }: { post: PostItem }) {
  const [metadata, setMetadata] = useState<Omit<PostItem, 'link'>>({
    title: post.title || 'Loading...',
    description: post.description || 'Loading...',
    image: post.image || 'https://placehold.co/600x400/EEE/31343C?text=Loading...',
  });
  const [isLoading, setIsLoading] = useState(!post.title || !post.description || !post.image);

  useEffect(() => {
    if (isLoading) {
      fetchMetadata(post.link).then((data) => {
        const newMeta = {...metadata};
        if(!post.title) newMeta.title = data.title;
        if(!post.description) newMeta.description = data.description;
        if(!post.image) newMeta.image = data.image;
        setMetadata(newMeta);
        setIsLoading(false);
      });
    }
  }, [post, isLoading]);

  return (
    <a href={post.link} target="_blank" rel="noopener noreferrer" className={styles.card}>
      <div className={styles.cardImageContainer}>
        <img src={metadata.image} alt={metadata.title} className={styles.cardImage} />
      </div>
      <div className={styles.cardContent}>
        <Heading as="h3" className={styles.cardTitle}>{metadata.title}</Heading>
        <p className={styles.cardDescription}>{metadata.description}</p>
      </div>
    </a>
  );
}

export default function LinkShowcaseSection({ title, posts }: LinkShowcaseProps) {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section id="showcase" className={clsx(styles.section, styles.sectionGray)}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          {title}
        </Heading>
        <div className={styles.postsGrid}>
          {posts.slice(0, 6).map((post, idx) => (
            <PostCard key={idx} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import HeroSection from '@site/src/components/Homepage/HeroSection';
import AboutSection from '@site/src/components/Homepage/AboutSection';
import FeaturedWorksSection from '@site/src/components/Homepage/FeaturedWorksSection';
import LinkShowcaseSection from '@site/src/components/Homepage/LinkShowcaseSection';
import AHSection from '@site/src/components/Homepage/AHSection';
import styles from './index.module.css';

// DATA START!

const aboutData = {
  name: 'Deepjune',
  description: `대전 이레솔루션에서 근무하는 네트워크 엔지니어입니다. 복잡한 네트워크 문제를 해결하고, 안정적인 인프라를 통해 비즈니스의 성장을 지원하는 일에 자부심을 느낍니다.`,
  defaultImage: 'https://placehold.co/600x450/333/FFF?text=Deepjune',
  history: [
    { period: '2025 - 현재', details: '이레솔루션 네트워크 엔지니어', image: 'https://placehold.co/600x450/5475e3/FFF?text=Solution' },
    { period: '2024.11', details: 'CCNP Enterprise 취득', image: 'https://placehold.co/600x450/28a745/FFF?text=CCNP' },
    { period: '2023.08', details: 'CCNA 취득', image: 'https://placehold.co/600x450/ffc107/333?text=CCNA' },
    { period: '2023.01', details: '네트워크 엔지니어링 학습 시작', image: 'https://placehold.co/600x450/6c757d/FFF?text=Study' },
  ],
};

const featuredWorksData = {
    title: '주요 역량 및 프로젝트',
    works: [
      { title: '네트워크 인프라 구축', description: 'L2/L3 스위치, 방화벽을 포함한 전체 네트워크 인프라 설계 및 구축.', image: 'https://placehold.co/800x1131/3d84ff/FFF?text=Infrastructure', link: '#'},
      { title: '네트워크 자동화', description: 'Python과 Ansible을 활용하여 반복적인 장비 설정 및 백업 작업을 자동화.', image: 'https://placehold.co/800x1131/17a2b8/FFF?text=Automation', link: '#' },
      { title: 'CCNP Enterprise', description: '고급 라우팅, 스위칭, 무선 및 보안 기술에 대한 전문성 증명.', image: 'https://placehold.co/800x1131/28a745/FFF?text=CCNP', link: '#' },
      { title: 'CCNA', description: '네트워크 기초, IP 연결, 보안 기초, 자동화 및 프로그래밍 가능성.', image: 'https://placehold.co/800x1131/ffc107/333?text=CCNA', link: '#' },
    ],
};

const linkShowcaseData = {
  title: "추천 글",
  posts: [
    {
      link: "https://docusaurus.io/blog/2021/08/26/welcome",
      title: "Docusaurus 시작하기",
      description: "Docusaurus 블로그 기능은 blog 플러그인에 의해 구동됩니다.",
      image: "https://docusaurus.io/assets/images/docusaurus-plushie-banner-a60f2b3c7031445179a293c42a201f8d.jpeg"
    },
    {
      link: "https://www.44bits.io/ko/post/why-i-use-rust-for-my-side-projects",
    },
    {
      link: "https://news.hada.io/topic?id=1234",
      title: "GeekNews 최신 토픽"
    },
    {
      link: "https://your-blog.com/some-post-4",
      title: "네트워크 모니터링 시스템 구축기",
      description: "Zabbix와 Grafana를 활용하여 전체 네트워크의 가시성을 확보한 경험을 공유합니다.",
      image: "https://placehold.co/600x400/6f42c1/FFF?text=Monitoring"
    },
    {
      link: "https://your-blog.com/some-post-5",
      title: "Python으로 Cisco 장비 설정 자동화하기",
      description: "Netmiko 라이브러리를 사용해 반복적인 설정 작업을 자동화하여 업무 효율을 높인 과정입니다.",
      image: "https://placehold.co/600x400/e83e8c/FFF?text=Python+Script"
    },
    {
      link: "https://your-blog.com/some-post-6",
      title: "클라우드 네트워크, AWS VPC 기초",
      description: "클라우드 환경의 기본이 되는 AWS Virtual Private Cloud의 개념과 기본 구성 요소를 정리했습니다.",
      image: "https://placehold.co/600x400/20c997/FFF?text=AWS+VPC"
    }
  ]
}
const ahSectionData = {
  title: "From Altruistic Hive",
  sites: [
    {
      title: 'Docusaurus',
      link: 'https://docusaurus.io',
      image: 'https://docusaurus.io/img/docusaurus-social-card.png',
    },
    {
      title: 'Typora',
      link: 'https://typora.io',
      image: 'https://typora.io/img/icon-192.png'
    },
    {
      title: 'Altruistic-Hive',
      link: 'https://altruistic-hive.org',
      image: 'https://altruistic-hive.org/og.png',
    },
  ]
}

// DATA END!

export default function Home(): React.ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} | 네트워크 엔지니어 포트폴리오`}
      description="대전 이레솔루션에서 근무하는 네트워크 엔지니어 Deepjune입니다.">
      <HeroSection />
      <main>
        <AboutSection {...aboutData} />
        <FeaturedWorksSection {...featuredWorksData} />
        <LinkShowcaseSection {...linkShowcaseData} />
        {/* 💡 새로 만든 AHSection 렌더링 */}
        <AHSection {...ahSectionData} />
      </main>
    </Layout>
  );
}

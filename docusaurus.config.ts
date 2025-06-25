import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  // --- 사이트 기본 정보 ---
  title: 'Deepjune',
  tagline: '성실함으로 꾸준히 성장하는 네트워크 엔지니어, Deepjune입니다.',
  favicon: 'img/favicon.svg',

  // --- 배포 정보 ---
  future: {
    v4: true,
  },
  url: 'https://deepjune.altruistic-hive.org',
  baseUrl: '/',
  organizationName: 'deepjune',
  projectName: 'your-repo-name', // 실제 GitHub 저장소 이름으로 변경

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/docs',
        },
        blog: {
          showReadingTime: true,
          routeBasePath: '/blog',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Deepjune',
      logo: {
        alt: 'Deepjune Logo',
        src: 'img/favicon.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '문서',
        },
        {
          to: '/blog', 
          label: '블로그', 
          position: 'left'
        },
        {
          href: 'https://github.com/altruistic-hive',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    // --- 푸터 설정 ---
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Deepjune. Built with Docusaurus.`,
    },
    // --- 코드 블럭 테마 ---
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'دليل الحياة في ألمانيا',
  tagline: 'دليلك الشامل للحياة والعمل في ألمانيا',
  favicon: 'img/favicon.ico',

  url: 'https://jaxfellow.github.io',
  baseUrl: '/egyptians-in-germany-wiki/',

  organizationName: 'jaxfellow',
  projectName: 'egyptians-in-germany-wiki',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ar',
    locales: ['ar'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/jaxfellow/egyptians-in-germany-wiki/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/jaxfellow/egyptians-in-germany-wiki/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'دليل الحياة في ألمانيا',
      logo: {
        alt: 'شعار الموقع',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'الدليل',
        },
        {
          href: 'https://github.com/jaxfellow/egyptians-in-germany-wiki',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'الدليل',
          items: [
            {
              label: 'مقدمة',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'المجتمع',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/groups/1231877036839794',
            },
          ],
        },
      ],
      copyright: `حقوق النشر © ${new Date().getFullYear()} دليل الحياة في ألمانيا. مبني باستخدام Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
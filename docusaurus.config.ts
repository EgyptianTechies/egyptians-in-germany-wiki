import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'دليل الحياة في ألمانيا',
  tagline: 'دليلك الشامل للحياة والعمل في ألمانيا',
  favicon: 'img/favicon.png',

  url: 'https://EgyptianTechies.github.io',
  baseUrl: '/',

  organizationName: 'EgyptianTechies',
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
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/EgyptianTechies/egyptians-in-germany-wiki/tree/main',
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        indexBlog: false,
        indexDocs: true,
        docsRouteBasePath: "/",
        searchBarPosition: "right",
        language: ["ar"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      }),
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
          href: 'https://github.com/EgyptianTechies/egyptians-in-germany-wiki',
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
              label: 'قبل القدوم إلى ألمانيا', 
              to: '/before-germany',
            },
            {
              label: 'الحياة في ألمانيا',
              to: '/living-in-germany',
            },
            {
              label: 'الأسرة في ألمانيا',
              to: '/family-in-germany',
            },
            {
              label: 'العمل في ألمانيا',
              to: '/work-in-germany',
            },
            {
              label: 'مغادرة ألمانيا',
              to: '/leave-germany',
            },
          ],
        },
        {
          title: 'انضم إلينا',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/groups/1231877036839794',
            },
          ],
        },
        {
          title: 'ادعمنا',
          items: [
            {
              label: 'Open Collective',
              href: 'https://opencollective.com/egyptian-techies-berlin',
            },
          ]
        }
      ],
      copyright: `دليل الحياة في ألمانيا مرخص برخصة <a target="_blank" href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> © ومبني باستخدام Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
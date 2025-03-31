import { themes as prismThemes } from 'prism-react-renderer';

module.exports = {
  title: 'المصريين في ألمانيا',
  tagline: 'دليل المصريين في ألمانيا',
  url: 'http://localhost:3000',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'egyptians-in-germany', // GitHub org/user name.
  projectName: 'wiki', // Repo name.
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar'],
    localeConfigs: {
      ar: {
        direction: 'rtl',
      },
    },
  },
  themeConfig: {
    navbar: {
      title: 'المصريين في ألمانيا',
      items: [
        { to: '/docs/intro', label: 'الرئيسية', position: 'left' },
        { to: '/docs/living-in-germany', label: 'الحياة في ألمانيا', position: 'left' },
        { to: '/docs/work-and-study', label: 'العمل والدراسة', position: 'left' },
        { to: '/docs/community-and-culture', label: 'المجتمع والثقافة', position: 'left' },
        { to: '/docs/faq-and-resources', label: 'الأسئلة الشائعة', position: 'left' },
        { to: '/docs/contributions', label: 'المساهمة', position: 'left' },
      ],
      style: 'primary', // Optional: Ensure proper styling for RTL
    },
    footer: {
      style: 'dark',
      copyright: `&copy; 2023 المصريين في ألمانيا. جميع الحقوق محفوظة.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

import { themes as prismThemes } from 'prism-react-renderer';

module.exports = {
  title: 'المصريين في ألمانيا',
  tagline: 'دليل المصريين في ألمانيا',
  url: 'http://localhost:3000',
  baseUrl: '/', // Update this to match your hosting setup
  onBrokenLinks: 'warn', // Change to 'ignore' or 'log' if necessary
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
        htmlLang: 'ar-EG',
        label: 'العربية',
      },
    },
  },
  themeConfig: {
    navbar: {
      title: 'Egyptians in Germany',
      logo: {
        alt: 'Wiki Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/docs/intro', label: 'Docs', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/your-org/egyptians-in-germany-wiki',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [{ label: 'Introduction', to: '/docs/intro' }],
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub', href: 'https://github.com/your-org/egyptians-in-germany-wiki' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Egyptians in Germany. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    customScript: `
      document.documentElement.setAttribute('dir', 'rtl');
    `,
    breadcrumbs: true, // Enable breadcrumbs navigation
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
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['ar'], // Set the language to Arabic
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
      },
    ],
  ],
};

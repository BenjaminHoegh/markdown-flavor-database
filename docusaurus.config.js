const {themes: prismThemes} = require('prism-react-renderer');
const remarkMath = require("remark-math").default;
const rehypeKatex = require("rehype-katex").default;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Markdown Syntax Matrix',
  favicon: 'img/favicon.ico',

  url: 'https://example.github.io',
  baseUrl: '/markdown-syntax-matrix/',

  organizationName: 'example',
  projectName: 'markdown-syntax-matrix',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  trailingSlash: false,

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */ ({
        docs: {
          includeCurrentVersion: false,
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.ts'),
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          editUrl: 'https://github.com/example/markdown-syntax-matrix/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
      mermaid: {
        theme: {light: 'neutral', dark: 'dark'},
      },
      image: 'img/parsedownExtended.png',
      navbar: {
        title: 'Markdown Syntax Matrix',
        items: [
          {
            href: 'https://github.com/example/markdown-syntax-matrix',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        additionalLanguages: ['php', 'bash'],
        theme: prismThemes.github,
        darkTheme: prismThemes.vsDark,
      },
    }),
};

module.exports = config;

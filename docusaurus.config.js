const {themes: prismThemes} = require('prism-react-renderer');
const remarkMath = require("remark-math").default;
const rehypeKatex = require("rehype-katex").default;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Markdown Syntax Matrix',
  favicon: 'img/favicon.ico',

  url: 'https://example.github.io',
  baseUrl: '/markdown-flavor-comparison/',

  organizationName: 'example',
  projectName: 'markdown-flavor-comparison',

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
          routeBasePath: '/',
          editUrl: 'https://github.com/BenjaminHoegh/markdown-flavor-comparison/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
      image: 'img/parsedownExtended.png',
      navbar: {
        title: 'markdown-flavor-comparison',
        items: [
          {
            href: 'https://github.com/BenjaminHoegh/markdown-flavor-comparison',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
    }),
};

module.exports = config;

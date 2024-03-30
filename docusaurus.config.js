// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Histología y Anatomía',
  tagline: 'Material de estudio colaborativo',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://hya-fiuner.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'HyA-FIUNER', // Usually your GitHub org/user name.
  projectName: 'HyA-FIUNER.github.io', // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/HyA-FIUNER/HyA-FIUNER.github.io/blob/main/',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/HyA-FIUNER/HyA-FIUNER.github.io/blob/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo_hya.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'H y A Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark.svg',
        },
        items: [
          // {
          //   label: 'Noticias',
          //   to: '/blog',
          //   position: 'left'
          // },
          {
            label: 'Histología',
            type: 'docSidebar',
            sidebarId: 'histologiaSidebar',
            position: 'left',
          },
          {
            label: 'Anatomía',
            type: 'docSidebar',
            sidebarId: 'anatomiaSidebar',
            position: 'left',
          },
          {
            href: 'http://ingenieria.uner.edu.ar',
            className: "header-uner-link",
            position: 'right',
          },
          {
            href: 'https://campus.ingenieria.uner.edu.ar/course/view.php?id=155',
            className: "header-moodle-link",
            position: 'right',
          },
          {
            href: 'https://github.com/HyA-FIUNER/HyA-FIUNER.github.io',
            className: "header-github-link",
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Cátedra de Histología y Anantomía de la FIUNER`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'eGuru',
  tagline: 'Transforming Knowledge into Expertise',
  favicon: 'img/svl-icon.png',

  // Set the production url of your site here
  url: 'https://eguru.svlpro.online',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'svl', // Usually your GitHub org/user name.
  projectName: 'eguru', // Usually your repo name.

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
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      metadata: [
                  {name: 'description', content: 'Thing in Everything'},
                  {name: 'keywords', content: 'IOT,Web Developement, Trainings'},
                ],      

      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'eGuru',
        logo: {
          alt: 'SVL Automations',
          src: 'img/SVL Logo_2.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'arduino',
            position: 'left',
            label: 'Arduino',
            to: 'docs/arduino',
          },          
          {
             type: 'docSidebar',
            sidebarId: 'github',
            position: 'left',
            to: 'docs/github',
            label: 'GitHub',
            target: '_blank',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://svlautomations.in',
            label: 'SVL',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contact',
            items: [
              {
                label: '+91 88 5335 4141',
                href: 'https://wa.me/918853354141',
              },
              {
                label: 'info@svlautomations.in',
                href: 'mailto:info@svlautomations.in',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIN',
                href: 'https://www.linkedin.com/company/svl-automations',
              },
              {
                label: 'Whatsapp',
                href: 'https://wa.me/918853354141',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/SVL-Automations',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'SVL Trainings',
                href: 'https://svltrainings.in/',
              },
              {
                label: 'SVL Automations',
                href: 'https://svlautomations.in/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SVL Automations, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

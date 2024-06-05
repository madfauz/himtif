// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const sidebars = require("./sidebars");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "HIMTIF",
  tagline: "Himpunan Mahasiswa Teknik Informatika",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "HIMTIF Raharja",
        logo: {
          alt: "My Site Logo",
          src: "img/logo-himtif.png",
        },
        items: [
          {
            type: "doc",
            docId: "belati/intro-belati",
            position: "left",
            label: "Belati",
          },
          {
            type: "doc",
            docId: "divisi/ppo/pengenalan-ppo",
            position: "left",
            label: "Divisi",
          },
          { to: "/blog", label: "HIMTIF News", position: "left" },
          // {
          //   href: "https://github.com/facebook/docusaurus",
          //   label: "GitHub",
          //   position: "left",
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "BELATI",
            items: [
              {
                label: "Web",
                to: "/docs/belati/web/html/struktur-html",
              },
            ],
          },
          {
            title: "Sosial Media",
            items: [
              {
                label: "Intagram",
                href: "https://www.instagram.com/himtif?igsh=MTllM3lrbGd2N3J2OA==",
              },
              {
                label: "Tiktok",
                href: "https://www.tiktok.com/@himtif.raharja?_t=8mgz0acDn17&_r=1",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "HIMTIF News",
                to: "/blog",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HIMTIF Universitas Raharja.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

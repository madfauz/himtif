/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  Belati: [
    {
      Intro: ["belati/intro-belati"],
      Web: [
        {
          label: "HTML",
          type: "category",
          items: [
            "belati/web/html/struktur-html",
            "belati/web/html/tag-dasar",
            "belati/web/html/tipografi",
            "belati/web/html/table",
            "belati/web/html/form",
          ],
        },
        {
          label: "CSS",
          type: "category",
          items: [
            "belati/web/css/dasar",
            "belati/web/css/box-sizing",
            "belati/web/css/text-formating",
            "belati/web/css/display",
            "belati/web/css/pseudo-class",
            "belati/web/css/grid-layout",
            "belati/web/css/flex-box",
          ],
        },
        {
          label: "Javascript",
          type: "category",
          items: [
            "belati/web/javascript/dasar",
            "belati/web/javascript/operator",
            "belati/web/javascript/pengkondisian",
          ],
        },
      ],
    },
  ],
  Divisi: [
    {
      PPO: ["divisi/ppo/pengenalan-ppo", "divisi/ppo/proker"],
      PPK: ["divisi/ppk/pengenalan-ppk", "divisi/ppk/proker"],
      PMK: ["divisi/pmk/pengenalan-pmk", "divisi/pmk/proker"],
      MBK: ["divisi/mbk/pengenalan-mbk", "divisi/mbk/proker"],
    },
  ],
};

module.exports = sidebars;

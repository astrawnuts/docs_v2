const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const path = require('path');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Help Desk",
  tagline: "Say Hello to Knowledge",
  url: "https://help.taxmatterz.com",
  baseUrl: "/",
  onBrokenLinks: "warn", //ignore, log, warn, error, throw
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Tax Matterz", // Usually your GitHub org/user name.
  projectName: "Help Desk", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "",
      logo: {
        alt: "Tax Matterz Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "welcome",
          position: "left",
          label: "Help Desk",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://taxmattersnz.co.nz",
          label: "Return to Tax Matterz",
          position: "right",
        },
      ],
      hideOnScroll: false,
    },
    footer: {
      logo: {
        alt: 'Tax Matterz Logo',
        src: 'img/logo.original.svg', // with respect to static dir
        href: 'https://taxmattersnz.co.nz',
      },

      style: "dark",
      links: [
        {
          title: "Tax Matterz NZ Limited",
          items: [

            {
              label: "Auckland New Zealand",
              to: "/",
            },
            {
              label: "Accounting & Taxation Services",
              to: "/",
            },
            {
              label: "Get your website designed by Tax Matterz. Get in touch with us to learn more.",
              to: "/",
            },
          ],
        },
        {
          title: "Learn Using",
          items: [
            {
              label: "Help Desk",
              to: "/docs/",
            },
          ],
        },
        {
          title: "Tax Matterz",
          items: [
            {
              label: "Home",
              href: "https://taxmatterz.co/",
            },
            {
              label: "Services",
              href: "https://taxmatterz.co/services",
            },
            {
              label: "Forms",
              href: "https://taxmatterz.co/forms",
            },

            {
              label: "Contact Us",
              href: "https://taxmatterz.co/contactus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "CMS",
              to: "https://helpdesk-taxmatterz.netlify.app/admin"
            },
            {
              label: "GitHub",
              href: "https://github.com/astrawnuts/docs_v2/tree/master/",
            },
            {
              label: "Request An Article",
              href: "https://github.com/astrawnuts/docs_v2/tree/master/",
            },
          ],
        },
      ],
      copyright: `Tax Matterz © ${new Date().getFullYear()}. Help Desk Made With 😍 Talk With Us For Your Next Site.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          routeBasePath: "/",
          editUrl: "https://github.com/astrawnuts/docs_v2/tree/master/",
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/astrawnuts/docs_v2/tree/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      },
    ],
  ],
  // ...
  plugins: ['docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        swCustom: path.resolve(__dirname, 'src/sw.js'),
        pwaHead: [
          {
            tagName: 'link',
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/img/icons/generator/apple-touch-icon.png",
          },
          {
            tagName: 'link',
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/img/icons/generator/favicon-32x32.png",
          },
          {
            tagName: 'link',
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: "/img/icons/generator/favicon-16x16.png",
          },
          {
            tagName: 'link',
            rel: "manifest",
            href: "/img/icons/generator/site.webmanifest"
          },
          {
            tagName: 'link',
            rel: "mask-icon",
            href: "/img/icons/generator/safari-pinned-tab.svg",
            color: "#c00000"

          },
          {
            tagName: 'link',
            rel: "shortcut icon",
            href: "/img/icons/generator/favicon.ico",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-title",
            content: "Help Desk"
          },
          {
            tagName: "meta",
            name: "application-name",
            content: "Help Desk"
          },

          {
            tagName: "meta",
            name: "msapplication-TileColor",
            content: "#ffffff"
          },
          {
            tagName: "meta",
            name: "msapplication-TileImage",
            content: "/img/icons/generator/mstile-144x144.png",
          },
          {
            tagName: "meta",
            name: "msapplication-config",
            content: "/img/icons/generator/browserconfig.xml",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "#2e3148",
          }
        ],
      },
    ],
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // Options here
        // whether to index docs pages
        indexDocs: true,
        // must start with "/" and correspond to the routeBasePath configured for the docs plugin
        // use "/" if you use docs-only-mode
        // (see https://v2.docusaurus.io/docs/2.0.0-alpha.70/docs-introduction#docs-only-mode)
        // docsRouteBasePath: "/",

        // Whether to also index the titles of the parent categories in the sidebar of a doc page.
        // 0 disables this feature.
        // 1 indexes the direct parent category in the sidebar of a doc page
        // 2 indexes up to two nested parent categories of a doc page
        // 3...
        //
        // Do _not_ use Infinity, the value must be a JSON-serializable integer.
        indexDocSidebarParentCategories: 0,

        // whether to index blog pages
        indexBlog: true,
        // must start with "/" and correspond to the routeBasePath configured for the blog plugin
        // use "/" if you use blog-only-mode
        // (see https://v2.docusaurus.io/docs/2.0.0-alpha.70/blog#blog-only-mode)
        // blogRouteBasePath: "/blog",

        // whether to index static pages
        // /404.html is never indexed
        indexPages: false,

        // language of your documentation, see next section
        language: "en",

        // setting this to "none" will prevent the default CSS to be included. The default CSS
        // comes from autocomplete-theme-classic, which you can read more about here:
        // https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-theme-classic/
        style: undefined,

        // lunr.js-specific settings
        lunr: {
          // When indexing your documents, their content is split into "tokens".
          // Text entered into the search box is also tokenized.
          // This setting configures the separator used to determine where to split the text into tokens.
          // By default, it splits the text at whitespace and dashes.
          //
          // Note: Does not work for "ja" and "th" languages, since these use a different tokenizer.
          tokenizerSeparator: /[\s\-]+/,
        },
      },
    ],
  ],
};



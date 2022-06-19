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
  trailingSlash: false,
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
          href: "https://taxmatterz.com",
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
        href: 'https://taxmatterz.com',
      },

      style: "dark",
      links: [
        {
          title: "Tax Matterz NZ Limited",
          items: [
            {
              label: "Formerly Tax Matters",
              to: "/",
            },
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
              to: "https://taxmatterz.com/contactus",
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
              href: "https://taxmatterz.com/",
            },
            {
              label: "Services",
              href: "https://taxmatterz.com/services",
            },
            {
              label: "Forms",
              href: "https://taxmatterz.com/forms",
            },

            {
              label: "Contact Us",
              href: "https://taxmatterz.com/contactus",
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
              to: "https://help.taxmatterz.com/admin"
            },
            {
              label: "Submit Feedback",
              href: "https://github.com/astrawnuts/docs_v2/tree/master/",
            },
            {
              label: "Report An Issue",
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
          // editUrl: "https://github.com/astrawnuts/docs_v2/tree/master/",
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
  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-P6VVZK5PL1',
        anonymizeIP: true,
      },
    ],
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
          // Icons Generated By https://realfavicongenerator.net/
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
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-status-bar-style",
            content: "black",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          // Splash Screens Generated By https://appsco.pe/developer/splash-screens
          {
            tagName: 'link',
            href: "/img/splashscreens/iphone5_splash.png",
            media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
            rel: "apple-touch-startup-image"
          },
          {
            tagName: 'link',
            href: "/img/splashscreens/iphone6_splash.png",
            media: "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)",
            rel: "apple-touch-startup-image"
          },
          {
            tagName: 'link',
            href: "/img/splashscreens/iphoneplus_splash.png",
            media: "(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)",
            rel: "apple-touch-startup-image"
          },
          {
            tagName: 'link',
            href: "/img/splashscreens/iphonex_splash.png",
            media: "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)",
            rel: "apple-touch-startup-image"
          },
          {
            tagName: 'link',
            href: "/img/splashscreens/iphonexr_splash.png",
            media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)",
            rel: "apple-touch-startup-image"
          },
          {
            tagName: 'link',
            href: "/img/splashscreens/iphonexsmax_splash.png",
            media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)",
            rel: "apple-touch-startup-image"
          },
          {
            tagName: 'link',
            href: "/img/splashscreens/ipad_splash.png",
            media: "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)",
            rel: "apple-touch-startup-image"
          },
          {
            tagName: 'link',
            href: "/img/splashscreens/ipadpro1_splash.png",
            media: "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)",
            rel: "apple-touch-startup-image"
          },
          {
            tagName: 'link',
            href: "/img/splashscreens/ipadpro3_splash.png",
            media: "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)",
            rel: "apple-touch-startup-image"
          },
          {
            tagName: 'link',
            href: "/img/splashscreens/ipadpro2_splash.png",
            media: "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)",
            rel: "apple-touch-startup-image"
          }
        ],
      },
    ],
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      },
    ],
  ],
};



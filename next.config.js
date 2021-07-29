module.exports = {
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/c/react",
        destination:
          "https://platzi.com/p/bgamas/curso/2118-react-hooks/diploma/detalle/",
        permanent: true,
      },
      {
        source: "/c/next",
        destination:
          "https://platzi.com/p/bgamas/curso/1991-next/diploma/detalle/",
        permanent: true,
      },
      {
        source: "/c/figma",
        destination:
          "https://platzi.com/p/bgamas/curso/1961-figma/diploma/detalle/",
        permanent: true,
      },
    ];
  },
};

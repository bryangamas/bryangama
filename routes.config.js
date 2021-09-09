const redirects = async () => {
  return [
    {
      source: "/c/react",
      destination:
        "https://platzi.com/p/bgamas/ruta/8-desarrollo-react/diploma/detalle/",
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
};

module.exports = redirects;

const redirects = require("./routes.config");

module.exports = {
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
  redirects,
};

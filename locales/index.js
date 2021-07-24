import constants from "./constants";
import eng from "./en.json";
import esp from "./es.json";

const locales = {
  en: { ...constants, ...eng },
  es: { ...constants, ...esp },
};

export default locales;

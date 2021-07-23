import React from "react";
import StyledPageOptions from "./style";
import Icon from "@components/atoms/Icon";
import useDarkMode from "use-dark-mode";
import useLocale from "hooks/useLocale";

const PageOptions = () => {
  const { value: darkMode, toggle: toggleTheme } = useDarkMode(false);
  const { locale, toggleLocale } = useLocale();

  return (
    <StyledPageOptions>
      <Icon
        src={`/icons/pageOptions/${locale === "en" ? "es" : "en"}.svg`}
        onClick={toggleLocale}
      />
      <Icon
        src={`/icons/pageOptions/${darkMode ? "lightMode" : "darkMode"}.svg`}
        onClick={toggleTheme}
        lightIfDark
      />
    </StyledPageOptions>
  );
};

export default PageOptions;

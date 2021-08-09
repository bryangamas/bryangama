import StyledPageOptions from "./style";
import Icon from "@components/shared/Icon";
import useDarkMode from "use-dark-mode";
import useLocale from "hooks/useLocale";

const PageOptions = () => {
  const { value: darkMode, toggle: toggleTheme } = useDarkMode(false);
  const { locale, toggleLocale } = useLocale();
  const localeToSwith = locale === "en" ? "Spanish" : "English";
  const modeToSwitch = darkMode ? "Light" : "Dark";

  return (
    <StyledPageOptions>
      <Icon
        src={`/icons/pageOptions/${locale === "en" ? "es" : "en"}.svg`}
        onClick={toggleLocale}
        alt={`Switch to ${localeToSwith}`}
      />
      <Icon
        brightIfDark
        src={`/icons/pageOptions/${darkMode ? "lightMode" : "darkMode"}.svg`}
        onClick={toggleTheme}
        alt={`Switch to ${modeToSwitch} Mode`}
      />
    </StyledPageOptions>
  );
};

export default PageOptions;

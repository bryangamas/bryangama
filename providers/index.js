import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import useDarkMode from "use-dark-mode";
import { lightTheme, darkTheme } from "../styles/theme";

const Providers = ({ children }) => {
  // const { value } = useDarkMode(false, { storageKey: null, onChange: null });
  const theme = lightTheme; // value ? darkTheme : lightTheme;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const body = <ThemeProvider theme={theme}>{children}</ThemeProvider>;

  // prevents ssr flash for mismatched dark mode
  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{body}</div>;
  }

  return body;
};

export default Providers;

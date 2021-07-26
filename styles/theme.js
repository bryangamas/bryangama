const light = {
  bg: {
    primary: "#EEEEEE",
    secondary: "#F4F4F4",
    inset: "#374359",
  },
  text: {
    primary: "#212426",
    secondary: "#4E6172",
    highlight: "#2B97D9",
    auxiliary: "rgba(78, 97, 114, 0.8);",
    error: "#BD1414",
  },
};

const dark = {
  isDarkMode: true,
  bg: {
    primary: "#1F2633",
    secondary: "#191F28",
    inset: "#212426",
  },
  text: {
    primary: "#EEEEEE",
    secondary: "#C8D0D7",
    highlight: "#2B97D9",
    auxiliary: "rgba(193, 213, 232, 0.8);",
    error: "#E46F6F",
  },
};

const defaultTheme = {
  shadow: {
    general: "0px 4px 4px rgba(0, 0, 0, 0.25);",
  },
};

export const lightTheme = { ...defaultTheme, ...light };
export const darkTheme = { ...defaultTheme, ...dark };

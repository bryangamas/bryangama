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
  },
};

const dark = {
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
  },
};

const defaultTheme = {
  fontSizes: [
    "14px", // 0
    "16px", // 1
    "18px", // 2
    "22px", // 3
    "26px", // 4
    "32px", // 5
    "40px", // 6
  ],
  fontWeights: {
    body: 400,
    subheading: 500,
    link: 600,
    bold: 700,
    heading: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.3,
    code: 1.6,
  },
  shadow: {
    general: "0px 4px 4px rgba(0, 0, 0, 0.25);",
  },
};

export const lightTheme = { ...defaultTheme, ...light };
export const darkTheme = { ...defaultTheme, ...dark };

import { createStitches } from "@stitches/react";

export const {
  css,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
  theme,
  config,
  styled,
} = createStitches({
  theme: {
    colors: {
      primary: "#2962FF",
      secondary: "#000000",
      red400: "#f23645",
      gray300: "#f4f4f4",
      gray350: "#E8E8E8",
      gray400: "#d1d4dc",
      gray500: "#787b86",
      green400: "#22ab94",
      dark400: "#131722",
      white: "#ffffff",
      background: "$white",
      text: "$dark400",
    },
    fonts: {
      sans: "Untitled Sans, apple-system, sans-serif",
      mono: "Söhne Mono, menlo, monospace",
    },
    space: {
      tiny: "0.25rem", // 4px
      xSmall: "0.5rem", // 8px
      small: "0.75rem", // 12px
      medium: "1rem", // 16px
      base: "1.5rem", // 24px
      large: "3rem", // 48px
      xLarge: "4rem", // 64px
    },
    sizes: {
      tiny: "0.25rem", // 4px
      xSmall: "0.5rem", // 8px
      small: "0.75rem", // 12px
      medium: "1rem", // 16px
      base: "1.5rem", // 24px
      large: "3rem", // 48px
      xLarge: "4rem", // 64px
    },
    fontSizes: {
      caption: "0.625rem", // 10px
      label: "0.75rem", // 12px
      body: "0.875rem", // 14px
      h6: "0.875rem", // 14px
      h5: "1rem", // 16px
      h4: "1.25rem", // 20px
      h3: "1.5rem", // 24px
      h2: "2rem", // 32px
      h1: "2.5rem", // 40px
    },
    fontWeights: {
      300: "300",
      400: "400",
      500: "500",
      600: "600",
      700: "700",
      800: "800",
      900: "900",
    },
    radii: {
      xSmall: "2px",
      small: "4px",
      medium: "6px",
      base: "8px",
      large: "12px",
      round: "50%",
      pill: "9999px",
    },
    zIndices: { 1: "100", 2: "200", 3: "300", 4: "400", max: "999" },
    transitions: {
      default: "350ms cubic-bezier(0.215, 0.61, 0.355, 1)",
    },
    // borderStyles: {},
    // borderWidths: {},
    // letterSpacings: {},
    // lineHeights: {},
    // shadows: {},
  },
  media: {
    xSmUp: "(min-width: 425px)",
    smUp: "(min-width: 640px)",
    mdUp: "(min-width: 768px)",
    lgUp: "(min-width: 1024px)",
    xlUp: "(min-width: 1280px)",
    "2xlUp": "(min-width: 1536px)",
    xSmDown: "(max-width: 425px)",
    smDown: "(max-width: 640px)",
    mdDown: "(max-width: 768px)",
    lgDown: "(max-width: 1024px)",
    xlDown: "(max-width: 1280px)",
  },
  utils: {
    p: (value: string) => ({
      padding: value,
    }),
    pt: (value: string) => ({
      paddingTop: value,
    }),
    pr: (value: string) => ({
      paddingRight: value,
    }),
    pb: (value: string) => ({
      paddingBottom: value,
    }),
    pl: (value: string) => ({
      paddingLeft: value,
    }),
    px: (value: string) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: string) => ({
      margin: value,
    }),
    mt: (value: string) => ({
      marginTop: value,
    }),
    mr: (value: string) => ({
      marginRight: value,
    }),
    mb: (value: string) => ({
      marginBottom: value,
    }),
    ml: (value: string) => ({
      marginLeft: value,
    }),
    mx: (value: string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: string) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
});

export const darkTheme = createTheme("dark-theme", {
  colors: {
    background: "$dark400",
    text: "$gray400",
  },
});

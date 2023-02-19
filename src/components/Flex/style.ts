import { css } from "@configs";

export const flex = css("div", {
  boxSizing: "border-box",
  display: "flex",

  variants: {
    direction: {
      row: {
        flexDirection: "row",
      },
      column: {
        flexDirection: "column",
      },
      rowReverse: {
        flexDirection: "row-reverse",
      },
      columnReverse: {
        flexDirection: "column-reverse",
      },
    },
    align: {
      start: {
        alignItems: "flex-start",
      },
      center: {
        alignItems: "center",
      },
      end: {
        alignItems: "flex-end",
      },
      stretch: {
        alignItems: "stretch",
      },
      baseline: {
        alignItems: "baseline",
      },
    },
    justify: {
      start: {
        justifyContent: "flex-start",
      },
      center: {
        justifyContent: "center",
      },
      end: {
        justifyContent: "flex-end",
      },
      between: {
        justifyContent: "space-between",
      },
    },
    wrap: {
      noWrap: {
        flexWrap: "nowrap",
      },
      wrap: {
        flexWrap: "wrap",
      },
      wrapReverse: {
        flexWrap: "wrap-reverse",
      },
    },
    gap: {
      tiny: {
        gap: "$tiny",
      },
      xSmall: {
        gap: "$xSmall",
      },
      small: {
        gap: "$small",
      },
      medium: {
        gap: "$medium",
      },
      base: {
        gap: "$base",
      },
      large: {
        gap: "$large",
      },
      xLarge: {
        gap: "$xLarge",
      },
    },
    fullWidth: {
      true: {
        width: "100%",
      },
    },
    fullHeight: {
      true: {
        height: "100%",
      },
    },
    padding: {
      tiny: {
        padding: "$tiny",
      },
      xSmall: {
        padding: "$xSmall",
      },
      small: {
        padding: "$small",
      },
      medium: {
        padding: "$medium",
      },
      base: {
        padding: "$base",
      },
      large: {
        padding: "$large",
      },
      xLarge: {
        padding: "$xLarge",
      },
    },
    margin: {
      tiny: {
        margin: "$tiny",
      },
      xSmall: {
        margin: "$xSmall",
      },
      small: {
        margin: "$small",
      },
      medium: {
        margin: "$medium",
      },
      base: {
        margin: "$base",
      },
      large: {
        margin: "$large",
      },
      xLarge: {
        margin: "$xLarge",
      },
      auto: {
        margin: "auto",
      },
    },
    noPadding: {
      true: {
        padding: "0px",
      },
    },
    mt: {
      tiny: {
        mt: "$tiny",
      },
      xSmall: {
        mt: "$xSmall",
      },
      small: {
        mt: "$small",
      },
      medium: {
        mt: "$medium",
      },
      base: {
        mt: "$base",
      },
      large: {
        mt: "$large",
      },
      xLarge: {
        mt: "$xLarge",
      },
      auto: {
        mt: "auto",
      },
    },
    mb: {
      tiny: {
        mb: "$tiny",
      },
      xSmall: {
        mb: "$xSmall",
      },
      small: {
        mb: "$small",
      },
      medium: {
        mb: "$medium",
      },
      base: {
        mb: "$base",
      },
      large: {
        mb: "$large",
      },
      xLarge: {
        mb: "$xLarge",
      },
    },
    ml: {
      tiny: {
        ml: "$tiny",
      },
      xSmall: {
        ml: "$xSmall",
      },
      small: {
        ml: "$small",
      },
      medium: {
        ml: "$medium",
      },
      base: {
        ml: "$base",
      },
      large: {
        ml: "$large",
      },
      xLarge: {
        ml: "$xLarge",
      },
    },
    mr: {
      tiny: {
        mr: "$tiny",
      },
      xSmall: {
        mr: "$xSmall",
      },
      small: {
        mr: "$small",
      },
      medium: {
        mr: "$medium",
      },
      base: {
        mr: "$base",
      },
      large: {
        mr: "$large",
      },
      xLarge: {
        mr: "$xLarge",
      },
    },
    mx: {
      tiny: {
        mx: "$tiny",
      },
      xSmall: {
        mx: "$xSmall",
      },
      small: {
        mx: "$small",
      },
      medium: {
        mx: "$medium",
      },
      base: {
        mx: "$base",
      },
      large: {
        mx: "$large",
      },
      xLarge: {
        mx: "$xLarge",
      },
    },
    my: {
      tiny: {
        my: "$tiny",
      },
      xSmall: {
        my: "$xSmall",
      },
      small: {
        my: "$small",
      },
      medium: {
        my: "$medium",
      },
      base: {
        my: "$base",
      },
      large: {
        my: "$large",
      },
      xLarge: {
        my: "$xLarge",
      },
    },
    pt: {
      tiny: {
        pt: "$tiny",
      },
      xSmall: {
        pt: "$xSmall",
      },
      small: {
        pt: "$small",
      },
      medium: {
        pt: "$medium",
      },
      base: {
        pt: "$base",
      },
      large: {
        pt: "$large",
      },
      xLarge: {
        pt: "$xLarge",
      },
    },
    pb: {
      tiny: {
        pb: "$tiny",
      },
      xSmall: {
        pb: "$xSmall",
      },
      small: {
        pb: "$small",
      },
      medium: {
        pb: "$medium",
      },
      base: {
        pb: "$base",
      },
      large: {
        pb: "$large",
      },
      xLarge: {
        pb: "$xLarge",
      },
    },
    pl: {
      tiny: {
        pl: "$tiny",
      },
      xSmall: {
        pl: "$xSmall",
      },
      small: {
        pl: "$small",
      },
      medium: {
        pl: "$medium",
      },
      base: {
        pl: "$base",
      },
      large: {
        pl: "$large",
      },
      xLarge: {
        pl: "$xLarge",
      },
    },
    pr: {
      tiny: {
        pr: "$tiny",
      },
      xSmall: {
        pr: "$xSmall",
      },
      small: {
        pr: "$small",
      },
      medium: {
        pr: "$medium",
      },
      base: {
        pr: "$base",
      },
      large: {
        pr: "$large",
      },
      xLarge: {
        pr: "$xLarge",
      },
    },
    px: {
      tiny: {
        px: "$tiny",
      },
      xSmall: {
        px: "$xSmall",
      },
      small: {
        px: "$small",
      },
      medium: {
        px: "$medium",
      },
      base: {
        px: "$base",
      },
      large: {
        px: "$large",
      },
      xLarge: {
        px: "$xLarge",
      },
    },
    py: {
      tiny: {
        py: "$tiny",
      },
      xSmall: {
        py: "$xSmall",
      },
      small: {
        py: "$small",
      },
      medium: {
        py: "$medium",
      },
      base: {
        py: "$base",
      },
      large: {
        py: "$large",
      },
      xLarge: {
        py: "$xLarge",
      },
    },
    bgColor: {
      primary: {
        backgroundColor: "$primary",
      },
      secondary: {
        backgroundColor: "$secondary",
      },
      negative: {
        backgroundColor: "$red400",
      },
      positive: {
        backgroundColor: "$green400",
      },
      lightGray: {
        backgroundColor: "$gray300",
      },
    },
    container: {
      true: {
        width: "100%",
        px: "$base",
        "@xlUp": {
          width: "1200px",
        },
      },
    },
    radius: {
      tiny: {
        borderRadius: "$tiny",
      },
      small: {
        borderRadius: "$small",
      },
    },
  },
  defaultVariants: {
    direction: "row",
    align: "stretch",
    justify: "start",
    wrap: "noWrap",
  },
});

export type FlexProps = Parameters<typeof flex>[0];

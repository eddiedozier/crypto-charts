import { css } from "@configs";

export const button = css("button", {
  display: "flex",
  alignItems: "center",
  justifyItems: "center",
  border: "none",
  width: "auto",
  overflow: "visible",
  backgroundColor: "transparent",
  lineHeight: "normal",
  fontSmooth: "inherit",
  appearance: "none",
  textDecoration: "none",
  outline: "none",
  borderRadius: "0",
  cursor: "pointer",
  "&:hover": {
    filter: "brightness(90%)",
    transition: "$default",
  },

  variants: {
    size: {
      small: {
        px: "$xSmall",
        py: "$tiny",
      },
      base: {
        px: "$small",
        py: "$xSmall",
        fontSize: "$body",
      },
      medium: {
        px: "$medium",
        py: "$xSmall",
      },
      large: {
        px: "$base",
        py: "$small",
      },
    },
    round: {
      true: {
        borderRadius: "$pill",
      },
    },
    fontWeight: {
      normal: {
        fontWeight: "$400",
      },
      medium: {
        fontWeight: "$500",
      },
      bold: {
        fontWeight: "$600",
      },
      "2xBold": {
        fontWeight: "$700",
      },
      "3xBold": {
        fontWeight: "$800",
      },
      "4xBold": {
        fontWeight: "$900",
      },
    },
    color: {
      default: {
        color: "$text",
      },
      primary: {
        color: "$primary",
      },
      secondary: {
        color: "$secondary",
      },
      negative: {
        color: "$red400",
      },
      positive: {
        color: "$green400",
      },
      lightGray: {
        color: "$gray400",
      },
      mediumGray: {
        color: "$gray500",
      },
    },
    radius: {
      xSmall: {
        borderRadius: "$xSmall",
      },
      small: {
        borderRadius: "$small",
      },
      medium: {
        borderRadius: "$medium",
      },
      base: {
        borderRadius: "$base",
      },
      large: {
        borderRadius: "$large",
      },
      xLarge: {
        borderRadius: "$xLarge",
      },
      pill: {
        borderRadius: "$pill",
      },
      rounded: {
        borderRadius: "$round",
      },
      none: {
        true: {
          borderRadius: "0px",
        },
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
      none: {
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "$gray300",
          filter: "none",
        },
      },
    },
  },
  defaultVariants: {
    color: "default",
    bgColor: "lightGray",
    size: "base",
    fontWeight: "medium",
  },
});

export type ButtonProps = Parameters<typeof button>[0];

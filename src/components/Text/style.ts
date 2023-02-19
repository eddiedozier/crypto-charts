import { css } from "@configs";

export const text = css("span", {
  // Reset
  lineHeight: "1",

  variants: {
    size: {
      body: {
        fontSize: "$body",
      },
      caption: {
        fontSize: "$caption",
      },
      h1: {
        fontSize: "$h1",
      },
      h2: {
        fontSize: "$h2",
      },
      h3: {
        fontSize: "$h3",
      },
      h4: {
        fontSize: "$h4",
      },
      h5: {
        fontSize: "$h5",
      },
      h6: {
        fontSize: "$h6",
      },
      label: {
        fontSize: "$label",
      },
    },
    align: {
      center: {
        textAlign: "center",
      },
      end: {
        textAlign: "end",
      },
      start: {
        textAlign: "start",
      },
      left: {
        textAlign: "left",
      },
      right: {
        textAlign: "right",
      },
      justify: {
        textAlign: "justify",
      },
      "match-parent": {
        textAlign: "match-parent",
      },
    },
    bold: {
      true: {
        fontWeight: "$600",
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
    wordBreak: {
      "break-all": {
        wordBreak: "break-all",
      },
      "break-word": {
        wordBreak: "break-word",
      },
      "keep-all": {
        wordBreak: "keep-all",
      },
      normal: {
        wordBreak: "normal",
      },
    },
    whiteSpace: {
      pre: {
        whiteSpace: "pre",
      },
      normal: {
        whiteSpace: "normal",
      },
      nowrap: {
        whiteSpace: "nowrap",
      },
      "break-spaces": {
        whiteSpace: "break-spaces",
      },
      "pre-line": {
        whiteSpace: "pre-line",
      },
      "pre-wrap": {
        whiteSpace: "pre-wrap",
      },
    },
    noMargin: {
      true: {
        margin: "0px",
      },
    },
  },
  defaultVariants: {
    align: "left",
    color: "default",
    size: "body",
    noMargin: true,
  },
});

export type TextProps = Parameters<typeof text>[0];

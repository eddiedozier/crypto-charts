import { css, keyframes } from "@configs";

const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const loader = css("div", {
  "&:after": {
    content: " ",
    display: "block",
    width: "$large",
    height: "$large",
    margin: "$xSmall",
    borderRadius: "50%",
    border: "2px solid",
    animation: `${rotate} 1s linear infinite`,
  },

  variants: {
    size: {
      small: {
        "&:after": {
          width: "$medium",
          height: "$medium",
        },
      },
      base: {
        "&:after": { width: "$base", height: "$base" },
      },
      large: {
        "&:after": { width: "$large", height: "$large" },
      },
    },
    color: {
      primary: {
        "&:after": {
          borderColor: "$primary transparent $primary transparent",
        },
      },
      secondary: {
        "&:after": {
          borderColor: "$secondary transparent $secondary transparent",
        },
      },
    },
  },
  defaultVariants: {
    color: "primary",
    size: "base",
  },
});

export type LoaderProps = Parameters<typeof loader>[0];

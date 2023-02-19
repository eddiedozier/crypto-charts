import { css } from "@configs";

export const input = css("input", {
  border: "1px solid $gray400",
  borderRadius: "$small",
  "&:focus": {
    outlineColor: "$primary",
  },

  "@xSmDown": {
    width: "100%",
  },

  variants: {
    area: {
      small: {
        p: "$tiny",
      },
      base: {
        p: "$xSmall",
        fontSize: "$body",
      },
      medium: {
        p: "$xSmall",
      },
      large: {
        p: "$small",
      },
    },
  },
  defaultVariants: {
    area: "base",
  },
});

export type InputProps = Parameters<typeof input>[0];

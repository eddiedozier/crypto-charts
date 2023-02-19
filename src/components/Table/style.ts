import { css } from "@configs";

export const table = css("table", {
  borderSpacing: "0",
  width: "100%",

  "& thead, td": {
    fontSize: "$body",
  },
  "& tbody td": {
    width: "50%",
  },
  "& tbody tr td": {
    borderTop: "1px solid",
    borderColor: "$gray350",
    textTransform: "capitalize",
  },
  "& td, th": {
    py: "$small",
  },

  variants: {
    columnAlign: {
      left: {
        "& thead": {
          textAlign: "left",
        },
      },
      right: {
        "& thead": {
          textAlign: "right",
        },
      },
      center: {
        "& thead": {
          textAlign: "center",
        },
      },
    },
  },
  defaultVariants: {
    columnAlign: "left",
  },
});

export type TableProps = Parameters<typeof table>[0];

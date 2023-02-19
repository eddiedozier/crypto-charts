import { css } from "@configs";

export const ul = css("ul", {
  listStyleType: "none",
  display: "flex",
  margin: 0,
  "& a": {
    textDecoration: "none",
  },
});

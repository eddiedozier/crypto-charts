import { styled } from "@configs";
import * as RadixSelect from "@radix-ui/react-select";

export const SelectTrigger = styled(RadixSelect.SelectTrigger, {
  all: "unset",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: "$small",
  fontSize: "$body",
  fontWeight: "$500",
  lineHeight: 1,
  height: 35,
  width: "200px",
  gap: 5,
  backgroundColor: "$background",
  color: "$text",
  boxShadow: "rgba(0, 0, 0, 0.4) 0px 0.5px 1px 0px;",
  "&:hover": { backgroundColor: "$gray300", cursor: "pointer" },

  "@xSmDown": {
    width: "100%",
  },
});

export const SelectIcon = styled(RadixSelect.SelectIcon, {
  color: "$text",
});

export const SelectContent = styled(RadixSelect.Content, {
  overflow: "hidden",
  backgroundColor: "white",
  borderRadius: "$small",
  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
});

export const SelectViewport = styled(RadixSelect.Viewport, {
  padding: "$tiny",
});

export const StyledItem = styled(RadixSelect.Item, {
  fontSize: "$body",
  lineHeight: 1,
  color: "$text",
  borderRadius: "$small",
  display: "flex",
  alignItems: "center",
  height: "auto",
  minHeight: 40,
  padding: "0 $base 0 $xSmall",
  position: "relative",
  userSelect: "none",

  "&[data-disabled]": {
    color: "$gray400",
    pointerEvents: "none",
  },

  "&[data-highlighted], &[data-highlighted] .text": {
    outline: "none",
    backgroundColor: "$primary",
    color: "$white",
    cursor: "pointer",
  },
});

const scrollButtonStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "$base",
  backgroundColor: "white",
  color: "$text",
  cursor: "default",
};

export const SelectScrollUpButton = styled(
  RadixSelect.ScrollUpButton,
  scrollButtonStyles
);
export const SelectScrollDownButton = styled(
  RadixSelect.ScrollDownButton,
  scrollButtonStyles
);

import theme from "../theme";
import { styled } from "@mui/material";

const commonStyles = {
  borderRadius: "40px",
  fontFamily: "Ubuntu",
  padding: "9px 17px",
  cursor: "pointer",
  transition: "transform 0.1s ease-in-out",
  "&:active": {
    transform: "scale(0.9)",
  },
};

const OutlineButton = styled("button")({
  ...commonStyles,
  color: theme.primaryTextColor,
  background: "transparent",
  border: `2px solid  ${theme.primaryBorderColor}`,
  "&:hover": {
    background: "rgb(225, 232, 227, 0.2)",
  },
});

const FilledButton = styled("button")({
  ...commonStyles,
  color: theme.overallBackground,
  background: theme.themedBackground,
  border: "none",
  fontWeight: "700",
  "&:hover": {
    opacity: "0.8",
  },
});

const FilledBigButton = styled("button")({
  ...commonStyles,
  color: theme.overallBackground,
  border: "none",
  background: theme.themedBackground,
  padding: "14px 23px",
  fontSize: "16px",
  fontWeight: "900",
  "&:hover": {
    opacity: "0.8",
  },
});

const StrokedButton = styled("button")({
  ...commonStyles,
  color: theme.themedBackground,
  background: theme.overallBackground,
  border: `2px solid  ${theme.primaryBorderColor}`,
  fontWeight: "700",
  "&:hover": {
    opacity: "0.8",
  },
});

const TextButton = styled("button")({
  ...commonStyles,
  color: theme.primaryTextColor,
  background: "transparent",
  fontWeight: "700",
  outline: "none",
  border: "none",
  "&:hover": {
    opacity: "0.8",
  },
});

const IconButton = styled("button")({
  width: "fit-content",
  color: theme.overallBackground,
  background: theme.themedBackground,
  border: "none",
  borderRadius: "50%",
  justifyItems: "center",
  transition: "transform 0.1s ease-in-out",
  "&:hover": {
    opacity: "0.8",
  },
  "&:active": {
    transform: "scale(0.9)",
  },
});

export {
  OutlineButton,
  FilledButton,
  FilledBigButton,
  StrokedButton,
  TextButton,
  IconButton,
};

import theme from "../theme";
import { styled } from "@mui/material";

const PrimaryTextInput = styled("input")({
  backgroundColor: theme.whiteTransBackground,
  color: theme.primaryTextColor,
  border: `2px solid ${theme.primaryBorderColor}`,
  height: "23px",
  width: "320px",
  maxWidth: "1200px",
  borderRadius: "30px",
  padding: "10px 20px",
  display: "block",
  margin: "0 0 16px",
  "&:focus": {
    outline: `1px solid ${theme.specialTextColor}`,
  },
});

export { PrimaryTextInput };

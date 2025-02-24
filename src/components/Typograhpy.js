import { styled } from "@mui/material";
import theme from "../theme";

const SmallTitleHeading = styled("h1")({
  color: theme.specialTextColor,
  fontSize: "24px",
  fontFamily: "Ubuntu",
  fontWeight: "200",
  width: "fit-content",
});

const TitleHeading = styled("h1")({
  color: theme.primaryTextColor,
  fontSize: "33px",
  fontFamily: "Ubuntu",
  fontWeight: "600",
  width: "fit-content",
});

const TitleText = styled("h3")({
  color: theme.primaryTextColor,
  fontSize: "22px",
  fontFamily: "Ubuntu",
  fontWeight: "400",
  width: "fit-content",
});

const TextContent = styled("p")({
  color: theme.primaryLinkColor,
  fontSize: "14px",
  fontFamily: "Ubuntu",
  fontWeight: "200",
  width: "fit-content",
  lineHeight: "1.5",
  wordSpacing: "1px",
});

const TextContentBold = styled(TextContent)({
  color: theme.primaryTextColor,
  fontWeight: "400",
});

export {
  SmallTitleHeading,
  TitleHeading,
  TitleText,
  TextContentBold,
  TextContent,
};

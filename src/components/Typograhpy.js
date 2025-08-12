import { styled } from "@mui/material";
import theme from "../theme";

const BigHeading = styled("h1")({
  color: theme.primaryTextColor,
  fontSize: "60px",
  fontWeight: "500",
  fontFamily: "Ubuntu",
  width: "fit-content",

  "@media (max-width: 1200px)": {
    fontSize: "56px",
  },

  "@media (max-width: 1024px)": {
    fontSize: "51px",
  },

  "@media (max-width: 768px)": {
    fontSize: "47px",
  },

  "@media (max-width: 670px)": {
    fontSize: "43px",
  },

  "@media (max-width: 557px)": {
    fontSize: "39px",
  },

  "@media (max-width: 480px)": {
    fontSize: "35px",
  },

  "@media (max-width: 320px)": {
    fontSize: "31px",
  },

  // "@media (max-width: 600px)": {
  //   fontSize: "35px",
  // },
});

const HeadingSubtitle = styled("p")({
  color: theme.secondaryTextColor,
  fontSize: "16px",
  fontFamily: "Ubuntu",
  lineHeight: "25px",
  fontWeight: "300",
  width: "48rem",

  "@media (max-width: 1200px)": {
    fontSize: "15px",
  },

  "@media (max-width: 1024px)": {
    fontSize: "14px",
    width: "36rem",
  },

  "@media (max-width: 768px)": {
    fontSize: "13px",
    width: "34rem",
  },

  "@media (max-width: 670px)": {
    width: "26rem",
    lineHeight: "17px",
  },

  "@media (max-width: 557px)": {
    width: "24rem",
  },

  "@media (max-width: 480px)": {
    fontSize: "12px",
    width: "18rem",
  },

  "@media (max-width: 320px)": {
    fontSize: "11px",
  },
});

const SmallTitleHeading = styled("h1")({
  color: theme.specialTextColor,
  fontSize: "24px",
  fontFamily: "Ubuntu",
  fontWeight: "200",
  width: "fit-content",

  "@media (max-width: 1200px)": {
    fontSize: "22px",
  },

  "@media (max-width: 1024px)": {
    fontSize: "20px",
  },

  "@media (max-width: 768px)": {
    fontSize: "18px",
  },

  "@media (max-width: 480px)": {
    fontSize: "16px",
  },

  "@media (max-width: 320px)": {
    fontSize: "14px",
  },

  // "@media (max-width: 600px)": {
  //   fontSize: "15px",
  // },
});

const TitleHeading = styled("h1")({
  color: theme.primaryTextColor,
  fontSize: "33px",
  fontFamily: "Ubuntu",
  fontWeight: "600",
  width: "fit-content",

  "@media (max-width: 1200px)": {
    fontSize: "31px",
    fontWeight: 500,
  },

  "@media (max-width: 1024px)": {
    fontSize: "29px",
  },

  "@media (max-width: 768px)": {
    fontSize: "27px",
  },

  "@media (max-width: 480px)": {
    fontSize: "25px",
  },

  "@media (max-width: 320px)": {
    fontSize: "23px",
  },
});

const TitleText = styled("h3")({
  color: theme.primaryTextColor,
  fontSize: "22px",
  fontFamily: "Ubuntu",
  fontWeight: "400",
  width: "fit-content",

  "@media (max-width: 1200px)": {
    fontSize: "20px",
  },

  "@media (max-width: 1024px)": {
    fontSize: "18px",
  },

  "@media (max-width: 768px)": {
    fontSize: "16px",
  },

  "@media (max-width: 480px)": {
    fontSize: "14px",
  },

  "@media (max-width: 320px)": {
    fontSize: "12px",
  },
});

const TextContent = styled("p")({
  color: theme.primaryLinkColor,
  fontSize: "16px",
  fontFamily: "Ubuntu",
  fontWeight: "200",
  width: "fit-content",
  lineHeight: "1.5",
  wordSpacing: "1px",

  "@media (max-width: 1200px)": {
    fontSize: "15px",
  },

  "@media (max-width: 1024px)": {
    fontSize: "14px",
  },

  "@media (max-width: 768px)": {
    fontSize: "13px",
  },

  "@media (max-width: 480px)": {
    fontSize: "12px",
  },

  "@media (max-width: 320px)": {
    fontSize: "11px",
  },
});

const TextContentBold = styled(TextContent)({
  color: theme.primaryTextColor,
  fontWeight: "400",
});

export {
  BigHeading,
  HeadingSubtitle,
  SmallTitleHeading,
  TitleHeading,
  TitleText,
  TextContentBold,
  TextContent,
};

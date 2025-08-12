import theme from "../theme";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";

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

const buttonResponsive = {
  // "@media (max-width: 1200px)": {
  //   fontSize: "14px",
  // },
  // "@media (max-width: 1024px)": {
  //   fontSize: "13px",
  // },
  // "@media (max-width: 768px)": {
  //   fontSize: "12px",
  // },
  // "@media (max-width: 480px)": {
  //   fontSize: "11px",
  // },
  // "@media (max-width: 320px)": {
  //   fontSize: "10px",
  // },
};

//////////////////////// Reusable BUTTONS ///////////////////////

const OutlineButton = styled("button")({
  ...commonStyles,
  color: theme.primaryTextColor,
  background: "transparent",
  border: `2px solid  ${theme.primaryBorderColor}`,
  "&:hover": {
    background: "rgb(225, 232, 227, 0.2)",
  },
  ...buttonResponsive,
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
  ...buttonResponsive,
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

const StrokedButton = styled("button")({
  ...commonStyles,
  color: theme.themedBackground,
  background: theme.overallBackground,
  border: `2px solid  ${theme.primaryBorderColor}`,
  fontWeight: "700",
  "&:hover": {
    opacity: "0.8",
  },
  ...buttonResponsive,
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
  ...buttonResponsive,
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

/////////////////////////// Specially Styled Buttons/Links //////////////////////////////

const LoginButton = styled("button")({
  ...commonStyles,
  color: theme.overallBackground,
  background: theme.themedBackground,
  border: "none",
  fontSize: "15px",
  fontWeight: "700",
  padding: "10px 23px",
  width: "70%",
  borderRadius: "10px",
  "&:hover": {
    opacity: "0.8",
  },
});

const SocialIconButton = styled("button")({
  display: "block",
  fontSize: "38px",
  fontWeight: "400",
  fontFamily: "Ubuntu",
  width: "fit-content",
  height: "fit-content",
  textDecoration: "none",
  transition: "all 0.1s ease-in-out",
  color: theme.primaryTextColor,
  background: "transparent",
  border: 0,
  cursor: "pointer",
  margin: "0",
  "&:hover": {
    color: theme.primaryLinkColor,
    opacity: "0.8",
  },
  "&:active": {
    transform: "scale(0.9)",
  },
});

//////////////////////////// Navbar Specail customize LINK/BUTTON /////////////////////////

const commonNavbarButtonStyles = {
  ...commonStyles,
  fontSize: "13px",
  textDecoration: "none",
};

const navbarButtonResponsive = {
  "@media (max-width: 1200px)": {
    fontSize: "11px",
  },

  "@media (max-width: 1024px)": {
    fontSize: "10px",
  },

  "@media (max-width: 768px)": {
    fontSize: "9px",
  },

  "@media (max-width: 480px)": {
    fontSize: "7px",
  },

  "@media (max-width: 320px)": {
    fontSize: "5px",
  },
};

const OutlineNavButton = styled(Link)({
  ...commonNavbarButtonStyles,
  color: theme.primaryTextColor,
  background: "transparent",
  border: `2px solid  ${theme.primaryBorderColor}`,
  "&:hover": {
    background: "rgb(225, 232, 227, 0.2)",
  },
  ...navbarButtonResponsive,
});

const FilledNavButton = styled(Link)({
  ...commonNavbarButtonStyles,
  color: theme.overallBackground,
  background: theme.themedBackground,
  border: "none",
  fontWeight: "700",
  "&:hover": {
    opacity: "0.8",
  },
  ...navbarButtonResponsive,
});

const FilledBigNavButton = styled(Link)({
  ...commonNavbarButtonStyles,
  color: theme.overallBackground,
  border: "none",
  background: theme.themedBackground,
  padding: "14px 23px",
  fontSize: "16px",
  fontWeight: "900",
  "&:hover": {
    opacity: "0.8",
  },
  ...navbarButtonResponsive,
});

const StrokedNavButton = styled(Link)({
  ...commonNavbarButtonStyles,
  color: theme.themedBackground,
  background: theme.overallBackground,
  border: `2px solid  ${theme.primaryBorderColor}`,
  fontWeight: "700",
  "&:hover": {
    opacity: "0.8",
  },
});

const TextNavButton = styled(Link)({
  ...commonNavbarButtonStyles,
  color: theme.primaryTextColor,
  background: "transparent",
  fontWeight: "700",
  outline: "none",
  border: "none",
  "&:hover": {
    opacity: "0.8",
  },
  ...navbarButtonResponsive,
});

const IconLinkButton = styled(Link)({
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
  ...navbarButtonResponsive,
});

export {
  // buttons
  OutlineButton,
  FilledButton,
  FilledBigButton,
  StrokedButton,
  TextButton,
  IconButton,
  // special buttons
  LoginButton,
  SocialIconButton,
  // link buttons
  OutlineNavButton,
  FilledNavButton,
  FilledBigNavButton,
  StrokedNavButton,
  TextNavButton,
  IconLinkButton,
};

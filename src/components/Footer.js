import React from "react";
import theme from "../theme";
import Grid from "@mui/material/Grid2";
import { TextContentBold, TitleHeading, TitleText } from "./Typograhpy";
import { styled, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { PrimaryBackgroundImage } from "./BackgroundImages";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const iconLinks = [
  FacebookOutlinedIcon,
  XIcon,
  YouTubeIcon,
  InstagramIcon,
  LinkedInIcon,
  GitHubIcon,
];

const companyLinks = [
  "About Us",
  "How it Works",
  "Features",
  "Pricing",
  "Affiliate Program",
];

const legalSecurityLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Refund Policy",
  "Compliance & Security",
  "Cookie Policy",
];

const supportHelpLinks = [
  "Help Center",
  "Contact Support",
  "FAQs",
  "Live Chat",
  "Account Management",
];

const FooterBrand = styled(TitleHeading)({
  color: theme.themedBackground,
  fontSize: "50px",
  fontWeight: "600",
});

const FooterLink = styled(Link)({
  color: theme.primaryLinkColor,
  display: "block",
  fontSize: "16px",
  fontWeight: "400",
  fontFamily: "Ubuntu",
  margin: "20px 0 0",
  width: "fit-content",
  textDecoration: "none",
  transition: "all 0.1s ease-in-out",
  "&:hover": {
    opacity: "0.8",
  },
});

const FooterIconLink = styled(FooterLink)({
  color: theme.primaryTextColor,
  background: "transparent",
  margin: "0",
  "&:hover": {
    color: theme.primaryLinkColor,
  },
  "&:active": {
    transform: "scale(0.9)",
  },
});

function Footer(props) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        margin: "150px 0 0",
        width: "-webkit-fill-available",
        position: "relative",
        padding: "100px 70px",
      }}
    >
      <PrimaryBackgroundImage sx={{ height: "-webkit-fill-available" }} />

      <Grid container spacing={2}>
        <Grid size={6}>
          <FooterBrand>VisionX</FooterBrand>

          <TitleText sx={{ margin: "30px 0 0" }}>
            Support Email Address
          </TitleText>
          <FooterLink sx={{ margin: "7px 0 0" }}>
            visionxdigitaldropshippinglearn.com
          </FooterLink>

          <Stack
            direction={"row"}
            spacing={2}
            sx={{
              margin: "30px 0 0",
            }}
          >
            {iconLinks.map((Icon, index) => {
              return (
                <FooterIconLink key={index}>
                  <Icon sx={{ fontSize: "35px" }} />
                </FooterIconLink>
              );
            })}
          </Stack>
        </Grid>

        <Grid size={2}>
          <TitleText>Company</TitleText>
          {companyLinks.map((link) => {
            return <FooterLink key={link}>{link}</FooterLink>;
          })}
        </Grid>

        <Grid size={2}>
          <TitleText>Legal & Security</TitleText>
          {legalSecurityLinks.map((link) => {
            return <FooterLink key={link}>{link}</FooterLink>;
          })}
        </Grid>

        <Grid size={2}>
          <TitleText>Support & Help</TitleText>
          {supportHelpLinks.map((link) => {
            return <FooterLink key={link}>{link}</FooterLink>;
          })}
        </Grid>
      </Grid>

      <TextContentBold sx={{ margin: "4px 0 0" }}>
        © {currentYear} VisionX. All rights reserved.
      </TextContentBold>
    </footer>
  );
}

export default Footer;

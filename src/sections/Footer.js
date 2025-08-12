import React from "react";
import theme from "../theme";
import Grid from "@mui/material/Grid2";
import {
  TextContentBold,
  TitleHeading,
  TitleText,
} from "../components/Typograhpy";
import { styled, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { PrimaryBackgroundImage } from "../components/BackgroundImages";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { SocialIconButton } from "../components/Buttons";

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

  "@media (max-width: 1200px)": {
    fontSize: "14px",
  },

  "@media (max-width: 1024px)": {
    fontSize: "12px",
  },

  "@media (max-width: 768px)": {
    fontSize: "10px",
  },

  "@media (max-width: 480px)": {
    fontSize: "8px",
  },

  "@media (max-width: 320px)": {
    fontSize: "6px",
  },
});

const responsiveSocialIcons = {
  "@media (max-width: 1200px)": {
    fontSize: "34px",
  },

  "@media (max-width: 1024px)": {
    fontSize: "30px",
  },

  "@media (max-width: 768px)": {
    fontSize: "28px",
  },

  "@media (max-width: 480px)": {
    fontSize: "24px",
  },

  "@media (max-width: 320px)": {
    fontSize: "20px",
  },
};

function Footer(props) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        margin: "150px 0 0",
        width: "-webkit-fill-available",
        maxWidth: "1600px",
        position: "relative",
        padding: `100px ${props.bodySidePadding}px 40px`,
      }}
    >
      <PrimaryBackgroundImage sx={{ height: "-webkit-fill-available" }} />

      <Grid container spacing={2}>
        <Grid size={6}>
          <FooterBrand>VisionX</FooterBrand>
          <TitleText sx={{ margin: "30px 0 0" }}>
            Support Email Address
          </TitleText>
          <FooterLink sx={{ margin: "10px 0 0" }}>
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
                <SocialIconButton key={index}>
                  <Icon sx={{ fontSize: "38px", ...responsiveSocialIcons }} />
                </SocialIconButton>
              );
            })}
          </Stack>
          <TextContentBold sx={{ margin: "7px 0 0" }}>
            © {currentYear} VisionX. All rights reserved.
          </TextContentBold>
        </Grid>

        <Grid
          size={{ xl: 6, lg: 6, md: 6, sm: 12 }}
          sx={{ marginTop: props.windowWidth <= 899 ? "20px" : 0 }}
        >
          <Grid container spacing={{ xl: 1, lg: 1, md: 1, sm: 4 }}>
            <Grid size={4}>
              <TitleText>Company</TitleText>
              {companyLinks.map((link) => {
                return <FooterLink key={link}>{link}</FooterLink>;
              })}
            </Grid>

            <Grid size={4}>
              <TitleText>Legal & Security</TitleText>
              {legalSecurityLinks.map((link) => {
                return <FooterLink key={link}>{link}</FooterLink>;
              })}
            </Grid>

            <Grid size={4}>
              <TitleText>Support & Help</TitleText>
              {supportHelpLinks.map((link) => {
                return <FooterLink key={link}>{link}</FooterLink>;
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;

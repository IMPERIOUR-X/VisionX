import React, { useState } from "react";
import Logo from "../assets/VX.ico";
import theme from "../theme";
import { FilledButton, SocialIconButton } from "../components/Buttons";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import StorefrontIcon from "@mui/icons-material/Storefront";

const NavLinks = [
  "Buy Space",
  "Market Place",
  "Projects",
  "Assests Rates",
  "About",
];

const BrandLogo = styled("img")({
  height: "40px",
});

const BrandName = styled("h1")({
  fontSize: "22px",
  fontFamily: "Ubuntu",
  fontWeight: "400",
  color: theme.primaryTextColor,
  letterSpacing: "0.8px",
  margin: "auto 0",
});

const NavLink = styled(Link)({
  color: theme.primaryLinkColor,
  fontSize: "14px",
  fontFamily: "Ubuntu",
  fontWeight: "100",
  opacity: "1",
  textDecoration: "none",
  "&:hover": {
    opacity: "0.8",
  },

  "@media (max-width: 1200px)": {
    fontSize: "14px",
  },

  "@media (max-width: 1024px)": {
    fontSize: "13px",
  },

  "@media (max-width: 768px)": {
    fontSize: "12px",
  },

  "@media (max-width: 480px)": {
    fontSize: "11px",
  },

  "@media (max-width: 320px)": {
    fontSize: "10px",
  },
});

function NavBar(props) {
  const [expandNavLinks, setExpandNavLinks] = useState(false);

  function handleClick(evt) {
    setExpandNavLinks((prevs) => !prevs);
  }

  return (
    <nav
      style={{
        padding: `24px ${props.bodySidePadding <= 50 ? 10 : 70}px 20px`,
        backgroundColor: theme.navbarBackground,
        borderBottom: `1px solid ${theme.navbarBorderColor}`,
        position: "fixed",
        zIndex: "100",
        display: "flex",
        width: "-webkit-fill-available",
        maxWidth: "1460px",
        transformStyle: "preserve-3d",
      }}
    >
      <div style={{ width: "fit-content", margin: "auto 0 0" }}>
        {props.windowWidth > 940 ? (
          <Stack direction={"row"} spacing={0}>
            <BrandLogo src={Logo} alt="VX Logo" />
            <BrandName>
              {props.windowWidth >= 700 ? "VisionX" : "VX :-"}
            </BrandName>
          </Stack>
        ) : (
          <SocialIconButton onClick={handleClick}>
            <MenuIcon sx={{ fontSize: "33px" }} />
          </SocialIconButton>
        )}
      </div>

      <div style={{ margin: "auto", width: "fit-content" }}>
        {props.windowWidth > 940 ? (
          <Stack direction={"row"} spacing={3}>
            {NavLinks.map((linkText) => {
              return (
                <NavLink
                  key={linkText}
                  to={"/" + linkText.toLowerCase().replaceAll(" ", "-")}
                >
                  {linkText}
                </NavLink>
              );
            })}
          </Stack>
        ) : (
          <BrandLogo src={Logo} alt="VX Logo" />
        )}
      </div>

      <div style={{ margin: "auto 0 0", width: "fit-content" }}>
        <FilledButton
          sx={{ position: "relative", padding: "11px 40px 11px 19px" }}
        >
          Enter Market
          <StorefrontIcon
            sx={{
              position: "absolute",
              right: "17px",
              top: "8px",
              fontSize: "19px",
            }}
          />
        </FilledButton>
      </div>

      {/* Expandations starting */}

      {expandNavLinks && props.windowWidth < 940 ? (
        <div
          style={{
            position: "absolute",
            width: "-webkit-fill-available",
            height: "-webkit-fill-available",

            display: "flex",
            backgroundColor: theme.navbarBackground,
            borderBottom: `1px solid ${theme.navbarBorderColor}`,
          }}
        >
          <div>
            <BrandLogo src={Logo} alt="VX Logo" />
          </div>
          <div
            style={{
              margin: "0 auto",
              width: "fit-content",
              padding: "13px 0 0",
            }}
          >
            <Stack direction={"row"} spacing={3}>
              {NavLinks.map((linkText) => {
                return (
                  <NavLink
                    key={linkText}
                    to={"/" + linkText.toLowerCase().replaceAll(" ", "-")}
                  >
                    {linkText}
                  </NavLink>
                );
              })}
            </Stack>
          </div>

          <SocialIconButton
            sx={{
              margin: `7px ${props.bodySidePadding <= 50 ? 10 : 70}px 0 0`,
            }}
            onClick={handleClick}
          >
            <PlaylistRemoveIcon />
          </SocialIconButton>
        </div>
      ) : undefined}
    </nav>
  );
}

export default NavBar;

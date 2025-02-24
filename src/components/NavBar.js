import React from "react";
import Logo from "../assets/VX.ico";
import theme from "../theme";
import { OutlineButton, TextButton } from "../components/Buttons";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";

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
  fontSize: "18px",
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
});

function NavBar(props) {
  return (
    <nav
      style={{
        padding: "24px 70px 20px",
        backgroundColor: theme.navbarBackground,
        borderBottom: `1px solid ${theme.navbarBorderColor}`,
        position: "fixed",
        zIndex: "100",
        display: "flex",
        width: "-webkit-fill-available",
        transformStyle: "preserve-3d",
      }}
    >
      <div style={{ width: "fit-content", margin: "auto 0 0" }}>
        <Stack direction={"row"} spacing={0}>
          <BrandLogo src={Logo} alt="VX Logo" />
          <BrandName>VisionX</BrandName>
        </Stack>
      </div>

      <div style={{ margin: "auto", width: "fit-content" }}>
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

      <div style={{ margin: "auto 0 0" }}>
        <Stack direction={"row"} spacing={2}>
          <OutlineButton>Log in</OutlineButton>
          <TextButton>Sign up</TextButton>
        </Stack>
      </div>
    </nav>
  );
}

export default NavBar;

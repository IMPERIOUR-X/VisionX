import React, { useState } from "react";
import theme from "../theme";
import { PrimaryBackgroundImage } from "../components/BackgroundImages";
import { BigHeading, SmallTitleHeading } from "../components/Typograhpy";
import { Stack, styled } from "@mui/material";
import { LoginButton, SocialIconButton } from "../components/Buttons";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import { PrimaryCheckboxInputField } from "../components/CheckboxInputField";
import { PrimaryTextInput } from "../components/Inputs";
import { PrimaryDivider } from "../components/SectionDivider";

const iconLinks = [GoogleIcon, FacebookOutlinedIcon, GitHubIcon, XIcon];

const LoginLink = styled(Link)({
  color: theme.primaryLinkColor,
  fontSize: "14px",
  fontFamily: "Ubuntu",
  fontWeight: "100",
  display: "block",
  width: "fit-content",
  opacity: "1",
  textDecoration: "none",
  "&:hover": {
    opacity: "0.8",
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

function Login(props) {
  const [rememberMe, setRememberMe] = useState(false);
  const [loginDetails, setLoginDetails] = useState({});

  function onChange(evt) {
    const { name, value } = evt.target;

    setLoginDetails((prevs) => {
      return {
        ...prevs,
        [name]: value,
      };
    });
  }

  return (
    <div style={{ padding: "110px  20px 0 " }}>
      <PrimaryBackgroundImage
        sx={{
          height: "90vh",
        }}
      />
      <BigHeading className="BigHeading" sx={{ margin: "auto" }}>
        Welcome back!
      </BigHeading>

      <SmallTitleHeading
        className="SmallTitleHeading"
        sx={{ margin: "30px auto 0" }}
      >
        Login
      </SmallTitleHeading>

      <form
        onSubmit={(ent) => {
          ent.preventDefault();
        }}
        style={{
          width: "fit-content",
          margin: "20px auto 0",
          textAlign: "center",
        }}
      >
        {["email", "password"].map((value, index) => {
          return (
            <PrimaryTextInput
              className="PrimaryTextInput"
              name={value}
              key={value}
              placeholder={value}
              autoFocus={index === 0 && true}
              type={value}
              onChange={onChange}
              minLength={index === 1 && 8}
              required
            />
          );
        })}

        <PrimaryCheckboxInputField
          rememberMe={rememberMe}
          setRememberMe={setRememberMe}
          label="Remember me"
        />

        <div style={{ width: "-webkit-fill-available", textAlign: "start" }}>
          <LoginLink to="/user/forgotten-password">
            forgotten password?
          </LoginLink>
          <LoginLink sx={{ margin: "16px 0 0" }} to="/signup">
            I don't have a visionx account
          </LoginLink>
        </div>
        <LoginButton sx={{ margin: "27px auto 0" }}>Sign in </LoginButton>
      </form>

      <PrimaryDivider />

      <div style={{ width: "fit-content", margin: "25px auto " }}>
        <Stack direction={"row"} spacing={4}>
          {iconLinks.map((Icon, index) => {
            return (
              <SocialIconButton key={index}>
                <Icon sx={{ fontSize: "38px", ...responsiveSocialIcons }} />
              </SocialIconButton>
            );
          })}
        </Stack>
      </div>
    </div>
  );
}

export default Login;

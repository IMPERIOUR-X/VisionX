import React from "react";
import theme from "../theme";
import { PrimaryBackgroundImage } from "../components/BackgroundImages";
import {
  BigHeading,
  SmallTitleHeading,
  TextContent,
  TitleText,
} from "../components/Typograhpy";
import { styled } from "@mui/material";
import { PrimaryTextInput } from "../components/Inputs";
import SendIcon from "@mui/icons-material/Send";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import { FilledButton } from "../components/Buttons";

const ErrorCode = styled(BigHeading)({
  fontFamily: "Roboto Mono, monospace",
  fontWeight: 100,
});

const errorSolutions = [
  "Create an account and login then try again.",
  "Phasing a new marketplace.",
  "Oning a airplane mode and try again.",
  "Send a message to our customer care below to desrcibe your problem.",
];

function Error(props) {
  return (
    <div
      style={{
        height: "fit-content",
        width: "-webkit-fill-available",
        padding: "80px 20px 0 ",
        maxWidth: "1600px",
        position: "relative",
      }}
    >
      <div
        style={{
          height: "fit-content",
          width: "fit-content",
          margin: "auto",
        }}
      >
        <PrimaryBackgroundImage />
        <ErrorCode>404</ErrorCode>
        <BigHeading sx={{ color: theme.primaryGradientTextColor }}>
          Page Not Found!
        </BigHeading>

        <TitleText sx={{ margin: "60px 0 0" }}>
          Unable to connect to the backend servers
        </TitleText>
        <SmallTitleHeading sx={{ margin: "30px 0 0" }}>Try,</SmallTitleHeading>

        <ul style={{ marginLeft: "40px" }}>
          {errorSolutions.map((soln) => {
            return (
              <li style={{ marginTop: "20px" }}>
                <TextContent>{soln}</TextContent>
              </li>
            );
          })}
        </ul>
      </div>
      <div style={{ width: "-webkit-fill-available" }}>
        <PrimaryTextInput
          sx={{ width: "70vw", margin: " 50px auto 0" }}
          placeholder="Send us the problem you are facing right now let's us look into it."
        />
      </div>

      <div style={{ margin: "20px auto 0", width: "fit-content" }}>
        <FilledButton>Submit</FilledButton>
      </div>
    </div>
  );
}

export default Error;

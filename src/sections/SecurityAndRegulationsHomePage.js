import React from "react";
import theme from "../theme";
import image from "../assets/security.png";
import {
  SmallTitleHeading,
  TextContent,
  TitleHeading,
  TitleText,
} from "../components/Typograhpy";
import Grid from "@mui/material/Grid2";
import { Stack } from "@mui/material";
import GppGoodIcon from "@mui/icons-material/GppGood";
import { FilledBigButton } from "../components/Buttons";

const securityFeatures = [
  {
    title: "Fraud Protection",
    content:
      "Advanced AI detects and prevents fraudulent transactions in real-time.",
  },
  {
    title: "Secure Payments",
    content:
      "All transactions are encrypted with 256-bit security to ensure safe transfers.",
  },
  {
    title: "Data Privacy",
    content:
      "Your business and customer data remain 100% confidential with top-tier encryption.",
  },
];

function SecurityAndRegulations(props) {
  return (
    <div style={{ margin: "150px 0 0" }}>
      <Grid container spacing={0}>
        {props.windowWidth >= 750 && (
          <Grid size={6}>
            <img
              src={image}
              style={{ width: "37vw", maxWidth: "508.734px" }}
              alt="Digital Dropshipping Security"
            />
          </Grid>
        )}

        <Grid size={props.windowWidth <= 750 ? 12 : 6}>
          <SmallTitleHeading sx={{ margin: "14px 0 0" }}>
            Security & Regulations
          </SmallTitleHeading>
          <TitleHeading sx={{ margin: "7px 0 0" }}>
            Your Security is
          </TitleHeading>
          <TitleHeading sx={{ margin: "7px 0 0" }}>Our Prority</TitleHeading>

          <div style={{ margin: "50px 0 0" }}>
            {securityFeatures.map((features) => {
              return (
                <Stack
                  sx={{ margin: "0 0 25px" }}
                  direction={"row"}
                  spacing={1}
                >
                  <GppGoodIcon
                    sx={{ fontSize: "47px", color: theme.themedBackground }}
                  />
                  <div>
                    <TitleText>{features.title}</TitleText>
                    <TextContent>{features.content}</TextContent>
                  </div>
                </Stack>
              );
            })}
          </div>

          <FilledBigButton sx={{ margin: "28px 0 0" }}>
            Get More Info
          </FilledBigButton>
        </Grid>
      </Grid>
    </div>
  );
}

export default SecurityAndRegulations;

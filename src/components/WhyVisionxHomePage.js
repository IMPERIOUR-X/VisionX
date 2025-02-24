import React, { useEffect, useState } from "react";
import theme from "../theme";
import image from "../assets/why-visionx.png";
import {
  SmallTitleHeading,
  TitleHeading,
  TextContent,
  TitleText,
} from "./Typograhpy";
import Grid from "@mui/material/Grid2";
import PaidIcon from "@mui/icons-material/Paid";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";

const reasons = [
  {
    Icon: PaidIcon,
    title: "Less Capital",
    content: "Start your journey with some of the lowest asset possible.",
  },
  {
    Icon: SettingsInputComponentIcon,
    title: "Advanced Tools",
    content:
      "Get access to expert tools, marketing singals and chart analysis.",
  },
  {
    Icon: WatchLaterIcon,
    title: "Fast Execution",
    content: "Execute assets in real-time with lightning-fast order speeds.",
  },
  {
    Icon: ManageHistoryIcon,
    title: "24/7 Supports",
    content:
      "Our team of market experts is available around the clock to assist you.",
  },
];

function WhyVisionxHomePage(props) {
  const [reasonsHovered, setReasonsHovered] = useState(false);
  const [iconAnimation, setIconAnimation] = useState(false);
  const [imageAnimation, setImageAnimation] = useState(0);
  const [imageHovered, setImageHovered] = useState(false);

  useEffect(() => {
    const interval =
      reasonsHovered === false &&
      setInterval(() => {
        setIconAnimation((prevs) => !prevs);
      }, 1000);

    return () => clearInterval(interval); // Cleanup to prevent memory leaks
  }, [reasonsHovered]);

  useEffect(() => {
    const interval =
      imageHovered === false &&
      setInterval(() => {
        setImageAnimation((prevs) => (prevs === 1 ? 1.07 : 1));
      }, 1000);

    return () => clearInterval(interval); // Cleanup to prevent memory leaks
  }, [imageHovered]);

  return (
    <div
      style={{
        background: theme.overallBackground,
        width: "-webkit-fill-available",
        borderRadius: "30px",
      }}
    >
      <Grid container spacing={0}>
        <Grid size={6}>
          <img
            src={image}
            alt="digital dropshipping earth"
            style={{
              transition: "all 0.6s ease-in-out",
              transform: `scale(${imageAnimation})`,
              cursor: "grab",
            }}
            onMouseOver={() => setImageHovered(true)}
            onMouseLeave={() => setImageHovered(false)}
          />
        </Grid>

        <Grid size={6}>
          <div style={{ margin: "50px 0 0", width: "fit-content" }}>
            <SmallTitleHeading>Why VisionX?</SmallTitleHeading>
            <TitleHeading sx={{ margin: "18px 0 0" }}>
              Why Dropship With Us?
            </TitleHeading>
          </div>

          <Grid margin={"40px 0 0"} container rowSpacing={3} columnSpacing={1}>
            {reasons.map((reason, index) => {
              return (
                <Grid width={"fit-content"} size={6} key={reason.title}>
                  <div
                    onMouseOver={() => setReasonsHovered(true)}
                    onMouseLeave={() => setReasonsHovered(false)}
                  >
                    <div
                      style={{
                        border: `1px solid ${theme.specialTextColor}`,
                        width: "fit-content",
                        borderRadius: "13px",
                        padding: "8px 11px",
                      }}
                    >
                      <reason.Icon
                        sx={{
                          fontSize: "31px",
                          color: theme.primaryTextColor,
                          transition: "all 0.3s ease-in-out",
                          transform: iconAnimation && "rotateY(180deg)",
                        }}
                      />
                    </div>
                    <TitleText sx={{ margin: "14px 0 0" }}>
                      {reason.title}
                    </TitleText>
                    <TextContent sx={{ margin: "8px 0 0", width: "16rem" }}>
                      {reason.content}
                    </TextContent>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default WhyVisionxHomePage;

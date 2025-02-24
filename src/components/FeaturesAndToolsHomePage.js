import React from "react";
import theme from "../theme";
import {
  SmallTitleHeading,
  TextContent,
  TitleHeading,
  TitleText,
} from "./Typograhpy";
import Grid from "@mui/material/Grid2";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";

function FeaturesAndTools(props) {
  const featuresAndTools = [
    {
      Icon: WatchLaterIcon,
      title: "24-Hour Market Access",
      content:
        "Allows sellers to run their digital dropshipping business continuously, enabling customers worldwide to browse, purchase, and receive digital products instantly, anytime, without restrictions.",
    },
    {
      Icon: ShoppingCartCheckoutOutlinedIcon,
      title: "Space Inventry",
      content:
        "We optimizes digital storage by efficiently managing and allocating cloud-based resources, ensuring sellers have ample space to upload, organize, and distribute digital products without limitations.",
    },
    {
      Icon: BusinessCenterOutlinedIcon,
      title: "Assets Managements",
      content:
        "We ensures seamless organization, secure storage, automated delivery, and protection of digital products, making digital dropshipping more efficient and hassle-free.",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: theme.backgroundColor,
        width: "-webkit-fill-available",
        margin: "81px 0 0",
        padding: "50px 0",
      }}
    >
      <SmallTitleHeading sx={{ margin: "auto" }}>
        Features & Tools
      </SmallTitleHeading>
      <TitleHeading sx={{ margin: "7px auto 0" }}>
        Enhance Your Digital Dropshiping
      </TitleHeading>

      <Grid margin={"60px 0 0"} container spacing={20}>
        {featuresAndTools.map((featureAndTool, index) => {
          return (
            <Grid
              key={featureAndTool.title}
              sx={{
                border: `1px solid ${theme.specialTextColor}`,
                padding: "20px",
                borderRadius: "13px",
                textAlign: "center",
              }}
              size={4}
            >
              <div
                style={{
                  width: "fit-content",
                  margin: "auto",
                  borderRadius: "50%",
                }}
              >
                <featureAndTool.Icon
                  sx={{
                    fontSize: "50px",
                    color: theme.primaryTextColor,
                    transition: "all 0.3s ease-in-out",
                  }}
                />
              </div>
              <TitleText sx={{ margin: "18px auto 10px" }}>
                {featureAndTool.title}
              </TitleText>
              <TextContent>{featureAndTool.content}</TextContent>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default FeaturesAndTools;

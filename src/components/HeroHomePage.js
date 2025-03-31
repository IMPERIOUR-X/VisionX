import React, { useEffect, useState } from "react";
import theme from "../theme";
import { FilledButton, TextButton } from "./Buttons";
import { Stack, styled } from "@mui/material";
import { PrimaryBackgroundImage } from "./BackgroundImages";
import { BigHeading, HeadingSubtitle, TextContentBold } from "./Typograhpy";

const Feature = styled("div")({
  padding: "9px 30px",
  fontFamily: "Ubuntu",
  borderRadius: "20px",
  transition: "transform 0.2s ease-in-out",

  "@media (max-width: 768px)": {
    padding: "7px 26px",
  },

  "@media (max-width: 670px)": {
    padding: "5px 7px",
  },
});

function HeroHomePage(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [bigHeadingMargin, setBigHeadingMargin] = useState("");
  const features = [
    "Automation & Sourcing",
    "Storefront & Pricing",
    "Payments & Delivery",
    "Marketing & Analytics",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup to prevent memory leaks
  }, []);

  useEffect(() => {
    props.windowWidth === 1020
      ? setBigHeadingMargin("3px 0 0 90px")
      : setBigHeadingMargin("3px 0 0 38px");
  }, [props.windowWidth]);

  return (
    <div
      style={{
        height: "500px",
        width: "-webkit-fill-available",
        padding: "180px 0 0",
        textAlign: "center",
        position: "relative",
      }}
    >
      <PrimaryBackgroundImage />

      <div
        style={{
          textAlign: "center",
          width: "fit-content",
          margin: "auto",
        }}
      >
        <BigHeading className="BigHeading" sx={{ fontSize: "70px" }}>
          From Vision To Reality,
        </BigHeading>
        <BigHeading
          className="BigHeading"
          sx={{
            margin: bigHeadingMargin,
            background: theme.primaryGradientTextColor,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "500",
          }}
        >
          Invest in the future
        </BigHeading>
      </div>

      <div style={{ margin: "20px auto 0", width: "fit-content" }}>
        <HeadingSubtitle>
          Experience the next generation of financial freedom. Our secure and
          intuitive interface makes digital dropshipping in eCommerceEnterprise
          simple and stress-free.
        </HeadingSubtitle>
      </div>

      <div style={{ width: "fit-content", margin: "40px auto 0" }}>
        <Stack direction={"row"} spacing={4}>
          <FilledButton sx={{ fontSize: "15px" }}>Join Now</FilledButton>
          <TextButton sx={{ fontSize: "15px" }}>Learn more</TextButton>
        </Stack>
      </div>

      <div
        style={{
          display: "flex",
          width: "fit-content",
          margin: "50px auto 0",
          padding: "3px",
          border: `2px solid ${theme.primaryBorderColor}`,
          borderRadius: "50px",
          cursor: "default",
        }}
      >
        {features.map((feature, index) => {
          return (
            <Feature
              key={feature}
              id="feature"
              sx={{
                border:
                  index === activeIndex &&
                  `2px solid ${theme.primaryBorderColor}`,
                background: index === activeIndex && "rgb(225, 232, 227, 0.1)",
              }}
            >
              <TextContentBold className="TextContentBold">
                {feature}
              </TextContentBold>
            </Feature>
          );
        })}
      </div>
    </div>
  );
}

export default HeroHomePage;

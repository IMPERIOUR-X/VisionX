import React, { useEffect, useState } from "react";
import theme from "../theme";
import { FilledButton, TextButton } from "./Buttons";
import { Stack, styled } from "@mui/material";
import { PrimaryBackgroundImage } from "./BackgroundImages";

const BigHeading = styled("h1")({
  color: theme.primaryTextColor,
  fontSize: "60px",
  fontWeight: "400",
  fontFamily: "Ubuntu",
  width: "fit-content",
});

const HeadingSubtitle = styled("p")({
  color: theme.secondaryTextColor,
  fontSize: "16px",
  fontFamily: "Ubuntu",
  fontWeight: "300",
  width: "48rem",
});

const Feature = styled("div")({
  padding: "9px 30px",
  fontFamily: "Ubuntu",
  borderRadius: "20px",
  transition: "transform 0.2s ease-in-out",
});

function HeroHomePage(props) {
  const [activeIndex, setActiveIndex] = useState(0);
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

  return (
    <div
      style={{
        height: "500px",
        width: "-webkit-fill-available",
        padding: "170px 0 0",
        textAlign: "center",
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
        <BigHeading sx={{ fontSize: "70px" }}>
          From Vision To Reality,
        </BigHeading>
        <BigHeading
          sx={{
            margin: "3px 0 0 90px",
            background: theme.primaryGradientTextColor,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "500",
          }}
        >
          Invest in the future
        </BigHeading>
      </div>

      <div style={{ margin: "14px auto 0", width: "fit-content" }}>
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
              {feature}
            </Feature>
          );
        })}
      </div>
    </div>
  );
}

export default HeroHomePage;

import React from "react";
import theme from "../theme";
import {
  SmallTitleHeading,
  TextContentBold,
  TitleHeading,
  TitleText,
} from "./Typograhpy";
import { styled } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import { FilledBigButton, IconButton } from "./Buttons";

const digitalDropshippingFAQ = [
  {
    title: "What is digital dropshipping?",
    content:
      "Digital dropshipping is a business model where you sell digital products (like ebooks, templates, or software) without holding inventory, and the products are automatically delivered to customers upon purchase.",
  },
  {
    title: "How does VisionX work?",
    content:
      "VisionX allows you to create an online store, list digital products from our marketplace or your own, set pricing, accept payments, and automate the delivery process so customers instantly receive their purchases.",
  },
  {
    title: "How do I get paid for my sales?",
    content:
      "You get paid directly through integrated payment gateways like PayPal, Stripe, or cryptocurrency wallets, with instant or scheduled payouts depending on the provider’s terms.",
  },
];

const FAQContainer = styled("div")({
  border: `1px solid ${theme.tableBorderColor}`,
  padding: "30px",
  borderRadius: "18px",
  position: "relative",
});

function FAQS(props) {
  return (
    <div
      style={{
        margin: "110px 0 0",
      }}
    >
      <SmallTitleHeading sx={{ margin: "7px auto 0" }}>FAQS</SmallTitleHeading>
      <TitleHeading sx={{ margin: "7px auto 0" }}>
        Frequently Asked Questions
      </TitleHeading>

      <div style={{ margin: "60px 0 0" }}>
        {digitalDropshippingFAQ.map((FAQ) => {
          return (
            <FAQContainer key={FAQ.title} sx={{ marginBottom: "20px" }}>
              <IconButton
                sx={{ position: "absolute", right: "30px", top: "20px" }}
              >
                <RemoveIcon
                  sx={{
                    fontSize: "23px",
                  }}
                />
              </IconButton>
              <TitleText>{FAQ.title}</TitleText>
              <TextContentBold sx={{ margin: "14px 0 0" }}>
                {FAQ.content}
              </TextContentBold>
            </FAQContainer>
          );
        })}
      </div>

      <div style={{ width: "fit-content", margin: "30px auto 0" }}>
        <FilledBigButton>More Questions?</FilledBigButton>
      </div>
    </div>
  );
}

export default FAQS;

import React from "react";
import { SmallTitleHeading, TextContent, TitleHeading } from "./Typograhpy";
import image from "../assets/how-it-work.png";
import Grid from "@mui/material/Grid2";
import { FilledBigButton } from "./Buttons";

function HowItWorks(props) {
  return (
    <div style={{ margin: "120px 0 0", width: "-webkit-fill-available" }}>
      <Grid container spacing={0}>
        <Grid size={props.windowWidth <= 750 ? 12 : 6}>
          <div
            style={{
              width: "fit-content",
            }}
          >
            <SmallTitleHeading>How It Works</SmallTitleHeading>
            <TitleHeading sx={{ margin: "7px 0 0" }}>
              How to Start Digital Dropshipping
            </TitleHeading>
          </div>

          <div
            style={{
              margin: "50px 0 0",
            }}
          >
            <TextContent>
              Digital dropshipping is an online business model where sellers
              list and sell digital products such as ebooks, templates,
              software, and courses without holding any inventory. Instead of
              manually delivering products, the system automates the process,
              ensuring that customers receive their purchases instantly after
              payment. This allows entrepreneurs to focus on marketing,
              branding, and customer engagement while leveraging automation for
              seamless order fulfillment.
            </TextContent>
            <TextContent sx={{ margin: "20px 0  0" }}>
              Sellers participate through specialized platforms or their own
              eCommerce websites, where they can upload, price, and market their
              digital products to a global audience. Since there are no physical
              products involved, costs are significantly lower, and scalability
              is much easier compared to traditional dropshipping. Sellers can
              operate from anywhere in the world, and there are no shipping
              constraints, making it an ideal business for those looking for
              passive income. The success of a digital dropshipping business
              depends on various factors, including choosing high-demand
              products, implementing strong digital marketing strategies,
              optimizing sales funnels, and providing excellent customer
              support. Additionally, sellers can leverage tools like SEO, paid
              ads, and social media marketing to increase visibility and drive
              consistent sales. With digital products, there are also no
              concerns about stock shortages or manufacturing delays, ensuring a
              smooth, automated, and highly profitable business model.
            </TextContent>
          </div>

          <FilledBigButton
            sx={{
              margin: "30px 0 0",
            }}
          >
            Start Dropshipping Now
          </FilledBigButton>
        </Grid>

        {props.windowWidth >= 750 && (
          <Grid
            sx={{
              textAlign: "end",
            }}
            size={6}
          >
            <img
              src={image}
              alt="digital dropshipping earth"
              style={{
                transition: "all 0.6s ease-in-out",
                cursor: "grab",
                width: "37vw",
                maxWidth: "508.734px",
                marginTop: props.windowWidth <= 1140 ? "150px" : 0,
              }}
            />
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default HowItWorks;

import React from "react";
import theme from "../theme";
import { TextContent } from "./Typograhpy";

function PrimaryDivider(props) {
  return (
    <div
      style={{
        width: "50%",
        position: "relative",
        margin: "47px auto",
        cursor: "pointer",
      }}
    >
      <hr
        style={{
          border: 0,
          borderTop: `2px solid ${theme.specialTextColor}`,
          opacity: 1,
        }}
      />
      <TextContent
        sx={{
          position: "absolute",
          top: "-13px",
          left: "47.5%",
          padding: "0px 18px",
          borderRadius: "5px",
          fontSize: "17px",
          backgroundColor: theme.navbarBackground,
        }}
      >
        or
      </TextContent>
    </div>
  );
}

export { PrimaryDivider };

import React from "react";
import theme from "../theme";
import { styled } from "@mui/material";
import { TextContent } from "./Typograhpy";

const CheckboxContainer = styled("div")({
  backgroundColor: theme.whiteTransBackground,
  color: theme.primaryTextColor,
  border: `2px solid ${theme.primaryBorderColor}`,
  height: "36px",
  width: "320px",
  borderRadius: "5px",
  padding: "10px 20px",
  display: "flex",
  justifyContent: "space-between",
  margin: "0 0 16px",
});

function PrimaryCheckboxInputField(props) {
  return (
    <CheckboxContainer className="CheckboxContainer">
      <TextContent sx={{ margin: "6px 0 0", height: "fit-content" }}>
        {props.label}
      </TextContent>
      <input
        style={{ cursor: "pointer" }}
        checked={props.rememberMe}
        onChange={(elt) => {
          props.setRememberMe(elt.target.checked);
          console.log(props.rememberMe);
          console.log(elt.target.checked);
        }}
        type="checkbox"
      />
    </CheckboxContainer>
  );
}

export { PrimaryCheckboxInputField };

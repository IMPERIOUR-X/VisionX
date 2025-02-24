import { styled } from "@mui/system";
import image from "../assets/primaryBackground.jpg";

const PrimaryBackgroundImage = styled("div")({
  backgroundImage: `url(${image})`,
  filter: "blur(20px)",
  WebkitFilter: "blur(20px)",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "700px",
  width: "-webkit-fill-available",
  padding: "30px 0 0",
  position: "absolute",
  top: "0",
  left: "0",
  zIndex: "-100",
});

export { PrimaryBackgroundImage };

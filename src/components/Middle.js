import * as React from "react";
import { styled } from "@mui/system";

const imageURL = "https://images.pexels.com/photos/9895973/pexels-photo-9895973.jpeg?auto=compress&cs=tinysrgb&w=600";
const Background = styled("div")({
  position: "absolute",
  width: "100%",
  height: "300",
  backgroundImage: `url(${imageURL})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
});

export default function Middle() {
  return <Background />;
}
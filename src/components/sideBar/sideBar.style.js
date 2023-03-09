import { styled, Box, Stack } from "@mui/material";
import logo from "../../assets/sideBarLogo.svg";

export const Wrapper = styled(Box)({
  width: "104px",
  height: "100%",
  background: "#202636",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  rowGap: "38px",
  padding: "24px 0",
});

export const Logo = styled(Box)({
  width: "57px",
  height: "132px",
  background: `url(${logo})`,
  mixBlendMode: "normal",
});

export const Vector = styled(Box)({
  width: "104px",
  height: "85px",
  background: "rgba(255, 255, 255, 0.11)",
  display: "grid",
  placeItems: "center",
});

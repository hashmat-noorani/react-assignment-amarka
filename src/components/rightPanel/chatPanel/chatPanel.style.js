import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)({
  height: "852px",
  width: "615px",
  background: "#1B2030",
  display: "flex",
  flexDirection: "column",
  rowGap: "20px",
  padding: "20px 0",
  justifyContent: "space-evenly",
  alignItems: "center",
  borderRadius: "5px",
});

export const Message = styled(Box)({
  width: "440px",
  padding: "20px",
  background: "#FFFFFF",
  borderRadius: "10px",
});

export const MessageWrapper = styled(Box)({
  display: "flex",
  alignItems: "start",
  justifyContent: "center",
  columnGap: "20px",
  // border: "1px solid red",
});

export const Send = styled(Box)({
  width: "528px",
  height: "45px",
  background: "rgba(255, 255, 255, 0.08)",
  padding: "9px 20px",
});

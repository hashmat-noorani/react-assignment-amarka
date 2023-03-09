import React from "react";
import { Box, styled, Typography } from "@mui/material";
import caret from "../../../assets/caret.svg";

const Title = () => {
  return (
    <Wrapper>
      <Typography fontSize="18px">
        Currently Showing: Only newly listed pairs that appears to be safe.
      </Typography>
      <Select>
        Sort by: Initial Liquidity
        <img src={caret} alt="" />
      </Select>
    </Wrapper>
  );
};

export default Title;

const Wrapper = styled(Box)({
  display: "flex",
  // border: "2px solid blue",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#FFFFFF",
  margin: "30px 0 15px",
});

const Select = styled(Box)({
  background: "#202636",
  width: "233px",
  height: "33px",
  borderRadius: "5px",
  color: "#FFFFFF",
  display: "flex",
  columnGap: "25px",
  alignItems: "center",
  justifyContent: "end",
  padding: "0 15px",
});

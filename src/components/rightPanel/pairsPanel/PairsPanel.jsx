import { Box, styled } from "@mui/material";
import React from "react";
import Cards from "./Cards";
import TabBar from "./TabBar";
import Title from "./Title";

const PairsPanel = () => {
  return (
    <Wrapper>
      <TabBar />
      <Title />
      <Cards />
    </Wrapper>
  );
};

export default PairsPanel;

const Wrapper = styled(Box)({
  // border: "1px solid blue",
  width: "928px",
});

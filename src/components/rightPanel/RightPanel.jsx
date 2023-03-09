import { styled, Box } from "@mui/material";
import React from "react";
import ChatPanel from "./chatPanel/ChatPanel";
import Header from "./header/Header";
import PairsPanel from "./pairsPanel/PairsPanel";

const RightPanel = () => {
  return (
    <Wrapper>
      <Header />
      <Content>
        <PairsPanel />
        <ChatPanel />
      </Content>
    </Wrapper>
  );
};

export default RightPanel;

const Wrapper = styled(Box)({
  flex: 1,
});

const Content = styled(Box)({
  display: "flex",
  justifyContent: "space-evenly",
});

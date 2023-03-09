import { Box, styled } from "@mui/material";
import React from "react";

const tabs = ["Appears Safe", "Medium Risk", "Probably Rug / Scam"];

const TabBar = () => {
  return (
    <Bar>
      {tabs.map((el, idx) => (
        <Box
          sx={{
            flex: 1,
            background: idx === 0 ? "#383E4C" : null,
            borderRight: idx === 1 ? "1px solid #3A3E5E" : null,
            color: idx === 0 ? "#FFFFFF" : "rgba(255, 255, 255, 0.47)",
            display: "grid",
            placeItems: "center",
            fontSize: "16px",
            borderRadius: "5px",
          }}
          key={idx}
        >
          {el}
        </Box>
      ))}
    </Bar>
  );
};

export default TabBar;

const Bar = styled(Box)({
  display: "flex",
  background: "#202636",
  justifyContent: "space-between",
  height: "43px",
  borderRadius: "5px",
});

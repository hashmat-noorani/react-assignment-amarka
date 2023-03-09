import React from "react";
import { Logo, Vector, Wrapper } from "./sideBar.style";
import vectorIcon from "../../assets/sideBarVector.svg";

const SideBar = () => {
  return (
    <Wrapper>
      <Logo></Logo>
      <Vector>
        <img src={vectorIcon} alt="" />
      </Vector>
    </Wrapper>
  );
};

export default SideBar;

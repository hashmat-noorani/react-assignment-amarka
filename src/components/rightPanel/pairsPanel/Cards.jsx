import { Box, styled, Typography } from "@mui/material";
import React from "react";
import card1avatar from "../../../assets/card1avatar.svg";
import card2avatar from "../../../assets/card2avatar.svg";
import card3avatar from "../../../assets/card3avatar.svg";
import desktopIcon from "../../../assets/desktopIcon.svg";
import telegramIcon from "../../../assets/telegramIcon.svg";
import twitterIcon from "../../../assets/twitterIcon.svg";
import owlIcon from "../../../assets/owlIcon.svg";
import mediumIcon from "../../../assets/mediumIcon.svg";
import roundIcon from "../../../assets/roundIcon.svg";
import barsIcon from "../../../assets/barsIcon.svg";
import tag from "../../../assets/tag.svg";
import greenTag from "../../../assets/greenTag.svg";
import user from "../../../assets/user.svg";
import styles from "./pairsPanel.module.css";
import caret from "../../../assets/caret.svg";
import copyIcon from "../../../assets/copyIcon.svg";
import data from "../../../db.json";

const card1icons = [
  desktopIcon,
  telegramIcon,
  twitterIcon,
  owlIcon,
  mediumIcon,
  roundIcon,
  barsIcon,
];
const card2icons = [desktopIcon, telegramIcon, twitterIcon, owlIcon];
const card3icons = [desktopIcon, telegramIcon, twitterIcon, owlIcon];

const cardAvatars = [card1avatar, card2avatar, card3avatar];
const cardIcons = [card1icons, card2icons, card3icons];

const Left = ({ el, idx }) => {
  return (
    <Box py="14px" width="137px">
      <img src={cardAvatars[idx]} alt="" />
      <Icons>
        {cardIcons[idx].map((el, idx) => (
          <img key={idx} style={{ width: "15px" }} src={el} alt="" />
        ))}
      </Icons>

      <Time>
        <p
          style={{
            fontSize: "8px",
            fontWeight: 700,
          }}
        >
          TIME LISTED
        </p>
        <p
          style={{
            fontSize: "20px",
            fontWeight: 300,
          }}
        >
          {el.time}
        </p>
      </Time>
    </Box>
  );
};
const Mid = ({ el, idx }) => {
  return (
    <Box sx={{ flex: 1, p: "14px 20px" }}>
      <Box className={styles.mid_headingLine1}>
        <p>{el.name}</p>
        <p>{el.percentage}</p>
        <div>
          24 HRS
          <img src={caret} alt="" />
        </div>
      </Box>
      <p className={styles.mid_headingLine2}>Fable of the Baby Dragon Tyrant</p>
      <div className={styles.mid_tabs}>
        {el.tabs.map((node, idx) => (
          <div key={idx}>
            {node.title}:&nbsp;&nbsp;&nbsp;{node.value}
          </div>
        ))}
      </div>

      <div className={styles.mid_contract_ids}>
        <div>
          Contract: {el.contract_key}
          <img src={copyIcon} alt="" />
        </div>
        <div>
          Pair: {el.pair_key}
          <img src={copyIcon} alt="" />
        </div>
      </div>

      <Box
        display="grid"
        gridTemplateColumns={
          idx === 0 ? "repeat(5, max-content)" : "repeat(4, max-content)"
        }
        rowGap="5px"
        columnGap={idx === 0 ? "25px" : "60px"}
        className={styles.mid_bullets}
      >
        {el.bullets.map((node, idx) => (
          <div key={idx}>
            <div
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: node.color,
              }}
            ></div>
            <p key={idx}>{node.title}</p>
          </div>
        ))}
      </Box>

      <div className={styles.mid_footer}>
        <div>TRADE</div>
        <div>CHART</div>
        {el.footer_third_btn && (
          <div>Poor structure but low risk of a scam.</div>
        )}
      </div>
    </Box>
  );
};

const Right = ({ el, idx }) => {
  return (
    <Box
      sx={{
        pb: "14px",
        width: "56px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        {el.rating == 100 ? (
          <img src={greenTag} alt="" />
        ) : (
          <img src={tag} alt="" />
        )}
        <p
          style={{
            textAlign: "center",
            marginTop: "-68px",
            fontSize: "24px",
            color: "#FFFFFF",
            fontWeight: 400,
          }}
        >
          {el.rating}
        </p>
        <p
          style={{
            textAlign: "center",
            fontSize: "9.07982px",
            color: "#FFFFFF",
            fontWeight: 400,
            // border: "2px solid blue",
          }}
        >
          /100
        </p>
      </Box>
      <Box
        sx={{
          border: "2px solid white",
          display: "grid",
          placeItems: "center",
          height: "56px",
          borderRadius: "50%",
        }}
      >
        <img src={user} alt="" />
      </Box>
    </Box>
  );
};

const Cards = () => {
  return (
    <Wrapper>
      {data.cards.map((el, idx) => (
        <CardWrapper key={idx}>
          <Left {...{ el, idx }} />
          <Mid {...{ el, idx }} />
          <Right {...{ el, idx }} />
        </CardWrapper>
      ))}
    </Wrapper>
  );
};

export default Cards;

const Wrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  rowGap: "15px",
});

const CardWrapper = styled(Box)({
  background: "#202636",
  display: "flex",
  borderRadius: "5px",
  padding: "0 14px",
});

const Icons = styled(Box)({
  // border: "1px solid red",
  margin: "10px 0",
  padding: "0 3px 0 25px",
  display: "flex",
  gap: "6px",
  flexWrap: "wrap",
  width: "137px",
});

const Time = styled(Box)({
  height: "53px",
  width: "120px",
  background: "#2D354B",
  marginLeft: "16px",
  borderRadius: "3px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "#FFFFFF",
});

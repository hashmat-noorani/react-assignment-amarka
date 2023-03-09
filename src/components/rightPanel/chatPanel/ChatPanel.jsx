import { Typography } from "@mui/material";
import React from "react";
import data from "../../../db.json";
import avatar1 from "../../../assets/messageAvatars/avatar1.svg";
import avatar2 from "../../../assets/messageAvatars/avatar2.svg";
import avatar3 from "../../../assets/messageAvatars/avatar3.svg";
import avatar4 from "../../../assets/messageAvatars/avatar4.svg";
import avatar5 from "../../../assets/messageAvatars/avatar5.svg";
import { Message, MessageWrapper, Send, Wrapper } from "./chatPanel.style";

const ChatPanel = () => {
  const avatars = [avatar5, avatar2, avatar3, avatar4, avatar5, avatar1];

  return (
    <Wrapper>
      {data?.chats.map((el, idx) => (
        <MessageWrapper key={idx}>
          <img src={avatars[idx]} alt="" />
          <Message>
            <Typography
              sx={{
                fontWeight: 700,
                color: el?.name_color ? el?.name_color : "#007DD8",
              }}
            >
              {el.name}
            </Typography>
            <Typography color="#3D3D3D">{el.msg}</Typography>
          </Message>
        </MessageWrapper>
      ))}

      <Send>
        <p
          style={{
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "25px",
            color: "#5C5E69",
          }}
        >
          Write your message
        </p>
      </Send>
    </Wrapper>
  );
};

export default ChatPanel;

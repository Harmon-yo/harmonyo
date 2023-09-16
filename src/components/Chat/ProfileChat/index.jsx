import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ListItem, Avatar, Typography, ListItemIcon } from "@mui/material";
import "./style.css";
import { storage } from "../../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AvatarComFoto from "../../Global/AvatarComFoto";
export default function ProfileChat() {
  const navigate = useNavigate();

  return (
    <>
      <ListItem className="chat_profile">
        <ListItem
          button
          className="voltar"
          style={{
            display: "flex",
            justifyContent: "left",
            width: "fit-content",
            height: "fit-content",
          }}
          onClick={() => navigate(-1)}
        >
          <ArrowBackIcon
            style={{
              width: "35px",
              height: "35px",
              padding: "5px",
              borderRadius: "100%",
              background: "#363636",
            }}
          />
        </ListItem>
        <ListItemIcon>
          <AvatarComFoto
            id={Number(sessionStorage.ID)}
            nome={sessionStorage.NOME}
            className="avatar"
          />
        </ListItemIcon>
        <Typography variant="h6" component="div">
          {sessionStorage.NOME}
        </Typography>
      </ListItem>
    </>
  );
}

import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ListItem, Avatar, Typography, ListItemIcon } from "@mui/material";
import "./style.css";
import { storage } from "../../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function ProfileChat() {
  const navigate = useNavigate();
  const [urlfoto, setUrlFoto] = React.useState("");
  const [carregando, setCarregando] = React.useState(true);
  useEffect(() => {
    let urlImg = `/imgs-perfil-usuario/${sessionStorage.getItem(
      "ID"
    )}_ft_perfil`;
    storage
      .ref(urlImg)
      .getDownloadURL()
      .then((url) => {
        console.log(url);
        setUrlFoto(url);
        setCarregando(false);
      })
      .catch((error) => {});
  }, []);
  if (!carregando) {
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
            {urlfoto !== "" ? (
              <Avatar src={urlfoto} />
            ) : (
              <Avatar  sx={{ bgcolor: "#099250" }}>{sessionStorage.NOME.charAt(0)}</Avatar>
            )}
          </ListItemIcon>
          <Typography variant="h6" component="div">
            {sessionStorage.NOME}
          </Typography>
        </ListItem>
      </>
    );
  } else {
  }
}

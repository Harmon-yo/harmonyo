import React from "react";
import "./style.css";
import { Box, Typography } from "@mui/material";
import AvatarComFoto from "../../AvatarComFoto";

function PerfilUsuario(props) {
  return (
    <Box key={`usuario-pedido-${props.id}`} className="perfil-container">
      <AvatarComFoto
        id={props.id}
        nome={props.nome.toUpperCase()}
        className="avatar"
      />
        <Typography className="nome">{props.nome}</Typography>
      
    </Box>
  );
}

export default PerfilUsuario;

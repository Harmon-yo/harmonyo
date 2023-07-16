import React from "react";
import "./style.css";
import { Avatar, Box, Typography } from "@mui/material";

function PerfilUsuario(props) {
  return (
    <Box className="perfil-container">
      <Avatar className="avatar">{props.nome.charAt(0).toUpperCase()}</Avatar>
     
        <Typography className="nome">{props.nome}</Typography>
      
    </Box>
  );
}

export default PerfilUsuario;

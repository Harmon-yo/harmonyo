import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import "./style.css";
function ItemAula(props) {
  return (
    <Box className="containerItem">
      <Box className="fotoContainer">
        <Avatar>
            {props.nome[0]}
        </Avatar>
      </Box>
      <Box className="conteudoContainer"> 
        <Box className="inicioCard">
          <Typography className="nomeC">{props.nome}</Typography>
          <Typography className="instC">{props.instrumento}</Typography>
        </Box>
        <Box className='fimCard'>
            <Typography className="hr">Horario:</Typography>
            <Typography className="hrValue">{props.horario}</Typography>
            </Box>
      </Box>
    </Box>
  );
}

export default ItemAula;

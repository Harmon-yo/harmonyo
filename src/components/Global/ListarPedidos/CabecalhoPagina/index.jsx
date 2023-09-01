import React from "react";
import "./style.css";
import { Box, Container, Typography } from "@mui/material";
import Calendario from "../Calendario/index.jsx";
import Filtro from "../Filtro/index.jsx";
import Pesquisa from "../Pesquisa/index.jsx";

function CabecalhoPagina() {
  return (
    <Container className="container">

      <Typography className="titulo">Pedidos</Typography>

      <Box className="direita">
        <Calendario/>
        <Pesquisa />
        <Filtro />
      </Box>
    </Container>
  );
}

export default CabecalhoPagina;

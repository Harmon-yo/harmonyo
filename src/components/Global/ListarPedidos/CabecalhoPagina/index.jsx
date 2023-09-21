import React from "react";
import "./style.css";
import { Box, Container, Typography } from "@mui/material";
import Calendario from "../Calendario/index.jsx";
import Filtro from "../Filtro/index.jsx";
import Pesquisa from "../Pesquisa/index.jsx";

function CabecalhoPagina(props) {

  const {filtro, setFiltro} = props.filtroState;
  
  return (
    <Container className="container">
      <Typography className="titulo">Pedidos</Typography>
      <Box className="direita">
        <Pesquisa filtroState={{filtro, setFiltro}}/>
        <Calendario filtroState={{filtro, setFiltro}}/>
        <Filtro filtroState={{filtro, setFiltro}}/>
      </Box>
    </Container>
  );
}

export default CabecalhoPagina;

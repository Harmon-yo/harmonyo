import React from "react";
import "./style.css";
import { Box, Button, Container, Icon, Typography } from "@mui/material";
import Calendario from "../../../../imgs/calendar.png";
import FilterIcon from "../../../../imgs/filter.png";
import Filtro from "../Filtro";
function CabecalhoPagina() {
  return (
    <Container className="container">
      
      <Typography className="titulo">Pedidos</Typography>
     
      <Box className="direita">
        <Button variant="text" className="botao">
          <img className="icon" src={Calendario} />
        </Button>
        <Filtro />
        <Button variant="text" className="botao">
          <img className="icon" src={FilterIcon} />
        </Button>
      </Box>
    </Container>
  );
}

export default CabecalhoPagina;

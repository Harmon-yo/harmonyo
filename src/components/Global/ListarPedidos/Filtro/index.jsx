import { Box, Button, InputBase } from "@mui/material";
import React from "react";
import Lupa from "../../../../imgs/search.png"
import "./style.css";
function Filtro() {

  function filtrar() {
    console.log("filtrar");
  }

  return (
    <Box className="filtro">
      <InputBase placeholder="Filtrar" className="input_filtro" />
      <Button variant="text" className="botao" onClick={filtrar}>
          <img className="lupa" src={Lupa} />
      </Button>
    </Box>
  );
}

export default Filtro;

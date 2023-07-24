import { Box, Button, InputBase, Typography } from "@mui/material";
import React from "react";
import "./style.css";
import Lupa from "../../../../imgs/search.png";
function ContainerAulas(props) {
  const { data, setData } = props.stateData;
  console.log(data["$D"]);
  return (
    <Box className="container">
      <Box className="topo">
        <Typography className="cabecalho">
          Aulas em {data["$D"]} de{" "}
          {data["$d"].toLocaleString("pt-br", { month: "long" })}
        </Typography>
        <Box className="filtro">
          <InputBase className="input_filtro"/>
          <Button variant="text" className="botao">
            <img className="lupa" src={Lupa} />
          </Button>
        </Box>
        <Box className="setas">
        <Typography className="texto">
            {"<"}
        </Typography>
        <Typography className="texto">
            {">"}
        </Typography>
        </Box>
      </Box>
        <Box className="aulas">
        </Box>
    </Box>
  );
}

export default ContainerAulas;

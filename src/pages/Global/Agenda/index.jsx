import React from "react";
import dayjs from "dayjs";
import EstruturaPaginaUsuario from "../../../components/Global/EstruturaPaginaUsuario/Main";
import { Box, Button, Typography } from "@mui/material";
import "./style.css";
import Calendario from "../../../components/Global/Agenda/Calendario"
import ContainerAulas from "../../../components/Global/Agenda/ContainerAulas";

function Agenda() {

  const [data, setData] = React.useState(dayjs(new Date()));

  return (
    <EstruturaPaginaUsuario tela="agenda">
      <Box className="pagina-container">
        <Box className="pagina-conteudo">
          <ContainerAulas stateData={{data, setData}}/>
        </Box>
        <Box className="calendar">
         <Calendario stateData={{data, setData}}/>
        </Box>
      </Box>
    </EstruturaPaginaUsuario>
  );
}

export default Agenda;

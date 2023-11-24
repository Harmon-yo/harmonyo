import React from "react";
import dayjs from "dayjs";
import EstruturaPaginaUsuario from "../../../components/Global/EstruturaPaginaUsuario/Main";
import { Box } from "@mui/material";
import "./style.css";
import Calendario from "../../../components/Global/Agenda/Calendario"
import ContainerAulas from "../../../components/Global/Agenda/ContainerAulas";

function Agenda() {
  const [avisos, setAvisos] = React.useState([]);


  const [data, setData] = React.useState(dayjs(new Date()));

  const adicionaAviso = (avisos) => {
    setAvisos([...avisos, avisos]);
  }

  return (
    <EstruturaPaginaUsuario tela="agenda" avisosState={{ avisos, setAvisos }}>
      <Box className="pagina-container">
        <Box className="pagina-conteudo">
          <ContainerAulas stateData={{data, setData}}/>
        </Box>
        <Box className="calendar">
         <Calendario stateData={{data, setData}} adicionaAviso={adicionaAviso}/>
        </Box>
      </Box>
    </EstruturaPaginaUsuario>
  );
}

export default Agenda;

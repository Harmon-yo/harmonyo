import React from "react";
import "./style.css";
import { Box } from "@mui/material";

function Status(props) {

  if (props.status === "Recusado" || props.status === "Cancelado") {
    return <Box className="status recusadoCancelado">{props.status}</Box>;
  } else if (props.status === "Confirmado") {
    return <Box className="status confirmado">{props.status}</Box>;
  } else if (props.status === "Pendente" || props.status === "Aguardando Pagamento"){
    return <Box className="status pendente">{props.status}</Box>;
  } else if (props.status === "Em Fila"){
    return <Box className="status emfila">{props.status}</Box>;
  } else {
    return <Box className="status concluido">{props.status}</Box>;
  }
}

export default Status;

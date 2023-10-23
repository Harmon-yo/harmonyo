import React from "react";
import "./style.css";
import { Box } from "@mui/material";
import api from "../../../../api";

function Status(props) {

  const [posicao, setPosicao] = React.useState(0);

  if (props.status === "Recusado" || props.status === "Cancelado") {
    return <Box className="status recusadoCancelado">{props.status}</Box>;
  } else if (props.status === "Confirmado") {
    return <Box className="status confirmado">{props.status}</Box>;
  } else if (props.status === "Pendente" || props.status === "Aguardando Pagamento") {
    return <Box className="status pendente">{props.status}</Box>;
  } else if (props.status === "Em Fila") {
    // buscar posição na fila
    api.get(`/pedidos/fila-espera/posicao/${props.pedidoState.id}`,
      { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } }).then((response) => {
        setPosicao(response.data);
 
      }).catch((error) => {
        console.log(error);
      });

    return <Box className="status emFila">{props.status}: {posicao}</Box>;
  } else {
    return <Box className="status concluido">{props.status}</Box>;
  }
}

export default Status;

import { TableCell, TableRow, Typography, Tooltip as TooltipMaterial } from "@mui/material";
import React, { useState } from "react";
import "../../templates/DashboardProfessorConteudo/style.css";
import violaoIcon from "../../../imgs/violao.png";


function LinhaTabelaMinhasAulas(props) {

    


  return (
    <TableRow
      key={props.item.idInstrumento}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row" align="center">
        <TooltipMaterial title={props.item.nomeInstrumento} placement="right">
          
          <img src={violaoIcon} alt="" className="instrumentos-img" />
        </TooltipMaterial>
      </TableCell>
      <TableCell align="center">
        <Typography variant="subtitle1">{props.item.quantidadeAulas}</Typography>
      </TableCell>
      <TableCell align="center">
        <Typography variant="subtitle1">R$ {props.item.rendimentoTotal}</Typography>
      </TableCell>
    </TableRow>
  );
}

export default LinhaTabelaMinhasAulas;

import { TableCell, TableRow, Typography, Tooltip as TooltipMaterial } from "@mui/material";
import React, { useState } from "react";
import "../../../../../pages/Professor/Dashboard/style.css";

function LinhaTabelaMinhasAulas(props) {

    


  return (
    <TableRow
      key={props.item.idInstrumento}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row" align="center">
        <TooltipMaterial title={props.item.nomeInstrumento} placement="right">
          
        <Typography >{props.item.nomeInstrumento}</Typography>
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

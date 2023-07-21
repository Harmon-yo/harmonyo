import React from "react";
import { Box, Avatar, Typography, Tooltip } from "@mui/material";
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import "./style.css";

function ProfessorPopularCard(props) {
  let status = props.ultimaVezOnline;
  //transformar status de localdatetime para horas
  var hora = status.substring(11, 13);
  var minuto = status.substring(14, 16);
  var horaAtual = new Date().getHours();
  var minutoAtual = new Date().getMinutes();
  var horaOnline = horaAtual - hora;
  var minutoOnline = minutoAtual - minuto;
  if (horaOnline < 0) {
    horaOnline = horaOnline + 24;
  }
  if (minutoOnline < 0) {
    minutoOnline = minutoOnline + 60;
    horaOnline = horaOnline - 1;
  }
  if (horaOnline === 0) {
    if(minutoOnline === 0){
    status = "Online agora";
    }else{
      status = "Online a " + minutoOnline + " minutos";
    }
  } else {
    status = "Online a " + horaOnline + " horas";
  }


  return (
    <Box className="professor-popular-card">

      <Box className="card-info-usuario">
        <Avatar id="avatar-usuario-botao" className="avatar-usuario-img"
          sx={{ bgcolor: "#099250" }}>{props.nome[0]}</Avatar>
        <Box className="card-nome-container">

          <Tooltip title={props.nome} placement="right"><Typography className="card-info-nome" noWrap>{props.nome}</Typography></Tooltip>
        </Box>
      </Box>

      <Box className="card-info-avaliacao">
        <GradeRoundedIcon className="card-avaliacao-icon" />
        <Typography className="card-avaliacao-valor">{props.avaliacao}</Typography>
        <FiberManualRecordIcon className="card-info-separacao" />
        <Box className="card-cidade-container">

          <Tooltip title={props.localizacao} placement="right"><Typography className="card-cidade" variant="subtitle2" noWrap>{props.localizacao}</Typography></Tooltip >
        </Box>
      </Box>

      <Box className="card-info-status">

        <FiberManualRecordIcon className={`card-info-status-cor ${status === "Online agora" ? "online" : "offline"}`} />
        <Typography className="card-info-status-hora" variant="subtitle2">{status}</Typography>
      </Box>
    </Box>

  );
}

export default ProfessorPopularCard;
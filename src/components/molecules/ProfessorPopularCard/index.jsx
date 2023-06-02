import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import { deepOrange } from '@mui/material/colors';
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import "./style.css";

function ProfessorPopularCard(props) {
  return (
    <Box className="professor-popular-card">

      <Box className="card-info-usuario">
        <Avatar id="avatar-usuario-botao" className="avatar-usuario-img"
          sx={{ bgcolor: "var(--cor-padrao)" }}>{props.nome[0]}</Avatar>
        <Typography className="card-info-nome" noWrap>{props.nome}</Typography>
      </Box>

      <Box className="card-info-avaliacao">
        <GradeRoundedIcon className="card-avaliacao-icon" />
        <Typography className="card-avaliacao-valor">{props.avaliacao}</Typography>
        <FiberManualRecordIcon className="card-info-separacao" />
        <Box className="card-cidade-container"> 

          <Typography className="card-cidade" variant="subtitle2" noWrap>{props.localizacao}</Typography>
        </Box>
      </Box>

      <Box className="card-info-status">

        <FiberManualRecordIcon className={`card-info-status-cor ${props.status === "Offline" ? "offline" : "online"}`} />  
        <Typography className="card-info-status-hora" variant="subtitle2">{props.status}</Typography>
      </Box>
    </Box>

  );
}

export default ProfessorPopularCard;
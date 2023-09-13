import React from "react";
import { Box, Typography, Tooltip } from "@mui/material";
import AvatarComFoto from "../../../../Global/AvatarComFoto";
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import "./style.css";

function ProfessorPopularCard(props) {
  return (
    <Box key={`popular-${props.id}`} className="professor-popular-card" onClick={props.onClick}>

      <Box className="card-info-usuario">
          <AvatarComFoto
            id={props.id}
            nome={props.nome}
            className="avatar-usuario-img"
          />
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
    </Box>

  );
}

export default ProfessorPopularCard;
import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import { deepOrange } from '@mui/material/colors';
import "./style.css";

function ProfessoresAltaProfessor(props) {
  return (
    <Box className="professores-alta-professor-card">
        <Avatar id="avatar-usuario-botao" className="avatar-usuario-img"
                sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
        <Box className="professores-alta-professor-card-info">
            <Typography className="professores-alta-professor-card-info-nome">{props.nome}</Typography>
            <Typography className="professores-alta-professor-card-info-instrumentos">{props.instrumentos.join(", ")}</Typography>
        </Box>
    </Box>
  );
}

export default ProfessoresAltaProfessor;
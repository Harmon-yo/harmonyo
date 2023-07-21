import React, { useEffect, useState, useRef } from "react";
import { Box, Typography, Pagination, Skeleton, CircularProgress } from "@mui/material";
import Card from "../../../../Global/Card/index.jsx";
import ProfessorPopular from "../ProfessorPopularCard/index.jsx";
import "./style.css";
import api from "../../../../../api.js";

const carregando = () => {
  return (<CircularProgress color="success" />);
}

function ProfessoresPopulares(props) {


  return (
    <Box className="professores-populares-container">
      <Box className="professor-populares-container-titulo">
        <Typography className="encontrar-professor-titulo">
          Popular
        </Typography>
      </Box>

      {
        props.isCarregando
          ? carregando()
          : <Card className="professores-populares-card">
            {props.professores.map((professor, index) => (
              <ProfessorPopular
                key={index}
                id={professor.id}
                nome={professor.nome}
                instrumentos={professor.instrumentos}
                localizacao={professor.localizacao}
                ultimaVezOnline={professor.ultimaVezOnline}
                avaliacao={professor.mediaAvaliacao}
              />
            ))}
          </Card>
      }
    </Box>
  );
}



export default ProfessoresPopulares;

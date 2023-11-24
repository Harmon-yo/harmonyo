import React from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import Card from "../../../../Global/Card/index.jsx";
import ProfessorPopular from "../ProfessorPopularCard/index.jsx";
import "./style.css";

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
                avaliacao={professor.mediaAvaliacao}
                onClick={() => props.onClick(professor)}
              />
            ))}
          </Card>
      }
    </Box>
  );
}



export default ProfessoresPopulares;

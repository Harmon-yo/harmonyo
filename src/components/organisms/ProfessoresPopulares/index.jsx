import React from "react";
import { Box, Typography } from "@mui/material";
import Card from "../../atoms/Card/index.jsx";
import ProfessorPopular from "../../molecules/ProfessorPopularCard/index.jsx";
import "./style.css";


const professores = [
  {
    id: 1,
    nome: "Gustavo Pereira",
    instrumentos: [
      "Violão",
      "Piano"
    ],
    localizacao: "São Paulo",
    status: "Online a 2 horas",
    avaliacao: 4.5
  },
  {
    id: 2,
    nome: "Guilherme da Silva",
    instrumentos: [
      "Violão",
      "Piano"
    ],
    localizacao: "Capão Redondo",
    status: "Online a 6 horas",
    avaliacao: 4.2
  }
]

function ProfessoresPopulares(props) {
  return (
    <Box className="professores-populares-container">

      <Box className="professor-populares-container-titulo">
        <Typography className="encontrar-professor-titulo" variant="h5">
          Popular
        </Typography>
      </Box>
      <Card className="professores-populares-card">
        {
          professores.map(
            (professor) => (
              <ProfessorPopular id={professor.id} nome={professor.nome} instrumentos={professor.instrumentos} localizacao={professor.localizacao} status={professor.status} avaliacao={professor.avaliacao} />
            ))
        }
      </Card>
    </Box>
  );
}

export default ProfessoresPopulares;
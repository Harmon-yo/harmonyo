import React from "react";
import ItemAula from "../ItemAula";
import { Box } from "@mui/material";
import "./style.css";

function ListaAulas() {
  const aulas = [
    {
      id: 1,
      nome: "Nathan",
      instrumento: "Guitarra",
      horario: "10:00",
    },
    {
      id: 2,
      nome: "Jesus",
      instrumento: "Violão",
      horario: "15:00",
    },
    {
      id: 3,
      nome: "João",
      instrumento: "Bateria",
      horario: "17:00",
    },
    {
      id: 4,
      nome: "João",
      instrumento: "Bateria",
      horario: "17:00",
    },
  ];

  return (
    <Box className="containerLista">
      {aulas.map((aula) => {
        return (
          <ItemAula
            key={aula.id}
            nome={aula.nome}
            instrumento={aula.instrumento}
            horario={aula.horario}
          />
        );
      })}
    </Box>
  );
}

export default ListaAulas;

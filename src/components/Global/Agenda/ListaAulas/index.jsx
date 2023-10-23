import React from "react";
import ItemAula from "../ItemAula";
import { Box } from "@mui/material";
import "./style.css";
import api from "../../../../api";
import { useEffect } from "react";
import { useState } from "react";

function ListaAulas(props) {
  const { dia } = props;
  const fkUsuario = sessionStorage.ID;
  const [aulas, setAulas] = useState();

  function getAulas() {
    let data = dia["$d"].getDate() < 10 ? "0" + dia["$d"].getDate() : dia["$d"].getDate();
    let mes =
      dia["$d"].getMonth() < 10
        ? "0" + (dia["$d"].getMonth() + 1)
        : dia["$d"].getMonth() + 1;
     data = dia["$d"].getFullYear() + "-" + mes + "-" + data;

    api
      .get(
        `/pedidos/pedidos-por-data-id-usuario?fkUsuario=${fkUsuario}&data=${data}`,
        { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } }
      )

      .then((response) => {
        let resposta = response.data
        let aulas = resposta.map((aula) => {
          return {
            id: aula.id,
            nome: sessionStorage.CATEGORIA === "Professor"? aula.aluno.nome:aula.professor.nome,
            instrumento: aula.aula.instrumento.nome,
            horario: getHorario(aula.dataAula)
          }
        });

        console.log(fkUsuario)

        setAulas(aulas);
      })
      .catch((error) => {
      
      });
  }

  function getHorario(data){
    let dataObj = new Date(data)

    let hora = dataObj.getHours() < 10 ? "0" + dataObj.getHours() : dataObj.getHours()
    let min = dataObj.getMinutes() < 10 ? "0" + dataObj.getMinutes() : dataObj.getMinutes()
    let horario = hora + ":" + min

    return horario
  }
  useEffect(() => {
    setAulas();
    getAulas();
  }, [props]);

  return (
    <Box className="containerLista">
      {aulas
        ? aulas.map((aula) => {
            return (
              <ItemAula
                key={aula.id}
                nome={aula.nome}
                instrumento={aula.instrumento}
                horario={aula.horario}
              />
            );
          })
        : null}
    </Box>
  );
}

export default ListaAulas;

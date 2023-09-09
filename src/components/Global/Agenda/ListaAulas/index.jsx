import React from "react";
import ItemAula from "../ItemAula";
import { Box } from "@mui/material";
import "./style.css";
import api from "../../../../api";
import { useEffect } from "react";
import { useState } from "react";
import { fromDateToFormatDate } from "../../../../utils/utils";

function ListaAulas(props) {
  const { dia } = props;
  const fkUsuario = sessionStorage.ID;
  const [aulas, setAulas] = useState();

  function getAulas() {
    var data = dia["$d"].getDate() < 10 ? "0" + dia["$d"].getDate() : dia["$d"].getDate();
    var mes =
      dia["$d"].getMonth() < 10
        ? "0" + (dia["$d"].getMonth() + 1)
        : dia["$d"].getMonth() + 1;
    var data = dia["$d"].getFullYear() + "-" + mes + "-" + data;

    api
      .get(
        `/pedidos/pedidos-por-data-id-usuario?fkUsuario=${fkUsuario}&data=${data}`,
        { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } }
      )

      .then((response) => {
        let aulas = []
        var resposta = response.data
        console.log(fkUsuario)
        resposta.map((aula) => {
          aulas.push({
            id: aula.id,
            nome: sessionStorage.CATEGORIA == "Professor"? aula.aluno.nome:aula.professor.nome,
            instrumento: aula.aula.instrumento.nome,
            horario: getHorario(aula.dataAula)})
        })
        setAulas(aulas);
      })
      .catch((error) => {
      
      });
  }

  function getHorario(data){
    var data = new Date(data)
    var hora = data.getHours() < 10 ? "0" + data.getHours() : data.getHours()
    var min = data.getMinutes() < 10 ? "0" + data.getMinutes() : data.getMinutes()
    var horario = hora + ":" + min
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

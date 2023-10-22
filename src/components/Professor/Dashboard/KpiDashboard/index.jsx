import React, { useEffect } from "react";
import Card from "../../../Global/Card/index.jsx";
import { CircularProgress, Typography } from "@mui/material";
import api from "../../../../api.js";
import { useState } from "react";
import "./style.css";

function KpiDashboard(props) {
  const [valor, setValor] = useState("0,00");
  const [carregando, setCarregando] = useState(true);
  
  const config = {
    headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` },
  };
 
  useEffect(() => {

    if (props.titulo === "Rendimento total") {
      setValor(getRendimentoTotal());
    } else if (props.titulo === "Quantidade de alunos") {
      setValor(getQuantidadeAlunos());
    } else if (props.titulo === "Quantidade de aulas") {
      setValor(getQuantidadeAulas());
    } else if (props.titulo === "Tempo de resposta") {
      setValor(getTempoResposta());
    }
  }, [props.periodo]);

  function getRendimentoTotal() {
    var periodo = "";

    switch (props.periodo) {
      case 0:
        periodo = "mes-atual";
        break;
      case 1:
        periodo = "ano-atual";
        break;
      default:
        periodo = "total";
        break;
    }

    var url = `/professores/dashboard/${periodo}/rendimento/${sessionStorage.ID}`;
    api.get(url, config).then((response) => {
      console.log(url);
      setCarregando(false);
      setValor("R$ " + response.data);
    });
  }

  function getQuantidadeAlunos() {
    var periodo = "";

    switch (props.periodo) {
      case 0:
        periodo = "mes-atual";
        break;
      case 1:
        periodo = "ano-atual";
        break;
      default:
        periodo = "total";
        break;
    }

    var url =
      `/professores/dashboard/${periodo}/qtd-alunos/${sessionStorage.ID}`;
    api.get(url, config).then((response) => {
      setCarregando(false);
      setValor(response.data);
    });
  }
  function getQuantidadeAulas() {
    let periodo = "";

    switch (props.periodo) {
      case 0:
        periodo = "mes-atual";
        break;
      case 1:
        periodo = "ano-atual";
        break;
      default:
        periodo = "total";
        break;
    }

    var url = `/professores/dashboard/${periodo}/qtd-aulas/${sessionStorage.ID}`;
    api.get(url, config).then((response) => {
      setCarregando(false);
      setValor(response.data);
    });
  }
  function getTempoResposta() {
    let periodo = "";

    switch (props.periodo) {
      case 0:
        periodo = "mes-atual";
        break;
      case 1:
        periodo = "ano-atual";
        break;
      default:
        periodo = "total";
        break;
    }

    let url = `/professores/dashboard/${periodo}/media-tempo-resposta/${sessionStorage.ID}`;
    api.get(url, config).then((response) => {
      if(response.data === 0){
        setValor("Sem dados");
        setCarregando(false);
        return;
      }

      let tempo = response.data;

      let horas = Math.floor(tempo / 60);
      let minutos = tempo % 60;
      let dias = Math.floor(horas / 24);

      horas = horas % 24;

      let texto = "";

      if (dias === 1) texto += " dia ";
      else if (dias > 0) texto += " dias ";

      if (horas === 1) texto += " hora ";
      else if (horas > 0) texto += " horas ";
      
      if (minutos === 1) texto += " minuto ";
      else if (minutos > 0) texto += " minutos ";

      setCarregando(false);
      setValor(texto);
    });
  }
  
  if (carregando) {
    return (
      <Card className="kpi-item">
        <CircularProgress style={{ color: "#16B364" }} />
      </Card>
    );
  } else {
    return (
      <Card className="kpi-item">
        <Typography className="kpi-titulo">{props.titulo}</Typography>
        <Typography className="kpi-valor" >{valor}</Typography>
      </Card>
    );
  }
}

export default KpiDashboard;

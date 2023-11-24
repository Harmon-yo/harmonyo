import React, { useEffect } from "react";
import Card from "../../../Global/Card/index.jsx";
import { CircularProgress, LinearProgress, Typography } from "@mui/material";
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
    if (props.periodo === 0) {
      periodo = "mes-atual";
    } else if (props.periodo === 1) {
      periodo = "ano-atual";
    } else{
      periodo = "total";
    }

    var url =
      `/professores/dashboard/${periodo}/rendimento/` + sessionStorage.ID;
    api.get(url, config).then((response) => {
      console.log(url);
      setCarregando(false);
      setValor("R$ " + response.data);
    });
  }
  function getQuantidadeAlunos() {
    var periodo = "";
    if (props.periodo === 0) {
      periodo = "mes-atual";
    } else if (props.periodo === 1) {
      periodo = "ano-atual";
    } else{
      periodo = "total";
    }

    var url =
      `/professores/dashboard/${periodo}/qtd-alunos/` + sessionStorage.ID;
    api.get(url, config).then((response) => {
      setCarregando(false);
      setValor(response.data);
    });
  }
  function getQuantidadeAulas() {
    var periodo = "";
    if (props.periodo === 0) {
      periodo = "mes-atual";
    } else if (props.periodo === 1) {
      periodo = "ano-atual";
    } else{
      periodo = "total";
    }
    var url =
      `/professores/dashboard/${periodo}/qtd-aulas/` + sessionStorage.ID;
    api.get(url, config).then((response) => {
      setCarregando(false);
      setValor(response.data);
    });
  }
  function getTempoResposta() {
    var periodo = "";
    if (props.periodo === 0) {
      periodo = "mes-atual";
    } else if (props.periodo === 1) {
      periodo = "ano-atual";
    } else{
      periodo = "total";
    }
    var url =
      `/professores/dashboard/${periodo}/media-tempo-resposta/` +
      sessionStorage.ID;
    api.get(url, config).then((response) => {
      if(response.data === 0){
        setValor("Sem dados");
        setCarregando(false);
        return;
      }
      var minutos = response.data;
      var horas = Math.floor(minutos / 60);
      var minutos = minutos % 60;
      var dias = Math.floor(horas / 24);
      var horas = horas % 24;
      var texto = "";
      if (dias > 0) {
        if (dias == 1) {
          texto += dias + " dia ";
        } else {
          texto += dias + " dias ";
        }
      }
      if (horas > 0) {
        if (horas == 1) {
          texto += horas + " hora ";
        } else {
          texto += horas + " horas ";
        }
      }
      if (minutos > 0) {
        if (minutos == 1) {
          texto += minutos + " minuto ";
        } else {
          texto += minutos + " minutos ";
        }
      }

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
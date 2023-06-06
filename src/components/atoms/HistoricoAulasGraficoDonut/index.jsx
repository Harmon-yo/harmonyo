import React from "react";
import api from "../../../api";
import { useEffect } from "react";
import Card from "../../atoms/Card/index.jsx";
import { Box, Typography } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import { useState } from "react";

function HistoricoAulasGraficoDonut() {
  const [aulasCanceladas, setAulasCanceladas] = useState(0);
  const [aulasRealizadas, setAulasRealizadas] = useState(0);
  const [aulasSolicitadas, setAulasSolicitadas] = useState(0);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    getDados();
  }, []);

  const config = {
    headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` },
  };

  function getDados() {
    api
      .get(
        "/professores/dashboard/grafico/aulas-realizadas-mes-atual/" +
          sessionStorage.ID,
        config
      )
      .then((response) => {
        setAulasRealizadas(response.data.aulasRealizadas);
        setAulasCanceladas(response.data.aulasCanceladas);
        setAulasSolicitadas(response.data.aulasSolicitadas);
        setCarregando(false);
      });
  }

  const chartDataDoughnut = {
    labels: ["Canceladas", "Realizadas", "Solicitadas"],
    datasets: [
      {
        label: "Quantidade de aulas",
        data: [aulasCanceladas, aulasRealizadas, aulasSolicitadas],
        backgroundColor: ["#DF3939", "#39DF73", "#0263FF"],
      },
    ],
  };

  const chartOptionsDoughnut = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "right",
      },
      title: {
        display: false,
      },
    },
  };

  if (carregando) return <div>Carregando...</div>;
  else {
    return (
      <Card className="chart-card">
        <Typography className="chart-title" variant="h5">
          Histórico de aulas
        </Typography>
        <Box className="chart-info-container">
          <Box className="chart-container">
            <Doughnut
              options={chartOptionsDoughnut}
              data={chartDataDoughnut}
              height="200px"
              width="200px"
            />
          </Box>
          <Box className="chart-container">
            <Typography className="chart-subtitle">
              Total de aulas solicitadas: {aulasSolicitadas}
            </Typography>
            <Typography className="chart-subtitle">
              Total de aulas canceladas: {aulasCanceladas}
            </Typography>
            <Typography className="chart-subtitle">
              Total de aulas realizadas: {aulasRealizadas}
            </Typography>
            <Typography className="chart-subtitle">
              Taxa de conversão: {aulasRealizadas / aulasSolicitadas * 100}%
            </Typography>
          </Box>
        </Box>
      </Card>
    );
  }
}

export default HistoricoAulasGraficoDonut;

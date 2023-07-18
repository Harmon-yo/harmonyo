import React from "react";
import api from "../../../../api";
import { useEffect } from "react";
import Card from "../../../Global/Card/index.jsx";
import { Box, CircularProgress, Typography } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import { useState } from "react";
import "./style.css";
import {
  Chart as ChartJS,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  Tooltip,
  BarElement,
  ArcElement,
} from "chart.js";
ChartJS.register(
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  ArcElement
);

function GraficoDonut() {
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
        cutout: "80%",
        hoverOffset: 4,
      },
    ],
  };

  const chartOptionsDoughnut = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
      title: {
        display: false,
      },
    },
  };

  if (carregando) {
    return (
      <Card className="chart-card">
        <Typography className="chart-title" variant="h5">
          Aulas nesse mês
        </Typography>
        <Box className="chart-info-container">
          <Box className="chart-container">
            <CircularProgress style={{ color: "#16B364" }} />
          </Box>
        </Box>
      </Card>
    );
  } else {
    return (
      <Card className="chart-card">
        <Typography className="chart-title" variant="h5">
          Aulas nesse mês
        </Typography>
        <Box className="chart-info-container">
          <Doughnut options={chartOptionsDoughnut} data={chartDataDoughnut} />
        </Box>
      </Card>
    );
  }
}

export default GraficoDonut;

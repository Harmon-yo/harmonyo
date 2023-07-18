import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Box, Typography } from "@mui/material";
import "./style.css";
import Card from "../../../Global/Card";
function GraficoBarraEmpilhada() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    plugins: {
      title: {
        display: false,
        text: "Chart.js Bar Chart - Stacked",
      },
      legends: {
        display: true,
      },
      pointStyle: "circle",
    },

    responsive: true,
    scales: {
      x: {
        grid: {
          display: false, // Configuração para ocultar as linhas verticais de grade no eixo x
        },
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const labels = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Aulas Canceladas",
        data: [15, 21, 4, 12, 19],
        backgroundColor: "#DF3939",
      },
      {
        label: "Aulas Recusadas",
        data: [2, 4, 0, 1, 7],
        backgroundColor: "rgb(75, 192, 192)",
      },
      {
        label: "Aulas Concluídas",
        data: [25, 19, 23, 15, 28],
        backgroundColor: "rgb(53, 162, 235)",
      },
    ],
  };

  return (
    <Card className="card-tabela">
    <Typography className="chart-title" variant="h5">
        Aulas por mês
      </Typography>
      <Bar options={options} data={data} />
    </Card>
  );
}
export default GraficoBarraEmpilhada;

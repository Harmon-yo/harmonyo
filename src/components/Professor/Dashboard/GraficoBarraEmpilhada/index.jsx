import React, { useState, useEffect } from "react";
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
import api from "../../../../api";

function GraficoBarraEmpilhada() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const [carregando, setCarregando] = useState(true);
  const [labels, setLabels] = useState([]);
  const [aulasCanceladasDados, setAulasCanceladasDados] = useState([]);
  const [aulasRecusadasDados, setAulasRecusadasDados] = useState([]);
  const [aulasConcluidasDados, setAulasConcluidasDados] = useState([]);

  useEffect(() => {
    getDados();
  }, []);

  const config = {
    headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` },
  };

  function getDados() {
    api
      .get(
        "/professores/dashboard/dados-aulas-anual/" + sessionStorage.ID,
        config
      )
      .then((response) => {
        let dadosResposta = response.data;

        const newLabels = dadosResposta.map((item) => item.mes);
        const newAulasConcluidas = dadosResposta.map((item) => item.aulasConcluidas);
        const newAulasCanceladas = dadosResposta.map((item) => item.aulasCanceladas);
        const newAulasRecusadas = dadosResposta.map((item) => item.aulasRecusadas);

        setLabels(newLabels);
        setAulasCanceladasDados(newAulasCanceladas);
        setAulasConcluidasDados(newAulasConcluidas);
        setAulasRecusadasDados(newAulasRecusadas);

        setCarregando(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Restante do código...
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
  const data = {
    labels,
    datasets: [
      {
        label: "Aulas Canceladas",
        data: aulasCanceladasDados,
        backgroundColor: "#DF3939",
      },
      {
        label: "Aulas Recusadas",
        data: aulasRecusadasDados,
        backgroundColor: "rgb(75, 192, 192)",
      },
      {
        label: "Aulas Concluídas",
        data: aulasConcluidasDados,
        backgroundColor: "rgb(53, 162, 235)",
      },
    ],
  };
  return (
    <Card className="card-tabela">
      <Typography className="chart-title" variant="h5">
        Aulas por mês
      </Typography>
      {carregando ? (
        <p>Carregando...</p>
      ) : (
        <Bar options={options} data={data} />
      )}
    </Card>
  );
}

export default GraficoBarraEmpilhada;
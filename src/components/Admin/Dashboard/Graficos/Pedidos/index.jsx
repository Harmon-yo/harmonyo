import { useEffect, useState } from "react";
import CardComTitulo from "../../CardComTitulo/index.jsx";

import {
    Box
} from "@mui/material";

import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

import api from "../../../../../api.js";
import "./style.css";

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
);

const requisicaoGet = (url) => {
    return api.get(url, { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } });
}

const options = {
    scales: {
        y: {
            type: 'linear',
            display: true,
            position: 'left',
        }
    },
    maintainAspectRatio: false,
    responsive: true
}

function Pedidos(props) {
    const [labels, setLabels] = useState(["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul"]);

    const data = {
        labels: labels,
        datasets: [
            {
                type: 'line',
                label: 'Aulas Realizadas',
                backgroundColor: 'rgb(54, 162, 235)',
                data: [1, 2, 3, 2, 5, 6, 7],
                tension: 0.4,
            },
            {
                type: 'line',
                label: 'Aulas Canceladas',
                backgroundColor: 'rgb(255, 99, 132)',
                data: [4, 5, 6, 3, 8, 9, 10],
                tension: 0.4,
            },
            {
                type: 'line',
                label: 'Aulas Recusadas',
                backgroundColor: 'rgb(255, 205, 86)',
                data: [7, 8, 9, 6, 11, 12, 13],
                tension: 0.4,
            },
            {
                type: 'line',
                label: 'Aulas Pendentes',
                backgroundColor: 'rgb(75, 192, 192)',
                data: [10, 11, 0, 13, 14, 15, 16],
                tension: 0.4,
            }
        ]
    }

    const dataComeco = props.dataComeco.format("YYYY-MM-DD");
    const dataFim = props.dataFim.format("YYYY-MM-DD");
    const diferencaMes = props.dataFim.diff(props.dataComeco, "month");

    const obterValoresGrafico = () => {
        const endpoints = [
            {
                metrica: "Rendimento dos meses",
                endpoint: diferencaMes > 0 ? `/professores/rendimento-meses-periodo?dataComeco=${dataComeco}&dataFim=${dataFim}` :
                    `/professores/rendimento-mes-periodo?dataComeco=${dataComeco}&dataFim=${dataFim}`
            },
            {
                metrica: "Aulas Realizadas",
                endpoint: diferencaMes > 0 ? `/pedidos/aulas-realizadas-meses-periodo?dataComeco=${dataComeco}&dataFim=${dataFim}` :
                    `/pedidos/aulas-realizadas-mes-periodo?dataComeco=${dataComeco}&dataFim=${dataFim}`
            },
            {
                metrica: "Usuários Cadastrados",
                endpoint: diferencaMes > 0 ? `/usuarios/quantidade-cadastrados-meses-periodo?dataComeco=${dataComeco}&dataFim=${dataFim}` :
                    `/usuarios/quantidade-cadastrados-mes-periodo?dataComeco=${dataComeco}&dataFim=${dataFim}`
            }
        ]

        console.log("Data começo: " + dataComeco);
        console.log("Data fim: " + dataFim);

        endpoints.forEach((endpoint) => {
            requisicaoGet(endpoint.endpoint).then((resposta) => {
                let resp = resposta.data;
                console.log("Resposta da métrica " + endpoint.metrica + ":");
                console.log(resp);

                switch (endpoint.metrica) {
                    case "Rendimento dos meses":

                        //setLtRendimentoProfessor(resp.map((rendimento) => rendimento.valor));
                        break;
                    case "Aulas Realizadas":
                        //setLtAulasRealizadas(resp.map((aulas) => aulas.valor));
                        break;
                    case "Usuários Cadastrados":
                        //setLtUsuariosCadastrados(resp.map((usuarios) => usuarios.valor));
                        break;
                    default:
                        break;
                }

                adicionarLabels(resp);
            }).catch((error) => {
                props.adicionaAviso({
                    mensagem: `Erro ao obter valores do gráfico`,
                    tipo: "erro"
                });
                console.log(error)
            });
        })
    }

    const adicionarLabels = (resp) => {
        let labelsToSet = [];

        if (labels.length === 0) {
            if (diferencaMes > 0) labelsToSet = resp.map((aulas) => aulas.mes);
        } else {
            let diasDiff = props.dataFim.diff(props.dataComeco, "day");
            for (let i = 0; i <= diasDiff; i++) labelsToSet.push(props.dataComeco.add(i, "day").format("DD/MM/YYYY"));
        }

        setLabels(labels);
    }

    useEffect(() => {
        obterValoresGrafico();
    }, [dataComeco, dataFim]);

    return (
        <CardComTitulo titulo="Pedidos" className="card-pedidos">
            <Box className="teste">
                <Chart type='bar' data={data} options={options} />
            </Box>
        </CardComTitulo>
    );
}

export default Pedidos;
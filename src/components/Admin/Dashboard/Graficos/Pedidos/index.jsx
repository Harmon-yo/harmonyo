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
    Filler
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

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
    BarController,
    Filler
);

const options = {
    scales: {
        y: {
            type: 'linear',
            display: true,
            position: 'left',
            beginAtZero: true,
        },

    },
    plugins: {
        legend: {
            display: true,
            position: 'top',
            align: 'end',
            labels: {
                usePointStyle: true
            }
        }
    },
    maintainAspectRatio: false,
    responsive: true
}

const criarDataset = (label, backColor, bordColor, data) => {
    return {
        type: 'line',
        label: label,
        backgroundColor: backColor,
        borderColor: bordColor,
        data: data,
        tension: 0.4,
        fill: '1'
    }
}

function Pedidos(props) {
    const valores = props.valores;

    const data = {
        labels: props.labelsHist,
        datasets: [
            criarDataset("Aulas Realizadas", 'rgb(75, 192, 192, 0.2)', 'rgb(75, 192, 192)', valores.aulasRealizadas),
            criarDataset("Aulas Confirmadas", 'rgb(255, 159, 64, 0.2)', 'rgb(255, 159, 64)', valores.aulasConfirmadas),
            criarDataset("Aulas Pendentes", 'rgb(255, 205, 86, 0.2)', 'rgb(255, 205, 86)', valores.aulasPendentes),
            criarDataset("Aulas Canceladas", 'rgb(255, 99, 132, 0.2)', 'rgb(255, 99, 132)', valores.aulasCanceladas),
            criarDataset("Aulas Recusadas", 'rgb(128, 47, 73, 0.2)', 'rgb(128, 47, 73)', valores.aulasRecusadas),
        ]
    }

    return (
        <CardComTitulo titulo="Pedidos" className="card-pedidos">
            <Box className="teste">
                <Chart type='bar' data={data} options={options} />
            </Box>
        </CardComTitulo>
    );
}

export default Pedidos;
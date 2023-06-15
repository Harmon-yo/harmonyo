import React from "react";

import {
    Chart as ChartJS,
    Legend,
    Title,
    CategoryScale,
    LinearScale,
    Tooltip,
    BarElement,
    ArcElement
} from "chart.js";
ChartJS.register(Legend, Title, CategoryScale, LinearScale, BarElement, Tooltip, ArcElement);


const chartDataBarraGeral = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [
        {
            id: 1,
            label: 'Canceladas',
            data: [15, 21, 4, 12, 19],
            barPercentage: 0.3,
            borderRadius: 2,
            fill: true,
            backgroundColor: '#DF3939',
        },
        {
            id: 2,
            label: 'Realizadas',
            data: [35, 67, 60, 87, 56],
            barPercentage: 0.3,
            borderRadius: 2,
            fill: true,
            backgroundColor: '#39DF73',
        },
        {
            id: 3,
            label: 'Solicitadas',
            data: [50, 88, 64, 99, 75],
            barPercentage: 0.3,
            borderRadius: 2,
            fill: true,
            backgroundColor: '#0263FF',
        },
    ],
}
const chartOptionsBarraGeral = {
    responsive: true,
    plugins: {
        legend: {
            position: 'right',
        },
        title: {
            display: false
        }
    },
    scales: {
        x: {
            stacked: true,
            grid: {
                display: false
            }
        }
    },
    interaction: {
        intersect: false,
        mode: 'index',
    }
}

function GraficoDois(props) {
    return (
        <div>
            <h1>GraficoDois</h1>
        </div>
    )
}

export default GraficoDois;
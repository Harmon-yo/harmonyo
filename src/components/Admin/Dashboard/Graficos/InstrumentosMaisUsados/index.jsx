import { useState } from "react";
import CardComTitulo from "../../CardComTitulo/index.jsx";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import "./style.css";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    scales: {
        y: {
            grid: {
                display: false,
                drawBorder: false,
                borderWidth: 0
    
            },
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
    }
  };

function IntrumentosMaisUsados(props) {

    const [labels, setLabels] = useState(["Violão", "Guitarra", "Baixo", "Bateria", "Teclado"]);

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Aulas',
                data: [12, 19, 3, 5, 2],
                backgroundColor: [
                    '#36A2EB'
                ],
                borderColor: [
                    '#36A2EB'
                ],
                borderRadius: 30,
                barThickness: 10,
            },
        ],
    };

    return (
        <CardComTitulo titulo="Instrumentos mais usados" className="card-instrumentos-mais-usados">
            <Bar options={options} data={data} />
        </CardComTitulo>
    )
}

export default IntrumentosMaisUsados;
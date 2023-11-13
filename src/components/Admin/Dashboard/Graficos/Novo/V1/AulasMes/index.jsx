import { useState, useEffect } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Card from '../../../../CardComTitulo/index.jsx';

import api from '../../../../../../../api.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    scales: {
        x: {
            grid: {
                display: false,
                drawBorder: false,
                borderWidth: 0

            },
        },
        y: {
            type: 'linear',
            display: true,
            position: 'left',
            min: 0
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
            grid: {
              drawOnChartArea: false,
            },
            min: 0
        }
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

const requisicaoGet = (url) => {
    return api.get(url, { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } });
}

function AulasMes(props) {
    const [aulasMes, setAulasMes] = useState([]);
    const [rendimentoMes, setRendimentoMes] = useState([]);
    const [labels, setLabels] = useState([]);

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Aulas por dia',
                data: aulasMes,
                fill: false,
                backgroundColor: 'rgb(54, 162, 235)',
                borderColor: 'rgba(54, 162, 235, 1)',
                pointRadius: 1.5,
                yAxisID: 'y',
            },
            {
                label: 'Rendimento por dia',
                data: rendimentoMes,
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 1)',
                pointRadius: 1.5,
                yAxisID: 'y1',
            },
    ]};
    useEffect(() => {
        requisicaoGet("/pedidos/quantidade-mes-por-dia")
            .then(resposta => {
                
                console.log("Recebi a resposta das aulas por dia: ")
                console.log(resposta.data)

                const dias = [];
                for (let i = 1; i <= resposta.data.length; i++) {
                    dias.push(i);
                }

                setLabels(dias);

                setAulasMes(resposta.data);
            })
            .catch(erro => {
                console.log(erro);
            });
        requisicaoGet("/pedidos/rendimento-mes-por-dia")
            .then(resposta => {

                console.log("Recebi a resposta do rendimento por dia: ")
                console.log(resposta.data)

                setRendimentoMes(resposta.data);
            })
            .catch(erro => {
                console.log(erro);
            });
    }, []);

    
    return (
        <Card titulo="Aulas e rendimento no mês">
            <Line data={data} options={options} />
        </Card>
    )

}

export default AulasMes;
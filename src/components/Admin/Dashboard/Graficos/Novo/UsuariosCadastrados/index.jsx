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
import Card from '../../../CardComTitulo/index.jsx';
import { Box, Typography } from '@mui/material';
import './style.css';


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
            grid: {
            }
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

const data = {
    labels: [...Array(30).keys()],
    datasets: [
        {
            label: 'Mês Atual',
            data: [...Array(30).keys()],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 1)',
            pointRadius: 1.5,
        },
        {
            label: 'Mês Anterior',
            data: [...Array(30).keys()].map((item) => item * 2),
            fill: false,
            backgroundColor: 'rgb(54, 162, 235)',
            borderColor: 'rgba(54, 162, 235, 1)',
            pointRadius: 1.5,

        }
    ]
}

function UsuariosCadastrados() {
    return (
        <Card className="card-cadastro-usuario" titulo="Usuários cadastrados">
            <Line data={data} options={options} />

            <Box className="cadastro-mensal-container">
                <Typography className="cadastro-mensal-valor">10</Typography>
                <Typography className="cadastro-mensal-titulo">Nos últimos 30 dias</Typography>
            </Box>
        </Card>
    );
}

export default UsuariosCadastrados;
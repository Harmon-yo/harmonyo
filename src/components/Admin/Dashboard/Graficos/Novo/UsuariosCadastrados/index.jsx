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
import { useEffect, useState } from 'react';
import api from '../../../../../../api.js';
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

const requisicaoGet = (url) => {
    return api.get(url, { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } });
}

function UsuariosCadastrados(props) {

    const [labels, setLabels] = useState([])
    const [quantidadeTotalUsuarios, setQuantidadeTotalUsuarios] = useState(0);
    const [usuariosMesAtual, setUsuariosMesAtual] = useState([]);
    const [usuariosMesAnterior, setUsuariosMesAnterior] = useState([]);

    const data = {labels: labels,
        datasets: [
            {
                label: 'Mês Anterior',
                data: usuariosMesAtual,
                fill: false,
                backgroundColor: 'rgb(54, 162, 235)',
                borderColor: 'rgba(54, 162, 235, 1)',
                pointRadius: 1.5,
    
            },
            {
                label: 'Mês Atual',
                data: usuariosMesAnterior,
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 1)',
                pointRadius: 1.5,
            },
    ]};

    useEffect(() => {
        requisicaoGet("/usuarios/quantidade-cadastrados-mes").then(
            (response) => {
                const valores = response.data;
                console.log("Usuários cadastrados no mês: ")
                console.log(valores);

                const dias = [];
                for (let i = 1; i <= valores.length; i++) {
                    dias.push(i);
                }

                setLabels(dias);
                setUsuariosMesAtual(valores);
                setQuantidadeTotalUsuarios(valores.reduce((a, b) => a + b, 0));
            }
        ).catch(() => {
            props.adicionaErro("Erro ao carregar usuários cadastrados no mês");
        });

        requisicaoGet("/usuarios/quantidade-cadastrados-mes-anterior").then(
            (response) => {
                const valores = response.data;
                console.log("Usuários cadastrados no mês anterior: ")
                console.log(valores);

                setUsuariosMesAnterior(valores);
            }
        ).catch(() => {
            props.adicionaErro("Erro ao carregar usuários cadastrados no mês anterior");
        });

    }, []);


    return (
        <Card className="card-cadastro-usuario" titulo="Usuários cadastrados">
            <Line data={data} options={options} />

            <Box className="cadastro-mensal-container">
                <Typography className="cadastro-mensal-valor">{quantidadeTotalUsuarios}</Typography>
                <Typography className="cadastro-mensal-titulo">Usuários cadastrados nesse mês</Typography>
            </Box>
        </Card>
    );
}


export default UsuariosCadastrados;
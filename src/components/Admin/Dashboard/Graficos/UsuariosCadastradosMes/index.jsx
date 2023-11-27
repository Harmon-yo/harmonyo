import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Card from '../../CardComTitulo/index.jsx';
import { useEffect, useState } from 'react';
import api from '../../../../../api.js';
import './style.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
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
            beginAtZero: true,
        }
    },
    responsive: true,
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

const obterDados = async (dataInicial, dataFinal, adicionaAviso) => {
    const params = `dataInicial=${dataInicial}&dataFinal=${dataFinal}`;
    const endpoints = [
        // 
        `/usuarios/quantidade-cadastrados-hist?${params}&tipo=Aluno`,
        `/usuarios/quantidade-cadastrados-hist?${params}&tipo=Professor`
    ];

    const promessas = Promise.all(endpoints.map((endpoint) => requisicaoGet(endpoint)));

    return await promessas
        .then(([alunos, professores]) => {
            return {
                alunos: alunos.data,
                professores: professores.data
            };
        }).catch((err) => {
            adicionaAviso({
                tipo: "erro",
                mensagem: "Erro ao obter dados dos usuários cadastrados"
            });
            console.log(err)
            return [{
                alunos: [],
                professores: []
            }];
        });
}

const criarDataset = (label, data, backColor, borderColor) => {
    return {
        label: label,
        data: data,
        fill: true,
        backgroundColor: backColor,
        borderColor: borderColor,
        pointRadius: 1.5,
        tension: 0.4,
    };
}

function UsuariosCadastrados(props) {
    const [alunosCadastrados, setAlunosCadastrados] = useState([]);
    const [professoresCadastrados, setProfessoresCadastrados] = useState([]);

    const adicionaAviso = props.adicionaAviso;
    const dataInicial = props.dataInicial.format("YYYY-MM-DD");
    const dataFinal = props.dataFinal.format("YYYY-MM-DD");

    const data = {
        labels: props.labelsHist,
        datasets: [
            criarDataset("Professores", professoresCadastrados, 'rgb(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 1)'),
            criarDataset("Alunos", alunosCadastrados, 'rgb(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 1)'),
        ]
    };

    useEffect(() => {
        obterDados(dataInicial, dataFinal, adicionaAviso)
            .then((valores) => {
                setAlunosCadastrados(valores.alunos);
                setProfessoresCadastrados(valores.professores);
            });
    }, [dataInicial, dataFinal]);

    return (
        <Card className="card-cadastro-usuario" titulo="Usuários cadastrados">
            <Line data={data} options={options} />
        </Card>
    );
}


export default UsuariosCadastrados;
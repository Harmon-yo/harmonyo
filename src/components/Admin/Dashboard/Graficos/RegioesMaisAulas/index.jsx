import { useState, useEffect } from "react";
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
import api from "../../../../../api.js";

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
    responsive: true,
    scales: {
        x: {
            ticks: {
                stepSize: 1
            }
        },
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

const requisicaoGet = (url) => {
    return api.get(url, { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } });
}

const obterDados = async (dataInicial, dataFinal, adicionaAviso) => {
    const params = `dataInicial=${dataInicial}&dataFinal=${dataFinal}`;
    const endpoints = [
        `/pedidos/regioes-mais-pedidos?${params}`,
    ];

    const promessas = Promise.all(endpoints.map(endpoint => requisicaoGet(endpoint)));

    return await promessas.then(([regioesMaisPedidosResponse]) => {
        const regioesMaisPedidos = regioesMaisPedidosResponse.data;

        const regioes = Object.keys(regioesMaisPedidos).map((regioes) => {
            return {
                regioes: regioes,
                quantidade: regioesMaisPedidos[regioes]
            }
        }).sort((a, b) => {
            return b.quantidade - a.quantidade;
        });

        return {
            regioesMaisPedidos: regioes.slice(0, 5),
        };

    }).catch((err) => {
        adicionaAviso({
            tipo: "erro",
            mensagem: `Erro ao obter as regiões com mais pedidos`,
        });

        console.log("Erro Regiões com mais pedidos: ")
        console.log(err)

        return {
            regioesMaisPedidos: [],
        };
    });
}

function RegioesMaisAulas(props) {

    const [labels, setLabels] = useState([]);
    const [valores, setValores] = useState([]);
    
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Pedidos',
                data: valores,
                backgroundColor: '#36A2EB',
                borderColor: '#36A2EB',
                borderRadius: 30,
                barThickness: 10,
            },
        ],
    };

    const dataInicial = props.dataInicial.format("YYYY-MM-DD");
    const dataFinal = props.dataFinal.format("YYYY-MM-DD");
    const adicionaAviso = props.adicionaAviso;

    useEffect(() => {
        obterDados(dataInicial, dataFinal, adicionaAviso)
            .then((res) => {
                setLabels(res.regioesMaisPedidos.map((regiao) => regiao.regioes));
                setValores(res.regioesMaisPedidos.map((regiao) => regiao.quantidade));
            });

    }, [dataInicial, dataFinal]);

    return (
        <CardComTitulo titulo="Regiões com mais aulas" className="card-regioes-mais-aulas">
            <Bar options={options} data={data} />
        </CardComTitulo>
    )
}

export default RegioesMaisAulas;
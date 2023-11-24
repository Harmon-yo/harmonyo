import { useEffect, useState } from "react";
import api from "../../../../../../api";
import "./style.css";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    BarElement
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Card from "../../../CardComTitulo/index.jsx";

ChartJS.register(
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    BarElement
);

const diasSemanaResumido = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"]
const diasSemanaTraduzido = {
    "Seg": "Segunda",
    "Ter": "Terça",
    "Qua": "Quarta",
    "Qui": "Quinta",
    "Sex": "Sexta",
    "Sab": "Sábado",
    "Dom": "Domingo"
}

const options = {
    responsive: true,
    scales: {
        x: {
            stacked: true,
            grid: {
                display: false, // Configuração para ocultar as linhas verticais de grade no eixo x
            },
        },
        y: {
            stacked: true,
            grid: {
                display: true, // Configuração para ocultar as linhas verticais de grade no eixo x
            },
        },
    },
    interaction: {
        intersect: true,
        mode: 'index',
    },

    plugins: {
        legend: {
            display: true,
            position: 'top',
            align: 'end',
            labels: {
                usePointStyle: true
            }
        },
        title: {
            display: false
        },
        tooltip: {
            callbacks: {
                title: (toolTipItem, data) => {
                    return diasSemanaTraduzido[toolTipItem[0].label]
                }
            }
        }
    },
    
};


const requisicaoGet = (url) => {
    return api.get(url, { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } });
}

const criarDataset = (label, data, cor) => {
    return {
        label: label,
        data: data,
        backgroundColor: cor,
        borderColor: cor,
        tension: 0.4,
        pointRadius: 0.3,
    }
};



function AulaSemana(props) {


    const [aulasRealizadas, setAulasRealizadas] = useState([]);
    const [aulasPendentes, setAulasPendentes] = useState([]);
    const [aulasCanceladas, setAulasCanceladas] = useState([]);

    const adicionaAviso = props.adicionaAviso;

    const data = {
        labels: diasSemanaResumido,
        datasets: [
            criarDataset("Canceladas", aulasCanceladas, "#FF6384"),
            criarDataset("Pendentes", aulasPendentes, "#FFCE56"),
            criarDataset("Realizadas", aulasRealizadas, "#00a65a"),
        ]
    };
    useEffect(() => {

        Promise.all([requisicaoGet("/pedidos/quantidade-realizadas-semana"),
        requisicaoGet("/pedidos/quantidade-pendentes-semana"),
        requisicaoGet("/pedidos/quantidade-canceladas-semana")]).then(
            ([responseRealizadas, responsepPendentes, responseCanceladas]) => {
                const realizadas = responseRealizadas.data;
                const pendentes = responsepPendentes.data;
                const canceladas = responseCanceladas.data;

                console.log("Aulas Realizadas na semana: ")
                console.log(realizadas);
                console.log("Aulas Pendentes na semana: ")
                console.log(pendentes);
                console.log("Aulas Canceladas na semana: ")
                console.log(canceladas);

                setAulasRealizadas(realizadas);
                setAulasPendentes(pendentes);
                setAulasCanceladas(canceladas);
            }
        ).catch((erro) => {
            console.log(erro)
            adicionaAviso({
                mensagem: "Erro ao carregar aulas da semana.",
                tipo: "erro"
            })
        });
    }, []);

    return (
        <Card className="card-quantidade-aulas" titulo="Quantidade de aulas">
            <Bar data={data} options={options} />
        </Card>
    );
}

export default AulaSemana;
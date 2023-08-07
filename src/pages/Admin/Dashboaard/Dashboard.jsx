import { useState, useEffect, useRef, createElement } from 'react';
import EstruturaPaginaUsuario from "../../../components/Global/EstruturaPaginaUsuario/Main/index.jsx";
import api from "../../../api.js";
import { verificarToken } from "../../../utils/index.js";
import Card from "../../../components/Global/Card/index.jsx";
import { Box, Typography } from "@mui/material";
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
import { Line, Bar } from "react-chartjs-2";
import Mapa from "./MapaBrasil/index.jsx";
import GraficoDoughnut from "./GraficoDoughnut/index.jsx";
import "./style.css";


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

const options = {
    responsive: true,
    scales: {
        x: {
            grid: {
                display: false, // Configuração para ocultar as linhas verticais de grade no eixo x
            },
        },
        y: {
            grid: {
                display: false, // Configuração para ocultar as linhas verticais de grade no eixo x
            },
        },
    },
    interaction: {
        intersect: true,
        mode: 'index',
    },
    plugins: {
        legend: {
            display: false
        },
        tooltip: {
            callbacks: {
                label: ((tootlTipItem) => {
                    console.log(tootlTipItem);
                    return `${tootlTipItem.dataset.label}: ${tootlTipItem.formattedValue}`;
                })
            }
        },
        title: {
            display: false
        }
    }
}


/* function obterMesesPassados() {
    let labels = [];
    const meses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ];

    const data = new Date();
    const mesAtual = data.getMonth();
    for (let i = 0; i <= mesAtual; i++) {
        labels.push(meses[i]);
    }

    return labels;
}

const labels = obterMesesPassados(); */


const labels = {
    usuario: ["Usuários", "Professor", "Aluno"]
};

const criarDataset = (label, data, cor) => {
    return {
        label: label,
        data: data,
        backgroundColor: cor,
        borderColor: cor,
        tension: 0.4,
        pointRadius: 0.3,
    }
}


const porcentagens = [
    {
        nome: "Usuários convertidos",
        valor: 6,
    }, {
        nome: "Professores convertidos",
        valor: 3,
    }, {
        nome: "Alunos convertidos",
        valor: 3,
    }
];



const datasets = {
    usuario: [
        criarDataset("Total", [10, 5, 5], "#1568"),
        criarDataset("Convertidos", [6, 3, 3], "#FF6384"),
    ],
    renda: [
        criarDataset("Renda", [0, 19, 3, 5, 2, 3], "#FF6384"),
    ],
    aulas: [
        criarDataset("Aulas", [0, 19, 3, 5, 2, 3], "#FF6384"),
    ],
    avaliacoes: {

    }
}

function DashboardAdmin(props) {
    const [erros, setErros] = useState([]);

    /* useEffect(() => {
        if (verificarToken()) {
            navigate(-1);
        }
    }, []); */
    const [metricas, setMetricas] = useState([
        {
            id: 1,
            nome: "Usuários",
            nomeGrafico: "usuario",
            valor: 0
        },
        {
            id: 2,
            nome: "Renda",
            nomeGrafico: "renda",
            valor: 0,
        },
        {
            id: 3,
            nome: "Aulas",
            nomeGrafico: "aulas",
            valor: 0,
        },
        {
            id: 4,
            nome: "Avaliações",
            nomeGrafico: "avaliacoes",
            valor: 0,
        }
    ]);
    const [metricaAtiva, setMetricaAtiva] = useState(metricas[0].id);
    const [data, setData] = useState({
        labels: labels[metricas[0].nomeGrafico],
        datasets: datasets.usuario
    });

    const handleClickMetrica = (id) => {
        setMetricaAtiva(id);
        setData({
            labels: labels,
            datasets: datasets[metricas.find(metrica => metrica.id === id).nomeGrafico]
        });
    };

    const toggleActiveStyles = (id) => {
        if (id === metricaAtiva) {
            return "metrica-container selecionado";
        } else {
            return "metrica-container";
        }
    };

    return (
        <EstruturaPaginaUsuario tela="dashboard-admin" errosState={{ erros, setErros }}>
            <Box className="pagina-container">
                <Box className="metricas-container">
                    {
                        metricas.map((metrica) =>
                            <Card key={metrica.id} className={toggleActiveStyles(metrica.id)} onClick={() => handleClickMetrica(metrica.id)}>
                                <Typography className="metrica-titulo" >{metrica.nome}</Typography>
                                <Typography className="metrica-valor">{metrica.valor}</Typography>
                            </Card>)
                    }
                </Box>
                <Box className="informacoes-adicionais-container">
                    <Card className="card-grafico-container">
                        <Typography className="grafico-titulo">Informações adicionais</Typography>
                        <Box className="graficos-container"  >
                            <Box className="grafico-container">
                                <Bar options={options} data={data} />
                            </Box>
                            <Box>
                                Taxas
                                {
                                    porcentagens.map((porcentagem) =>
                                        <Box className="taxa-container">
                                            <Typography className="taxa-nome">{porcentagem.nome}</Typography>
                                            <Typography className="taxa-valor">{porcentagem.valor}</Typography>
                                        </Box>
                                    )
                                }
                            </Box>
                        </Box>
                    </Card>
                    {/* <Box className="metricas-adicionais-container">
                        <Card className="metrica-adicional-card">
                            <Typography className="metrica-titulo">Usuários convertidos</Typography>
                            <Typography className="metrica-valor">50%</Typography>
                        </Card>
                        <Card className="metrica-adicional-card">
                            <Typography className="metrica-titulo">professores convertidos</Typography>
                            <Typography className="metrica-valor">50%</Typography>
                        </Card>
                        <Card className="metrica-adicional-card">
                            <Typography className="metrica-titulo">Alunos convertidos</Typography>
                            <Typography className="metrica-valor">50%</Typography>
                        </Card>
                    </Box> */}
                    <Card className="card-grafico-doughnut-container">
                        <Typography className="grafico-titulo">Informações adicionais</Typography>
                        <GraficoDoughnut/>
                    </Card>
                </Box>
                <Box className="mapa-container">
                    <Card className="mapa-card">
                        <Typography className="metrica-titulo">Mapa</Typography>
                        <Mapa />
                    </Card>
                </Box>
            </Box>
        </EstruturaPaginaUsuario>
    );
}

export default DashboardAdmin; 
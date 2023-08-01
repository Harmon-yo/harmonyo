import { useState, useEffect } from 'react';
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
    LineElement
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./style.css";

ChartJS.register(
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
);

const options = {
    responsive: true,
    scales: {
        x: {
            grid: {
                display: false, // Configuração para ocultar as linhas verticais de grade no eixo x
            },
            stacked: true,
        },
        y: {
            grid: {
                display: false, // Configuração para ocultar as linhas verticais de grade no eixo x
            },
            stacked: true,
        },
    },
    interaction: {
        intersect: false,
        mode: 'index',
    },
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                usePointStyle: true,
                pointStyle: 'circle',
            }
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


function obterMesesPassados() {
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

const labels = obterMesesPassados();

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



const datasets = {
    usuario: [
        criarDataset("Usuários", [0, 19, 3, 5, 2, 3], "#1568"),
        criarDataset("Alunos", [0, 19, 3, 5, 2, 3], "#FF6384"),
        criarDataset("Professores", [0, 3, 20, 5, 1, 4], "#36A2EB"),
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

function DashboardProfessor(props) {
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
        labels: labels,
        datasets: datasets.usuario
    });

    const handleClickMetrica = (id) => {
        setMetricaAtiva(id);
        setData({
            labels: labels,
            datasets: datasets[metricas.find(metrica => metrica.id === id).nomeGrafico]
        });
    };

    useEffect(() => {
        console.log(data);
    }, [data]);

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
                        <Box className="grafico-container">
                            <Line options={options} data={data} />
                        </Box>
                    </Card>
                    <Card className="card-transacoes-container">

                    </Card>
                </Box>
            </Box>
        </EstruturaPaginaUsuario>
    );
}

export default DashboardProfessor; 
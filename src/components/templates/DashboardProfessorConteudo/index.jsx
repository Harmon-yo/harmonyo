import React from "react";
import {
    Box,
    Tabs,
    Tab,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip as TooltipMaterial,
} from "@mui/material";
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
import violaoIcon from "../../../imgs/violao.png";
import Card from "../../atoms/Card/index.jsx";
import { Bar, Doughnut } from "react-chartjs-2";
import "./style.css"
import KpiDashboard from "../../molecules/KpiDashboard";
import TabelaMinhasAulas from "../../atoms/TabelaMinhasAulas";
import HistoricoAulasGraficoDonut from "../../atoms/HistoricoAulasGraficoDonut";

ChartJS.register(Legend, Title, CategoryScale, LinearScale, BarElement, Tooltip, ArcElement);

const teste = [
    {
        titulo: "Rendimento total",
        valor: "R$ 600,0"
    },
    {
        titulo: "Quantidade de alunos",
        valor: "10"
    },
    {
        titulo: "Quantidade de aulas",
        valor: "5"
    },
    {
        titulo: "Tempo de resposta",
        valor: "1 hora"
    },
]

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

const chartDataDoughnut = {
    labels: ['Canceladas', 'Realizadas', 'Solicitadas'],
    datasets: [
        {
            label: "Quantidade de aulas",
            data: [19, 56, 75],
            backgroundColor: [
                '#DF3939',
                '#39DF73',
                '#0263FF',
            ],
        }
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

const chartOptionsDoughnut = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
            position: 'right',
        },
        title: {
            display: false
        }
    },
}

function criarInstrumento(img, nome, quantidade, valor) {
    let valorTotal = valor * quantidade;
    return { img, nome, quantidade, valorTotal };
}

const instrumentosEnsinados = [
    criarInstrumento(violaoIcon, "Violão", 3, 50),
    criarInstrumento(violaoIcon, "Violão", 2, 40),
    criarInstrumento(violaoIcon, "Violão", 2, 40),

]

function EncontrarProfessorConteudo(props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (evento, novoValor) => {
        setValue(novoValor)
    };

    function getTabProps(index) {
        return {
            id: `simple-tab-${index}`,
            className: "dashboard-professor-tabs-item",
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <Box className="pagina-container">
            <Tabs value={value} onChange={handleChange} aria-label="tabs" className="dashboard-professor-tabs" indicatorColor="secundary">
                <Tab label="Visão Mensal" {...getTabProps(0)} />
                <Tab label="Visão Geral" {...getTabProps(1)} />
            </Tabs>
            <Box className="kpi-container">
                  <KpiDashboard titulo="Rendimento total"/>
                <KpiDashboard titulo="Quantidade de alunos"/>
                <KpiDashboard titulo="Quantidade de aulas"/>
                <KpiDashboard titulo="Tempo de resposta"/>

            </Box>
            <Box className="charts-container">
                <HistoricoAulasGraficoDonut/>
               <TabelaMinhasAulas/>
            </Box>
        </Box>
    );
}

export default EncontrarProfessorConteudo;
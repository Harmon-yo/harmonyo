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
import {
    Box,
} from "@mui/material";

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
        title: {
            display: false
        }
    }
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
}

const tiposDeGrafico = [
    {
        id: 1,
        label: ["Usuários", "Professores", "Alunos"],
        datasets: [
            criarDataset("Total", [10, 5, 5], "#1568"),
            criarDataset("Convertidos", [6, 3, 3], "#FF6384"),
        ]
    }
]

function GraficoMensal(props) {
    const data = {
        labels: tiposDeGrafico.find(tipo => tipo.id === props.idSelecionado).label,
        datasets: tiposDeGrafico.find(tipo => tipo.id === props.idSelecionado).datasets
    }; 


    return (
        <Box className="grafico-container">
            <Bar data={data} options={options} />
        </Box>
    );
}

export default GraficoMensal;
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
import { Box } from "@mui/material";
import Card from "../../../../CardComTitulo/index.jsx";
import InformacaoAdicionalGrafico from "../../UsuariosCadastradosSemana/InformacaoAdicionalGrafico/index.jsx";
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
            display: true,
            position: 'top',
            align: 'end',
            labels: {
                usePointStyle: true
            }
        },
        title: {
            display: false
        }
    }
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
};

const data = {
    labels: ["Usuários", "Professores", "Alunos"],
    datasets: [
        criarDataset("Total", [10, 5, 5], "#1568"),
        criarDataset("Retidos", [6, 3, 3], "#FF6384"),
    ]
};

const porcentagens = [
    {
        nome: "Usuários retidos",
        valorTotal: 10,
        valor: 6,
    }, {
        nome: "Professores retidos",
        valorTotal: 5,
        valor: 3,
    }, {
        nome: "Alunos retidos",
        valorTotal: 5,
        valor: 3,
    }
];

function GraficoMensal(props) {


    return (
        <Card className="card-usuario-" titulo="Quantidade de usuários">
            <Bar data={data} options={options} />

            <Box className="taxas-container">
                {
                    porcentagens.map((porcentagem) =>
                        <InformacaoAdicionalGrafico nome={porcentagem.nome} valor={porcentagem.valor} valorTotal={porcentagem.valorTotal} />
                    )
                }
            </Box>

        </Card>

    );
}

export default GraficoMensal;
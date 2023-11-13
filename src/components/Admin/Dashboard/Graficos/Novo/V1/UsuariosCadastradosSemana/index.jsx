import { useState, useEffect } from "react";
import api from "../../../../../../../api.js";
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
import Card from "../../../../CardComTitulo/index.jsx";
import "./style.css";
import { Box } from "@mui/material";
import InformacaoAdicionalGrafico from "./InformacaoAdicionalGrafico/index.jsx";

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
            stacked: 10,
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


function UsuariosCadastradosSemana(props) {

    const [alunosCadastrados, setAlunosCadastrados] = useState([]);
    const [professoresCadastrados, setProfessoresCadastrados] = useState([]);

    const adicionaAviso = props.adicionaAviso;

    const data = {
        labels: diasSemanaResumido,
        datasets: [
            criarDataset("Alunos Cadastrados", alunosCadastrados, "#FF6384"),
            criarDataset("Professores Cadastrados", professoresCadastrados, "#36A2EB"),
            /* criarDataset("Alunos Cadastrados na semana passada", alunosCadastradados, "#FF6384"),
            criarDataset("Professores Cadastrados na semana passada", professoresCadastradados, "#36A2EB"), */
        ]
    };

    useEffect(() => {
        Promise.all([
            requisicaoGet("/alunos/quantidade-cadastrados-semana"),
            requisicaoGet("/professores/quantidade-cadastrados-semana"),
        ]).then(
            ([responseAlunos, responseProfessores]) => {
                const valoresResponseAlunos = responseAlunos.data;
                const valoresResponseProfessores = responseProfessores.data;

                console.log("Alunos cadastrados na semana: ")
                console.log(valoresResponseAlunos);
                console.log("Professores cadastrados na semana: ")
                console.log(valoresResponseProfessores);

                setAlunosCadastrados(valoresResponseAlunos);
                setProfessoresCadastrados(valoresResponseProfessores);
            }
        ).catch((err) => {
            adicionaAviso({
                mensagem: "Erro ao carregar usuários cadastrados na semana",
                tipo: "erro"
            });
        });
    }, []);


    const qtdTotalAlunosCadastrados = alunosCadastrados.reduce((a, b) => a + b, 0);
    const qtdTotalprofessoresCadastrados = professoresCadastrados.reduce((a, b) => a + b, 0);
    const qtdTotalUsuarios = qtdTotalAlunosCadastrados + qtdTotalprofessoresCadastrados;

    return (
        <Card className="card-cadastro-usuario-semana" titulo="Usuários cadastrados na semana">
            <Bar data={data} options={options}/>

            <Box className="informacao-adicional-container">
            <InformacaoAdicionalGrafico nome="Alunos cadastrados:" valor={qtdTotalAlunosCadastrados} valorTotal={qtdTotalUsuarios}/>
            <InformacaoAdicionalGrafico nome="Professores cadastrados:" valor={qtdTotalprofessoresCadastrados} valorTotal={qtdTotalUsuarios}/>
            </Box>
        </Card>
    );
}

export default UsuariosCadastradosSemana;
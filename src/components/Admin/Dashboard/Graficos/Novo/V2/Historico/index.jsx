import { useEffect, useState } from "react";
import CardComTitulo from "../../../CardComTitulo/index.jsx";
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import api from "../../../../../../api.js";

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
);

const requisicaoGet = (url) => {
    return api.get(url, { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } });
}

const options = {
    scales: {
        y: {
            type: 'linear',
            display: true,
            position: 'left',
        },
        y1: {
            type: 'linear',
            display: true,
            position: 'right',
            grid: {
                drawOnChartArea: false,
            },
        },
    }
}

function Historico(props) {
    const [ltUsuariosCadastrados, setLtUsuariosCadastrados] = useState();
    const [ltAulasRealizadas, setLtAulasRealizadas] = useState();
    const [ltRendimentoProfessor, setLtRendimentoProfessor] = useState();

    const [labels, setLabels] = useState([]);

    const data = {
        labels: labels,
        datasets: [
            {
                type: 'line',
                label: 'Usuários Cadastrados',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
                fill: false,
                data: ltUsuariosCadastrados,
                yAxisID: Math.max(ltUsuariosCadastrados) > 1000 ? 'y' : 'y1',
            },
            {
                type: 'bar',
                label: 'Aulas Realizadas',
                backgroundColor: 'rgb(54, 162, 235)',
                data: ltAulasRealizadas,
                yAxisID: Math.max(ltAulasRealizadas) > 1000 ? 'y' : 'y1',
            },
            {
                label: 'Rendimento Professor',
                data: ltRendimentoProfessor,
                yAxisID: Math.max(ltAulasRealizadas) > 1000 ? 'y1' : 'y',
            }
        ]
    }

    const dataComeco = props.dataComeco.format("YYYY-MM-DD");
    const dataFim = props.dataFim.format("YYYY-MM-DD");
    const diferencaMes = props.dataFim.diff(props.dataComeco, "month");

    const obterValoresGrafico = () => {
        setLtUsuariosCadastrados([]);
        setLtAulasRealizadas([]);
        setLtRendimentoProfessor([]);
        setLabels([]);

        const endpoints = [
            {
                metrica: "Rendimento dos meses",
                endpoint: diferencaMes > 0 ? `/professores/rendimento-meses-periodo?dataComeco=${dataComeco}&dataFim=${dataFim}` :
                    `/professores/rendimento-mes-periodo?dataComeco=${dataComeco}&dataFim=${dataFim}`
            },
            {
                metrica: "Aulas Realizadas",
                endpoint: diferencaMes > 0 ? `/pedidos/aulas-realizadas-meses-periodo?dataComeco=${dataComeco}&dataFim=${dataFim}` :
                    `/pedidos/aulas-realizadas-mes-periodo?dataComeco=${dataComeco}&dataFim=${dataFim}`
            },
            {
                metrica: "Usuários Cadastrados",
                endpoint: diferencaMes > 0 ? `/usuarios/quantidade-cadastrados-meses-periodo?dataComeco=${dataComeco}&dataFim=${dataFim}` :
                    `/usuarios/quantidade-cadastrados-mes-periodo?dataComeco=${dataComeco}&dataFim=${dataFim}`
            }
        ]
        console.log("Data começo: " + dataComeco);
        console.log("Data fim: " + dataFim);

        endpoints.forEach((endpoint) => {
            requisicaoGet(endpoint.endpoint).then((resposta) => {
                let resp = resposta.data;
                console.log("Resposta da métrica " + endpoint.metrica + ":");
                console.log(resp);
                switch (endpoint.metrica) {
                    case "Rendimento dos meses":
                        modificarDadosRendimento(resp);
                        break;
                    case "Aulas Realizadas":
                        modificarDadosAulasRealizadas(resp);
                        break;
                    case "Usuários Cadastrados":
                        modificarDadosUsuariosCadastrados(resp);
                        break;
                    default:
                        break;
                }


            }).catch((error) => {
                props.adicionaAviso({
                    mensagem: `Erro ao obter valores do gráfico`,
                    tipo: "erro"
                });
                console.log(error)
            });
        })
    }

    const modificarDadosRendimento = (resp) => {
        if (diferencaMes > 0) {
            setLtRendimentoProfessor(resp.map((rendimento) => rendimento.valor));
            setLabels(resp.map((rendimento) => rendimento.mes));
        } else {

            let labels = [];

            let diasDiff = props.dataFim.diff(props.dataComeco, "day");

            for (let i = 0; i <= diasDiff; i++) {
                labels.push(props.dataComeco.add(i, "day").format("DD/MM/YYYY"));
            }

            setLtRendimentoProfessor(resp);

            setLabels(labels);
        }
    }

    const modificarDadosAulasRealizadas = (resp) => {
        if (diferencaMes > 0) {
            setLtAulasRealizadas(resp.map((aulas) => aulas.valor));
            if (labels.length === 0) setLabels(resp.map((aulas) => aulas.mes));
        } else {

            if (labels.length === 0) {
                let labels = [];

                let diasDiff = props.dataFim.diff(props.dataComeco, "day");

                for (let i = 0; i <= diasDiff; i++) {
                    labels.push(props.dataComeco.add(i, "day").format("DD/MM/YYYY"));
                }

                setLabels(labels);
            }

            setLtAulasRealizadas(resp);
        }
    }

    const modificarDadosUsuariosCadastrados = (resp) => {
        if (diferencaMes > 0) {
            setLtUsuariosCadastrados(resp.map((usuarios) => usuarios.valor));
            if (labels.length == 0) setLabels(resp.map((usuarios) => usuarios.mes));
        } else {

            if (labels.length == 0) {
                let labels = [];

                let diasDiff = props.dataFim.diff(props.dataComeco, "day");

                for (let i = 0; i <= diasDiff; i++) {
                    labels.push(props.dataComeco.add(i, "day").format("DD/MM/YYYY"));
                }

                setLabels(labels);
            }


            setLtUsuariosCadastrados(resp);

        }
    }

    useEffect(() => {
        obterValoresGrafico();
    }, [dataComeco, dataFim]);

    return (
        <CardComTitulo titulo="Dashboard">
            <Chart type='bar' data={data} options={options} />
        </CardComTitulo>
    );
}

export default Historico;
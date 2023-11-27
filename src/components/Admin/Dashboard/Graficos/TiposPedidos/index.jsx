import CardComTitulo from "../../CardComTitulo/index.jsx";

import { Box } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import "./style.css";
import { useEffect, useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

var tipoValor = 0, tipoCor = "";

const options = {
    plugins: {
        legend: {
            display: true,
            position: 'top',
            align: 'end',
            labels: {
                usePointStyle: true
            }
        },
    },
    maintainAspectRatio: false,
    responsive: true,
    onHover: (event, chartElement) => {
        if (chartElement.length === 0) return;

        tipoValor = chartElement[0].element['$context'].raw;
        tipoCor = chartElement[0].element.options.backgroundColor;
    }
}

const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart, args, options) {
        const { ctx } = chart;

        if (tipoCor !== "" && chart.getDatasetMeta(0).data.length > 0) {
            ctx.save();
            ctx.font = 'bolder 30px Arial';
            ctx.fillStyle = tipoCor;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(`${tipoValor}`, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);
        }
    }
}


const obterValores = (valoresProps) => {
    const valores = [];

    for (let metrica in valoresProps) {
        valores.push(valoresProps[metrica].reduce((a, b) => a + b, 0));
    }

    return valores
}

const criarDataset = (label, data) => {
    const color = [
        'rgb(75, 192, 192)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(255, 99, 132)',
        'rgb(128, 47, 73)',
    ];

    return {
        label: label,
        data: data,
        backgroundColor: color,
        borderColor: color,
        cutout: '90%',
        borderRadius: 30,
        barThickness: 10,
    };
}

function TiposPedidos(props) {
    const labels = [
        "Concluídas",
        "Confirmadas",
        "Pendentes",
        "Canceladas",
        "Recusadas",
    ];

    const [valores, setValores] = useState([]);

    useEffect(() => {
        setValores(obterValores(props.valores));
    }, [props.valores]);

    useEffect(() => {
        tipoValor = 0;
        tipoCor = "";
    }, [valores]);

    const data = {
        labels: labels,
        datasets: [
            criarDataset("Pedidos", valores)
        ]
    }


    return (
        <CardComTitulo titulo="Pedidos" className="card-tipos-pedidos">
            <Box className="teste">
                <Doughnut
                    options={options}
                    data={data}
                    plugins={[textCenter]}
                />
            </Box>
        </CardComTitulo>
    );
}

export default TiposPedidos;
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
    TableRow
} from "@mui/material";
import {
    Chart as ChartJS,
    Legend,
    Title,
    CategoryScale,
    LinearScale,
    BarElement
} from "chart.js";
import violaoIcon from "../../../imgs/violao.png";
import { Bar } from "react-chartjs-2";
import "./style.css"

ChartJS.register(Legend, Title, CategoryScale, LinearScale, BarElement);

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

const chartData = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [
        {
            id: 1,
            label: 'Aulas realizadas',
            data: [12, 19, 3, 5, 2, 3],
            barPercentage: 0.2,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            fill: true,
            backgroundColor: 'rgb(48, 117, 221)',
            borderRadius: 2
        },
        {
            id: 2,
            label: 'Aulas solicitadas',
            data: [2, 3, 20, 5, 1, 4],
            barPercentage: 0.2,
            borderRadius: 2,
            fill: true,
            backgroundColor: 'rgb(0, 158, 164)',
        },
    ],
}

const chartData2 = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [
        {
            label: 'Aulas',
            data: [12, 19, 3, 5, 2, 3],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
        },
        {
            label: 'Aulas médias',
            data: [2, 3, 20, 5, 1, 4],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
        },
    ],
}

const chartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: true,
            position: 'right',
        },
        title: {
            display: false
        },
        tooltip: {
            enabled: true,
            intersect: false,
            mode: 'nearest',
            callbacks: {
                title: () => 'title',
                label: (item) => item.parsed + '%'
            }
        }
    },
    scales: {
        x: {
            grid: {
                display: false
            }
        }
    }
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
        <Box sx={{ width: "100%", height: "100%" }}>
            <Box className="dashboard-professor-tabs-container">
                <Tabs value={value} onChange={handleChange} aria-label="tabs" className="dashboard-professor-tabs">
                    <Tab label="Últimas 24 horas" {...getTabProps(0)} />
                    <Tab label="Últimas semanas" {...getTabProps(1)} />
                    <Tab label="Último mês" {...getTabProps(2)} />
                    <Tab label="Último ano" {...getTabProps(3)} />
                </Tabs>
            </Box>
            <Box className="dashboard-professor-kpi-container">
                {
                    teste.map(
                        (item, index) => (
                            <Box className="dashboard-professor-kpi">
                                <Typography className="dashboard-professor-kpi-titulo" variant="subtitle1">
                                    {item.titulo}
                                </Typography>
                                <Typography className="dashboard-professor-kpi-valor" variant="h5">
                                    {item.valor}
                                </Typography>
                            </Box>
                        )
                    )
                }
            </Box>
            <Box className="dashboard-professor-chart-container">
                <Box className="dashboard-professor-chart" >
                    <Typography className="dashboard-professor-chart-title" variant="h5">
                        Histórico de aulas
                    </Typography>
                    <Bar
                        options={chartOptions}
                        data={chartData}
                    />
                </Box>
                <Box className="dashboard-professor-chart">
                    <Typography className="dashboard-professor-chart-title" variant="h5">
                        Minhas aulas
                    </Typography>
                    <Box className="dashboard-professor-chart-instrumentos-container">
                        <TableContainer sx={{ width: '99%', maxHeight: " !important" }}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Instrumento</TableCell>
                                        <TableCell align="center">Quantidade Aulas</TableCell>
                                        <TableCell align="right">Rendimento total</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody >
                                    {
                                        instrumentosEnsinados.map(
                                            (item, index) => (
                                                <TableRow
                                                    key={index}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        <Box className="instrumentos-table-cell test">
                                                            <img src={item.img} alt="" className="dashboard-professor-chart-instrumentos-img" />
                                                            <Typography variant="subtitle1">
                                                                {item.nome}
                                                            </Typography>
                                                        </Box>
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        <Box className="instrumentos-table-cell">
                                                            <Typography variant="subtitle1">
                                                                {item.quantidade}
                                                            </Typography>
                                                        </Box>
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <Box className="instrumentos-table-cell">
                                                            <Typography variant="subtitle1">
                                                                R$ {item.valorTotal}
                                                            </Typography>
                                                        </Box>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Box className="teste">
                                    <Typography>
                                        Valor:
                                    </Typography>
                                    <Typography>
                                        90
                                    </Typography>
                                    <Typography>
                                        R$ 900,00
                                    </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default EncontrarProfessorConteudo;
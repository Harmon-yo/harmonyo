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
            <Tabs value={value} onChange={handleChange} aria-label="tabs" className="dashboard-professor-tabs">
                <Tab label="Visão Mensal" {...getTabProps(0)} />
                <Tab label="Visão Geral" {...getTabProps(1)} />
            </Tabs>
            <Box className="kpi-container">
                {
                    teste.map(
                        (item) => (
                            <Card className="kpi-item">
                                <Typography className="kpi-titulo" variant="subtitle1">
                                    {item.titulo}
                                </Typography>
                                <Typography className="kpi-valor" variant="h5">
                                    {item.valor}
                                </Typography>
                            </Card>
                        )
                    )
                }
            </Box>
            <Box className="charts-container">
                <Card className="chart-card" >
                    <Typography className="chart-title" variant="h5">
                        Histórico de aulas
                    </Typography>
                    <Box className="chart-info-container">
                        <Box className="chart-container">
                            <Doughnut
                                options={chartOptionsDoughnut}
                                data={chartDataDoughnut}
                                height="200px"
                                width="200px"
                            />
                        </Box>
                        <Box className="chart-container">
                            <Typography className="chart-subtitle" variant="subtitle1">
                                Total de aulas solicitadas: 75
                            </Typography>
                            <Typography className="chart-subtitle" variant="subtitle1">
                                Total de aulas canceladas: 19
                            </Typography>
                            <Typography className="chart-subtitle" variant="subtitle1">
                                Total de aulas realizadas: 56
                            </Typography>


                        </Box>
                    </Box>
                </Card>
                <Card className="instrumento-card">
                <Typography className="chart-title" variant="h5">
                    Minhas aulas
                </Typography>
                <Box className="chart-instrumentos-container">
                    <TableContainer sx={{ width: '99%', maxHeight: " !important" }}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Instrumento</TableCell>
                                    <TableCell align="center">Quantidade Aulas</TableCell>
                                    <TableCell align="center">Rendimento total</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody >
                                {
                                    instrumentosEnsinados.map(
                                        (item, index) => (
                                            <TableRow
                                                key={index}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row" align="center">
                                                    <TooltipMaterial title={item.nome} placement="right">
                                                        <img src={item.img} alt="" className="instrumentos-img" />
                                                    </TooltipMaterial>
                                                </TableCell>
                                                <TableCell align="center">
                                                    <Typography variant="subtitle1">
                                                        {item.quantidade}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell align="center">
                                                    <Typography variant="subtitle1">
                                                        R$ {item.valorTotal}
                                                    </Typography>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {/* <Box className="teste">
                            <Typography>
                                Valor:
                            </Typography>
                            <Typography>
                                90
                            </Typography>
                            <Typography>
                                R$ 900,00
                            </Typography>
                        </Box> */}
                </Box>
            </Card>
            </Box>
        </Box>
    );
}

export default EncontrarProfessorConteudo;
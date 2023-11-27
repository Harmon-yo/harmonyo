import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import EstruturaPaginaUsuario from "../../../components/Global/EstruturaPaginaUsuario/Main/index.jsx";
import Metricas from "../../../components/Admin/Dashboard/Graficos/Metricas/index.jsx";
import PedidosCont from "../../../components/Admin/Dashboard/Graficos/PedidosCont/index.jsx";
import UsuariosCadastrados from "../../../components/Admin/Dashboard/Graficos/UsuariosCadastradosMes/index.jsx";
import IntrumentosMaisUsados from "../../../components/Admin/Dashboard/Graficos/InstrumentosMaisUsados/index.jsx";
import RegioesMaisAulas from "../../../components/Admin/Dashboard/Graficos/RegioesMaisAulas/index.jsx";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import dayjs from 'dayjs';
import "dayjs/locale/pt-br"

import "./style.css";

const modificarNomeDia = (nome) => {
    switch (nome) {
        case "2ª":
            return "Seg";
        case "3ª":
            return "Ter";
        case "4ª":
            return "Qua";
        case "5ª":
            return "Qui";
        case "6ª":
            return "Sex";
        case "Sá":
            return "Sab";
        case "Do":
            return "Dom";
        default:
            return nome;
    }
}

const obterLabelData = (dataComeco, dataFim) => {
    let labels = [];

    const diferencaMeses = -(dataComeco.diff(dataFim, "month"));
    const diferencaDias = -(dataComeco.diff(dataFim, "day"));

    if (diferencaMeses >= 1) for (let i = 0; i <= diferencaMeses; i++) labels.push(dayjs(dataFim).subtract(i, "month").locale("pt-br").format("MMMM"));
    else for (let i = 0; i <= diferencaDias; i++) labels.push(dayjs(dataFim).subtract(i, "day").format("DD/MM"));

    return labels.reverse();
}


function Dashboard(props) {
    const [avisos, setAvisos] = useState([]);

    const adicionaAviso = (novoAviso) => setAvisos([...avisos, novoAviso]);

    const [dataInicial, setdataInicial] = useState(dayjs(new Date()).subtract(12, "month"));
    const [dataFinal, setdataFinal] = useState(dayjs(new Date()));

    const mudarDataInicial = (data) => setdataInicial(data);
    const mudarDataFinal = (data) => setdataFinal(data);

    const [labelsHist, setLabelsHist] = useState([]);

    useEffect(() => {
        setLabelsHist([]);

        setLabelsHist(obterLabelData(dataInicial, dataFinal));
    }, [dataInicial, dataFinal]);

    return (
        <EstruturaPaginaUsuario tela="dashboard" avisosState={{ avisos, setAvisos }}>
            <Box className="intervalo-tempo-container">
                <LocalizationProvider dateAdapter={AdapterDayjs} sx={{
                    height: "10% !important",
                }} adapterLocale="pt-br">
                    <DatePicker
                        minDate={dayjs(new Date()).subtract(12, "month")}
                        maxDate={dayjs(new Date())}
                        onChange={mudarDataInicial}
                        value={dataInicial}
                        slotProps={{
                            textField: {
                                size: 'small',
                            }
                        }}
                        dayOfWeekFormatter={
                            date => `${modificarNomeDia(date)}`
                        }
                    />
                </LocalizationProvider>

                <Typography>Até</Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs} sx={{
                    height: "10% !important",
                }} adapterLocale="pt-br">
                    <DatePicker
                        minDate={dataInicial}
                        maxDate={dayjs(new Date())}
                        onChange={mudarDataFinal}
                        value={dataFinal}
                        slotProps={{
                            textField: {
                                size: 'small',
                            }
                        }}
                        dayOfWeekFormatter={
                            date => `${modificarNomeDia(date)}`
                        }
                    />
                </LocalizationProvider>
            </Box>
            <Metricas dataInicial={dataInicial} dataFinal={dataFinal} adicionaAviso={adicionaAviso} />
            <PedidosCont dataInicial={dataInicial} dataFinal={dataFinal} adicionaAviso={adicionaAviso} labelsHist={labelsHist} />
            <Box className="container-instrumentos">
                <UsuariosCadastrados dataInicial={dataInicial} dataFinal={dataFinal} adicionaAviso={adicionaAviso} labelsHist={labelsHist} />
                <IntrumentosMaisUsados dataInicial={dataInicial} dataFinal={dataFinal} adicionaAviso={adicionaAviso} />
                <RegioesMaisAulas dataInicial={dataInicial} dataFinal={dataFinal} adicionaAviso={adicionaAviso} />
            </Box>
        </EstruturaPaginaUsuario>
    );
}

export default Dashboard;
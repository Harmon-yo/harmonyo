import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import EstruturaPaginaUsuario from "../../../components/Global/EstruturaPaginaUsuario/Main/index.jsx";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import "dayjs/locale/pt-br"

import Metricas from "../../../components/Admin/Dashboard/Graficos/Metricas/index.jsx";

import api from "../../../api.js";
import "./style.css";

const requisicaoGet = (url) => {
    return api.get(url, { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } });
}

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

function Dashboard(props) {
    const [avisos, setAvisos] = useState([]);

    const adicionaAviso = (avisos) => setAvisos([...avisos, avisos]);

    const [dataComeco, setDataComeco] = useState(dayjs(new Date()).subtract(12, "month"));
    const [dataFim, setDataFim] = useState(dayjs(new Date()));

    const mudarDataComeco = (data) => setDataComeco(data);
    const mudarDataFim = (data) => setDataFim(data);

    return (
        <EstruturaPaginaUsuario tela="dashboard" avisosState={{ avisos, setAvisos }}>
            <Box className="intervalo-tempo-container">
                <LocalizationProvider dateAdapter={AdapterDayjs} sx={{
                    height: "10% !important",
                }} adapterLocale="pt-br">
                    <DatePicker
                        minDate={dayjs(new Date()).subtract(12, "month")}
                        maxDate={dayjs(new Date())}
                        onChange={mudarDataComeco}
                        value={dataComeco}
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
                        minDate={dataComeco}
                        maxDate={dayjs(new Date())}
                        onChange={mudarDataFim}
                        value={dataFim}
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
            <Metricas dataComeco={dataComeco} dataFim={dataFim} adicionaAviso={adicionaAviso}/>
        </EstruturaPaginaUsuario>
    );
}

export default Dashboard;
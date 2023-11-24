import {
    Box,
    Typography
} from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import "dayjs/locale/pt-br"
import { useEffect } from "react";
var isSameOrAfter = require('dayjs/plugin/isSameOrAfter');
var isSameOrBefore = require('dayjs/plugin/isSameOrBefore');
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

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
    }
}

function EtapaUm(props) {
    const {
        handleClickDia,
        handleClickHorario
    } = props.handleClicks;


    const {
        diaEscolhido,
        horarioEscolhido
    } = props.diaEHoraEscolhidos;

    const diasIndisponiveis = props.diasIndisponiveis;

    const shouldDisableDate = (date) => {
        return diasIndisponiveis.some(diaIndisponivel => dayjs(date.$d).isSame(dayjs(diaIndisponivel.inicio)))
    }

    const shouldDisableTime = (time) => {
        return diasIndisponiveis.some(
            diaIndisponivel => {
                return diaEscolhido.isSame(dayjs(diaIndisponivel.inicio), "day") && (time.isSameOrAfter(dayjs(diaIndisponivel.inicio)) && time.isBefore(dayjs(diaIndisponivel.fim)))
            }
        )
    }

    const dataSemelhante = () => {
        return diaEscolhido.isSame(dayjs(), "day")
    }

    return (
        <>
            <Box className="item-pedido">
                <Typography className="item-valor">
                    Selecione um dia:
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs} sx={{
                    height: "10% !important",
                }} adapterLocale="pt-br">
                    <DatePicker
                        minDate={dayjs(new Date())}
                        maxDate={dayjs(new Date().setMonth(new Date().getMonth() + 1))}
                        onChange={handleClickDia}
                        value={diaEscolhido}
                        slotProps={{
                            textField: {
                                size: 'small',
                            }
                        }}
                        dayOfWeekFormatter={
                            date => `${modificarNomeDia(date)}`
                        }
                        shouldDisableDate={shouldDisableDate}
                    />
                </LocalizationProvider>
            </Box>
            <Box className="item-pedido">
                <Typography className="item-valor">
                    Selecione um horário:
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"pt-br"}>
                    <TimePicker
                        minTime={dayjs().hour(8).minute(0).second(0)}
                        maxTime={dayjs().hour(22).minute(0).second(0)}
                        defaultValue={dayjs()}
                        slotProps={{ textField: { size: 'small' } }}
                        onChange={handleClickHorario}
                        value={horarioEscolhido}
                        ampm={false}
                        shouldDisableTime={shouldDisableTime}
                        skipDisabled={true}
                        disablePast={dataSemelhante}
                    />
                </LocalizationProvider>
            </Box>
        </>
    );
}

export default EtapaUm;
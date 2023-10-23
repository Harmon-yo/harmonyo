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
        default:
            return nome;
    }
}

function EtapaUm(props) {
    const {
        handleClickDia,
        handleClickHorario
    } = props.handleClicks;

    const {
        diaEHoraEscolhidos,
        setDiaEHoraEscolhidos
    } = props.diaEHoraEscolhidosState;

    const {
        setErroHorario
    } = props.errorHorarioState;

    const diasIndisponiveis = props.diasIndisponiveis;

    const shouldDisableTime = (time) => {
        return diaEHoraEscolhidos.date() === dayjs().date() && diaEHoraEscolhidos.month() === dayjs().month() && time.hour() < dayjs().hour()
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
                        onChange={(dia) => {
                            handleClickDia(dia);
                        }}
                        value={diaEHoraEscolhidos}
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
            <Box className="item-pedido">
                <Typography className="item-valor">
                    Selecione um horário:
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"pt-br"}>
                    <TimePicker
                        minTime={dayjs().hour(8).minute(0).second(0)}
                        maxTime={dayjs().hour(22).minute(0).second(0)}
                        slotProps={{ textField: { size: 'small' } }}
                        onChange={(value) => {
                            handleClickHorario(value);
                        }}
                        value={diaEHoraEscolhidos}
                        ampm={false}
                        skipDisabled={true}
                        disablePast={false}
                        onError={() => {
                            setDiaEHoraEscolhidos(props.obterDataValida(diaEHoraEscolhidos));
                            setErroHorario(true);
                        }}
                        shouldDisableTime={shouldDisableTime}
                    />
                </LocalizationProvider>
            </Box>
        </>
    );
}

export default EtapaUm;
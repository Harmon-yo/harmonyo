import {
    Box,
    Typography
} from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';

function EtapaUm(props) {
    const {
        handleClickDia,
        handleClickHorario
    } = props.handleClicks;
    const {
        errors,
        helperText
    } = props.error;

    return (
        <>
            <Box className="item-pedido">
                <Typography className="item-valor">
                    Selecione um dia:
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs} sx={{
                    height: "10% !important",
                }}>
                    <DatePicker
                        minDate={dayjs(new Date())}
                        onChange={handleClickDia}
                        slotProps={{
                            textField: {
                                size: 'small',
                                error: errors.dia,
                                helperText: errors.dia ? helperText.dia : ""
                            }
                        }}
                    />
                </LocalizationProvider>
            </Box>
            <Box className="item-pedido">
                <Typography className="item-valor">
                    Selecione um horário:
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"en"}>
                    <TimePicker
                        minTime={dayjs(new Date().setHours(8))}
                        maxTime={dayjs(new Date().setHours(22, 0))}
                        defaultValue={dayjs(new Date())}
                        slotProps={{ textField: { size: 'small' } }}
                        onChange={handleClickHorario}
                        ampm={false}
                    />
                </LocalizationProvider>
            </Box>
        </>
    );
}

export default EtapaUm;
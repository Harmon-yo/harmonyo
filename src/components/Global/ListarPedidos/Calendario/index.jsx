import React from 'react';
import { CalendarMonthOutlined } from '@mui/icons-material';
import { Button, Popper, ClickAwayListener, Box, Typography } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

import "./style.css";

function Calendario(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    const [inicio, setInicio] = React.useState(null);
    const [fim, setFim] = React.useState(null);

    const aplicarFiltro = () => {
        if (inicio !== null && fim !== null && inicio <= fim) {
            let inicioFormatado = dayjs(inicio).format('YYYY-MM-DD');
            let fimFormatado = dayjs(fim).format('YYYY-MM-DD');
            props.filtroState.setFiltro({ ...props.filtroState.filtro, dataInicio: inicioFormatado, dataFim: fimFormatado });
            console.log(props.filtroState.filtro);
        } else {
            alert('Data de início deve ser menor ou igual a data de fim');
        }
    }

    return (
        <>
            <Button onClick={handleClick} className="button">
                <CalendarMonthOutlined sx={{color: 'black'}}/>
            </Button>
            <Popper className='calen-popper' id={id} open={open} anchorEl={anchorEl} placement="bottom">
                <ClickAwayListener onClickAway={handleClick}>
                    <Box className="calen-popup">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker', 'DatePicker']}>
                                <Box className="calen-popup-body">
                                    <Typography>Selecione o intevalo de dias:</Typography>
                                    <DatePicker className='calen-popup-item'
                                        label="Início"
                                        value={inicio}
                                        onChange={(newInicio) => setInicio(newInicio)}/>
                                    <DatePicker className='calen-popup-item'
                                        label="Fim"
                                        value={fim}
                                        onChange={(newFim) => setFim(newFim)}
                                    />
                                    <Button onClick={aplicarFiltro} className="button-submit">Aplicar</Button>
                                </Box>
                            </DemoContainer>
                        </LocalizationProvider>
                    </Box>
                </ClickAwayListener>
            </Popper>
        </>
    )
}

export default Calendario;
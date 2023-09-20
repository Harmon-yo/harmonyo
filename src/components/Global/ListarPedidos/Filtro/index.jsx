import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { Box, Button, Popper, Radio, Typography, ClickAwayListener } from "@mui/material";
import React from 'react';
import "./style.css";

function Filtro(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    const { filtro, setFiltro } = props.filtroState;

    const [state, setState] = React.useState({
        semFilto: true,
        pendente: false,
        confirmado: false,
        cancelado: false,
        recusado: false,
        concluido: false,
        aguardando: false,
    });

    const { semFilto, pendente, confirmado, cancelado, recusado, concluido, aguardando } = state;

    function aplicarfiltro(valor) {
        switch (valor) {
            case "Sem Filtro":
                setState({
                    semFilto: true,
                    pendente: false,
                    confirmado: false,
                    cancelado: false,
                    recusado: false,
                    concluido: false,
                    aguardando: false,
                });
                return valor;
            case "Pendente":
                setState({
                    semFilto: false,
                    pendente: true,
                    confirmado: false,
                    cancelado: false,
                    recusado: false,
                    concluido: false,
                    aguardando: false,
                });
                return valor;
            case "Confirmado":
                setState({
                    semFilto: false,
                    pendente: false,
                    confirmado: true,
                    cancelado: false,
                    recusado: false,
                    concluido: false,
                    aguardando: false,
                });
                return valor;
            case "Cancelado":
                setState({
                    semFilto: false,
                    pendente: false,
                    confirmado: false,
                    cancelado: true,
                    recusado: false,
                    concluido: false,
                    aguardando: false,
                });
                return valor;
            case "Recusado":
                setState({
                    semFilto: false,
                    pendente: false,
                    confirmado: false,
                    cancelado: false,
                    recusado: true,
                    concluido: false,
                    aguardando: false,
                });
                return valor;
            case "Concluído":
                setState({
                    semFilto: false,
                    pendente: false,
                    confirmado: false,
                    cancelado: false,
                    recusado: false,
                    concluido: true,
                    aguardando: false,
                });
                return valor;
            case "Aguardando":
                setState({
                    semFilto: false,
                    pendente: false,
                    confirmado: false,
                    cancelado: false,
                    recusado: false,
                    concluido: false,
                    aguardando: true,
                });
                return valor;
            default:
                break;
        }
        return valor;
    }

    return (
        <>
            <Box className="modal">
                <Button
                    className="button"
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <FilterAltOutlinedIcon sx={{ color: 'black' }} />
                </Button>
                <Popper className='popper' id={id} open={open} anchorEl={anchorEl} placement="bottom-start">
                    <ClickAwayListener onClickAway={handleClick} >
                        <Box className="popup">
                            <Box className="popup-item">
                                <Radio color="success" checked={semFilto}
                                    onChange={() => { setFiltro({ ...filtro, status: aplicarfiltro("Sem Filtro") }) }} />
                                <Typography className="popup-text">Sem Filtros</Typography>
                            </Box>
                            <Box className="popup-item">
                                <Radio color="success" checked={pendente}
                                    onChange={() => { setFiltro({ ...filtro, status: aplicarfiltro("Pendente") }) }} />
                                <Typography className="popup-text">Pendente</Typography>
                            </Box>
                            <Box className="popup-item">
                                <Radio color="success" checked={confirmado}
                                    onChange={() => { setFiltro({ ...filtro, status: aplicarfiltro("Confirmado") }) }} />
                                <Typography className="popup-text">Confirmado</Typography>
                            </Box>
                            <Box className="popup-item">
                                <Radio color="success" checked={cancelado}
                                    onChange={() => { setFiltro({ ...filtro, status: aplicarfiltro("Cancelado") }) }} />
                                <Typography className="popup-text">Cancelado</Typography>
                            </Box>
                            <Box className="popup-item">
                                <Radio color="success" checked={recusado}
                                    onChange={() => { setFiltro({ ...filtro, status: aplicarfiltro("Recusado") }) }} />
                                <Typography className="popup-text">Recusado</Typography>
                            </Box>
                            <Box className="popup-item">
                                <Radio color="success" checked={concluido}
                                    onChange={() => { setFiltro({ ...filtro, status: aplicarfiltro("Concluído") }) }} />
                                <Typography className="popup-text">Concluído</Typography>
                            </Box>
                            <Box className="popup-item">
                                <Radio color="success" checked={aguardando}
                                    onChange={() => { setFiltro({ ...filtro, status: aplicarfiltro("Aguardando") }) }} />
                                <Typography className="popup-text">Aguardando</Typography>
                            </Box>
                        </Box>
                    </ClickAwayListener>
                </Popper>
                {/* <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={() => { setFiltro({ ...filtro, status: aplicarfiltro("Sem Filtro") }) }}>
                        Sem Filtros
                    </MenuItem>
                    <MenuItem onClick={() => { setFiltro({ ...filtro, status: aplicarfiltro("Pendente") }) }}>
                        Pendente
                    </MenuItem>
                    <MenuItem onClick={() => { setFiltro({ ...filtro, status: aplicarfiltro("Confirmado") }) }}>
                        Confirmado
                    </MenuItem>
                    <MenuItem onClick={() => { setFiltro({ ...filtro, status: aplicarfiltro("Cancelado") }) }}>
                        Cancelado
                    </MenuItem>
                    <MenuItem onClick={() => { setFiltro({ ...filtro, status: aplicarfiltro("Recusado") }) }}>
                        Recusado
                    </MenuItem>
                    <MenuItem onClick={() => { setFiltro({ ...filtro, status: aplicarfiltro("Concluído") }) }}>
                        Concluído
                    </MenuItem>
                    <MenuItem onClick={() => { setFiltro({ ...filtro, status: aplicarfiltro("Aguardando Pagamento") }) }}>
                        Aguardando
                    </MenuItem>
                </Menu> */}
            </Box>
        </>
    );
}

export default Filtro;
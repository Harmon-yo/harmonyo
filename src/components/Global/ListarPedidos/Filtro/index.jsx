import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { Box, Button, Menu, MenuItem, colors } from "@mui/material";
import React from 'react';
import "./style.css";

function Filtro(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        
    };

    const {filtro, setFiltro} = props.filtroState;

    function aplicarfiltro(valor) {
        handleClose();
        return valor;
    }

    return (
        <>
            <Box>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <FilterAltOutlinedIcon sx={{ color: 'black'}} />
                </Button>
                <Menu
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
                </Menu>
            </Box>
        </>
    );
}

export default Filtro;
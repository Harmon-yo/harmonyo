import React from "react";
import "./style.css";
import { Box, Typography, Button, Modal } from "@mui/material";
import PianoIcon from '@mui/icons-material/Piano';
import ModalAula from "../ModalAula/index.jsx";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import api from "../../../../api";
import { ModalClose } from "@mui/joy";

function ItemAula(props) {

    const aula = {
        id: props.aulaState.id,
        instrumento: props.aulaState.instrumento,
        valor: props.aulaState.valorAula,
    };

    const instrumentos = props.instrumentoState;

    const [reloadPage, setReloadPage] = props.reloadState;

    const desativarAula = () => {
        api.put(`/aulas/desativar/${aula.id}`,
            { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } }).then((response) => {
                console.log(response.data);
                setReloadPage(!reloadPage);
            }).catch((err) => {
                console.log(err);
            });
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box className="item-aula">
            <Box className="box-button-deletar">
                <DeleteForeverIcon sx={{ color: 'darkred' }} onClick={handleOpen} />
            </Box>
            <Box className="item-conteudo">
                <PianoIcon sx={{ fontSize: 80 }} />
                <Typography className="instrumento">{aula.instrumento.nome}</Typography>
                <Typography className="preco">R${aula.valor.toFixed(2)}</Typography>
            </Box>
            {/* <Modal
                open={open}
                onClose={handleClose}
            >
                <Box className="modal-body">
                    <Typography className="modal-text">Tem certeza que deseja excluir sua aula?</Typography>
                    <Box>
                        <Button onClick={handleClose} className="modal-button-cancelar">Cancelar</Button>
                        <Button onClick={desativarAula} className="modal-button-deletar">Confimar</Button>
                    </Box>
                </Box>
                <ModalClose />
            </Modal> */}
            <ModalAula className="modal" aulaState={aula} instrumentoState={instrumentos} reloadState={{ reloadPage, setReloadPage }} />
        </Box>
    );
}

export default ItemAula;
import React from "react";
import "./style.css";
import { Box, Typography, Button, Modal } from "@mui/material";
import ModalAula from "../ModalAula/index.jsx";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import api from "../../../../api";
import { ModalClose, ModalDialog } from "@mui/joy";
import IconeInstrumento from "../../../Global/IconeInstrumento/index.jsx";

function ItemAula(props) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const aula = {
        id: props.aulaState.id,
        instrumento: props.aulaState.instrumento,
        valor: props.aulaState.valorAula,
    };

    const instrumentos = props.instrumentoState;

    const [reloadPage, setReloadPage] = props.reloadState;

    const desativarAula = () => {
        api.put(`/aulas/desativar/${aula.id}`, {},
            { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } }).then((response) => {
                setReloadPage(!reloadPage);
            }).catch((err) => {
                console.log(err);
            });
    }



    return (
        <>
            <Box className="item-aula">
                <Box className="box-button-deletar">
                    <DeleteForeverIcon sx={{ color: '#ff7272', cursor: 'pointer' }} onClick={handleOpen} />
                </Box>
                <Box className="item-conteudo">
                    <IconeInstrumento instrumentoState={aula.instrumento.nome} tamanhoIcone={"100px"}/>
                    <Typography className="instrumento">{aula.instrumento.nome}</Typography>
                    <Typography className="preco">R${aula.valor.toFixed(2)}</Typography>
                </Box>
                <ModalAula className="modal" aulaState={aula} instrumentoState={instrumentos} reloadState={{ reloadPage, setReloadPage }} />
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <ModalDialog className="modal-dialog">
                    <Box className="modal-body">
                        <Typography className="modal-text">Tem certeza que deseja excluir sua aula?</Typography>
                        <Box>
                            <Button onClick={handleClose} className="modal-button-cancelar">Cancelar</Button>
                            <Button onClick={desativarAula} className="modal-button-deletar">Confimar</Button>
                        </Box>
                    </Box>
                    <ModalClose onClick={handleClose} />
                </ModalDialog>
            </Modal>
        </>
    );
}

export default ItemAula;
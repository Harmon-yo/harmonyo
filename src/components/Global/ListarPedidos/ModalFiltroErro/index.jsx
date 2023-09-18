import React, { useState } from "react";
import "./style.css";
import { Box, Modal } from "@mui/material";

function ModalFiltroErro(props) {

    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let status = props.statusErro;

    return (
        <>
            <Box className="modal">
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className="modal-erro">
                        <Box className="erro"> Sem pedidos com o status "{status}"</Box>
                    </Box>
                </Modal>
            </Box>
        </>
    );
}

export default ModalFiltroErro;

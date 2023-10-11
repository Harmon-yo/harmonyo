import React from "react";
import "./style.css";
import FeedbackIcon from '@mui/icons-material/Feedback';
import { Box, Typography, Button, Modal, Stack } from "@mui/material";
import { ModalClose, ModalDialog } from "@mui/joy";



function ModalFila() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <ModalDialog className="modal">
                    <Box className="modal-box">
                        <FeedbackIcon className="modal-icon" sx={{fontSize: 100, color: '#29c760'}}/>
                        <Typography className="modal-text">
                            Esse Professor já tem uma aula marcada para esse dia e horário
                        </Typography>
                        <ModalClose onClick={handleClose} />
                    </Box>
                    <Box className="buttons">
                        <Button variant="contained" className="modal-button">Remarcar</Button>
                        <Button variant="contained" className="modal-button">Entrar na fila</Button>
                    </Box>
                </ModalDialog>
            </Modal>
        </>
    );
}

export default ModalFila;
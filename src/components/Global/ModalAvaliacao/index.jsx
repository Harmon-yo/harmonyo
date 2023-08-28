import React from "react";
import "./style.css";
import { Box, Avatar, Rating, Button, Modal, Typography, TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

function ModalAvaliacao(props) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [value, setValue] = React.useState(0);

    return (
        <Box className="modal">
            <Button className="modal-button-open" onClick={handleOpen}>Avaliar Aula</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="modal-avaliacao">
                    <Box className="modal-area">
                        <Box className="modal-head">
                            <Avatar sx={{ width: 90, height: 90 }}></Avatar>
                            <Box className="modal-usuario">
                                <Typography id="modal-modal-title" variant="h8" component="h2">Nome</Typography>
                                <Box className="avaliacao-usuario">
                                    <Rating
                                        value={value}
                                        precision={0.5}
                                        size="medium"
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}>
                                    </Rating>
                                    <Box className="avaliacao-numero">{value}</Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="modal-close">
                            <Button className="button-close" onClick={handleClose}>
                                <CloseIcon />
                            </Button>
                        </Box>
                    </Box>
                    <Box className="modal-body">
                        <Box className="box-text-input">
                            <TextField className="modal-text-input" autoFocus multiline rows={6} />
                        </Box>
                        <Button className="modal-button">Avaliar</Button>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
}

export default ModalAvaliacao;
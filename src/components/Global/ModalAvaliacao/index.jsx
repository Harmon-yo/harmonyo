import React from "react";
import "./style.css";
import { Box, Avatar, Rating, Button, Modal, Typography, TextField} from "@mui/material";

function ModalAvaliacao(props) {

    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return (
        <Box>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="modal-avaliacao">
                    <Avatar sx={{ width: 100, height: 100 }}></Avatar><Typography id="modal-modal-title" variant="h8" component="h2">
                        André Silva
                    </Typography>
                    <Rating value={5} readOnly></Rating>
                    <Box className="avaliacao-numero">0.0</Box>
                    
                    <TextField id="outlined-basic" variant="outlined" />

                    <Button variant="contained">Avaliar</Button>
                </Box>
            </Modal>
        </Box>
    );
}

export default ModalAvaliacao;
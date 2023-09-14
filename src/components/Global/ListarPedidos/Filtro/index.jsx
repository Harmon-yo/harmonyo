import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { Box, Button, Modal, Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@mui/material";
import React from 'react';
import "./style.css";

function Filtro(props) {

    const [open, setOpen] = React.useState(false);
    function handleOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    const [value, setValue] = React.useState(0);
    console.log(open)
    return (
        <>
            <Button className="modal-button-open" onClick={handleOpen}><FilterAltOutlinedIcon /></Button>
            <Modal open={open} >
                <Box className="modal-filtro">
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="1" control={<Radio />} label="Pendente" />
                            <FormControlLabel value="2" control={<Radio />} label="Confirmado" />
                            <FormControlLabel value="3" control={<Radio />} label="Cancelado" />
                            <FormControlLabel value="4" control={<Radio />} label="Recusado" />
                            <FormControlLabel value="5" control={<Radio />} label="Concluído" />
                            <FormControlLabel value="6" control={<Radio />} label="Aguardando Pagamento" />
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Modal>
        </>
    );
}

export default Filtro;
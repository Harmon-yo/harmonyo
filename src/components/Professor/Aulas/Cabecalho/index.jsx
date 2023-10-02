import React from "react";
import "./style.css";
import { Box, Typography } from "@mui/material";

function Cabecalho() {
    return (
        <Box className="cabecalho-titulo">
            <Typography className="titulo" variant="h6">Minhas Aulas</Typography>
        </Box>
    );
}

export default Cabecalho;
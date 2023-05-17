import React from "react";
import {
    Box
} from "@mui/material";
import "./style.css"

function EncontrarProfessorConteudo(props) {
    return (
        <Box className="pagina-principal-container">
                {props.children}
        </Box>
    );
}

export default EncontrarProfessorConteudo;
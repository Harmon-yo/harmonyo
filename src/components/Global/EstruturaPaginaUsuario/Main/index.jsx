import React, { useState } from "react";
import NavbarLateral from "../NavbarLateral/Main/index.jsx";
import ContainerUsuario from "../ContainerUsuario/index.jsx";
import { Box, Alert, IconButton } from "@mui/material";

import {
    Close as CloseIcon
} from '@mui/icons-material';
import "./style.css"

/* =================== Navbar ======================== */

function EstruturaPaginaUsuario(props) {
    const { erros, setErros } = props.errosState;
    return (
        <Box className="mui-root">
            <Box className="erro-container">
                {
                    erros.map((erro, index) => {
                        return (
                            <Alert
                                key={index}
                                severity="error"
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            setErros(erros.filter((_, i) => i !== index));
                                        }}
                                    >
                                        <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                }
                                sx={{
                                    zIndex: 1000,
                                }}
                            >
                                {erro}
                            </Alert>
                        );
                    })
                }
            </Box>
            <NavbarLateral opcoes={props.opcoesNavbar} />
            {/* <h1>Olá {sessionStorage.CATEGORIA}(a) {sessionStorage.NOME} - Encontrar Professores</h1> */}
            <Box className="pagina-padrao-container">
                <ContainerUsuario />
                {
                    props.children
                }
            </Box>
        </Box>
    );
}

export default EstruturaPaginaUsuario;
import React from "react";
import NavbarLateral from "../NavbarLateral/Main/index.jsx";
import ContainerUsuario from "../ContainerUsuario/index.jsx";
import { Box } from "@mui/material";
import "./style.css"

/* =================== Navbar ======================== */

function EstruturaPaginaUsuario(props) {
    return (
        <Box className="mui-root">
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
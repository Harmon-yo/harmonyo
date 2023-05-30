import React from "react";
import NavbarLateral from "../../organisms/NavbarLateral/index.jsx";
import ContainerUsuario from "../../organisms/ContainerUsuario/index.jsx";
import { Box } from "@mui/material";
import "./style.css"

/* =================== Navbar ======================== */

function PaginaPadraoUsuario(props) {
    return (
        <Box sx={{
            width: '100vw',
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
        }}>
            <NavbarLateral opcoes={props.opcoesNavbar}/>
            {/* <h1>Olá {sessionStorage.CATEGORIA}(a) {sessionStorage.NOME} - Encontrar Professores</h1> */}
            <Box sx={{
                backgroundColor: "#F5F4F7",
                width: '95vw',
                height: '100%',
            }}>
                <ContainerUsuario/>
                <Box className="pagina-padrao-container">
                    {
                        props.children
                    }
                </Box>
            </Box>
        </Box>
    );
}

export default PaginaPadraoUsuario;
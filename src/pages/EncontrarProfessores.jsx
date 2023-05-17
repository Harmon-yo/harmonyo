import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import NavbarLateral from "../components/organisms/NavbarLateral/index.jsx";
import ContainerUsuario from "../components/organisms/ContainerUsuario/index.jsx";
import EncontrarProfessorConteudo from "../components/organisms/EncontrarProfessorConteudo/index.jsx";


function EncontrarProfessor() {

    

    useEffect(() => {
        validarToken()
    },[])

    function validarToken() {
        /* let token = sessionStorage.TOKEN;
        
        if (token === null || token === "" || token.length < 186) {
            sessionStorage.TOKEN = ""
            window.location = "/login"
        } */
    }

    return (
        <Box sx={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
        }}>
            <NavbarLateral/>
            {/* <h1>Olá {sessionStorage.CATEGORIA}(a) {sessionStorage.NOME} - Encontrar Professores</h1> */}
            <Box sx={{
                backgroundColor: "#F5F4F7",
                width: '95vw',
            }}>
                <ContainerUsuario/>
                <EncontrarProfessorConteudo>
                    <h1>Olá teste(a) teste - Encontrar Professores</h1>
                </EncontrarProfessorConteudo>
            </Box>
        </Box>
    )
}

export default EncontrarProfessor;
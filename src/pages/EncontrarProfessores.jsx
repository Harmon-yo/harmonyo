import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import NavbarLateral from "../components/organisms/NavbarLateral/index.jsx";
import ContainerUsuario from "../components/organisms/ContainerUsuario/index.jsx";
import EncontrarProfessorConteudo from "../components/templates/EncontrarProfessorConteudo/index.jsx";
import PaginaPadraoUsuario from "../components/templates/PaginaPadraoUsuario/index.jsx";

/* ================= Navbar =================== */
import LupaImg from "../imgs/search.png";
import AgendaImg from "../imgs/calendar.png";
import PedidosImg from "../imgs/request.png";
import ChatImg from "../imgs/chat.png";
import FeedbacksImg from "../imgs/feedback.png";

const opcoesNavbar = [
    {
        titulo: "Encontrar",
        src: LupaImg,
        active: true,
    }, 
    {
        titulo: "Agenda",
        src: AgendaImg,
        active: false,
        href: "/agenda"
    }, 
    {
        titulo: "Pedidos",
        src: PedidosImg,
        active: false
    }, 
    {
        titulo: "Chat",
        src: ChatImg,
        active: false
    },
    {
        titulo: "Feedbacks",
        src: FeedbacksImg,
        active: false
    }
];

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
        <PaginaPadraoUsuario opcoesNavbar={opcoesNavbar}>
            <EncontrarProfessorConteudo/>
        </PaginaPadraoUsuario>
    )
}

export default EncontrarProfessor;
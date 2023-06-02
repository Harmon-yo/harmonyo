import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import NavbarLateral from "../components/organisms/NavbarLateral/index.jsx";
import ContainerUsuario from "../components/organisms/ContainerUsuario/index.jsx";
import EncontrarProfessorConteudo from "../components/templates/EncontrarProfessorConteudo/index.jsx";
import PaginaPadraoUsuario from "../components/templates/PaginaPadraoUsuario/index.jsx";

/* ================= Navbar =================== */
import ChatIcon from '@mui/icons-material/ChatBubbleOutline';
import SearchIcon from '@mui/icons-material/Search';
import FeedbackIcon from '@mui/icons-material/RateReviewOutlined';
import PedidosIcon from '@mui/icons-material/GradingOutlined';
import CalendarioIcon from '@mui/icons-material/CalendarTodayOutlined';
import LupaImg from "../imgs/search.png";
import AgendaImg from "../imgs/calendar.png";
import PedidosImg from "../imgs/request.png";
import ChatImg from "../imgs/chat.png";
import FeedbacksImg from "../imgs/feedback.png";

const opcoesNavbar = [
    {
        titulo: "Encontrar",
        icon: SearchIcon,
        active: true,
    }, 
    {
        titulo: "Agenda",
        icon: CalendarioIcon,
        active: false,
        href: "/agenda"
    }, 
    {
        titulo: "Pedidos",
        icon: PedidosIcon,
        active: false
    }, 
    {
        titulo: "Chat",
        icon: ChatIcon,
        active: false
    },
    {
        titulo: "Feedbacks",
        icon: FeedbackIcon,
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
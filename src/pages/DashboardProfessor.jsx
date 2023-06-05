import React, { useEffect, useState } from "react";
import PaginaPadraoUsuario from "../components/templates/PaginaPadraoUsuario";

/* ================= Navbar =================== */

import DashboardIcon from '@mui/icons-material/Dashboard';
import ChatIcon from '@mui/icons-material/ChatBubbleOutline';
import SearchIcon from '@mui/icons-material/Search';
import FeedbackIcon from '@mui/icons-material/RateReviewOutlined';
import PedidosIcon from '@mui/icons-material/GradingOutlined';
import CalendarioIcon from '@mui/icons-material/CalendarTodayOutlined';
import ClassIcon from '@mui/icons-material/Class';

/* ================= Conteúdo =================== */

import DashboardProfessorConteudo from "../components/templates/DashboardProfessorConteudo";


const opcoesNavbar = [
    {
        titulo: "Dashboard",
        icon: DashboardIcon,
        active: true,
    }, 
    {
        titulo: "Agenda",
        icon: CalendarioIcon,
        active: false,
        href: "/agenda"
    }, 
    {
        titulo: "Aulas",
        icon: ClassIcon,
        active: false
    }, 
    {
        titulo: "Chat",
        icon: ChatIcon,
        active: false
    },
    {
        titulo: "Pedidos",
        icon: PedidosIcon,
        active: false
    }
];
 
function DashboardProfessor() {

    useEffect(() => {
        validarToken()
    }, [])

    function validarToken() {

        /* let token = sessionStorage.TOKEN;
        
        if (token === null || token === "" || token.length < 186) {            
            sessionStorage.TOKEN = ""
            window.location = "/login"
        } */
    }

    return (

        <PaginaPadraoUsuario opcoesNavbar={opcoesNavbar}>
            {/* <>
            <h1>Olá {sessionStorage.CATEGORIA}(a) {sessionStorage.NOME} - Dashboard Professor</h1>
            </> */}
            <DashboardProfessorConteudo/>
        </PaginaPadraoUsuario>
    )
}

export default DashboardProfessor;
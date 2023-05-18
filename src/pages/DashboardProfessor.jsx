import React, { useEffect, useState } from "react";
import PaginaPadraoUsuario from "../components/templates/PaginaPadraoUsuario";
import DashboardImg from "../imgs/dashboard.png";
import AgendaImg from "../imgs/calendar.png";
import LupaImg from "../imgs/search.png";
import ChatImg from "../imgs/chat.png";
import PedidosImg from "../imgs/request.png";


const opcoesNavbar = [
    {
        titulo: "Dashboard",
        src: DashboardImg,
        active: true,
    }, 
    {
        titulo: "Agenda",
        src: AgendaImg,
        active: false,
        href: "/agenda"
    }, 
    {
        titulo: "Aulas",
        src: LupaImg,
        active: false
    }, 
    {
        titulo: "Chat",
        src: ChatImg,
        active: false
    },
    {
        titulo: "Pedidos",
        src: PedidosImg,
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
        </PaginaPadraoUsuario>
    )
}

export default DashboardProfessor;
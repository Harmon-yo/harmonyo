import React from "react";
import {
    useState
} from "react";
import "./style.css"
import {
    Box,
    Link
} from "@mui/material";
import Logo from "../../atoms/Logo/index.jsx";
import NavbarLateralCard from "../../molecules/NavbarLateralCard/index.jsx";
import LupaImg from "../../../imgs/search.png";
import AgendaImg from "../../../imgs/calendar.png";
import PedidosImg from "../../../imgs/request.png";
import ChatImg from "../../../imgs/chat.png";
import FeedbacksImg from "../../../imgs/feedback.png";


const cardsNavbar = [
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
]

function NavbarLateral(props) {
    const [active, setActive] = React.useState(false);
    return (
        <Box className="navbar-lateral-background">
            <Box className="navbar-lateral"
            onMouseEnter={() => setTimeout(() => setActive(true), 50)}
            onMouseLeave={() => setTimeout(() => setActive(false), 150)}>
                <a href="/" className="navbar-lateral-logo-container">
                    <Logo icon height="100%" className={`navbar-lateral-logo ${active ? "hidden" : ""}`} />
                    <Logo width="200px" className={`navbar-lateral-logo ${!active ? "hidden" : ""}`}/>
                </a>

                <Box className="navbar-lateral-cards">
                    {
                        cardsNavbar.map((card) => (
                            <NavbarLateralCard href={card.href} titulo={card.titulo} src={card.src} active={card.active} hover={active}/>
                        ))
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default NavbarLateral;
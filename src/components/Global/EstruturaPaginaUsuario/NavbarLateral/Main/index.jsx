import React from "react";
import "./style.css"
import {
    Box
} from "@mui/material";
import Logo from "../../../Logo/index.jsx";
import NavbarLateralCard from "../NavbarLateralCard/index.jsx";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChatIcon from '@mui/icons-material/ChatBubbleOutline';
import SearchIcon from '@mui/icons-material/Search';
import FeedbackIcon from '@mui/icons-material/RateReviewOutlined';
import PedidosIcon from '@mui/icons-material/GradingOutlined';
import CalendarioIcon from '@mui/icons-material/CalendarTodayOutlined';
import ClassIcon from '@mui/icons-material/Class';


function NavbarLateral(props) {
    const [active, setActive] = React.useState(false);
    var tipoUsuario = sessionStorage.getItem("CATEGORIA").toLocaleLowerCase();
    const opcoesNavbarProfessor = [
        {
            titulo: "Dashboard",
            icon: DashboardIcon,
            active: props.tela === "dashboard" ? true : false,
            href: `/${tipoUsuario}/dashboard`
        },
        {
            titulo: "Agenda",
            icon: CalendarioIcon,
            active: props.tela === "agenda" ? true : false,
            href: `/agenda`
        },
        {
            titulo: "Aulas",
            icon: ClassIcon,
            active: props.tela === "aulas" ? true : false,
            href: `/${tipoUsuario}/aulas`
        },
        {
            titulo: "Chat",
            icon: ChatIcon,
            active: props.tela === "chat" ? true : false,
            href: `/chat`
        },
        {
            titulo: "Pedidos",
            icon: PedidosIcon,
            active: props.tela === "pedidos" ? true : false,
            href: `/pedidos`
        }
    ];

    const opcoesNavbarAluno = [
    {
        titulo: "Encontrar",
        icon: SearchIcon,
        active: props.tela === "encontrar" ? true : false,
        href: `/${tipoUsuario}/encontrar-professor`
    },
    {
        titulo: "Agenda",
        icon: CalendarioIcon,
        active: props.tela === "agenda" ? true : false,
        href: `/${tipoUsuario}/agenda`
    },
    {
        titulo: "Pedidos",
        icon: PedidosIcon,
        active: props.tela === "pedidos" ? true : false,
        href: `/pedidos`
    },
    {
        titulo: "Chat",
        icon: ChatIcon,
        active: props.tela === "chat" ? true : false,
        href: `/chat`
    },
    {
        titulo: "Feedbacks",
        icon: FeedbackIcon,
        active: props.tela === "feedbacks" ? true : false,
        href: `/feedbacks`
    }
];
    

    return (
        <Box className="navbar-lateral-background">
            <Box className="navbar-lateral"
                onMouseEnter={() => setTimeout(() => setActive(true), 50)}
                onMouseLeave={() => setTimeout(() => setActive(false), 150)}>
                <a href="/" className="navbar-lateral-logo-container">
                    <Logo icon white height="40px" className={`navbar-lateral-logo ${active ? "hidden" : ""}`} />
                    <Logo white width="200px" className={`navbar-lateral-logo ${!active ? "hidden" : ""}`} />
                </a>

                <Box className="navbar-lateral-cards">
                    { 
                        sessionStorage.getItem("CATEGORIA") === "Aluno" 
                        ?
                       opcoesNavbarAluno.map((card) => (
                            <NavbarLateralCard href={card.href} titulo={card.titulo} icon={card.icon} active={card.active} hover={active} />
                        )) 
                        :
                        opcoesNavbarProfessor.map((card) => (
                            <NavbarLateralCard href={card.href} titulo={card.titulo} icon={card.icon} active={card.active} hover={active} />
                        ))
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default NavbarLateral;
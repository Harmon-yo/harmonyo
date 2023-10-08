import React from "react";
import "./style.css"
import {
    Box, Button
} from "@mui/material";
import Logo from "../../../Logo/index.jsx";
import {
    Dashboard as DashboardIcon,
    ChatBubbleOutline as ChatIcon,
    Search as SearchIcon,
    RateReviewOutlined as FeedbackIcon,
    GradingOutlined as PedidosIcon,
    CalendarTodayOutlined as CalendarioIcon,
    Class as ClassIcon,
    DriveFileMove as ExportIcon
} from "@mui/icons-material";
import NavbarLateralCard from "../NavbarLateralCard/index.jsx";
import api from "../../../../../api"


function NavbarLateral(props) {
    const [active, setActive] = React.useState(false);
    const tipoUsuario =  sessionStorage.getItem("CATEGORIA").toLocaleLowerCase();

    function downloadCSV() {
        fetch('http://localhost:8080/professores/download-csv', {
            method: 'GET',
            responseType: 'blob',
            headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` }
          })
        .then((response) => {
          return response.blob();
        })
        .then((blob) => {
          const url = window.URL.createObjectURL(blob);
          
          const a = document.createElement('a');
          a.href = url;
          a.download = 'data.csv';
          
          a.click();
    
          window.URL.revokeObjectURL(url);
        })
        .catch((error) => {
          console.error('Erro:', error);
        });
}


    const opcoesNavbar = {
        professor: [
            {
                titulo: "Dashboard",
                icon: DashboardIcon,
                active: props.tela === "dashboard" ? true : false,
                href: `/dashboard-professor`
            },
            {
                titulo: "Agenda",
                icon: CalendarioIcon,
                active: props.tela === "agenda" ? true : false,
                href: `/agenda`
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
                titulo: "Aulas",
                icon: ClassIcon,
                active: props.tela === "aulas" ? true : false,
                href: `/aulas`
            }
        ],
        aluno: [
            {
                titulo: "Encontrar",
                icon: SearchIcon,
                active: props.tela === "encontrar" ? true : false,
                href: `/encontrar-professor`
            },
            {
                titulo: "Agenda",
                icon: CalendarioIcon,
                active: props.tela === "agenda" ? true : false,
                href: `/agenda`
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
        ],
        administrador: [
            {
                titulo: "Dashboard",
                icon: DashboardIcon,
                active: props.tela === "dashboard" ? true : false,
                href: `/dashboard-administrador`
            }
        ]
    }

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
                        opcoesNavbar[tipoUsuario].map((card) => (
                            <NavbarLateralCard key={`opcao-navbar-${card.titulo}`} href={card.href} titulo={card.titulo} icon={card.icon} active={card.active} hover={active} />
                        ))
                    }
                    {
                        tipoUsuario === "administrador" ? <Button onClick={downloadCSV} color="primary" className="button-export"> <ExportIcon className={`export-logo `} /> <h4 className={`export-logo ${!active ? "hidden" : ""}`} > Exportação dados prof.</h4> </Button> : ""
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default NavbarLateral;
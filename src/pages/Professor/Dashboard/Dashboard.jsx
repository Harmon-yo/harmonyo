import React, { useEffect, useState } from "react";
import "./style.css";
import {
    Box,
    Tabs,
    Tab,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip,
} from "@mui/material";

/* ================= Navbar =================== */

import DashboardIcon from '@mui/icons-material/Dashboard';
import ChatIcon from '@mui/icons-material/ChatBubbleOutline';
import SearchIcon from '@mui/icons-material/Search';
import FeedbackIcon from '@mui/icons-material/RateReviewOutlined';
import PedidosIcon from '@mui/icons-material/GradingOutlined';
import CalendarioIcon from '@mui/icons-material/CalendarTodayOutlined';
import ClassIcon from '@mui/icons-material/Class';

/* ================= Icone ==================== */

import violaoIcon from "../../../imgs/violao.png";


/* ================= Componentes =================== */

import EstruturaPaginaUsuario from "../../../components/Global/EstruturaPaginaUsuario/Main/index.jsx";
import KpiDashboard from "../../../components/Professor/Dashboard/KpiDashboard/index.jsx";
import TabelaMinhasAulas from "../../../components/Professor/Dashboard/TabelaMinhasAulas/index.jsx";
import HistoricoAulasGraficoDonut from "../../../components/Professor/Dashboard/GraficoDonut/index.jsx";

/* ================= Utils ================= */
import api from "../../../api.js";
import { verificarToken } from "../../../utils/index.js";
import { useNavigate } from "react-router-dom";

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

function criarInstrumento(img, nome, quantidade, valor) {
    let valorTotal = valor * quantidade;
    return { img, nome, quantidade, valorTotal };
}

const instrumentosEnsinados = [
    criarInstrumento(violaoIcon, "Violão", 3, 50),
    criarInstrumento(violaoIcon, "Violão", 2, 40),
    criarInstrumento(violaoIcon, "Violão", 2, 40),
]

function DashboardProfessor() {
    const [value, setValue] = React.useState(0);

    const handleChange = (evento, novoValor) => {
        setValue(novoValor)
    };

    function getTabProps(index) {
        return {
            id: `simple-tab-${index}`,
            className: "dashboard-professor-tabs-item",
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const navigate = useNavigate();

    useEffect(() => {
        if (verificarToken()) {
            navigate(-1);
        }
    }, [])

    return (
        <EstruturaPaginaUsuario opcoesNavbar={opcoesNavbar}>
            <Box className="pagina-container">
                <Tabs value={value} onChange={handleChange} aria-label="tabs" className="dashboard-professor-tabs">
                    <Tab label="Visão Mensal" {...getTabProps(0)} />
                    <Tab label="Visão Geral" {...getTabProps(1)} />
                </Tabs>
                <Box className="kpi-container">
                    <KpiDashboard titulo="Rendimento total" />
                    <KpiDashboard titulo="Quantidade de alunos" />
                    <KpiDashboard titulo="Quantidade de aulas" />
                    <KpiDashboard titulo="Tempo de resposta" />

                </Box>
                <Box className="charts-container">
                    <HistoricoAulasGraficoDonut />
                    <TabelaMinhasAulas />
                </Box>
            </Box>
        </EstruturaPaginaUsuario>
    )
}

export default DashboardProfessor;
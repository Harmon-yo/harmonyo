import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import "./style.css";

/* ================= Navbar =================== */

import ChatIcon from '@mui/icons-material/ChatBubbleOutline';
import SearchIcon from '@mui/icons-material/Search';
import FeedbackIcon from '@mui/icons-material/RateReviewOutlined';
import PedidosIcon from '@mui/icons-material/GradingOutlined';
import CalendarioIcon from '@mui/icons-material/CalendarTodayOutlined';

/* ================= Componentes ==================== */

import EstruturaPaginaUsuario from "../../../components/Global/EstruturaPaginaUsuario/Main/index.jsx";
import ProfessoresPopulares from "../../../components/Aluno/EncontrarProfessor/ProfessoresPopulares/Main/index.jsx";
import ListaProfessores from "../../../components/Aluno/EncontrarProfessor/ListaProfessores/Main/index.jsx";
import Mapa from "../../../components/Aluno/EncontrarProfessor/Mapa/index.jsx";
import FiltroDePesquisaCard from "../../../components/Aluno/EncontrarProfessor/FiltroDePesquisaCard/index.jsx";
import BarraDePesquisa from "../../../components/Aluno/EncontrarProfessor/BarraDePesquisa/index.jsx";

/* ================= Utils ================= */
import api from "../../../api.js";
import { verificarToken } from "../../../utils/index.js";


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
    const [professoresPopulares, setProfessoresPopulares] = React.useState([]);
    const [professoresLista, setProfessores] = React.useState([]);
    const [professoresFiltrados, setProfessoresFiltrados] = React.useState(null);
    const [params, setParams] = React.useState("");

    const config = {
        headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` },
    };

    const navigate = useNavigate();

    useEffect(() => {
        if (verificarToken()) {
            navigate(-1);
        }
    },[])

    useEffect(() => {
        obterProfessoresResumido(params);
    }, [params]);

    function obterProfessoresResumido(parametros) {
        return api.get(`/professores/busca?params=${parametros ? parametros : ""}`, config).then((response) => {
            setProfessores(response.data);
            console.log(response)
            
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <EstruturaPaginaUsuario opcoesNavbar={opcoesNavbar}>
            <Box className="pagina-container">
            <FiltroDePesquisaCard buscarProfessores={obterProfessoresResumido} />
            <Box className="encontrar-professor-conteudo">
                <BarraDePesquisa />
                <ProfessoresPopulares />
                <ListaProfessores professores={professoresFiltrados ? professoresFiltrados : professoresLista} />
            </Box>
        </Box>
        </EstruturaPaginaUsuario>
    )
}

export default EncontrarProfessor;
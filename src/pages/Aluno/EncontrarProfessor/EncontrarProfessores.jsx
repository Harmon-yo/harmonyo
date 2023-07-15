import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import "./style.css";


/* ================= Componentes ==================== */

import EstruturaPaginaUsuario from "../../../components/Global/EstruturaPaginaUsuario/Main/index.jsx";
import ProfessoresPopulares from "../../../components/Aluno/EncontrarProfessor/ListaProfessoresPopulares/Main/index.jsx";
import ListaProfessores from "../../../components/Aluno/EncontrarProfessor/ListaProfessores/Main/index.jsx";
import Mapa from "../../../components/Aluno/EncontrarProfessor/Mapa/index.jsx";
import FiltroDePesquisaCard from "../../../components/Aluno/EncontrarProfessor/FiltroDePesquisaCard/index.jsx";
import BarraDePesquisa from "../../../components/Aluno/EncontrarProfessor/BarraDePesquisa/index.jsx";

/* ================= Utils ================= */
import api from "../../../api.js";
import { verificarToken } from "../../../utils/index.js";




const cidadesCadastradas = [
    'São Paulo',
    'Santo André',
    'São Bernardo do Campo',
]

function EncontrarProfessor(props) {
    let parametros = useRef("");
    const [erros, setErros] = useState([]);
    const [cidade, setCidade] = useState("");
    const [professoresPopulares, setProfessoresPopulares] = useState([]);
    const [professoresFiltrados, setProfessoresFiltrados] = useState([]);
    const isCarregando = professoresFiltrados.length === 0 && professoresPopulares.length === 0;

    const navigate = useNavigate();

    const requisicaoGet = (url) => {
        const config = {
            headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` },
        };

        return api.get(url, config);
    }

    const exibirErro = (erro) => {
        setErros((erros) => [...erros, erro]);
    }

    useEffect(() => {
        /* if (verificarToken()) {
            navigate(-1);
        } */
        requisicaoGet("/cidades").then((response) => {
            setCidade(response.data[0]);
        }).catch((error) => {
            exibirErro("Erro ao carregar cidades cadastradas.");
        });

        // Pesquisa no banco de dados as cidades cadastradas
        if (cidadesCadastradas.length === 0) setCidade("?");
        else if (isCarregando) setCidade("Carregando...");
        else setCidade(cidadesCadastradas[0]);
    }, []);

    useEffect(() => {
        setProfessoresPopulares([]);
        setProfessoresFiltrados([]);

        requisicaoGet(`/professores/busca?params=${parametros ? parametros : ""}`).then((response) => {
            setProfessoresFiltrados(response.data);
        }).catch((error) => {
            exibirErro("Erro ao carregar professores.");
        });
    }, [parametros]);

    return (
        <EstruturaPaginaUsuario tela="encontrar" errosState={erros}>
            <Box className="pagina-container">
                <FiltroDePesquisaCard parametros={parametros} cidade={cidade} isCarregando={isCarregando} />
                <Box className="encontrar-professor-conteudo">
                    <BarraDePesquisa cidadeState={{ cidade, setCidade }} isCarregando={isCarregando}/>
                    <ProfessoresPopulares parametros={parametros} professoresPopularesState={{ professoresPopulares, setProfessoresPopulares }} isCarregando={isCarregando} />
                    <ListaProfessores professores={professoresFiltrados} isCarregando={isCarregando} />
                </Box>
            </Box>
        </EstruturaPaginaUsuario>
    )
}

export default EncontrarProfessor;
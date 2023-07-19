import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import "./style.css";

/* ================= Navbar =================== */

import {
    ChatBubbleOutline as ChatIcon,
    Search as SearchIcon,
    RateReviewOutlined as FeedbackIcon,
    GradingOutlined as PedidosIcon,
    CalendarTodayOutlined as CalendarioIcon
} from '@mui/icons-material';

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

function EncontrarProfessor(props) {
    const [erros, setErros] = useState([]);

    const [parametrosStr, setParametrosStr] = useState("");

    const [cidade, setCidade] = useState("");
    const [cidades, setCidades] = useState([]);
    const [professoresPopulares, setProfessoresPopulares] = useState([]);
    const [professoresFiltrados, setProfessoresFiltrados] = useState([]);
    const isCarregando = professoresFiltrados.length === 0 && professoresPopulares.length === 0 && cidades.length === 0;
    const [iniciarPesquisa, setIniciarPesquisa] = useState(false);


    const [alcanceFiltro, setAlcanceFiltro] = useState({
        precoMinimo: -1,
        precoMaximo: -1,
        distanciaMinima: -1,
        distanciaMaxima: -1,
    });

    const navigate = useNavigate();

    const requisicaoGet = (url) => {
        return api.get(url/* , { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` }  */);
    }

    const exibirErro = (erro) => setErros((erros) => [...erros, erro]);

    useEffect(() => {
        /* if (verificarToken()) {
            navigate(-1);
        } */
        obterFiltrosPrincipais();
    }, []);

    useEffect(() => {
        if (cidades.length === 0 || alcanceFiltro.precoMinimo === -1 || alcanceFiltro.precoMaximo === -1 || 
            alcanceFiltro.distanciaMinima === -1 || alcanceFiltro.distanciaMaxima === -1) return;

        console.log("Pesquisando professores...")
        obterProfessores();

    }, [parametrosStr]);

    const obterFiltrosPrincipais = () => {
        Promise.all([
            requisicaoGet("/usuarios/filtro-minimo-maximo"),
            requisicaoGet("/enderecos/cidades")
        ]).then(
            (responses) => {
                console.log("Responses:")
                console.log(responses);
                let alcanceFiltro = responses[0].data;
                let cidadesCadastradas = responses[1].data;

                if (alcanceFiltro == null) exibirErro("Erro ao carregar valores do filtro.");
                else if (cidadesCadastradas == null) exibirErro("Erro ao carregar cidades cadastradas.");
                else {
                    setAlcanceFiltro((alcanceFiltroAntigo) => ({
                        ...alcanceFiltroAntigo,
                        precoMinimo: alcanceFiltro.precoMinimo,
                        precoMaximo: alcanceFiltro.precoMaximo,
                        distanciaMinima: alcanceFiltro.distanciaMinima,
                        distanciaMaxima: alcanceFiltro.distanciaMaxima,
                    }));
                    
                    if (cidadesCadastradas.length === 0) setCidade("?");
                    else {
                        setCidades(cidadesCadastradas);
                        setCidade(cidadesCadastradas[0]);
                    }

                    
                }
            }
        )
    };
       

    const obterProfessores = () => {
        setProfessoresFiltrados([]);
        setProfessoresPopulares([]);

        requisicaoGet(`/professores/busca${parametrosStr ? `?params=${parametrosStr}` : ""}`)
            .then((response) => {
                console.log(response.data);
                if (response.status == 204) {
                    exibirErro("Nenhum professor encontrado.");
                    setProfessoresFiltrados([]);
                } else {
                    setProfessoresFiltrados(response.data)
                }
            })
            .catch(() => exibirErro("Erro ao carregar professores filtrados."));

        requisicaoGet("/professores/populares")
            .then((response) => {
                console.log(response.data);
                if (response.status == 204) {
                    exibirErro("Nenhum professor encontrado.");
                    setProfessoresPopulares([]);
                } else {
                    setProfessoresPopulares(response.data)
                }
            })
            .catch(() => exibirErro("Erro ao carregar professores populares."));
    };


    return (
        <EstruturaPaginaUsuario tela="encontrar" errosState={{ erros, setErros }}>
            <Box className="pagina-container">
                <FiltroDePesquisaCard parametrosStrState={{ parametrosStr, setParametrosStr }} cidade={cidade} isCarregando={isCarregando}
                    alcanceFiltro={alcanceFiltro} iniciarPesquisaState={{iniciarPesquisa, setIniciarPesquisa}} />
                <Box className="encontrar-professor-conteudo">
                    <BarraDePesquisa cidadeState={{ cidade, setCidade }} cidades={cidades} isCarregando={isCarregando} iniciarPesquisaState={{ iniciarPesquisa, setIniciarPesquisa }}/>
                    <ProfessoresPopulares professores={professoresPopulares} isCarregando={isCarregando} />
                    <ListaProfessores professores={professoresFiltrados} isCarregando={isCarregando} />
                </Box>
            </Box>
        </EstruturaPaginaUsuario>
    );
}

export default EncontrarProfessor;
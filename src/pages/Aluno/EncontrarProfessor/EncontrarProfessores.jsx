import React, { useEffect, useState, useMemo } from "react";
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

    const [parametros, setParametros] = useState({});
    const parametrosStr = useMemo(() => [transformarParametros(parametros)], [parametros]);

    const [professoresPopulares, setProfessoresPopulares] = useState([]);
    const [professoresFiltrados, setProfessoresFiltrados] = useState([]);
    const [carregou, setCarregou] = useState([]);
    const isCarregando = !allAreTrue(carregou);
    const [iniciarPesquisa, setIniciarPesquisa] = useState(false);

    const adicionarCarregamento = (boolean) => {
        setCarregou((carregou) => [...carregou, boolean]);
    }

    const adicionarParametro = (chave, valor, operacao, orPredicate=false) => {
        if (Object.keys(parametros).includes(chave)) {
            setParametros((parametros) => {
                return {
                    ...parametros,
                    [chave]: {
                        valor: valor,
                        operacao: operacao,
                        orPredicate: orPredicate
                    }
                }
            });
        } else {
            setParametros((parametros) => {
                return {
                    ...parametros,
                    [chave]: {
                        valor: valor,
                        operacao: operacao,
                        orPredicate: orPredicate
                    }
                }
            });
        }
    }

    const navigate = useNavigate();

    const requisicaoGet = (url) => {
        return api.get(url, { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } });
    }

    const exibirErro = (erro) => setErros((erros) => [...erros, erro]);

    useEffect(() => {
        if (verificarToken()) {
            navigate(-1);
        }
    }, []);

    useEffect(() => {
        if (parametrosStr.length === 0) return;

        console.log("Pesquisando professores...")
        obterProfessores();

    }, [parametrosStr]);

    

    const obterProfessores = () => {
        setProfessoresFiltrados([]);
        setProfessoresPopulares([]);

        Promise.all([
            requisicaoGet(`/professores/busca${parametrosStr ? `?params=${parametrosStr}` : ""}`),
            requisicaoGet("/professores/populares")
        ]).then(
            (responses) => {
                console.log("Responses Professores:")
                console.log(responses);

                let professoresFiltrados = responses[0].data;
                let professoresPopulares = responses[1].data;

                if (professoresFiltrados == null) exibirErro("Erro ao carregar professores filtrados.");
                else if (professoresPopulares == null) exibirErro("Erro ao carregar professores populares.");
                else {
                    if (responses[0].status === 204) {
                        exibirErro("Nenhum professor encontrado.");
                        setProfessoresFiltrados([]);
                    } else {
                        setProfessoresFiltrados(professoresFiltrados);
                    }

                    if (responses[1].status === 204) {
                        exibirErro("Nenhum professor encontrado.");
                        setProfessoresPopulares([]);
                    } else {
                        setProfessoresPopulares(professoresPopulares);
                    }
                }
            });
    };

    const handleClickProfessor = (professor) => {
        console.log("Testado")
        navigate(`/exibicao-perfil?id=${professor.id}`);
    }


    return (
        <EstruturaPaginaUsuario tela="encontrar" errosState={{ erros, setErros }}>
            <Box className="pagina-container">
                <FiltroDePesquisaCard isCarregando={isCarregando} requisicaoGet={requisicaoGet}
                    iniciarPesquisaState={{ iniciarPesquisa, setIniciarPesquisa }} adicionarCarregamento={adicionarCarregamento}
                    adicionarParametro={adicionarParametro} exibirErro={exibirErro}/> 
                <Box className="encontrar-professor-conteudo">
                    <BarraDePesquisa requisicaoGet={requisicaoGet} isCarregando={isCarregando} 
                    iniciarPesquisaState={{ setIniciarPesquisa }} adicionarCarregamento={adicionarCarregamento}
                    adicionarParametro={adicionarParametro} exibirErro={exibirErro}/>
                    <ProfessoresPopulares professores={professoresPopulares} isCarregando={isCarregando} onClick={handleClickProfessor}/>
                    <ListaProfessores professores={professoresFiltrados} isCarregando={isCarregando} onClick={handleClickProfessor}/>
                </Box>
            </Box>
        </EstruturaPaginaUsuario>
    );
}

function transformarParametros(parametros) {
    let valor, operacao, operadorLogico;
    let novoParametro = "";

    console.log("Iniciando Filtragem dos parametros...");
    console.log("Valores para serem filtrados: ");
    console.log(parametros);

    let chaves = Object.keys(parametros);
    for (let chave in parametros) {
        valor = parametros[chave].valor;
        operacao = parametros[chave].operacao;

        if (chave === "disponibilidade") continue;

        if (Array.isArray(valor)) {
            novoParametro += `${chave}${operacao}${valor[0]}`;

            if (parametros[chave].orPredicate) operadorLogico = ";"
            else operadorLogico = "-";

            for (let i = 1; i < valor.length; i++) novoParametro += `${operadorLogico}${valor[i]}`;
        } else novoParametro += `${chave}${operacao}${valor}`;

        if (chaves.indexOf(chave) < chaves.length - 1) novoParametro += ",";
    }

    console.log("Filtragem dos parametros finalizada! Novo valor: " + novoParametro);

    return novoParametro;

}

function allAreTrue(arr) {
    return arr.every(element => element === true);
  }

export default EncontrarProfessor;
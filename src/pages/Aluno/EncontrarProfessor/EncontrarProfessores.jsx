import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import "./style.css";

/* ================= Componentes ==================== */

import EstruturaPaginaUsuario from "../../../components/Global/EstruturaPaginaUsuario/Main/index.jsx";
import ProfessoresPopulares from "../../../components/Aluno/EncontrarProfessor/ListaProfessoresPopulares/Main/index.jsx";
import ListaProfessores from "../../../components/Aluno/EncontrarProfessor/ListaProfessores/Main/index.jsx";
import FiltroDePesquisaCard from "../../../components/Aluno/EncontrarProfessor/FiltroDePesquisaCard/index.jsx";
import BarraDePesquisa from "../../../components/Aluno/EncontrarProfessor/BarraDePesquisa/index.jsx";

/* ================= Utils ================= */
import api from "../../../api.js";
import { verificarToken } from "../../../utils/index.js";

function EncontrarProfessor(props) {
    const [avisos, setAvisos] = useState([]);

    const [parametros, setParametros] = useState({});
    const parametrosStr = Object.keys(parametros).length > 1 ? transformarParametros(parametros) : "";

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

    const exibirAviso = (aviso) => {
        console.log("Aviso adicionado")
        setAvisos((avisos) => [...avisos, aviso])
    };

    useEffect(() => {
        if (verificarToken()) {
            navigate(-1);
        }
    }, []);

    useEffect(() => {
        if (parametrosStr.length === 0 || parametrosStr === null) return;

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
                console.log("Responses Professores Data:")
                console.log(responses[0].data);
                console.log("Professores Populares Data:")
                console.log(responses[1].data);

                let professoresFiltrados = responses[0].data;
                let professoresPopulares = responses[1].data;

                if (professoresFiltrados == null) exibirAviso({
                    mensagem: "Erro ao carregar professores filtrados.",
                    tipo: "erro"
                })
                else if (professoresPopulares == null) exibirAviso({
                    mensagem: "Erro ao carregar professores populares.",
                    tipo: "erro"
                })
                else {
                    if (responses[0].status === 204) {
                        
                        exibirAviso({
                            mensagem: "Nenhum professor encontrado.",
                            tipo: "erro"
                        })
                        
                        setProfessoresFiltrados([]);
                    } else {
                        setProfessoresFiltrados(professoresFiltrados);
                    }

                    if (responses[1].status === 204) {
                        exibirAviso({
                            mensagem: "Nenhum professor encontrado.",
                            tipo: "erro"
                        })
                        
                        setProfessoresPopulares([]);
                    } else {
                        setProfessoresPopulares(professoresPopulares);
                    }
                }
            }).catch((err) => {
                console.log(err);
                exibirAviso({
                    mensagem: "Erro ao carregar professores.",
                    tipo: "erro"
                })
            });
    };

    const handleClickProfessor = (professor) => {
        navigate(`/exibicao-perfil?id=${professor.id}`);
    }


    return (
        <EstruturaPaginaUsuario tela="encontrar" avisosState={{ avisos, setAvisos }}>
            <Box className="pagina-container">
                <FiltroDePesquisaCard isCarregando={isCarregando} requisicaoGet={requisicaoGet}
                    iniciarPesquisaState={{ iniciarPesquisa, setIniciarPesquisa }} adicionarCarregamento={adicionarCarregamento}
                    adicionarParametro={adicionarParametro} exibirAviso={exibirAviso}/> 
                <Box className="encontrar-professor-conteudo">
                    <BarraDePesquisa requisicaoGet={requisicaoGet} isCarregando={isCarregando} 
                    iniciarPesquisaState={{ setIniciarPesquisa }} adicionarCarregamento={adicionarCarregamento}
                    adicionarParametro={adicionarParametro} exibirAviso={exibirAviso} setProfessoresFiltrados={setProfessoresFiltrados}/>
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
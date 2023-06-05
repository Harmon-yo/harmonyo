import React, {useEffect} from "react";
import {
    Box
} from "@mui/material";
import FiltroDePesquisaCard from "../../atoms/FiltroDePesquisaCard/index.jsx";
import BarraDePesquisa from "../../atoms/BarraDePesquisa/index.jsx";
import ProfessoresPopulares from "../../organisms/ProfessoresPopulares/index.jsx";
import ListaProfessores from "../../organisms/ListaProfessores/index.jsx";
import api from "../../../api.js";
import Mapa from "../../atoms/Mapa/index.jsx";
import "./style.css"



function EncontrarProfessorConteudo(props) {
    const [professoresPopulares, setProfessoresPopulares] = React.useState([]);
    const [professoresLista, setProfessores] = React.useState([]);

    useEffect(() => {
        api.get(`/professores/busca`).then((response) => {
            setProfessores(response.data);
        }).catch((error) => {
          console.log(error);
        });
      }, [])

    function buscarProfessores(filtroOpcao) {
        let parametros = "";
        
        for (let i = 0; i < Object.keys(filtroOpcao).length; i++) {
            let valor = filtroOpcao[Object.keys(filtroOpcao)[i]];

            let chave = Object.keys(filtroOpcao)[i];
            let operacao = definirTipoPesquisa(Object.keys(filtroOpcao)[i]);
            
            if (Array.isArray(valor)) {
                parametros += `${chave}${operacao}${valor[0]}`;
                for (let j = 1; j < valor.length; j++) {
                    parametros += `&${valor[j]}`;
                }
            } else {
                parametros += `${chave}${operacao}${valor}`;
            }

            if (i < Object.keys(filtroOpcao).length - 1) {
                parametros += ",";
            }
        }

        console.log("Parametros: " + parametros);
    }
    
    function definirTipoPesquisa(tipo) {
        switch(tipo) {
            case "preco": return "><";
            case "distancia": return "><";
            case "avaliacao": return ">:";
            case "instrumentos": return "=";
            case "disponibilidade": return "=";
        }
    }

    return (

        <Box className="pagina-container">
            <FiltroDePesquisaCard buscarProfessor={buscarProfessores}/>
            <Box className="encontrar-professor-conteudo">
                <BarraDePesquisa />
                <ProfessoresPopulares/>
                <ListaProfessores professores={professoresLista}/>
            </Box>
        </Box>
    );
}

export default EncontrarProfessorConteudo;
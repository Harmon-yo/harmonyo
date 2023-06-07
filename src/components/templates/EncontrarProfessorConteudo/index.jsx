import React, { useEffect } from "react";
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
    const [professoresFiltrados, setProfessoresFiltrados] = React.useState(null);
    const config = {
        headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` },
    };



    useEffect(() => {
        obterProfessoresResumido("");
    }, []);

    function obterProfessoresResumido(parametros) {
        api.get(`/professores/busca?params=${parametros ? parametros : ""}`, config).then((response) => {
            setProfessores(response.data);
            console.log(response)
        }).catch((error) => {
            console.log(error);
        });
    }

    return (

        <Box className="pagina-container">
            <FiltroDePesquisaCard buscarProfessores={obterProfessoresResumido} />
            <Box className="encontrar-professor-conteudo">
                <BarraDePesquisa />
                <ProfessoresPopulares />
                <ListaProfessores professores={professoresFiltrados ? professoresFiltrados : professoresLista} />
            </Box>
        </Box>
    );
}

export default EncontrarProfessorConteudo;
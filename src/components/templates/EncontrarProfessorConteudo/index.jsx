import React from "react";
import {
    Box,
    Typography,
    Avatar
} from "@mui/material";
import FiltroDePesquisaCard from "../../atoms/FiltroDePesquisaCard/index.jsx";
import BarraDePesquisa from "../../atoms/BarraDePesquisa/index.jsx";
import ProfessoresPopulares from "../../organisms/ProfessoresPopulares/index.jsx";
import ListaProfessores from "../../organisms/ListaProfessores/index.jsx";
import Card from "../../atoms/Card/index.jsx";
import Mapa from "../../atoms/Mapa/index.jsx";
import "./style.css"



function EncontrarProfessorConteudo(props) {
    return (

        <Box className="encontrar-professor-container">
            <FiltroDePesquisaCard/>
            <Box className="encontrar-professor-conteudo">
                <BarraDePesquisa />
                <ProfessoresPopulares/>
                <ListaProfessores/>
                
            </Box>
        </Box>
    );
}

export default EncontrarProfessorConteudo;
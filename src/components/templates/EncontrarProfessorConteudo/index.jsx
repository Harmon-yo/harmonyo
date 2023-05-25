import React from "react";
import {
    Box
} from "@mui/material";
import ProfessorEmAlta from "../../molecules/ProfessoresAlta/index.jsx";
import Mapa from "../../atoms/Mapa/index.jsx";
import "./style.css"

function EncontrarProfessorConteudo(props) {
    return (
        
        <>
        <ProfessorEmAlta/>
        <Mapa/>
        </>
    );
}

export default EncontrarProfessorConteudo;
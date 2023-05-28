import React from "react";
import {
    Box,
    Typography,
} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import ProfessoresPopulares from "../../molecules/ProfessoresPopulares/index.jsx";
import Mapa from "../../atoms/Mapa/index.jsx";
import "./style.css"

function EncontrarProfessorConteudo(props) {
    return (
        
        <Box className="encontrar-professor-container">
            <Box className="professores-busca-card">
                <Box className="professores-busca-lugar">
                    <LocationOnIcon/>
                    <Typography variant="subtitle1" className="professores-busca-lugar-nome">
                        São Paulo
                    </Typography>
                </Box>
                <Box className="professores-busca-campo">
                    <Typography variant="subtitle1" className="professores-busca-campo-titulo">
                        Buscar
                    </Typography>
                    <SearchIcon/>
                </Box>
            </Box>
            <ProfessoresPopulares/>
            <Mapa/>
        </Box>
    );
}

export default EncontrarProfessorConteudo;
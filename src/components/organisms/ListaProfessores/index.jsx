import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { deepOrange } from '@mui/material/colors';
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import { Box, Typography, Avatar } from "@mui/material";
import Card from "../../atoms/Card";
import ProfessorResumidoCard from "../../molecules/ProfessorResumidoCard";
import "./style.css";

const lista = [
    {
        nome: "João",
        instrumentos: ["Violão", "Guitarra"],
        idade: 18,
        bairro: "Vila Mariana",
        distancia: "15km",
        precoMinimo: 50,
        precoMaximo: 60,
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nunc eget nunc aliquet ultricies. Sed vitae nunc eget nunc aliquet ultricies. Sed vitae nunc eget nunc aliquet",
        avaliacao: 4.5,
        cidade: "São Paulo",
        estado: "São Paulo",
    }
];

function ListaProfessores(props) {
    return (
        <>
            <Box>
                <Typography variant="h5" className="encontrar-professor-titulo">
                    Professores
                </Typography>
            </Box>
            <Card className="professores-cards">
                {
                    lista.map((professor) => (
                        <ProfessorResumidoCard nome={professor.nome} instrumentos={professor.instrumentos} idade={professor.idade} bairro={professor.bairro} distancia={professor.distancia} precoMinimo={professor.precoMinimo} precoMaximo={professor.precoMaximo} descricao={professor.descricao} avaliacao={professor.avaliacao} cidade={professor.cidade} estado={professor.estado} />
                    ))
                }
            </Card>
        </>
    );
}

export default ListaProfessores;
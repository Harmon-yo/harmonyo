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
        nome: "João Silva",
        instrumentos: ["Piano", "Violino", "Violoncelo", "Viola"],
        idade: 35,
        bairro: "Centro",
        distancia: 10,
        precoMinimo: 50,
        precoMaximo: 100,
        descricao: "Profissional com mais de 10 anos de experiência no ensino de piano, violino, violoncelo e viola.",
        avaliacao: 4.5,
        cidade: "São Paulo",
        estado: "SP"
    },
    {
        nome: "Maria Oliveira",
        instrumentos: ["Guitarra", "Baixo"],
        idade: 28,
        bairro: "Vila Madalena",
        distancia: 5,
        precoMinimo: 40,
        precoMaximo: 80,
        descricao: "Professora experiente de guitarra e baixo com abordagem prática e teórica.",
        avaliacao: 4.8,
        cidade: "São Paulo",
        estado: "SP"
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
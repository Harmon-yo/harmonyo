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
        ltInstrumentos: [{nome: "Piano"}, {nome: "Violino"}, {nome: "Violoncelo"}, {nome: "Viola"}],
        idade: 35,
        bairro: "Centro",
        distancia: 10,
        valorMinimo: 50,
        valorMaximo: 100,
        descricao: "Profissional com mais de 10 anos de experiência no ensino de piano, violino, violoncelo e viola.",
        mediaAvaliacao: 4.5,
        cidade: "São Paulo",
        estado: "SP"
    },
    {
        nome: "Maria Oliveira",
        ltInstrumentos: [{nome: "Piano"}, {nome: "Violino"}, {nome: "Violoncelo"}, {nome: "Viola"}],
        idade: 28,
        bairro: "Vila Madalena",
        distancia: 5,
        valorMinimo: 40,
        valorMaximo: 80,
        descricao: "Professora experiente de guitarra e baixo com abordagem prática e teórica.",
        mediaAvaliacao: 4.8,
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
                    props.professores.map((professor) => (
                        <ProfessorResumidoCard nome={professor.nome} instrumentos={professor.ltInstrumentos} idade={professor.idade} bairro={professor.bairro} distancia={professor.distancia} precoMinimo={professor.valorMinimo} precoMaximo={professor.valorMaximo} descricao={professor.descricao} avaliacao={professor.mediaAvaliacao} cidade={professor.cidade} estado={professor.estado} />
                    ))
                }
            </Card>
        </>
    );
}

export default ListaProfessores;
import React from "react";
import Card from "../../atoms/Card";
import { Box, Typography } from "@mui/material";
import ProfessoresAltaProfessor from "../../atoms/ProfessoresAltaProfessor";
import "./style.css";

const professores = [
    {
        id: 1,
        nome: "Gustavo Pereira",
        instrumentos: [
            "Violão",
            "Piano"
        ]
    }
]

function ProfessorEmAlta(props) {
    return (
        <Card className="professores-alta-card">
            <Box className="professor-alta-card-container-title">
                <Typography className="professor-alta-card-title">
                    Professores em Alta
                </Typography>
            </Box>
            <Box className="professor-alta-card-list">
                {
                    professores.map(
                        (professor) => (
                            <ProfessoresAltaProfessor key={professor.id} nome={professor.nome} instrumentos={professor.instrumentos}/>
                    ))
                }
            </Box>
        </Card>
    );
}

export default ProfessorEmAlta;
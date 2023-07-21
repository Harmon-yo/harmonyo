import React from "react";
import { Box, Typography, Skeleton, CircularProgress } from "@mui/material";
import Card from "../../../../Global/Card/index.jsx";
import ProfessorResumidoCard from "../ProfessorResumidoCard/index.jsx";
import api from "../../../../../api.js";
import "./style.css";

const carregando = () => {
    return (<CircularProgress color="success" />);
}

function ListaProfessores(props) {

    return (
        <Box>
            <Box>
                <Typography className="encontrar-professor-titulo">
                    Professores
                </Typography>
            </Box>
            {
                props.isCarregando
                    ? carregando()
                    : <Card className="professores-cards">
                        {
                            props.professores.map((professor, index) => (
                                <ProfessorResumidoCard key={index} nome={professor.nome} instrumentos={professor.instrumentos} idade={professor.idade} bairro={professor.bairro} distancia={professor.distancia} precoMinimo={professor.valorMinimo} precoMaximo={professor.valorMaximo} descricao={professor.descricao} avaliacao={professor.mediaAvaliacao} cidade={professor.cidade} estado={professor.estado} />
                            ))
                        }
                    </Card>
            }

        </Box>
    );
}



export default ListaProfessores;
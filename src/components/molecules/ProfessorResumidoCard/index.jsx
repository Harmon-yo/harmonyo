import React from "react";
import { deepOrange } from '@mui/material/colors';
import { Box, Typography, Avatar } from "@mui/material";
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Card from "../../atoms/Card";
import "./style.css";

function ProfessorResumidoCard(props) {
    return (
        <Card className="professor-card">
            <Box className="professor-card-primeira-parte">
                <Avatar id="avatar-usuario-botao"
                    sx={{ bgcolor: deepOrange[500] }}>G</Avatar>
            </Box>
            <Box className="professor-card-segunda-parte">
                <Typography variant="h5" className="professor-nome-texto">
                    {props.nome}
                </Typography>
                <Box className="professor-informacoes-adicionais-container">
                    <Typography className="professor-informacoes-adicionais-texto">
                        {`${props.idade} anos`}
                    </Typography>
                    -
                    <Typography className="professor-informacoes-adicionais-texto">
                        {`${props.bairro}`}
                    </Typography>
                    -
                    <Typography className="professor-informacoes-adicionais-texto">
                        {`${props.cidade}`}
                    </Typography>
                    -
                    <Typography className="professor-informacoes-adicionais-texto">
                        {`${props.distancia} Km`}
                    </Typography>
                    -
                    <Typography className="professor-preco-texto">
                        {`R$ ${props.precoMinimo}~R$${props.precoMaximo}`}
                    </Typography>
                </Box>
                <Typography className="professor-descricao-texto">
                    {props.descricao}
                </Typography>
                <Box className="professor-avaliacao-localizacao-container">
                    {
                        [1, 2, 3, 4, 5].map(
                            (nota) => (
                                <GradeRoundedIcon sx={{ color: deepOrange[500] }} />
                            ))
                    }
                    <Typography variant="subtitle1" className="professores-avaliacao-texto" sx={{ color: deepOrange[500] }}>
                        {props.avaliacao}
                    </Typography>
                    <Box className="professor-localizacao">
                        <LocationOnIcon className="professor-localizacao-texto" />
                        <Typography variant="subtitle1" className="professor-localizacao-texto">
                            {`${props.cidade} - ${props.estado}`}
                        </Typography>
                    </Box>
                </Box>

                <Box className="professor-instrumentos-container">
                    {
                        props.instrumentos.map((instrumento) => (
                            <Card className="professor-instrumentos-card">
                                <Typography variant="subtitle1" className="professor-instrumentos-card-texto">
                                    {instrumento}
                                </Typography>
                            </Card>
                        ))
                    }
                </Box>

            </Box>
        </Card>
    );
}

export default ProfessorResumidoCard;
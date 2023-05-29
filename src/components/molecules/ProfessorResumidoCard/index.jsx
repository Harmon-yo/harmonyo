import React from "react";
import { deepOrange } from '@mui/material/colors';
import { Box, Typography, Avatar } from "@mui/material";
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Card from "../../atoms/Card";

function ProfessorResumidoCard(props) {
    return (
        <Card className="professor-card">
            <Box className="professor-card-primeira-parte">
                <Avatar id="avatar-usuario-botao" className="avatar-usuario-img"
                    sx={{ bgcolor: deepOrange[500] }}>G</Avatar>
            </Box>
            <Box className="professor-card-segunda-parte">
                <Typography variant="subtitle1" className="professor-card-nome">
                    {props.nome}
                </Typography>
                <Typography variant="subtitle2" className="professor-card-instrumentos">
                    {`(${props.instrumentos.join(", ")})})`}
                </Typography>
                <Typography>
                    {`${props.idade} anos - ${props.cidade} - ${props.bairro} - ${props.distancia} - R$ ${props.precoMinimo}~${props.precoMaximo}}`}
                </Typography>
                <Typography>
                    {props.descricao}
                </Typography>
                <Box>
                    {
                        [1, 2, 3, 4, 5].map(
                            (nota) => (
                                <GradeRoundedIcon sx={{ color: deepOrange[500] }} />
                            ))
                    }
                    <LocationOnIcon />
                    <Typography variant="subtitle1" className="professores-busca-lugar-nome">
                        {`${props.cidade} - ${props.estado}`}
                    </Typography>
                </Box>

            </Box>
        </Card>
    );
}

export default ProfessorResumidoCard;
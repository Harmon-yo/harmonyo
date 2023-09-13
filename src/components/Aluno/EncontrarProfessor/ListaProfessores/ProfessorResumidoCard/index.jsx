import React from "react";
import { Box, Typography, Rating } from "@mui/material";
import AvatarComFoto from "../../../../Global/AvatarComFoto/index.jsx";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Card from "../../../../Global/Card/index.jsx";
import "./style.css";

function ProfessorResumidoCard(props) {    
    return (
        <Card key={`resumido-${props.id}`} className="professor-card" onClick={props.onClick}>
            <Box className="professor-card-primeira-parte">
                <AvatarComFoto
                    id={props.id}
                    nome={props.nome}
                />
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
                    {/* <Typography className="professor-descricao-texto">
                        {props.descricao}
                    </Typography> */}
                <Box className="professor-avaliacao-localizacao-container">
                    <Rating name="half-rating-read" defaultValue={props.avaliacao} precision={0.5} readOnly />
                    <Typography variant="subtitle1" className="professores-avaliacao-texto">
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
                        props.instrumentos.map((instrumento, index) => (
                            <Card className="professor-instrumentos-card" key={index}>
                                <Typography variant="subtitle1" className="professor-instrumentos-card-texto">
                                    {instrumento.nome}
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
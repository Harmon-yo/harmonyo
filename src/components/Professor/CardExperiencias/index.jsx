import React from "react";
import { Box, Typography } from "@mui/material";
import "./style.css"

function CardExperiencias(props) {
    
    return (
        <>
            <Box className="box-experiencias">
                <Typography className="titulo-experiencia"> {props.titulo} </Typography>
                <Typography className="descricao-experiencia">  {props.descricao} </Typography>
            </Box>
        </>
    )
}

export default CardExperiencias;
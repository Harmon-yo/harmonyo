import React, { useEffect, useState } from "react";
import {
    Box,
    Typography
} from "@mui/material";
import "./style.css";

function InformacaoAdicionalGrafico(props) {

    const [porcentagem, setPorcentagem] = useState(0);

    useEffect(() => {
        if (props.valor > 0 && props.total > 0) {
            setPorcentagem(((props.valor * 100) / props.total).toFixed(2));
        }
    }, [props.valor, props.total]);

    return (
        <Box className="taxa-container">
            <Typography className="quantidade-usuario-titulo">
               {/*  <FiberManualRecordIcon sx={{
                    fontSize: "var(----fonte-h6)"
                }} /> */}
                {props.nome}
            </Typography>
            <Typography className="quantidade-usuario-valor">{props.valor} ({porcentagem}%)</Typography>
        </Box>
    );
}

export default InformacaoAdicionalGrafico;
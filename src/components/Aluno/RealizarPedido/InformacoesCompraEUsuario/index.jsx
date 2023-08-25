
import {
    Box,
    Avatar,
    Typography,
    Divider,
} from "@mui/material";
import Card from "../../../Global/Card/index.jsx";
import { useState, useEffect } from "react";

import api from "../../../../api.js";

const requisicaoGet = (url) => {
    return api.get(url, { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } });
}

function InformacoesCompraEUsuario(props) {

    const [nomeProfessor, setNomeProfessor] = useState("Professor");
    const instrumento = props.instrumento;
    const valor = instrumento === null ? "00,00" : (
        instrumento.valor.length === 2 ?
            null
        : `${instrumento.valor},00`
    );

    useEffect(() => {
        requisicaoGet(`/professores/${props.idProfessor}`).then(
            (respostaProfessor) => {
                const professor = respostaProfessor.data;
                setNomeProfessor(professor.nome);
            }
        )
    }, []);

    return (<Card className="card-usuario-info">
    <Box className="usuario-info">
        <Avatar className="usuario-info-avatar"
            sx={{ bgcolor: "#099250" }}>G</Avatar>
        <Box className="duracao-container">
            <Typography>Duração</Typography>
            <Typography>1 Hora</Typography>
        </Box>
    </Box>
    <Typography className="nome-usuario">{nomeProfessor}</Typography>
    <Box className="pedido-info-container">
        <Box className="item-pedido">
            {
                instrumento === null ?
                    null
                : <Typography className="item-nome">{instrumento.nome}</Typography>
            }
            {
                instrumento === null ?
                    null
                : <Typography className="item-valor">R$ {valor}</Typography>
            }
        </Box>
        <Divider className="divider" />
        <Box className="item-pedido">
            <Typography className="item-nome">Total</Typography>
            <Typography className="item-valor">R$ {valor}</Typography>
        </Box>
    </Box>
</Card>);
}

export default InformacoesCompraEUsuario;
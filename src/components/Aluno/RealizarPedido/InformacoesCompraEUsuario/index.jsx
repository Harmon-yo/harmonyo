
import {
    Box,
    Typography,
    Divider,
} from "@mui/material";
import Card from "../../../Global/Card/index.jsx";
import { useState, useEffect } from "react";

import api from "../../../../api.js";
import AvatarComFoto from "../../../Global/AvatarComFoto/index.jsx";

const requisicaoGet = (url) => {
    return api.get(url, { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } });
}

function InformacoesCompraEUsuario(props) {

    const idProfessor = props.idProfessor;
    const [nomeProfessor, setNomeProfessor] = useState("");
    const instrumento = props.instrumento;
    const valor = instrumento === null ? "00,00" : (
        instrumento.valor.length === 2 ?
            null
        : `${instrumento.valor},00`
    );

    useEffect(() => {
        requisicaoGet(`/professores/${idProfessor}`).then(
            (respostaProfessor) => {
                const professor = respostaProfessor.data;
                setNomeProfessor(professor.nome);
            }
        ).catch(
            () => {
                console.log("Erro ao obter professor");
            }
        );
    }, []);

    return (<Card className="card-usuario-info">
    <Box className="usuario-info">
        <AvatarComFoto
            id={idProfessor}
            nome={nomeProfessor}
            className="usuario-info-avatar"
        />
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
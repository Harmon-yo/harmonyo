import React, { useState } from "react";
import "./style.css";
import { Box, Rating, Button, Modal, Typography, TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import AvatarComFoto from "../AvatarComFoto/index.jsx";
import api from "../../../api";

function ModalAvaliacao(props) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [value, setValue] = React.useState(0);

    const usuario = props.stateUsuario;

    const [formEnviar, setFormEnviar] = useState({
        dadosEnviar: false
    })

    const [comentario, setComentario] = useState("")

    const [pedidoAvaliado, setPedidoAvaliado] = useState(false);

    api.get(`/usuarios/${props.stateUsuario.id}/${sessionStorage.ID}`,
        { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } }).then((response) => {
            setPedidoAvaliado(response.data);
        });


    function validacaoDados() {
        if (value === 0) {
            alert("Por favor, avalie o usuário!")
            return false
        }
        if (comentario.length <= 3) {
            alert("Por favor, escreva um comentário!")
            return false
        }
        return true
    }

    function enviarAvaliacao() {

        let avaliacao = {
            usuarioAvaliadorId: parseInt(sessionStorage.ID),
            valor: value,
            comentario: comentario,
            pedidoId: props.stateUsuario.id,
        }

        console.log(avaliacao)

        let idAvaliado = 0;

        sessionStorage.CATEGORIA === "Professor" ?
            idAvaliado = props.stateUsuario.aluno.id :
            idAvaliado = props.stateUsuario.professor.id


        api.post(`/usuarios/${idAvaliado}/avaliacoes`, avaliacao, { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } })
            .then(res => {
                alert("Avaliação feita com sucesso!");
                handleClose();
            })
            .catch(err => {
                console.log(err)
            })
    }



    // Usar esse modelo abaixo:
    // <ModalAvaliacao stateUsuario={{informacoesAvaliado, setInformacoesAvaliado}}></ModalAvaliacao>]
    const idUsuario = sessionStorage.CATEGORIA === "Professor" ? usuario.aluno.id : usuario.professor.id;
    const nomeUsuario = sessionStorage.CATEGORIA === "Professor" ? usuario.aluno.nome.charAt(0) : usuario.professor.nome.charAt(0);
    if (!pedidoAvaliado) {
        return (

            <Box >
                <Button className="modal-button-open" onClick={handleOpen}>Avaliar Aula</Button>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className="modal-avaliacao">
                        <Box className="modal-area">
                            <Box className="modal-head">
                                <AvatarComFoto
                                    id={idUsuario}
                                    nome={nomeUsuario}
                                    sx={{
                                        width: 90,
                                        height: 90,
                                        fontSize: 35
                                    }} />
                                <Box className="modal-usuario">
                                    <Typography id="modal-modal-title" variant="h8" component="h2">
                                        {sessionStorage.CATEGORIA === "Professor" ?
                                            usuario.aluno.nome :
                                            usuario.professor.nome}
                                    </Typography>
                                    <Box className="avaliacao-usuario">
                                        <Rating
                                            className="valor_avaliacao"
                                            value={value}
                                            precision={1}
                                            size="medium"
                                            onChange={(event, newValue) => {
                                                setValue(newValue);
                                            }}>
                                        </Rating>
                                        <Box className="avaliacao-numero">{value}</Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="modal-close">
                                <Button className="button-close" onClick={handleClose}>
                                    <CloseIcon />
                                </Button>
                            </Box>
                        </Box>
                        <Box className="modal-body">
                            <Box className="box-text-input">
                                <TextField className="comentario_avaliacao"
                                    onChange={(e) => setComentario(e.target.value)}
                                    multiline rows={6} />
                            </Box>
                            <Button
                                onClick={() => {
                                    if (validacaoDados()) {
                                        setFormEnviar({ ...formEnviar, dadosEnviar: enviarAvaliacao() })
                                    }
                                }}
                                className="modal-button">Avaliar</Button>
                        </Box>
                    </Box>
                </Modal>
            </Box>
        );
    } else {
        return (
            <Box className="avaliado">
                <Box className="box-avaliado">Avaliado</Box>
            </Box>
        );
    }
}

export default ModalAvaliacao;
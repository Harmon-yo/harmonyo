import React, { useState } from "react";
import './style.css';
import { Button, Box, Typography, Modal, TextField, Autocomplete } from '@mui/material';
import { ModalClose, ModalDialog } from '@mui/joy';
import IconeInstrumento from '../../../Global/IconeInstrumento/index.jsx';
import api from '../../../../api';
import AddIcon from '@mui/icons-material/Add';

function ModalAula(props) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const aula = {
        id: props.aulaState.id,
        instrumento: props.aulaState.instrumento,
        valor: props.aulaState.valor,
    };

    const instrumentos = props.instrumentoState;

    function editarAula() {
        const aulaAtualizacao = {
            valorAula: document.getElementsByName("valor")[0].value,
        }

        console.log(aulaAtualizacao);

        console.log(aula.id);
        api.put(`/aulas/${aula.id}`, aulaAtualizacao,
            { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } }).then((response) => {
                props.reloadState.setReloadPage({ ...props.reloadState, reloadPage: !props.reloadState.reloadPage });
            }).catch((err) => {
                console.log(err);
            });
        handleClose();
    }

    function pegarInstrumento(nome) {
        let instrumento = instrumentos.find((instrumento) => instrumento.nome === nome);
        return instrumento;
    }

    function criarAula() {

        const instrumentoAula = pegarInstrumento(document.getElementsByName("instrumento")[0].value);

        const novaAula = {
            valorAula: document.getElementsByName("valor")[0].value,
            professorId: sessionStorage.ID,
            instrumentoId: instrumentoAula.id,
        }

        api.get(`/aulas/${sessionStorage.ID}`,
            { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } }).then((response) => {
                console.log(response.data);
                let aulaVerificada = response.data.find((aula) => aula.instrumento.id === instrumentoAula.id);

                if (aulaVerificada !== undefined) {
                    api.put(`/aulas/ativar/${aulaVerificada.id}`, {},
                        { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } }).then((response) => {
                            aula.id = aulaVerificada.id;
                            editarAula();
                        }).catch((err) => {
                            console.log(err);
                        });
                } else {
                    api.post(`/aulas`, novaAula,
                        { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } }).then((response) => {
                            props.reloadState.setReloadPage({ ...props.reloadState, reloadPage: !props.reloadState.reloadPage });
                            handleClose();
                        }).catch((err) => {
                            console.log(err);
                        });
                }
            }).catch((err) => {
                console.log(err);
            });
    }

    const [instrumentoIcon, setInstrumentoIcon] = useState("");

    return (
        <Box className="modal">
            {aula.id === "" ?
                <Box className="criar-aula-box">
                    <Button className="criar-aula" onClick={handleOpen}>
                        <Box>
                            <AddIcon sx={{ fontSize: 80 }} />
                            <Typography className="criar-aula-texto">Criar aula</Typography>
                        </Box>
                    </Button>
                </Box> :
                <Button className="modal-button" onClick={handleOpen}>Editar</Button>
            }
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <ModalDialog className="modal-aula">
                    {aula.id === "" ?
                        <Typography className="titulo">Criar aula</Typography> :
                        <Typography className="titulo">Editar aula</Typography>
                    }
                    <Box className="modal-conteudo">
                        <Box className="modal-head">
                            <Box>
                                <Box className="modal-linha">
                                    <Typography className="modal-label">Instrumento:</Typography>
                                    {aula.id !== "" ?
                                        <Autocomplete
                                            disabled
                                            value={aula.instrumento.nome}
                                            disablePortal
                                            id="combo-box-demo"
                                            options={instrumentos.map((option) => option.nome)}
                                            onChange={(event, value) => setInstrumentoIcon(value)}
                                            renderInput={(params) => <TextField name="instrumento" className="modal-input" {...params} label="Instrumento" />}
                                        /> :
                                        <Autocomplete
                                            disablePortal
                                            id="combo-box-demo"
                                            options={instrumentos.map((option) => option.nome)}
                                            onChange={(event, value) => setInstrumentoIcon(value)}
                                            renderInput={(params) => <TextField name="instrumento" className="modal-input" {...params} label="Instrumento" />}
                                        />
                                    }
                                </Box>
                                <Box className="modal-linha">
                                    <Typography className="modal-label">Valor hora aula:</Typography>
                                    {aula.id !== "" ?
                                        <TextField className="modal-input" label="Valor" name="valor" defaultValue={aula.valor.toFixed(2)} /> :
                                        <TextField className="modal-input" label="Valor" name="valor" />
                                    }
                                </Box>
                            </Box>
                            <Box className="modal-icone">
                                {aula.id === "" ?
                                    <IconeInstrumento instrumentoState={instrumentoIcon} tamanhoIcone={"120px"} /> :
                                    <IconeInstrumento instrumentoState={aula.instrumento.nome} tamanhoIcone={"120px"} />
                                }
                            </Box>
                        </Box>
                        <Box className="modal-bottom">
                            {aula.id === "" ?
                                <Button onClick={criarAula} className="modal-button">Criar</Button> :
                                <Button onClick={editarAula} className="modal-button">Salvar</Button>
                            }
                        </Box>
                        <ModalClose onClick={handleClose} />
                    </Box>
                </ModalDialog>
            </Modal>
        </Box>
    );
}

export default ModalAula;
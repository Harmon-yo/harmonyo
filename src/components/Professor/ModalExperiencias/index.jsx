import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {Box, Button, Typography, Modal, TextField, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import "./style.css";
import api from "../../../api";

function ModalExperiencias(props) {


    const [experiencia, setExperiencia] = useState({id: props.idExp, 
                                                        titulo: props.tituloExp, 
                                                        descricao: props.descExp, 
                                                        idProfessor: sessionStorage.getItem("ID")});
    
   

    function atualizarExperiencia() {        

        let url = '';

        if (experiencia.id == undefined && props.isNovaExp) {
            url = '/experiencias'

            let dadosExp = { titulo: experiencia.titulo, descricao: experiencia.descricao, idProfessor: sessionStorage.getItem("ID")}

            api.post(url, dadosExp, { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` }})
            .then(res => {

                alert("Experiência Adicionada com sucesso!")

                setExperiencia({...experiencia, id: res.data.id})

                let expsAtualizadas = props.stateFormDataExps.formData.experiencias;

                expsAtualizadas.push(experiencia)

                props.stateFormDataExps.setFormData({...props.stateFormDataExps.formData, experiencias: expsAtualizadas})
        
                setExperiencia({...experiencia,
                                                titulo: "", 
                                                descricao: "", 
                                })
            })
            .catch(err => {
                alert("Ocorreu um erro sao adicionar sua experiência")
                console.log(err)
            })
        }
        else {
            url = `/experiencias/atualiza-exp/${experiencia.id}`

            console.log(url)

            let dadosExp = { titulo: experiencia.titulo, descricao: experiencia.descricao}

            api.put(url, dadosExp, { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` }}).then(res => {
                
                alert("Experiência atualizada com sucesso!")

                let expsAtualizadas = props.stateFormDataExps.formData.experiencias;

                expsAtualizadas[props.indexExp] = experiencia;

                props.stateFormDataExps.setFormData({...props.stateFormDataExps.formData, experiencias: expsAtualizadas})

            })
            .catch(err => {
                alert("Ocorreu um erro sao adicionar sua experiência")
                console.log(experiencia)
                console.log(err)
            })
        }

        
        
    }
    
    return (
        <>
            <Modal open={props.visibilidade} onClose={props.closeModal}>
                <Box className ="box-modal">
                    <Box className= "box-inputs-modal">
                        <Box className="box-header-modal">
                            <Typography className="txt-header-modal">Adicionar Experiência </Typography>
                            <IconButton aria-label="close" onClick={props.closeModal} sx={{ color: "var(--dark-font)"}} >
                                <CloseIcon sx={{ fontSize: '2rem !important' }} />
                            </IconButton>
                        </Box>

                        <Box className="box-titulo">
                            <Typography className="txt-titulo">Título </Typography>
                            <TextField  onChange={(e) => setExperiencia({...experiencia, titulo: e.target.value})} label="Título" variant="standard" error={""} helperText={""} value={experiencia.titulo} inputProps={{maxLength: 50}}/>         
                        </Box>

                        <Box className="box-descricao">
                            <Typography className="txt-descricao"> Descrição</Typography>
                            <TextField  onChange={(e) => setExperiencia({...experiencia, descricao: e.target.value})} label="Descrição até 100 caracteres" variant="standard" error={""} helperText={""} value={experiencia.descricao} inputProps={{maxLength: 100}}/>   
                        </Box>

                        <Box className="box-button-salvar-adicionar-exp">
                            <Button variant="text" onClick = {atualizarExperiencia} className="button-salvar-adicionar-exp">
                                <Typography variant="inherit">{props.isNovaExp ? 'Adiconar' : 'Salvar'}</Typography>
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </>
    )

}

export default ModalExperiencias;
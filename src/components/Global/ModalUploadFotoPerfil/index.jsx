import React from "react";
import { useState, Component, useEffect } from "react";
import { Box, Button, Typography, Modal, TextField, IconButton, Avatar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import "./style.css";
import api from "../../../api";
import { storage } from "../../../utils/firebase";

function ModalUploadFotoPerfil(props) {

    const [imgTemp, setImgTemp] = useState(props.imgState.imgPerfilURL)

    const [imgUpdloadFirebase, setimgUpdloadFirebase] = useState("")

    const [imgNaoAlterada, setImgNaoAlterada] = useState(true)

    useEffect(() => {
        if (imgTemp != props.imgState.imgPerfilURL) {
            // Define o estado assim que a página carregar
            setImgTemp(props.imgState.imgPerfilURL);
            setImgNaoAlterada(true)  
        }

    },[props.visibilidade])

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file && file.type.startsWith('image/')) {
            setImgTemp(URL.createObjectURL(file))
            setimgUpdloadFirebase(file)
            setImgNaoAlterada(false)
        }
        else {
            alert('Por favor, selecione uma imagem válida.');
        }
    };

    function atualizarFotoDePerfil() {

        const file = imgUpdloadFirebase;

        if (!file) {
            alert("Selecione uma imagem!")
            return;
        }
        else if (imgNaoAlterada) {
            alert("Selecione uma imagem!")
            return;
        }

        // Referência para o local de armazenamento no Firebase
        const storageRef = storage.ref();

        // Crie um nome de arquivo exclusivo para evitar substituições
        const fileName = `/imgs-perfil-usuario/${sessionStorage.getItem("ID")}_ft_perfil`;

        // Referência ao arquivo no Firebase Storage
        const fileRef = storageRef.child(fileName);

        // Faça o upload do arquivo para o Firebase Storage
        fileRef.put(file).then((snapshot) => {
            console.log('Arquivo enviado com sucesso:', snapshot);

            // Obtenha a URL de download do arquivo enviado
            snapshot.ref.getDownloadURL().then((downloadURL) => {
                props.imgState.setImgPerfilURL(downloadURL)

            });
            alert("Sua foto de perfil foi atualizada com sucesso!")

            props.closeModal()
        }).catch(err => {
            console.log(err)
            alert("Ocorreu um erro ao enviar sua imagem. Tente Novamente!")
        });
    }

    return (
        <>
            <Modal open={props.visibilidade} onClose={props.closeModal}>
                <Box className="box-modal-upload-foto-perfil">

                    <Box className="box-header-modal-upload-foto-perfil">
                        <Typography className="txt-header-modal-upload-foto-perfil">Editar Foto de Perfil </Typography>
                        <IconButton aria-label="close" onClick={props.closeModal} sx={{ color: "var(--dark-font)" }} >
                            <CloseIcon sx={{ fontSize: '2rem !important' }} />
                        </IconButton>
                    </Box>

                    <Box className={"box-upload-img"}>
                        <Avatar alt="" src={imgTemp} className="img-perfil-usuario" />
                        <input type="file" className="ipt-select-img"
                            onChange={handleFileChange} />
                    </Box>


                    <Button variant="text" onClick={atualizarFotoDePerfil} className="button-enviar-img">
                        <Typography variant="inherit">Enviar</Typography>
                    </Button>

                </Box>
            </Modal>
        </>
    )
}

export default ModalUploadFotoPerfil;
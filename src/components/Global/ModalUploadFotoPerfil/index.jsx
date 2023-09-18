import React from "react";
import { useState } from "react";
import { Box, Button, Typography, Modal, IconButton } from '@mui/material';
import AvatarComFoto from "../AvatarComFoto";
import CloseIcon from '@mui/icons-material/Close';
import "./style.css";
import { storage } from "../../../utils/firebase";
import { useEffect } from "react";

function ModalUploadFotoPerfil(props) {


    const [imgUpdloadFirebase, setimgUpdloadFirebase] = useState("");

    const [imgUrl, setImgUrl] = useState("");

    const [imgNaoAlterada, setImgNaoAlterada] = useState(true);

    const { recarregarImgPerfil, setRecarregarImgPerfil } = props.imgState;

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file && file.type.startsWith('image/')) {
            setimgUpdloadFirebase(file);
            setImgUrl(URL.createObjectURL(file));
            setImgNaoAlterada(false);
            setRecarregarImgPerfil(true)
        }
        else {
            alert('Por favor, selecione uma imagem válida.');
        }
    };

    const atualizarFotoDePerfil = () => {

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
                props.recarregarTodasImgs(true);
            });
            alert("Sua foto de perfil foi atualizada com sucesso!")

            reiniciarImg();
            props.closeModal()
        }).catch(err => {
            console.log(err)
            alert("Ocorreu um erro ao enviar sua imagem. Tente Novamente!")
        });
    }

    const reiniciarImg = () => {
        setImgUrl("");
        setRecarregarImgPerfil(false);
        setImgNaoAlterada(true);
    };

    const onClose = () => {
        reiniciarImg();
        props.closeModal();
    }

    useEffect(() => {
        setImgUrl(props.imgUrl);
    }, [props.imgUrl])

    return (
        <>
            <Modal open={props.visibilidade} onClose={onClose} >
                <Box className="box-modal-upload-foto-perfil">

                    <Box className="box-header-modal-upload-foto-perfil">
                        <Typography className="txt-header-modal-upload-foto-perfil">Editar Foto de Perfil </Typography>
                        <IconButton aria-label="close" onClick={onClose} sx={{ color: "var(--dark-font)" }} >
                            <CloseIcon sx={{ fontSize: '2rem !important' }} />
                        </IconButton>
                    </Box>

                    <Box className={"box-upload-img"}>
                        <AvatarComFoto
                            className="img-perfil-usuario"
                            id={props.idUsuario}
                            nome={props.nomeUsuario}
                            recarregarImg={recarregarImgPerfil}
                            imgUrl={imgUrl}
                            naoCarregar />
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
import {
    Box,
    Typography,
    Rating
} from "@mui/material";
import { useEffect, useRef } from "react";
import AvatarComFoto from "../../AvatarComFoto/index.jsx";
import ModalUploadFotoPerfil from "../../ModalUploadFotoPerfil/index.jsx";
import "./style.css";

function FotoPerfil(props) {
    // Informações Modal
    const { abrirModalUploadFotoPerfil, visibilidadeModalFotoPerfil, fecharModalFecharModalUploadFotoPerfil} = props.funcoesModal;

    // Informações Usuário
    const { idUsuario, formData } = props.infoUsuario;
    const nomeUsuario = formData.nome;
    const notaAvaliacao = formData.avaliacaoMedia;

    // Informações Imagem
    const { recarregarImgPerfil, setRecarregarImgPerfil } = props.imgPerfilState;
    const recarregarTodasImgs = props.recarregarTodasImgs;

    const avatarImgUrlRef = useRef();
    let avatarImgUrl;
    useEffect(() => {
        if (avatarImgUrlRef.current) {
            avatarImgUrl = avatarImgUrlRef.current.getImgPerfilURL();
        }
    }, [avatarImgUrlRef.current]);

    return (
        <Box className="box-foto-perfil">
            <AvatarComFoto
                id={idUsuario}
                onClick={abrirModalUploadFotoPerfil}
                className="img-perfil"
                nome={nomeUsuario}
                recarregarImg={recarregarImgPerfil}
                ref={avatarImgUrlRef}
            />
            <ModalUploadFotoPerfil idUsuario={idUsuario} imgUrl={avatarImgUrl} visibilidade={visibilidadeModalFotoPerfil} closeModal={fecharModalFecharModalUploadFotoPerfil} imgState={{ recarregarImgPerfil, setRecarregarImgPerfil }} recarregarTodasImgs={recarregarTodasImgs} nomeUsuario={nomeUsuario} />
            <Box className="container-avaliacao">
                <Typography>{formData.avaliacaoMedia.toFixed(2)}</Typography>
                <Rating name="half-rating-read" defaultValue={0} precision={0.5} readOnly size="medium" value={notaAvaliacao} />
            </Box>
            <Typography className="txt-nome">{nomeUsuario}</Typography>
            {/* <Typography className="txt-idade">{formData.idade} Anos</Typography> */}
        </Box>
    );
}

export default FotoPerfil;
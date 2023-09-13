import { Avatar } from "@mui/material";
import { useState, useEffect } from "react";
import { storage } from "../../../utils/firebase";

function AvatarComFoto(props) {
    const idUsuario = props.id;
    const nomeUsuario = props.nome;

    const [imgPerfilURL, setImgPerfilURL] = useState("");
    const [carregarImagem, setCarregarImagem] = useState(false);
    const [erroAoCarregar, setErroAoCarregar] = useState(false);

    const obterImgPerfil = (id) => {
        let urlImg = `/imgs-perfil-usuario/${id}_ft_perfil`;

        storage.ref(urlImg).getDownloadURL()
            .then(url => {
                setImgPerfilURL(url)
                setCarregarImagem(true);
            }).catch(() => {
                setErroAoCarregar(true);
            });
    }

    useEffect(() => {
        if (!props.imgUrl) {
            obterImgPerfil(idUsuario);
        } else {
            setImgPerfilURL(props.imgUrl);
        }
    }, []);

    useEffect(() => {
        obterImgPerfil(idUsuario);
    }, [props.recarregarImg]);
    
    const corDeFundoPerfil = erroAoCarregar ? "#099250" : "#eeeeee";

    const sxAdicional = props.sx ? props.sx : {};
    sxAdicional["bgcolor"] = corDeFundoPerfil;

    return !erroAoCarregar ?
        (<Avatar src={erroAoCarregar ? null : imgPerfilURL}
            className={props.className}
            onClick={props.onClick}
            aria-controls={props.ariaControls}
            aria-haspopup={props.ariaHaspopup}
            aria-expanded={props.ariaExpanded}
            sx={sxAdicional}>
            {erroAoCarregar ? nomeUsuario.charAt(0) : ""}
        </Avatar>) : (<Avatar
            className={props.className}
            onClick={props.onClick}
            aria-controls={props.ariaControls}
            aria-haspopup={props.ariaHaspopup}
            aria-expanded={props.ariaExpanded}
            sx={sxAdicional}>
            {erroAoCarregar ? nomeUsuario.charAt(0) : ""}
        </Avatar>);

}

export default AvatarComFoto;
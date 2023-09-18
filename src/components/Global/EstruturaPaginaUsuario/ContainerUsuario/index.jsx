import React from "react";
import {
    Box
} from "@mui/material";
import "./style.css"
import Notificacao from "../../Notificacao/index.jsx";
import AvatarPopUp from "../../AvatarPopUp/index.jsx";

function Containerusuario(props) {

    return (
        <Box className="container-usuario">
            <Notificacao/>
            <AvatarPopUp recarregarTodasImgs={props.recarregarTodasImgs}/>
        </Box>
    )
}

export default Containerusuario;
import React from "react";
import {
    Box
} from "@mui/material";
import "./style.css"
import Notificacao from "../../molecules/Notificacao/index.jsx";
import AvatarUsuario from "../../molecules/AvatarUsuario/index.jsx";

function Containerusuario(props) {
    return (
        <Box className="container-usuario">
            <Notificacao/>
            <AvatarUsuario/>
        </Box>
    )
}

export default Containerusuario;
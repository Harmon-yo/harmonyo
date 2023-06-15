import React from "react";
import {
    Box
} from "@mui/material";
import "./style.css"
import Notificacao from "../../Notificacao/index.jsx";
import AvatarUsuario from "../../Avatar/index.jsx";

function Containerusuario(props) {
    return (
        <Box className="container-usuario">
            <Notificacao/>
            <AvatarUsuario/>
        </Box>
    )
}

export default Containerusuario;
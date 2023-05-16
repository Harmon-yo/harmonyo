import React from "react";
import {
    Box
} from "@mui/material";
import "./style.css"
import Notificacao from "../../atoms/Notificacao/index.jsx";

function Containerusuario(props) {
    return (
        <Box className="container-usuario">
            <Notificacao/>
            <Box
                component="img"
                src="https://www.w3schools.com/howto/img_avatar.png"
                height={"100%"}
                sx={{
                    borderRadius: "50%",
                }}
            />
        </Box>
    )
}

export default Containerusuario;
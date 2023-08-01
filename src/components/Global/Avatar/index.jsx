import React from "react";
import { Box, Avatar, MenuItem, Typography } from "@mui/material";
import Popup from "../Popup/index.jsx";
import MeuPerfilIcon from "../../../imgs/user.png";
import EditarContaIcon from "../../../imgs/edit.png";
import SairIcon from "../../../imgs/logout.png";
import "./style.css"

const opcoes = [
    {
        id: 1,
        src: MeuPerfilIcon,
        titulo: "Meu Perfil",
    },
    {
        id: 2,
        src: EditarContaIcon,
        titulo: "Configurações",
    },
    {
        id: 3,
        src: SairIcon,
        titulo: "Sair",
    }
]

const nomeUsuario = "L"/* sessionStorage.getItem("NOME") */;

function AvatarUsuario(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <div>
            <Avatar id="avatar-usuario-botao" className="avatar-usuario-img"
                sx={{ bgcolor: "#099250" }}
                aria-controls={open ? 'avatar-usuario-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>{/* nomeUsuario.charAt(0) */}</Avatar>

            <Popup menuId="avatar-usuario-menu" buttonClassName="avatar-usuario-botao"
                anchorEl={anchorEl} open={open} handleClose={handleClose}>
                <Box className="avatar-usuario-menu-user-info">
                    <Avatar id="avatar-usuario-botao" className="avatar-usuario-img"
                        sx={{ bgcolor: "#099250" }}>{/* nomeUsuario.charAt(0) */}</Avatar>
                    <Box className="avatar-usuario-menu-user-info-text">
                        <Typography className="avatar-usuario-menu-nome">{nomeUsuario}</Typography>
                        <Typography className="avatar-usuario-menu-email">{sessionStorage.getItem("EMAIL")}</Typography>
                    </Box>
                </Box>
                <Box className="opcoes-container">
                    {
                        opcoes.map(
                            (opcao) => (
                                <MenuItem key={opcao.id} className="avatar-usuario-menu-item" onClick={handleClose}>
                                    <img src={opcao.src} className="avatar-usuario-menu-item-img" />
                                    <Typography className="avatar-usuario-menu-item-titulo">{opcao.titulo}</Typography>
                                </MenuItem>
                            ))

                    }
                </Box>

            </Popup>
        </div>
    );
}

export default AvatarUsuario;
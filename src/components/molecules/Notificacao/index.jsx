import React from "react";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Badge, Box, Menu, MenuItem, Typography } from "@mui/material";
import PropostaIcon from "../../../imgs/business-proposal.png";
import Popup from "../../atoms/Popup/index.jsx";
import "./style.css"

const notificacoes = [
    {
        id: 1,
        src: PropostaIcon,
        titulo: "Nova Proposta",
        descricao: "O professor Fulano de Tal te enviou uma proposta de aula",
        data: "10/10/2021",
        hora: "10:00",
        tempo: "10 minutos atrás",
        lido: false
    }
]

function Notificacao(props) {
    const [qtdNotificacao, setQtdNotificacao] = React.useState(notificacoes.length);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

    function marcarComoLido() {
        for (let i = 0; i < notificacoes.length; i++) {
            notificacoes[i].lido = true;
        }
        setQtdNotificacao(0);
    }

    return (
        <div>
            <Badge id="notificacao-botao" className="container-usuario-notificacao"
                color="primary" badgeContent={qtdNotificacao}
                aria-controls={open ? 'notificacao-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
                <NotificationsNoneIcon />
            </Badge>

            <Popup menuId="notificacao-menu" buttonClassName="notificacao-botao"
                anchorEl={anchorEl} open={open} handleClose={handleClose}>
                <Box className="notificacao-menu-container-title">
                    <Typography className="notificacao-menu-title">Notificações</Typography>
                    {
                        qtdNotificacao > 0 ? <Typography className="notificacao-menu-lido" onClick={marcarComoLido}>Marcar como lido</Typography>
                            : ""
                    }
                </Box>
                {
                    notificacoes.map(
                        (notificacao) => (
                            <MenuItem key={notificacao.id} className="notificacao-menu-item" onClick={handleClose}
                            sx={{
                                backgroundColor: notificacao.lido ? "#F5F5F5" : "#d7d7d7"
                            }}>
                                <Box className="notificacao-menu-item-info-container">
                                    <img src={notificacao.src} className="notificacao-menu-item-img" />
                                    <Typography>{notificacao.titulo}</Typography>
                                </Box>
                                <Box className="notificacao-menu-item-container-tempo">
                                    <Typography className="notificacao-menu-item-tempo">{notificacao.tempo}</Typography>
                                </Box>
                            </MenuItem>
                        )
                    )
                }
            </Popup>
        </div>
    );
}

export default Notificacao;
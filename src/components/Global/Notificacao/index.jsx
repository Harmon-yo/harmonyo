import React from "react";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Badge, Box, Menu, MenuItem, Typography } from "@mui/material";
import PropostaIcon from "../../../imgs/business-proposal.png";
import Popup from "../Popup/index.jsx";
import "./style.css";
import moment from "moment";
import "moment/locale/pt-br";

const notificacoes = [
    {
        id: 1,
        src: PropostaIcon,
        titulo: "Nova Proposta",
        descricao: "O professor Fulano de Tal te enviou uma proposta de aula",
        data: "10/10/2021",
        hora: "10:00",
        tempo: moment().locale("pt-br").subtract(10, 'minutes').locale("pt-br").fromNow(),
        lido: false
    }
]

function Notificacao(props) {
    const [qtdNotificacao, setQtdNotificacao] = React.useState(notificacoes.length);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = !!anchorEl;

    const abrirNotificacoes = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const fecharNotificacoes = () => {
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
                onClick={abrirNotificacoes}>
                <NotificationsNoneIcon />
            </Badge>

            <Popup menuId="notificacao-menu" buttonClassName="notificacao-botao"
                anchorEl={anchorEl} open={open} handleClose={fecharNotificacoes} className="notificacao-card">
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
                            <MenuItem key={notificacao.id} className="notificacao-menu-item" onClick={fecharNotificacoes}
                            sx={{
                                backgroundColor: !notificacao.lido ? "var(--notificacao-lida)" : "var(--notificacao-nao-lida)"
                            }}>
                                <Box className="notificacao-menu-item-info-container">
                                    <img src={notificacao.src} className="notificacao-menu-item-img" />
                                    <Typography className="notificacao-menu-item-titulo">{notificacao.titulo}</Typography>
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
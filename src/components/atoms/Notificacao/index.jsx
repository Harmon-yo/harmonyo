import React from "react";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Box } from "@mui/material";
import "./style.css"

function Notificacao(props) {
    const [qtdNotificacao, setQtdNotificacao] = React.useState(0);
    return (
        <Box className="notificacao-container" onClick={() => {setQtdNotificacao(qtdNotificacao + 1)}}>
            <NotificationsNoneIcon className="notificacao-img-sino"/>
            {
                qtdNotificacao == 0 ? null 
                : <Box className="notificacao-bg-qtd">
                    <p className="number">{qtdNotificacao < 100 ? qtdNotificacao : "99+"}</p>
                </Box>
            }
        </Box>
    );
}

export default Notificacao;
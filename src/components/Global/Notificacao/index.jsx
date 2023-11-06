import { useState, useEffect } from "react";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Badge, Box, MenuItem, Typography, Pagination } from "@mui/material";
import PropostaIcon from "../../../imgs/business-proposal.png";
import Popup from "../Popup/index.jsx";
import "./style.css";
import moment from "moment";
import "moment/locale/pt-br";

import { over } from "stompjs";
import SockJS from "sockjs-client";

import api from "../../../api.js";

const requisicaoGet = (url) => {
    return api.get(url, { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } });
}

const requisicaoPut = (url, body) => {
    return api.put(url, body, { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } });
}

const wsUrl = "http://localhost:8080/ws";
let sockClient = null;

function Notificacao(props) {
    const idUsuario = sessionStorage.getItem("ID");

    const [paginaAtual, setPaginaAtual] = useState(1);
    const [totalPaginas, setTotalPaginas] = useState(0);

    const [notificacoes, setNotificacoes] = useState([]);
    const [qtdNotificacoes, setQtdNotificacoes] = useState(0);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = !!anchorEl;

    // =================== PAGINACAO ===================

    const mudarPagina = (event, value) => {
        const novaPagina = value - 1;

        setNotificacoes([]);
        sockClient.send("/app/envia-notificacoes", {}, JSON.stringify({
            idUsuario: sessionStorage.getItem("ID"),
            pagina: novaPagina,
        }));

        setPaginaAtual(novaPagina + 1);
    }

    // =================== WEBSOCKET ===================

    const onConnect = () => {
        sockClient.subscribe(`/user/${idUsuario}/notificacao`, (message) => handleMessageSocket(message))

        sockClient.send("/app/envia-notificacoes", {}, JSON.stringify({
            idUsuario: sessionStorage.getItem("ID"),
            pagina: paginaAtual - 1,
        }));
    }

    const handleMessageSocket = (msg) => {
        const corpo = JSON.parse(msg.body);
        const notificacoes = corpo.notificacoes;
        if (corpo.qtdNotificacoesNaoLidas !== undefined) setQtdNotificacoes(corpo.qtdNotificacoesNaoLidas);

        switch (corpo.tipo) {
            case "INIT":
                adicionarNotificacoes(notificacoes);
                break;
            case "ADD":
                adicionarNotificacao(notificacoes);
                break;
        }
    }

    const onError = () => {
        console.log("Erro ao conectar ao websocket. Tentando novamente em 5 segundos!");
        setTimeout(openConnection, 5000);
    }

    const openConnection = () => {
        sockClient = over(new SockJS(wsUrl));
        sockClient.connect({}, onConnect, onError)

    }

    // =================== AUXILIARES ===================

    const adicionarNotificacoes = (pagina) => {
        const notificacoes = pagina.content;

        notificacoes.forEach((notificacao) => {
            notificacao.tempo = moment(notificacao.data).fromNow();
            notificacao.src = PropostaIcon;
        });

        setTotalPaginas(pagina.totalPages);
        setNotificacoes(notificacoes);
    }

    const adicionarNotificacao = (notificacao) => {
        if (paginaAtual !== 1) return;

        notificacao.tempo = moment(notificacao.data).fromNow();
        notificacao.src = PropostaIcon;

        if (notificacoes.length === 5) {
            notificacoes.pop();
        }

        notificacoes.unshift(notificacao);
    }

    const abrirNotificacoes = (event) => setAnchorEl(event.currentTarget);

    const fecharNotificacoes = () => setAnchorEl(null);

    // =================== HANDLERS ===================

    const handleClickNotificacao = (idNotificacao) => {
        requisicaoPut(`/notificacoes/lida/${idNotificacao}`, {}).then((resposta) => {
            if (resposta.status === 200) {
                alert("Lendo a notificacao com id: " + idNotificacao)
                notificacoes.forEach((notificacao) => {
                    if (notificacao.id === idNotificacao) {
                        notificacao.lida = true;
                    }
                });
                setNotificacoes(notificacoes);
            }
        }
        ).catch((erro) => {
            console.log(erro);
        });
    }

    const marcarTodosComoLido = () => {
        requisicaoPut(`/notificacoes/lida-usuario/${idUsuario}`, {}).then((resposta) => {
            if (resposta.status === 200) {
                notificacoes.forEach((notificacao) => {
                    notificacao.lida = true;
                });
                setNotificacoes(notificacoes);
            }
        }
        ).catch((erro) => {
            console.log(erro);
        });
    }

    // =================== USE EFFECT ===================

    useEffect(() => {
        openConnection();
    }, []);

    return (
        <div>
            <Badge id="notificacao-botao" className="container-usuario-notificacao"
                color="primary" badgeContent={qtdNotificacoes}
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
                        qtdNotificacoes > 0 ? <Typography className="notificacao-menu-lido" onClick={marcarTodosComoLido}>Marcar como visto</Typography>
                            : ""
                    }
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px !important'
                }}>
                    {
                        notificacoes.map(
                            (notificacao) => (
                                <MenuItem key={notificacao.id} className="notificacao-menu-item" onClick={() => {
                                    handleClickNotificacao(notificacao.id);
                                }}
                                    sx={{
                                        backgroundColor: !notificacao.lida ? "var(--notificacao-lida)" : "var(--notificacao-nao-lida)"
                                    }}>
                                    <Box className="notificacao-menu-item-info-container">
                                        <img src={notificacao.src} className="notificacao-menu-item-img" alt="" />
                                        <Typography className="notificacao-menu-item-titulo">{notificacao.titulo}</Typography>
                                    </Box>
                                    <Box className="notificacao-menu-item-container-tempo">
                                        <Typography className="notificacao-menu-item-tempo">{notificacao.tempo}</Typography>
                                    </Box>
                                </MenuItem>
                            )
                        )
                    }
                </Box>

                <Box className="paginacao-container">
                    <Pagination count={totalPaginas} size="small" page={paginaAtual} onChange={mudarPagina} />
                </Box>
            </Popup>
        </div>
    );
}

/* 
const obterNotificacoes = () => {
        requisicaoGet(`/notificacoes/usuario/${sessionStorage.ID}`).then((resposta) => {
            const respostaPagina = resposta.data;

            const notificacoes = respostaPagina.content;
            console.log("Recebi a notificacao: ");
            console.log(notificacoes);
            if (resposta.status === 204) {
                setNotificacoes([]);
                return;
            }

            notificacoes.forEach((notificacao) => {
                notificacao.tempo = moment(notificacao.data).fromNow();
                notificacao.src = PropostaIcon;
            });

            setQtdPaginas(respostaPagina.totalPages);

            setNotificacoes(notificacoes);
        }).catch((erro) => {
            console.log(erro);
        });
    }
*/

export default Notificacao;
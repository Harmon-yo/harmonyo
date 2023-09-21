import { useState, useEffect } from "react";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Badge, Box, MenuItem, Typography } from "@mui/material";
import PropostaIcon from "../../../imgs/business-proposal.png";
import Popup from "../Popup/index.jsx";
import "./style.css";
import moment from "moment";
import "moment/locale/pt-br";

import api from "../../../api.js";

const requisicaoGet = (url) => {
    return api.get(url, { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } });
}

const requisicaoPut = (url, body) => {
    return api.put(url, body, { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } });
}

function Notificacao(props) {

    const idUsuario = sessionStorage.getItem("ID");

    const [qtdPaginas, setQtdPaginas] = useState(0);
    const [notificacoes, setNotificacoes] = useState([]);
    const [qtdNotificacao, setQtdNotificacao] = useState(0);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = !!anchorEl;

    const abrirNotificacoes = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const fecharNotificacoes = () => {
        setAnchorEl(null);
    }

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
                if (qtdNotificacao > 0) {
                    setQtdNotificacao(qtdNotificacao - 1);
                }
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
                setQtdNotificacao(0);
            }
        }
        ).catch((erro) => {
            console.log(erro);
        });
    }

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
            setQtdNotificacao(notificacoes.filter((notificacao) => !notificacao.lida).length);
        }).catch((erro) => {
            console.log(erro);
        });
    }

    useEffect(() => {
        obterNotificacoes();
    }, []);


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
                        qtdNotificacao > 0 ? <Typography className="notificacao-menu-lido" onClick={marcarTodosComoLido}>Marcar como visto</Typography>
                            : ""
                    }
                </Box>
                {
                    notificacoes.map(
                        (notificacao) => (
                            <MenuItem key={notificacao.id} className="notificacao-menu-item" onClick={() => {
                                handleClickNotificacao(notificacao.id);
                            }}
                            sx={{
                                backgroundColor: !notificacao.lido ? "var(--notificacao-lida)" : "var(--notificacao-nao-lida)"
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

                {
                    qtdPaginas > 1 ? (<Box sx={{
                        width: "100%",
                        height: "fit-content",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Typography className="notificacao-menu-lido" >Mostrar Todos</Typography>
    
                    </Box>) : ""
                }
            </Popup>
        </div>
    );
}

export default Notificacao;
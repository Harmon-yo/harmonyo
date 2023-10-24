import { Modal, Box, Typography, Button } from "@mui/material";
import React from "react";
import "./style.css";
import PerfilUsuario from "../PerfilUsuario";
import {
  Close as CloseIcon,
  MessageOutlined as MessageIcon,
} from "@mui/icons-material";
import { useEffect } from "react";
import api from "../../../../api.js";
import { useNavigate } from "react-router-dom";
import { db } from "../../../../utils/firebase";
import {
  and,
  collection,
  getDoc,
  getDocs,
  or,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
const requisicaoPut = (url, body) => {
  return api.put(url, body, {
    headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` },
  });
};

const criarBotao = (texto, funcao, className = "confirmar") => {
  return (
    <Button className={`btnModal ${className}`} onClick={funcao}>
      {texto}
    </Button>
  );
};

function ModalDetalhes(props) {
  const pedido = props.pedido;
  const [historico, setHistorico] = React.useState([]);

  const [pedidoPai, setPedidoPai] = React.useState([]);

  const [posicaoFila, setPosicaoFila] = React.useState([]);

  const adicionaAviso = props.adicionaAviso;

  const errosResponse = (error, acao) => {
    switch (error.response.status) {
      case 400:
        adicionaAviso({
          mensagem: `Erro ao ${acao} pedido!`,
          tipo: "erro",
        })
        break;
      case 401:
        adicionaAviso({
          mensagem: `Você não tem permissão para ${acao} este pedido!`,
          tipo: "erro",
        })
        break;
      case 404:
        adicionaAviso({
          mensagem: `Pedido não encontrado!`,
          tipo: "erro",
        })
        break;
      case 409:
        adicionaAviso({
          mensagem: "Você não pode realizar essa ação",
          tipo: "erro",
        })
        break;
      default:
        adicionaAviso({
          mensagem: "Erro desconhecido!",
          tipo: "erro",
        })
        break;
    }
  };

  useEffect(() => {
    if (pedido !== undefined) {
      setHistorico([
        {
          id: 1,
          desc: `${pedido.aluno.nome} fez uma proposta de ${pedido.aula.instrumento.nome
            } para ${pedido.professor.nome} no dia ${new Date(
              pedido.dataAula
            ).toLocaleDateString()}`,
        },
      ]);

      filaEspera();
    }
  }, [pedido]);

  const filaEspera = () => {

    api.get(`/pedidos/fila-espera/pai/${pedido.id}`, {
      headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` },
    }).then((response) => {
      console.log(response.data);
      setPedidoPai({
        nomeAluno: response.data.aluno.nome,
        instrumento: response.data.aula.instrumento.nome,
        dataAula: response.data.dataAula,
      });
    }).catch((error) => {
      console.log(error);
    });

    api.get(`/pedidos/fila-espera/posicao/${pedido.id}`, {
      headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` },
    }).then((response) => {
      console.log(response.data);
      setPosicaoFila(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }

  const navigate = useNavigate();

  const confirmarPedido = () => {
    requisicaoPut(`/pedidos/aceita-pedido`, {
      idPedido: pedido.id,
      idUsuario: sessionStorage.ID,
      motivo: ""
    })
      .then((response) => {
        let status = response.status;

        if (status === 200) {
          adicionaAviso({
            mensagem: "Pedido confirmado com sucesso!",
            tipo: "sucesso",
          })
          navigate(0);
        }
      })
      .catch((error) => {
        errosResponse(error, "confirmar");
      });
  };

  const cancelarPedido = () => {
    requisicaoPut(`/pedidos/cancela-pedido`, {
      idPedido: pedido.id,
      idUsuario: sessionStorage.ID,
      motivo: ""
    })
      .then((response) => {
        let status = response.status;

        if (status === 200) {
          adicionaAviso({
            mensagem: "Pedido cancelado com sucesso!",
            tipo: "sucesso",
          });
          navigate(0);
        }
      })
      .catch((error) => {
        errosResponse(error, "cancelar");
      });
  };

  const recusarPedido = () => {
    requisicaoPut(`/pedidos/recusa-pedido`, {
      idPedido: pedido.id,
      idUsuario: sessionStorage.ID,
      motivo: ""
    })
      .then((response) => {
        let status = response.status;

        if (status === 200) {
          adicionaAviso({
            mensagem: "Pedido recusado com sucesso!",
            tipo: "sucesso",
          });
          navigate(0);
        }
      })
      .catch((error) => {
        errosResponse(error, "recusar");
      });
  };

  const concluirPedido = () => {
    requisicaoPut(`/pedidos/conclui-pedido`, {
      idPedido: pedido.id,
      idUsuario: sessionStorage.ID,
      motivo: ""
    })
      .then((response) => {
        let status = response.status;

        if (status === 200) {
          adicionaAviso({
            mensagem: "Pedido confirmado com sucesso!",
            tipo: "sucesso",
          });
          navigate(0);
        }
      })
      .catch((error) => {
        errosResponse(error, "confirmar");
      });
  };

  const realizarPagamento = () => {
    requisicaoPut(`/pedidos/realiza-pagamento`, {
      idPedido: pedido.id,
      idUsuario: sessionStorage.ID,
      motivo: ""
    })
      .then((response) => {
        let status = response.status;

        if (status === 200) {
          adicionaAviso({
            mensagem: "Pagamento realizado com sucesso!",
            tipo: "sucesso",
          });
          navigate(0);
        }
      })
      .catch((error) => {
        errosResponse(error, "realizar pagamento");
      });
  };

  const getModalButton = (status) => {
    const categoria = sessionStorage.CATEGORIA;

    if (categoria === "Aluno") {
      switch (status) {
        case "Pendente":
          return criarBotao("Cancelar", cancelarPedido, "cancelar");
        case "Aguardando Pagamento":
          return (
            <>
              {criarBotao("Realizar Pagamento", realizarPagamento, "confirmar")}
              {criarBotao("Cancelar", cancelarPedido, "cancelar")}
            </>
          );
        case "Confirmado":
          if (new Date() > new Date(pedido.dataAula)) {
            return criarBotao("Concluir Pedido", concluirPedido, "aceitar");
          }
        default:
          return null;
      }
    } else if (categoria === "Professor") {
      switch (status) {
        case "Pendente":
          return (
            <>
              {criarBotao("Confirmar", confirmarPedido, "confirmar")}
              {criarBotao("Recusar", recusarPedido, "cancelar")}
            </>
          );
        case "Aguardando Pagamento":
          return criarBotao("Cancelar", cancelarPedido, "cancelar");
        default:
          return null;
      }
    }
  };

  async function criarChat() {
    const q = query(
      collection(db, "chats"),
      and(
        where("idProfessor", "==", Number(pedido.professor.id)),
        where("idAluno", "==", Number(pedido.aluno.id))
      )
    );
    const docs = await getDocs(q);
    if (docs.empty) {
      const timestamp = serverTimestamp();
      db.collection("chats")
        .add({
          bloqueado: false,
          idAluno: Number(pedido.aluno.id),
          idProfessor: Number(pedido.professor.id),
          nomeAluno: pedido.aluno.nome.split(" ")[0],
          nomeProfessor: pedido.professor.nome.split(" ")[0],
          timestamp: timestamp,
          ultimaMensagem: "Envie uma mensagem para iniciar a conversa!",
        })
        .then((docRef) => {
          docRef.get().then((doc) => {
            console.log(doc.id);
            navigate("/chat", { state: { idChatAtivo: doc.id, chatAtivo: doc.data() } });
          });
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    } else {
      navigate("/chat", { state: { idChatAtivo: docs.docs[0].id, chatAtivo: docs.docs[0].data() } });
    }
  }
  if (pedido !== undefined)
    return (
      <Modal
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="containerModal">
          <Box className="container-historico">
            <Box className="conteudoTop">
              <Typography className="tituloModal">Informações</Typography>
              <Button
                onClick={() => {
                  props.onClose();
                }}
              >
                <CloseIcon className="icon-color" />
              </Button>
            </Box>
            {sessionStorage.CATEGORIA === "Aluno" ? (
              <PerfilUsuario nome={pedido.professor.nome} />
            ) : (
              <PerfilUsuario nome={pedido.aluno.nome} />
            )}

            <Box className="tudoConteudo">
              <Box className="conteudoB1">
                <Typography className="tituloDetalhe">Instrumento:</Typography>
                <Typography className="valorDetalhe">
                  {pedido.aula.instrumento.nome}
                </Typography>
              </Box>
              <Box className="conteudoB1">
                <Typography className="tituloDetalhe">Data: </Typography>
                <Typography className="valorDetalhe">
                  {new Date(pedido.dataAula).toLocaleDateString() + " às "}
                  {new Date(pedido.dataAula).getHours() < 10
                    ? " 0" + new Date(pedido.dataAula).getHours()
                    : new Date(pedido.dataAula).getHours()}
                  :
                  {new Date(pedido.dataAula).getMinutes() < 10
                    ? "0" + new Date(pedido.dataAula).getMinutes()
                    : new Date(pedido.dataAula).getMinutes()}
                </Typography>
              </Box>
            </Box>
            <Box className="historicoModal">
              <Typography className="tituloModal">Histórico</Typography>
              <Box className="historico-lista">
                {historico.map((item) => {
                  return (
                    <Typography className="descHistorico">
                      {item.desc}
                    </Typography>
                  );
                })}
              </Box>
            </Box>
            {sessionStorage.CATEGORIA === "Professor" && pedido.status.descricao === "Em Fila" ?
              <Box className="filaModal">
                <Typography className="tituloModal">Fila</Typography>
                <Typography>Este pedido está na posição: <b>{posicaoFila}</b></Typography>
                <Typography>Pedido que está no topo da fila:</Typography>
                <Box className="fila-lista">
                  <Typography><b>Aluno:</b> {pedidoPai.nomeAluno}</Typography>
                  <Typography><b>Instrumento:</b> {pedidoPai.instrumento}</Typography>
                  <Typography><b>Data:</b> {new Date(pedidoPai.dataAula).toLocaleDateString()}</Typography>
                </Box>
              </Box>
              : null}
          </Box>
          <Box className="footerModal">
            {pedido.status.descricao === "Aguardando Pagamento" ||
              pedido.status.descricao === "Pendente" ||
              pedido.status.descricao === "Confirmado" ? (
              <Button className="msgChat" onClick={criarChat}>
                <MessageIcon className="icon-color msg-icon" />
                <Typography className="txtChat">Mandar mensagem</Typography>
              </Button>
            ) : null}
            <Box className="botoesModal">
              {getModalButton(pedido.status.descricao)}
            </Box>
          </Box>
        </Box>
      </Modal>
    );
}

export default ModalDetalhes;

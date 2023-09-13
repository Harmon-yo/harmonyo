import { Modal, Box, Typography, Button } from "@mui/material";
import React from "react";
import "./style.css";
import PerfilUsuario from "../PerfilUsuario";
import {
  Close as CloseIcon,
  MessageOutlined as MessageIcon,
} from "@mui/icons-material"
import { useEffect } from "react";
import api from "../../../../api.js";
import { useNavigate } from "react-router-dom";

const requisicaoPut = (url, body) => {
  return api.put(url, body, { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } });
};

const criarBotao = (texto, funcao, className = "confirmar") => {
  return (
    <Button className={`btnModal ${className}`} onClick={funcao}>{texto}</Button>
  );
}


function ModalDetalhes(props) {

  const pedido = props.pedido;
  const [historico, setHistorico] = React.useState([]);

  const erros = props.errosState.erros;

  const adicionaErro = (erro) => {
    props.errosState.setErros([...erros, erro]);
  }

  const errosResponse = (error, acao) => {
    switch (error.response.status) {
      case 400:
        adicionaErro(`Erro ao ${acao} pedido!`);
        break;
      case 401:
        adicionaErro(`Você não tem permissão para ${acao} este pedido!`);
        break;
      case 404:
        adicionaErro("Pedido não encontrado!");
        break;
      case 409:
        adicionaErro("Você não pode realizar essa ação");
        break;
      default:
        adicionaErro("Erro desconhecido!");
        break;
    }
  }

  useEffect(() => {
    if (pedido !== undefined) {
      setHistorico([
        {
          id: 1,
          desc: `${pedido.aluno.nome} fez uma proposta de ${pedido.aula.instrumento.nome} para ${pedido.professor.nome} no dia ${new Date(pedido.dataAula).toLocaleDateString()}`,
        },
        {
          id: 2,
          desc: "Vinicius Silva aceitou a proposta",
        },
      ]);
    }
  }, [props.pedido]);

  const navigate = useNavigate();

  const confirmarPedido = () => {
    requisicaoPut(`/pedidos/aceita-pedido/${pedido.id}`, {}).then((response) => {
      let status = response.status;

      if (status === 200) {
        adicionaErro("Pedido confirmado com sucesso!");
        navigate(0);
      }
    }).catch((error) => {
      errosResponse(error, "confirmar");
    });
  }

  const cancelarPedido = () => {
    requisicaoPut(`/pedidos/cancela-pedido/${pedido.id}`, {}).then((response) => {
      let status = response.status;

      if (status === 200) {
        adicionaErro("Pedido cancelado com sucesso!");
        navigate(0);
      }
    }).catch((error) => {
      errosResponse(error, "cancelar");
    });
  }

  const recusarPedido = () => {
    requisicaoPut(`/pedidos/recusa-pedido/${pedido.id}`, {}).then((response) => {
      let status = response.status;

      if (status === 200) {
        adicionaErro("Pedido recusado com sucesso!");
        navigate(0);
      }
    }).catch((error) => {
      errosResponse(error, "recusar");
    });
  }

  const concluirPedido = () => {
    requisicaoPut(`/pedidos/conclui-pedido/${pedido.id}`, {}).then((response) => {
      let status = response.status;

      if (status === 200) {
        adicionaErro("Pedido confirmado com sucesso!");
        navigate(0);
      }
    }).catch((error) => {
      errosResponse(error, "confirmar");
    });
  }

  const realizarPagamento = () => {
    requisicaoPut(`/pedidos/realiza-pagamento/${pedido.id}`, {}).then((response) => {
      let status = response.status;

      if (status === 200) {
        adicionaErro("Pagamento realizado com sucesso!");
        navigate(0);
      }
    }).catch((error) => {
      errosResponse(error, "realizar pagamento");
    });
  }


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
          )
        case "Confirmado":
          if (new Date() > new Date(pedido.dataAula)) {
            return criarBotao("Concluir Pedido", concluirPedido, "aceitar");
          } else {
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
          )
        case "Aguardando Pagamento":
          return criarBotao("Cancelar", cancelarPedido, "cancelar");
        default:
          return null;
      }
    }

  }

  if (pedido !== undefined) return (
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
          <PerfilUsuario nome={pedido.aluno.nome} />
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
                {new Date(pedido.dataAula).getHours() < 10 ? " 0" + new Date(pedido.dataAula).getHours() : new Date(pedido.dataAula).getHours()}:{new Date(pedido.dataAula).getMinutes() < 10 ? "0" + new Date(pedido.dataAula).getMinutes() : new Date(pedido.dataAula).getMinutes()}
              </Typography>
            </Box>
          </Box>
          <Box className="historicoModal">
            <Typography className="tituloModal">Histórico</Typography>
            <Box className="historico-lista">
              {historico.map((item) => {
                return (
                  <Typography className="descHistorico">{item.desc}</Typography>
                );
              })}
            </Box>
          </Box>
        </Box>
        <Box className="footerModal">
          {
            pedido.status.descricao === "Aguardando Pagamento" || pedido.status.descricao === "Pendente" || pedido.status.descricao === "Confirmado" ?
              <Button className="msgChat">
                <MessageIcon className="icon-color msg-icon" />
                <Typography className="txtChat">Mandar mensagem</Typography>
              </Button>
              : null
          }
          <Box className="botoesModal">
            {getModalButton(pedido.status.descricao)}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default ModalDetalhes;

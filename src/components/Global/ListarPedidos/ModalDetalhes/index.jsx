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

  console.log(props.pedido)

  const confirmarPedido = () => {
    requisicaoPut(`/pedidos/aceita-pedido/${pedido.id}`, {}).then((response) => {
      let status = response.status;
      switch (status) {
        case 200:
          alert("Pedido confirmado com sucesso!");
          navigate(0);
          break;
        case 400:
          alert("Erro ao confirmar pedido!");
          break;
        case 401:
          alert("Você não tem permissão para confirmar este pedido!");
          break;
        case 404:
          alert("Pedido não encontrado!");
          break;
        default:
          alert("Erro desconhecido!");
          break;
      }
    }).catch((error) => {
      console.log(error);
    });
  }

  const cancelarPedido = () => {
    requisicaoPut(`/pedidos/cancela-pedido/${pedido.id}`, {}).then((response) => {
      let status = response.status;
      switch (status) {
        case 200:
          alert("Pedido cancelado com sucesso!");
          navigate(0);
          break;
        case 400:
          alert("Erro ao cancelar pedido!");
          break;
        case 401:
          alert("Você não tem permissão para cancelar este pedido!");
          break;
        case 404:
          alert("Pedido não encontrado!");
          break;
        default:
          alert("Erro desconhecido!");
          break;
      }
    });
  }

  const recusarPedido = () => {
    requisicaoPut(`/pedidos/recusa-pedido/${pedido.id}`, {}).then((response) => {
      let status = response.status;
      switch (status) {
        case 200:
          alert("Pedido recusado com sucesso!");
          navigate(0);
          break;
        case 400:
          alert("Erro ao recusar pedido!");
          break;
        case 401:
          alert("Você não tem permissão para recusar este pedido!");
          break;
        case 404:
          alert("Pedido não encontrado!");
          break;
        default:
          alert("Erro desconhecido!");
          break;
      }
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
              {criarBotao("Realizar Pagamento", "", "confirmar")}
              {criarBotao("Cancelar", cancelarPedido, "cancelar")}
            </>
          )
        case "Confirmado":
          return criarBotao("Cancelar", cancelarPedido, "cancelar");
        case "Concluído":
          return criarBotao("Avaliar", abrirModalAvaliacao, "avaliar");
        default:
          return null;
      }
    } else {
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
        case "Concluído":
          return criarBotao("Avaliar", abrirModalAvaliacao, "avaliar");
        default:
          return null;
      }
    }
  }

  const abrirModalAvaliacao = () => {
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

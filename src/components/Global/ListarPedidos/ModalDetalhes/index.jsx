import { Modal, Box, Typography, Button } from "@mui/material";
import React from "react";
import "./style.css";
import PerfilUsuario from "../PerfilUsuario";
import Close from "../../../../imgs/close.png";
import Messenger from "../../../../imgs/messenger.png";
function ModalDetalhes(props) {
  console.log(props);

  const dados = [
    {
      id: 1,
      desc: "Caio Xamps fez uma proposta",
    },
    {
      id: 2,
      desc: "Vinicius Silva aceitou a proposta",
    },
  ];

  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="containerModal">
        <Box className="conteudoTop">
          <Typography className="tituloModal">Informações</Typography>
          <Button
            onClick={() => {
              props.onClose();
            }}
          >
            <img src={Close} />
          </Button>
        </Box>
        <PerfilUsuario nome={props.pedido.nome} />
        <Box className="tudoConteudo">
          <Box className="conteudoB">
            <Box className="conteudoB1">
              <Typography className="tituloDetalhe">Instrumento:</Typography>
              <Typography className="valorDetalhe">
                {props.pedido.instrumento}
              </Typography>
            </Box>
            <Box className="conteudoB1">
              <Typography className="tituloDetalhe">Data: </Typography>
              <Typography className="valorDetalhe">
                {props.pedido.data}
              </Typography>
            </Box>
          </Box>
          <Box className="conteudoB">
            <Box className="conteudoB1">
              <Typography className="tituloDetalhe">Instrumento:</Typography>
              <Typography className="valorDetalhe">
                {props.pedido.instrumento}
              </Typography>
            </Box>
            <Box className="conteudoB1">
              <Typography className="tituloDetalhe">Data: </Typography>
              <Typography className="valorDetalhe">
                {props.pedido.data}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="historicoModal">
          <Typography className="tituloModal">Histórico</Typography>
          {dados.map((item) => {
            return (
              <Typography className="descHistorico">{item.desc}</Typography>
            );
          })}
        </Box>
        <Box className="footerModal">
            <Button className="msgChat">
                <img src={Messenger} />
                <Typography className="txtChat">Mandar mensagem</Typography>
            </Button>
            <Box className = "botoesModal">
            <Button disableElevation className="btnModal recusar">Recusar</Button>
            <Button className="btnModal aceitar">Aceitar</Button>
            </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default ModalDetalhes;

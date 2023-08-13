import { Modal, Box, Typography, Button } from "@mui/material";
import React from "react";
import "./style.css";
import PerfilUsuario from "../PerfilUsuario";
import Close from "../../../../imgs/close.png";
import Messenger from "../../../../imgs/messenger.png";
import { useEffect } from "react";
function ModalDetalhes(props) {
  
  const [pedido, setPedido] = React.useState();
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
  useEffect(() => {
    setPedido(props.pedido);
  }, [props.pedido]);
  console.log(props.pedido)
  console.log(pedido);

if(pedido != undefined)  return (
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
        <PerfilUsuario nome={pedido.aluno.nome} />
        <Box className="tudoConteudo">
          <Box className="conteudoB">
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
                { new Date(pedido.dataAula).getHours() < 10 ? " 0" + new Date(pedido.dataAula).getHours() : new Date(pedido.dataAula).getHours()}:{new Date(pedido.dataAula).getMinutes() < 10 ? "0" + new Date(pedido.dataAula).getMinutes() : new Date(pedido.dataAula).getMinutes()}
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

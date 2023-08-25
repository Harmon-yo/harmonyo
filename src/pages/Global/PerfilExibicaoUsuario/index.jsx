import React, { useEffect, useRef } from "react";
import EstruturaPaginaUsuario from "../../../components/Global/EstruturaPaginaUsuario/Main";
import { Box, Avatar, Rating, Button } from "@mui/material";
import Card from "../../../components/Global/Card";
import "./style.css";

function PerfilExibicaoUsuario() {
  const id = useRef(new URLSearchParams(window.location.search).get("id"))

  const [idUsuario, setIdUsuario] = React.useState(0)
  useEffect(()=>{
      setIdUsuario(id)
      console.log(idUsuario)
  }, idUsuario)

  return (
    <EstruturaPaginaUsuario className="teste">
      <Box className="pagina">
        <Box className="pagina-perfil">
          <Card className="card-perfil">
            <Box className="topo-card">
              <Avatar className="avatar-perfil" sx={{ width: 100, height: 100 }}></Avatar>
              <Box className="duracao">
                <h3>Tempo médio de resposta</h3>
                <Box>1 hora</Box>
              </Box>
            </Box>
            <Box className="nome">Nome</Box>
            <Box className="avaliacao-usuario">
              <Rating value={5} readOnly></Rating>
              <Box className="avaliacao-numero">0.0</Box>
            </Box>
            <Box className="instrumentos">
              <Box className="item-instumento">Violão</Box>
              <Box className="item-instumento">Teclado</Box>
              <Box className="item-instumento">Violino</Box>
            </Box>
            <Box>profissão</Box>
            <Box>onde mora</Box>
          </Card>
        </Box>
        <Box className="pagina-informacoes">
          <Card className="card-agendar">
            <Button className="botao">agendar aula</Button>
          </Card>
          <Card className="card-geral">
            <Box className="card-titulo">Biografia</Box>
            <Box>Falando sobre ele, sei lá é tudo texto isso aqui</Box>
          </Card>
          <Card className="card-geral">
            <Box className="card-titulo">Formações</Box>
            <Box>Se formou na internet</Box>
          </Card>
          <Card className="card-geral">
            <Box className="card-titulo">Avaliações</Box>
            <Box className="avaliacao">
              <Box className="avaliacao-titulo">
                <Avatar sx={{ width: 40, height: 40 }}></Avatar>
                <Box className="avaliacao-nome">Nome</Box>
                <Rating value={5} readOnly></Rating>
                <Box className="avaliacao-numero">0.0</Box>
              </Box>
              <Box className="avaliacao-texto">eu avaliei esse cara muito bem, ele toca musica como se fosse um músico</Box>
            </Box>
            <Box className="avaliacao">
              <Box className="avaliacao-titulo">
                <Avatar sx={{ width: 40, height: 40 }}></Avatar>
                <Box className="avaliacao-nome">Nome</Box>
                <Rating value={5} readOnly></Rating>
                <Box className="avaliacao-numero">0.0</Box>
              </Box>
              <Box className="avaliacao-texto">eu avaliei esse cara muito bem, ele toca musica como se fosse um músico</Box>
            </Box>
          </Card>
        </Box>
      </Box>
    </EstruturaPaginaUsuario>
  );
}


export default PerfilExibicaoUsuario;
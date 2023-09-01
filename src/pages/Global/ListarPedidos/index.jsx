import React from "react";
import EstruturaPaginaUsuario from "../../../components/Global/EstruturaPaginaUsuario/Main";
import { Box, Button, Typography } from "@mui/material";
import "./style.css";
import CabecalhoPagina from "../../../components/Global/ListarPedidos/CabecalhoPagina";
import Tabela from "../../../components/Global/ListarPedidos/Tabela";
import ModalDetalhes from "../../../components/Global/ListarPedidos/ModalDetalhes";
// import { Container } from './styles';

function ListarPedidos() {

  return (
    <EstruturaPaginaUsuario tela="pedidos">
      <Box className="pagina-container">
        <Box className="pagina-conteudo">
          <CabecalhoPagina />
          <Box className="divider"/>
          <Tabela/>
        </Box>
      </Box>
     
    </EstruturaPaginaUsuario>
  );
}

export default ListarPedidos;

import React, { useEffect } from "react";
import EstruturaPaginaUsuario from "../../../components/Global/EstruturaPaginaUsuario/Main";
import { Box, Button, Typography } from "@mui/material";
import "./style.css";
import CabecalhoPagina from "../../../components/Global/ListarPedidos/CabecalhoPagina";
import Tabela from "../../../components/Global/ListarPedidos/Tabela";
import ModalDetalhes from "../../../components/Global/ListarPedidos/ModalDetalhes";
import { verificarToken } from "../../../utils";
import { useNavigate } from "react-router-dom";

function ListarPedidos() {
  const [erros, setErros] = React.useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (verificarToken()) navigate(-1);
  }, []);

  return (
    <EstruturaPaginaUsuario tela="pedidos" errosState={{erros, setErros}}>
      <Box className="pagina-container">
        <Box className="pagina-conteudo">
          <CabecalhoPagina />
          <Box className="divider"/>
          <Tabela errosState={{erros, setErros}}/>
        </Box>
      </Box>
     
    </EstruturaPaginaUsuario>
  );
}

export default ListarPedidos;

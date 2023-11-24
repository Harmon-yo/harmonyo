import React, { useEffect } from "react";
import EstruturaPaginaUsuario from "../../../components/Global/EstruturaPaginaUsuario/Main";
import { Box } from "@mui/material";
import "./style.css";
import CabecalhoPagina from "../../../components/Global/ListarPedidos/CabecalhoPagina";
import Tabela from "../../../components/Global/ListarPedidos/Tabela";
import { verificarToken } from "../../../utils";
import { useNavigate } from "react-router-dom";

function ListarPedidos() {
  const [erros, setErros] = React.useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (verificarToken()) navigate(-1);
  }, []);

  const [filtro, setFiltro] = React.useState({
    status: "Sem Filtro",
    dataInicio: null,
    dataFim: null,
    nomeFiltro: "",
  });

  return (
    <EstruturaPaginaUsuario tela="pedidos" errosState={{erros, setErros}}>
      <Box className="pagina-container">
        <Box className="pagina-conteudo">
          <CabecalhoPagina filtroState={{filtro, setFiltro}}/>
          <Box className="divider"/>
          <Tabela errosState={{erros, setErros}} filtroState={{filtro, setFiltro}}/>
        </Box>
      </Box>
     
    </EstruturaPaginaUsuario>
  );
}

export default ListarPedidos;

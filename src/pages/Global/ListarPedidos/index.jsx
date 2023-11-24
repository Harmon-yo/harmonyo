import { useState, useEffect } from "react";
import EstruturaPaginaUsuario from "../../../components/Global/EstruturaPaginaUsuario/Main";
import { Box } from "@mui/material";
import "./style.css";
import CabecalhoPagina from "../../../components/Global/ListarPedidos/CabecalhoPagina";
import Tabela from "../../../components/Global/ListarPedidos/Tabela";
import { verificarToken } from "../../../utils";
import { useNavigate } from "react-router-dom";

function ListarPedidos() {
  const [avisos, setAvisos] = useState([]);

  const navigate = useNavigate();

  const adicionaAviso = (aviso) => {
    setAvisos([...avisos, aviso]);
  }


  useEffect(() => {
    if (verificarToken()) navigate(-1);
  }, []);

  const [filtro, setFiltro] = useState({
    status: "Sem Filtro",
    dataInicio: null,
    dataFim: null,
    nomeFiltro: "",
  });

  return (
    <EstruturaPaginaUsuario tela="pedidos" avisosState={{avisos, setAvisos}}>
      <Box className="pagina-container">
        <Box className="pagina-conteudo">
          <CabecalhoPagina filtroState={{filtro, setFiltro}}/>
          <Box className="divider"/>
          <Tabela adicionaAviso={adicionaAviso} filtroState={{filtro, setFiltro}}/>
        </Box>
      </Box>
     
    </EstruturaPaginaUsuario>
  );
}

export default ListarPedidos;

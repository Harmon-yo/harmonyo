import { useState, useEffect } from "react";
import NavbarLateral from "../NavbarLateral/Main/index.jsx";
import ContainerUsuario from "../ContainerUsuario/index.jsx";
import { Box, Alert, IconButton } from "@mui/material";
import Loading from "../../../../pages/Global/Loading/index.jsx";

import { Close as CloseIcon } from "@mui/icons-material";
import "./style.css";

/* =================== Navbar ======================== */

function selectAviso(aviso, setAvisosState, avisos, index) {
  let tipoAviso;

  switch (aviso.tipo) {
    case "sucesso":
      tipoAviso = "success";
      break;
    case "erro":
      tipoAviso = "error";
      break;
  }

  return (<Alert
    key={index}
    severity={tipoAviso}
    action={
      <IconButton
        aria-label="close"
        color="inherit"
        size="small"
        onClick={() => setAvisosState(avisos.filter((_, i) => i !== index))}
      >
        <CloseIcon fontSize="inherit" />
      </IconButton>
    }
    sx={{
      zIndex: 1000,
    }}
  >
    {aviso.mensagem}
  </Alert>)
}

function EstruturaPaginaUsuario(props) {
  const [avisos, setAvisos] = useState([]);
  const avisosState = props.avisosState;

  const [recarregarImgPagina, setRecarregarImgPagina] = useState(false);
  const recarregarTodasImgs = props.recarregarTodasImgs;


  const [carregarPagina, setCarregarPagina] = useState(true);
  const carregarPaginaForcado = props.carregarPaginaForcado;

  useEffect(() => {
    if (avisosState) {
      setAvisos(avisosState.avisos);
    }
  }, [avisosState]);

  useEffect(() => {
    if (recarregarTodasImgs) {
      setRecarregarImgPagina(recarregarTodasImgs);
    }
  }, [recarregarTodasImgs]);


  return (
    <Box className="mui-root">
      <Box className="erro-container">
        {avisos &&
          avisos.map((erro, index) => {
            return selectAviso(erro, avisosState.setAvisos, avisosState.avisos, index);
          })}
      </Box>
      <NavbarLateral tela={props.tela} />
      <Box className="pagina-padrao-container">
        <ContainerUsuario recarregarTodasImgs={recarregarTodasImgs} />
        {carregarPagina ? props.children : <Loading />}
      </Box>
    </Box>
  );
}

export default EstruturaPaginaUsuario;

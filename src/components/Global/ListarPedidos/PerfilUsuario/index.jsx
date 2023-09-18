import React from "react";
import "./style.css";
import { Box, Typography } from "@mui/material";
import AvatarComFoto from "../../AvatarComFoto";
import { useNavigate } from "react-router-dom";

function PerfilUsuario(props) {

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handleClose = () => {
      setAnchorEl(null);
      navigate("/exibicao-perfil?id=" + props.id);
  }  

  return (
    <Box onClick={()=> handleClose()} key={`usuario-pedido-${props.id}`} className="perfil-container">
      <AvatarComFoto
        id={props.id}
        nome={props.nome.toUpperCase()}
        className="avatar"
      />
        <Typography className="nome">{props.nome}</Typography>
      
    </Box>
  );
}

export default PerfilUsuario;

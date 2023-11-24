import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Box,
    Typography,
    Alert,
    IconButton
} from "@mui/material";
import Card from "../../components/Global/Card/index.jsx"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Logo from "../../components/Global/Logo/index.jsx";

import { Close as CloseIcon } from "@mui/icons-material";


function selectAviso(aviso, setAvisosState, avisos, index) {
  let tipoAviso;

  switch (aviso.tipo) {
    case "sucesso":
      tipoAviso = "success";
      break;
    case "erro":
      tipoAviso = "error";
      break;
    default:
      tipoAviso = "info";
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

function Design(props) {
    const classes = props.styles;

    const [avisos, setAvisos] = useState([]);

    const avisosState = props.avisosState;

    useEffect(() => {
        if (avisosState) {
            setAvisos(avisosState.avisos);
        }
    }, [avisosState]);

    return (
        <Box sx={classes.background} onKeyDown={props.onKeyDown}>
            <Box sx={classes.voltarContainer}>
                <Link to="/" style={{ color: 'black', fontWeight: 'bolder' }}>{<ArrowBackIosNewIcon />}</Link>
            </Box>
            <Box sx={classes.erroContainer}>
                {
                    avisos &&
                        avisos.map((erro, index) => {
                          return selectAviso(erro, avisosState.setAvisos, avisosState.avisos, index);
                        })
                }
            </Box>
            <Card className="" sx={classes.formCard}>
                <Logo height={{ xs: '10px', sm: '25px', xl: '35px' }} />
                <Typography sx={classes.formTitle}>{props.titulo}</Typography>
                {
                    props.children
                }
            </Card>
        </Box>

    );
}

export default Design;
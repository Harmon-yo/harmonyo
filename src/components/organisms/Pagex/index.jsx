import React from 'react';
import { Box, Container, Typography, Button } from "@mui/material";
import Wave from '../../../pages/Wave.svg'
import "./style.css"


/* Mudar de nome depois */
function Pagex(props) {
  return (
    <Box className={props.main ? "main" : "teste"}>
      {
        props.main &&
        <img src={Wave} className="img-wave" />
      }
      <Container className="teste-container">
        <Typography variant="h2" className="title">
          Descubra sua harmonia com a música
        </Typography>

        <Typography variant="subtitle1" className='subtitle'>
          Quer seja um novato ou um músico experiente, nossa plataforma
          conecta você com os melhores professores de música da nossa
          plataforma para desbloquear todo o seu potencial musical.
        </Typography>

        <Button
          variant="contained"
          disableElevation={true}
          href={"/cadastro"}
          className="button-criar-conta">
          Criar Conta
        </Button>
      </Container>
    </Box>
  );
}

export default Pagex;
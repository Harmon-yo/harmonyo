import React from 'react';
import { Box, Container, Typography, Button } from "@mui/material";
import Wave from '../../../pages/Wave.svg'
import "./style.css"
import BoxWithContainer from '../../atoms/BoxWithContainer';


/* Mudar de nome depois */
function Hero(props) {
  return (
    <>
      <BoxWithContainer
        boxClassName={`home-${props.className}`}
        containerClassName="home-content-container">

        {
          props.main &&
          <img src={Wave} className="img-wave" />
        }

        <Typography variant="h2" className="titulo">
          Descubra sua harmonia com a música
        </Typography>

        <Typography variant="subtitle1" className='subtitulo'>
          Quer seja um novato ou um músico experiente, nossa plataforma
          conecta você com os melhores professores de música da nossa
          plataforma para desbloquear todo o seu potencial musical.
        </Typography>

        <Button
          variant="contained"
          disableElevation={true}
          href={"/cadastro"}
          className="botao-criar-conta">
          Criar Conta
        </Button>
      </BoxWithContainer>
    </>
  );
}

export default Hero;
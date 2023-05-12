import React from 'react';
import { Typography, Button } from "@mui/material";
import { useState } from 'react';
import Wave from '../../../pages/Wave.svg'
import "./style.css"
import BoxWithContainer from '../../atoms/BoxWithContainer';


/* Mudar de nome depois */
function Hero2(props) {

  return (
    <>
      <section className="hero-section">
        <BoxWithContainer
          boxClassName="hero-box"
          containerClassName="hero-container">

          <img src={Wave} className="hero-img-wave" />


          <Typography variant="h2" className="hero-titulo">
            Descubra sua harmonia com a música
          </Typography>

          <Typography variant="subtitle1" className='hero-subtitulo'>
            Quer seja um novato ou um músico experiente, nossa plataforma
            conecta você com os melhores professores de música da nossa
            plataforma para desbloquear todo o seu potencial musical.
          </Typography>

          <Button
            variant="contained"
            onClick={props.onClickCriarConta}
            disableElevation={true}
            href={""}
            className="botao-criar-conta">
            Criar Conta
          </Button>
        </BoxWithContainer>
      </section>

    </>
  );
}

export default Hero2;
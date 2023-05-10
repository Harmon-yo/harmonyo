import React from 'react';
import { Typography, Button } from "@mui/material";
import { useState } from 'react';
import Wave from '../../../pages/Wave.svg'
import "./style.css"
import BoxWithContainer from '../../atoms/BoxWithContainer';
import ModalCriarConta from "../ModalCriarConta/index.jsx"


/* Mudar de nome depois */
function Hero2(props) {
  const [open, setOpen] = useState(false);
  const abrirModalCriarConta = () => setOpen(true);
  const fecharModalCriarConta = () => setOpen(false);

  return (
    <>
      <section className="section-hero">
        <BoxWithContainer
          boxClassName={`home-${props.className}`}
          containerClassName="home-content-container">

          <img src={Wave} className="img-wave" />


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
            onClick={abrirModalCriarConta}
            disableElevation={true}
            href={""}
            className="botao-criar-conta">
            Criar Conta
          </Button>
          <ModalCriarConta open = {open} closeModal = {fecharModalCriarConta}/>
        </BoxWithContainer>
      </section>

    </>
  );
}

export default Hero2;
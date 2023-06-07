import React from "react";
import BoxWithContainer from "../../atoms/BoxWithContainer";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import wave from "../../../imgs/wave-como-funciona.png"
import Card from "../../atoms/Card";
import UserIcon from "../../../imgs/Icon-usuario-como-funciona.png"
import EncontrarProfessorIcon from "../../../imgs/icon-encontrar-professor-como-funciona.png"
import CalendarioIcon from "../../../imgs/Icon-calendario-como-funciona.png"
import CheckIcon from "../../../imgs/Icon-check-como-funciona.png"
import GerenciarAulasIcon from "../../../imgs/icone-gerenciar-aulas.png"
import ResultadosIcon from "../../../imgs/icone-resultados.png"

import "./style.css"

const cardsAluno = [
    {
        key: 'card-cadastro-aluno',
        titulo: 'Cadastro', 
        texto: 'Realize seu cadastro como aluno', 
        src: UserIcon, 
        imgClass: 'icone-usuario'
    },
    {
        key: 'card-encontrar-professores',
        titulo: 'Encontre um Professor', 
        texto: 'Encontre o professor ideal para você.', 
        src: EncontrarProfessorIcon, 
        imgClass: 'icone-encontrar-professor'
    },
    {
        key: 'card-agendar-aula',
        titulo: 'Agende sua Aula', 
        texto: 'Realiza uma proposta de aula para o professor.', 
        src: CalendarioIcon, 
        imgClass: 'icone-calendario'
    },
    {
        key: 'card-realizar-aula-aluno',
        titulo: 'Realize sua  Aula', 
        texto: 'Realize sua aula no dia e hora marcado com o professor.', 
        src: CheckIcon, 
        imgClass: 'icone-check'
    },
]

const cardsProfessor = [
    {
        key: 'card-cadastro-professor',
        titulo: 'Cadastro', 
        texto: 'Realize seu cadastro como professor', 
        src: UserIcon, 
        imgClass: 'icone-usuario'
    },
    {
        key: 'card-gerenciar-aulas',
        titulo: 'Gerencie suas Aulas', 
        texto: 'Cadastre suas aulas e gerencie seus pedidos.', 
        src: GerenciarAulasIcon, 
        imgClass: 'icone-gerenciar-aulas'
    },
    {
        key: 'card-relizar-aula-professor',
        titulo: 'Realize sua  Aula', 
        texto: 'Realize sua aula no dia e hora marcado com o aluno.', 
        src: CheckIcon, 
        imgClass: 'icone-check'
    },
    {
        key: 'card-resultados',
        titulo: 'Resultados', 
        texto: 'Acompanhe sua evolução e monitore seus resultados.', 
        src: ResultadosIcon, 
        imgClass: 'icone-resultados'
    },
]

function ComoFunciona(props) {
    

    const [value, setValue] = React.useState(0);

    const handleChange = (evento, novoValor) => {
        setValue(novoValor)
    };

    function getTabProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <section className="section-como-funciona">
            <BoxWithContainer
                boxClassName="como-funciona-box"
                containerClassName="como-funciona-container">
                    <Typography className="title como-funciona-titulo">Como funciona</Typography>                   

                    <Box className="como-funciona-cards">

                    <Tabs value={value} onChange={handleChange} aria-label="tabs">
                        <Tab label="Aluno" {...getTabProps(0)} className="tabs-como-funciona-label" />
                        <Tab label="Professor" {...getTabProps(1)} className="tabs-como-funciona-label" />
                    </Tabs>

                    <Box className= "box-cards">
                        {
                            value === 0 ? 
                            cardsAluno.map((card) => (
                                <Card key={card.key} className="card-como-funciona">
                                    <img src={card.src} alt="" className={card.imgClass}/>
                                    <Box>
                                    <Typography className="card-titulo">
                                        {card.titulo}           
                                    </Typography>

                                    <Typography className="card-texto">
                                        {card.texto}
                                    </Typography>
                                    </Box>
                                </Card>
                            )) 
                            :
                            cardsProfessor.map((card) => (
                                <Card key={card.key} className="card-como-funciona">
                                    <img src={card.src} alt="" className={card.imgClass}/>
                                    <Box>
                                    <Typography className="card-titulo">
                                        {card.titulo}           
                                    </Typography>

                                    <Typography className="card-texto">
                                        {card.texto}
                                    </Typography>
                                    </Box>
                                </Card>
                            )) 
                        }
                    </Box>
                </Box>
                    
                    
            </BoxWithContainer>
            <img src={wave} className="wave-como-funciona-img" />
        </section>
    );
}

export default ComoFunciona;
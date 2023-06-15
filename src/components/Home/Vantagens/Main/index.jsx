import React from 'react';
import BoxWithContainer from '../../BoxWithContainer';
import Box from "@mui/material/Box"
import Card from "../../../Global/Card";
import PaymentIcon from '@mui/icons-material/Payment';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import "./style.css";
import { Typography } from '@mui/material';

const cards = [
    {
        key: "vantagens-pagamento-seguro",
        titulo: "Pagamento Seguro",
        texto: "Pagamentos são realizados através de uma plataforma segura, que garante a segurança de todos os envolvidos",
        icon: <PaymentIcon className="vantagens-icon"/>,
    },
    {
        key: "vantagens-chat",
        titulo: "Chat Integrado",
        texto: "Conectamos alunos e professores, para realizar feedbacks e orientações personalizadas na aprendizagem musical",
        icon: <ChatBubbleOutlineIcon className="vantagens-icon"/>,
    },
    {
        key: "vantagens-emprestimo-de-instrumento",
        titulo: "Empréstimo",
        texto: "Professores podem emprestar instrumentos para alunos, para que possam praticar em durante as aulas",
        icon: <ChatBubbleOutlineIcon className="vantagens-icon"/>
    }
];

function Vantagens(props) {
    return (
        <section id="vantagens">
            <BoxWithContainer
                boxClassName="vantagens-box"
                containerClassName="vantagens-container">
                <Box className="vantagens-primeiro-container">
                    <Typography className="vantagens-titulo">
                        Nossas funcionalidades especiais para você
                    </Typography>
                    <Typography className="vantagens-subtitulo">
                        Providenciamos diversas funcionalidades para todos.
                    </Typography>
                </Box>
                <Box className="vantagens-segundo-container">
                    {
                        cards.map((card) => (
                            <Card key={card.key} className="vantagens-card">
                                <Box className="vantagens-icon-container">
                                    {card.icon}
                                </Box>

                                <Box className="vantagens-card-conteudo">
                                    <Typography className="vantagens-card-titulo home-titulo">
                                        {card.titulo}
                                    </Typography>

                                    <Typography className="vantagens-card-texto">
                                        {card.texto}
                                    </Typography>
                                </Box>
                            </Card>
                        ))
                    }
                </Box>
            </BoxWithContainer>
        </section>
    );
}

export default Vantagens;
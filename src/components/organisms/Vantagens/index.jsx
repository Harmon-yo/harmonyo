import React from 'react';
import BoxWithContainer from '../../atoms/BoxWithContainer';
import Box from "@mui/material/Box"
import Card from "../../atoms/Card";
import vantagensPagamentoSeguro from "../../../imgs/vantagens-pagamento-seguro.png";
import vantagensChat from "../../../imgs/vantagens-chat.png";
import "./style.css";
import { Typography } from '@mui/material';

const cards = [
    {
        key: "vantagens-pagamento-seguro",
        titulo: "Pagamento Seguro",
        texto: "A plataforma oferece segurança no pagamento para investir em educação musical com tranquilidade.",
        img: vantagensPagamentoSeguro,
    },
    {
        key: "vantagens-chat",
        titulo: "Chat entre professor e aluno",
        texto: "Nosso chat integrado permite comunicação em tempo real entre aluno e professor, para realizar feedbacks e orientações personalizadas na aprendizagem musical",
        img: vantagensChat,
    },
    {
        key: "vantagens-emprestimo-de-instrumento",
        titulo: "Empréstimo de instrumento do professor",
        texto: "Professores oferecem instrumentos para empréstimo, permitindo que alunos experimentem diferentes opções sem gastar muito dinheiro em um novo instrumento.",
    }
];

function Vantagens(props) {
    return (
        <section id="vantagens">
            <BoxWithContainer
                boxClassName="vantagens-box"
                containerClassName="vantagens-container">
                <h1 className="title vantagens-title">Vantagens</h1>
                <Box className="vantagens-container-cards">
                    {

                        cards.map((card) => (
                            <Card key={card.key} className="vantagem-card">
                                <Box className="vantagem-card-img-container">
                                    <Box
                                        className="vantagem-card-img"
                                        component="img"
                                        src={card.img}
                                        alt={card.alt} />
                                </Box>
                                <Box
                                    className="vantagens-card-title-container">
                                    <Typography variant="h6" className="vantagem-card-title">{card.titulo}</Typography>
                                </Box>
                                <Typography variant="subtitle" className="vantagem-card-description">{card.texto}</Typography>
                            </Card>
                        ))

                    }
                </Box>
            </BoxWithContainer>
        </section>
    );
}

export default Vantagens;
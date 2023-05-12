import React from 'react';
import BoxWithContainer from '../../atoms/BoxWithContainer';
import Box from "@mui/material/Box"
import Card from "../../atoms/Card";
import vantagensPagamentoSeguro from "../../../imgs/vantagens-pagamento-seguro.png";
import vantagensChat from "../../../imgs/vantagens-chat.png";
import "./style.css";

const cards = {
    pagamentoSeguro: {
        titulo: "Pagamento Seguro",
        texto: "A plataforma oferece segurança no pagamento para investir em educação musical com tranquilidade.",
        img: vantagensPagamentoSeguro,
    },
    chatEntreProfessorEAluno: {
        titulo: "Chat entre professor e aluno",
        texto: "Nosso chat integrado permite comunicação em tempo real entre aluno e professor, para realizar feedbacks e orientações personalizadas na aprendizagem musical",
        img: vantagensChat,
    },
    emprestimoDeInstrumento: {
        titulo: "Empréstimo de instrumento por parte do professor",
        texto: "Professores oferecem instrumentos para empréstimo, permitindo que alunos experimentem diferentes opções sem gastar muito dinheiro em um novo instrumento.",
    }
}

function Vantagens(props) {
    return (
        <section id="vantagens">
            <BoxWithContainer
                boxClassName="vantagens-box"
                containerClassName="vantagens-container">
                <h1 className="title vantagens-title">Vantagens</h1>
                <Box className="vantagens-container-cards">
                    {
                        Object.keys(cards).map((key, index) => (
                            <Card className="vantagem-card">
                                <Box className="vantagem-card-img-container">
                                    <Box
                                        className="vantagem-card-img"
                                        component="img"
                                        src={cards[key].img}
                                        alt={props.alt} />
                                </Box>
                                <Box
                                    className="vantagens-card-title-container">
                                    <h3 className="vantagem-card-title">{cards[key].titulo}</h3>
                                </Box>
                                <p className="vantagem-card-description">{cards[key].texto}</p>
                            </Card>
                        ))

                    }
                </Box>
            </BoxWithContainer>
        </section>
    );
}

export default Vantagens;
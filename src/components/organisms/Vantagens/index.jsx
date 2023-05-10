import React from 'react';
import BoxWithContainer from '../../atoms/BoxWithContainer';
import Box from "@mui/material/Box"
import VantagemCard from '../../molecules/VantagemCard';
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
                    boxClassName="box-vantagens"
                    containerClassName="vantagens-container">
                    <h1 className="title vantagens-title">Vantagens</h1>
                    <Box className="vantagens-container-cards">
                        {
                            Object.keys(cards).map((key, index) => (
                                <VantagemCard
                                    key={index}
                                    src={cards[key].img}
                                    title={cards[key].titulo}
                                    description={cards[key].texto}
                                    className={`vantagem${index + 1}`}
                                />
                            ))
                                
                        }
                    </Box>
                </BoxWithContainer>
            </section>
    );
}

export default Vantagens;
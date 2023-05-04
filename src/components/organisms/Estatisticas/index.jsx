import React from 'react';
import BoxWithContainer from '../../atoms/BoxWithContainer';
import "./style.css"

const informacoes = [
    {
        qtd: "100+",
        titulo: "Usuarios Ativos"
    },
    {
        qtd: "100+",
        titulo: "Transações realizadas",
    }
]

function Estatisticas(props) {
    return (
        <section>
            <BoxWithContainer boxClassName="box-estatisticas" containerClassName="container-estatisticas">
                {
                    informacoes.map((informacao) => 
                        (
                            <div className="estatistica">
                                <h4 className="estatistica-qtd">{informacao.qtd}</h4>
                                <p className="estatistica-titulo">{informacao.titulo}</p>
                            </div>
                        ))
                    
                }
            </BoxWithContainer>
        </section>
    );
}

export default Estatisticas;
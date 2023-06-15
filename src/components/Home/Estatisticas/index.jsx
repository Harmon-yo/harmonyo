import React from 'react';
import BoxWithContainer from '../BoxWithContainer';
import "./style.css"

const informacoes = [
    {
        key: "estatistica-1",
        qtd: "100+",
        titulo: "Usuarios Ativos"
    },
    {
        key: "estatistica-2",
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
                            <div key={informacao.key} className="estatistica">
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
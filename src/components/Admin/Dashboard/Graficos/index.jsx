import {
    Box
} from "@mui/material";
import GraficoMensal from "./GraficoBarra/index.jsx";
import InformacaoAdicionalGrafico from "./InformacaoAdicionalGrafico/index.jsx";
import GraficoDoughnut from "./GraficoDoughnut/index.jsx";
const porcentagens = [
    {
        nome: "Usuários convertidos",
        valorTotal: 10,
        valor: 6,
    }, {
        nome: "Professores convertidos",
        valorTotal: 5,
        valor: 3,
    }, {
        nome: "Alunos convertidos",
        valorTotal: 5,
        valor: 3,
    }
];


function Graficos(props) {    
    return (
        <Box className="graficos-container"  >
            {
                props.barra ? (
                    <GraficoMensal idSelecionado={props.metricaSelecionada} />
                ) : null
            }
            {
                props.doughnut ? (
                    <GraficoDoughnut idSelecionado={props.metricaSelecionada} />
                ) : null
            }
            {
                props.temInformacaoAdicional ? (
                    <Box className="taxas-container">
                        Taxas
                        {
                            porcentagens.map((porcentagem) =>
                                <InformacaoAdicionalGrafico nome={porcentagem.nome} valor={porcentagem.valor} valorTotal={porcentagem.valorTotal} />
                            )
                        }
                    </Box>
                ) : null
            }

        </Box>
    );
}

export default Graficos;
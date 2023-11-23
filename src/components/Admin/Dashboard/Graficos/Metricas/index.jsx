import {
    useState
} from "react";
import Card from "../../CardComTitulo/index.jsx";
import {
    Box,
    Typography
} from "@mui/material";
import "./style.css";

function Metricas(props) {

    const valor = (metrica) => {return metrica.id === 4 ? `R$ ${metrica.valor}` : metrica.valor}

    const dataComeco = new Date(props.dataComeco), dataFim = new Date(props.dataFim);

    const parametroDeTempo = `dataComeco=${dataComeco.getFullYear()}-${dataComeco.getMonth() + 1}-${dataComeco.getDate()}&dataFim=${dataFim.getFullYear()}-${dataFim.getMonth() + 1}-${dataFim.getDate()}`

    const [metricas, setMetricas] = useState([
        {
            id: 1,
            nome: "Usuários",
            endpoint: `/usuarios/quantidade-cadastrados-mes-soma?${parametroDeTempo}`,
            valor: 0,
        },
        {
            id: 2,
            nome: "Aulas por aluno",
            endpoint: `/aulas/quantidade-por-aluno-mes?${parametroDeTempo}`,
            valor: 0,
        },
        {
            id: 3,
            nome: "Aulas",
            endpoint: `/aulas/quantidade-mes?${parametroDeTempo}`,
            valor: 0,
        },
        {
            id: 4,
            nome: "Rendimento dos Professores",
            endpoint: `/professores/dashboard/rendimento-total?${parametroDeTempo}`,
            valor: 0,
        }
    ]);

    return (
        <Box className="metricas-container">
            {
                metricas.map((metrica) =>
                    (<Card key={metrica.id} className="card-metrica" titulo={metrica.nome}>
                        <Typography className="card-valor">{valor(metrica)}</Typography>
                    </Card>))
            }
        </Box>
    );
}

export default Metricas;
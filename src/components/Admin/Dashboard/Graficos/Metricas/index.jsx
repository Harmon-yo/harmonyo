import {
    useEffect,
    useState
} from "react";
import Card from "../../CardComTitulo/index.jsx";
import {
    Box,
    Typography
} from "@mui/material";
import "./style.css";

import api from "../../../../../api.js";

const requisicaoGet = (url) => {
    return api.get(url, { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } });
}

function Metricas(props) {

    const valor = (metrica) => {return metrica.id === 4 ? `R$ ${metrica.valor}` : metrica.valor}

    const dataComeco = new Date(props.dataComeco), dataFim = new Date(props.dataFim);

    const parametroDeTempo = `dataInicial=${dataComeco.getFullYear()}-${dataComeco.getMonth() + 1}-${dataComeco.getDate()}&dataFinal=${dataFim.getFullYear()}-${dataFim.getMonth() + 1}-${dataFim.getDate()}`

    const [metricas, setMetricas] = useState([
        {
            id: 1,
            nome: "Usuários",
            endpoint: `/usuarios/quantidade-cadastrados-total?${parametroDeTempo}`,
            valor: 0,
        },
        {
            id: 2,
            nome: "Pedidos",
            endpoint: `/pedidos/quantidade-total?${parametroDeTempo}`,
            valor: 0,
        },
        {
            id: 3,
            nome: "Pedidos por aluno",
            endpoint: `/pedidos/pedido-por-aluno?${parametroDeTempo}`,
            valor: 0,
        },
        {
            id: 4,
            nome: "Rendimento dos Professores",
            endpoint: `/pedidos/rendimento-professores?${parametroDeTempo}`,
            valor: 0,
        }
    ]);

    useEffect(() => {
        metricas.forEach((metrica) => {
            requisicaoGet(metrica.endpoint).then((response) => {
                metrica.valor = response.data;
                if (metrica.id === 4 || metrica.id === 3) metrica.valor = metrica.valor.toFixed(2);
                setMetricas([...metricas]);
            }).catch(() => {
                props.adicionaAviso({
                    tipo: "erro",
                    mensagem: "Erro ao obter métricas"
                });
            })
        })
    }, [props.dataComeco, props.dataFim]);

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
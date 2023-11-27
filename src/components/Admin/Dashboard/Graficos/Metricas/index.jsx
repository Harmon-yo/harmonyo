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

const obterDados = async (dataInicial, dataFinal, adicionaAviso) => {
    const parametroDeTempo = `dataInicial=${dataInicial}&dataFinal=${dataFinal}`;
    const endpoints = [
        `/usuarios/quantidade-cadastrados-total?${parametroDeTempo}`,
        `/pedidos/quantidade-total?${parametroDeTempo}`,
        `/pedidos/pedido-por-aluno?${parametroDeTempo}`,
        `/pedidos/rendimento-professores?${parametroDeTempo}`
    ];

    const promessas = Promise.all(endpoints.map((endpoint) => requisicaoGet(endpoint)));

    return await promessas.then(([usuariosResponse, pedidosResponse, pedidosPorAlunoResponse, rendimentoProfessoresResponse]) => {
        const usuarios = usuariosResponse.data;
        const pedidos = pedidosResponse.data;  
        const pedidosPorAluno = pedidosPorAlunoResponse.data;
        const rendimentoProfessores = rendimentoProfessoresResponse.data;
        
        return {
            usuarios: usuarios,
            pedidos: pedidos,
            pedidosPorAluno: pedidosPorAluno.toFixed(2),
            rendimentoProfessores: rendimentoProfessores.toFixed(2),
        };
    }).catch((err) => {
        adicionaAviso({
            tipo: "erro",
            mensagem: `Erro ao obter valores das métricas`,
        });

        console.log("Erro Métrica: ")
        console.log(err);

        return {
            usuarios: 0,
            pedidos: 0,
            pedidosPorAluno: 0,
            rendimentoProfessores: 0,
        }
    });
}

function Metricas(props) {
    const valor = (metrica) => {return metrica.id === 4 ? `R$ ${metrica.valor}` : metrica.valor}

    const dataInicial = props.dataInicial.format("YYYY-MM-DD");
    const dataFinal = props.dataFinal.format("YYYY-MM-DD");
    const adicionaAviso = props.adicionaAviso;
    const [metricas, setMetricas] = useState([
        {
            id: 1,
            nome: "Usuários",
            valor: 0,
        },
        {
            id: 2,
            nome: "Pedidos",
            valor: 0,
        },
        {
            id: 3,
            nome: "Pedidos por aluno",
            valor: 0,
        },
        {
            id: 4,
            nome: "Rendimento dos Professores",
            valor: 0,
        }
    ]);

    useEffect(() => {

        obterDados(dataInicial, dataFinal, adicionaAviso)
            .then((res) => {
                setMetricas([
                    {
                        id: 1,
                        nome: "Usuários",
                        valor: res.usuarios,
                    },
                    {
                        id: 2,
                        nome: "Pedidos",
                        valor: res.pedidos,
                    },
                    {
                        id: 3,
                        nome: "Pedidos por aluno",
                        valor: res.pedidosPorAluno,
                    },
                    {
                        id: 4,
                        nome: "Rendimento dos Professores",
                        valor: res.rendimentoProfessores,
                    }
                ]);
            });
    }, [dataInicial, dataFinal]);

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
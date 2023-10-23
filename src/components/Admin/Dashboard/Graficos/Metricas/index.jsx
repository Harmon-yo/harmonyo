import Card from "../../CardComTitulo/index.jsx";
import { useEffect, useState } from "react";
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
    const adicionaAviso = props.adicionaAviso;

    const dataComeco = props.dataComeco.format("YYYY-MM-DD");
    const dataFim = props.dataFim.format("YYYY-MM-DD");

    const [metricas, setMetricas] = useState([
        {
            id: 1,
            nome: "Usuários",
            endpoint: `/usuarios/quantidade-cadastrados-periodo?dataComeco=${dataComeco}&dataFim=${dataFim}`,
            valor: 0,
        },
        {
            id: 2,
            nome: "Aulas",
            endpoint: `/pedidos/quantidade-total-periodo?dataComeco=${dataComeco}&dataFim=${dataFim}`,
            valor: 0,
        },
        {
            id: 3,
            nome: "Rendimento dos Professores",
            endpoint: `/professores/rendimento-total-periodo?dataComeco=${dataComeco}&dataFim=${dataFim}`,
            valor: 0,
        }
    ]);

    const obterValorMetricas = () => {
        metricas.forEach(metrica => {
                requisicaoGet(metrica.endpoint).then((resposta) => {
                    setMetricas(metricas => metricas.map(metricaAntiga => {
                        if (metricaAntiga.id === metrica.id) {
                            console.log("Resposta da métrica " + metrica.nome + ": " + resposta.data)
                            metricaAntiga.valor = resposta.data;
                        }
                        return metricaAntiga;
                    }));
            }).catch(() => adicionaAviso({
                mensagem: `Erro ao obter quantidade de ${metrica.nome}`,
                tipo: "erro"
            }));
        });
    }

    useEffect(() => {
        obterValorMetricas();
    }, []);

    return (
        <Box className="metricas-container">
            {
                metricas.map((metrica) =>
                    (<Card key={metrica.id} className="card-metrica" titulo={metrica.nome}>
                        {
                            metrica.id === 3 ?
                                <Typography className="card-valor">R$ {metrica.valor}</Typography>
                                : <Typography className="card-valor">{metrica.valor}</Typography>
                        }
                    </Card>))
            }
        </Box>

    );
}

export default Metricas;
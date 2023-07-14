import React from "react";
import { Box, Typography, Skeleton } from "@mui/material";
import Card from "../../../../Global/Card/index.jsx";
import ProfessorResumidoCard from "../ProfessorResumidoCard/index.jsx";
import api from "../../../../../api.js";
import "./style.css";

const lista = [
    {
        nome: "João Silva",
        ltInstrumentos: [{ nome: "Piano" }, { nome: "Violino" }, { nome: "Violoncelo" }, { nome: "Viola" }],
        idade: 35,
        bairro: "Centro",
        distancia: 10,
        valorMinimo: 50,
        valorMaximo: 100,
        descricao: "Profissional com mais de 10 anos de experiência no ensino de piano, violino, violoncelo e viola.",
        mediaAvaliacao: 4.5,
        cidade: "São Paulo",
        estado: "SP"
    },
    {
        nome: "Maria Oliveira",
        ltInstrumentos: [{ nome: "Piano" }, { nome: "Violino" }, { nome: "Violoncelo" }, { nome: "Viola" }],
        idade: 28,
        bairro: "Vila Madalena",
        distancia: 5,
        valorMinimo: 40,
        valorMaximo: 80,
        descricao: "Professora experiente de guitarra e baixo com abordagem prática e teórica.",
        mediaAvaliacao: 4.8,
        cidade: "São Paulo",
        estado: "SP"
    }
];

function ListaProfessores(props) {
    const [listaProfessores, setListaProfessores] = React.useState([]);

    const config = {
        headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` },
    };

    React.useEffect(() => {
        api.get(`/professor?p=${props.parametrosPesquisa}`).then((response) => {
            setListaProfessores(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }, [props.parametrosPesquisa]);


    return (
        <Box>
            <Box>
                <Typography className="encontrar-professor-titulo">
                    Professores
                </Typography>
            </Box>
            {
                props.isCarregando
                    ? carregando()
                    : <Card className="professores-cards">
                        {
                            listaProfessores.map((professor) => (
                                <ProfessorResumidoCard nome={professor.nome} instrumentos={professor.ltInstrumentos} idade={professor.idade} bairro={professor.bairro} distancia={professor.distancia} precoMinimo={professor.valorMinimo} precoMaximo={professor.valorMaximo} descricao={professor.descricao} avaliacao={professor.mediaAvaliacao} cidade={professor.cidade} estado={professor.estado} />
                            ))
                        }
                    </Card>
            }

        </Box>
    );
}

const carregando = () => {
    return (<Skeleton variant="retangular" height={200} />);
}

export default ListaProfessores;
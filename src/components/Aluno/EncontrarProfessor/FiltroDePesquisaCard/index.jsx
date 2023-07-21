import React, { useState, useEffect } from "react";
import { Box, Typography, Slider, FormGroup, FormControlLabel, Checkbox, Rating } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import Card from "../../../Global/Card";
import "./style.css";

function FiltroDePesquisaCard(props) {
    const [preco, setPreco] = useState({
        minimo: 0,
        maximo: 0,
        valor: [0, 0]
    });

    const adicionarCarregamento = props.adicionarCarregamento;
    const adicionarParametro = props.adicionarParametro;

    const [distancia, setDistancia] = useState({
        minimo: 0,
        maximo: 0,
        valor: [0, 0]
    });
    const [avaliacao, setAvaliacao] = useState(5);
    const [disponibilidade, setDisponibilidade] = useState({
        manha: false,
        tarde: false,
        noite: false
    });

    useEffect(
        () => {
            props.requisicaoGet("/usuarios/filtro-minimo-maximo").then((resposta) => {
                let precoMinimo = resposta.data.precoMinimo;
                let precoMaximo = resposta.data.precoMaximo;
                let distanciaMinima = resposta.data.distanciaMinima;
                let distanciaMaxima = resposta.data.distanciaMaxima;

                setPreco({
                    minimo: precoMinimo,
                    maximo: precoMaximo,
                    valor: [precoMinimo, precoMaximo]
                });

                setDistancia({
                    minimo: distanciaMinima,
                    maximo: distanciaMaxima,
                    valor: [distanciaMinima, distanciaMaxima]
                });

                adicionarParametro("preco", [precoMinimo, precoMaximo], "><");
                adicionarParametro("distancia", [distanciaMinima, distanciaMaxima], "><");

                adicionarCarregamento(true);
            }).catch(() => {
                props.exibirErro("Erro ao carregar valores do filtro.");
                adicionarCarregamento(false);
            });
        }, []);

    const textoPreco = (valor) => `R$ ${valor}`;
    const textoDistancia = (valor) => `${valor} Km`;

    const handlePreco = (event, valor, activeThumb) => {
        if (!Array.isArray(valor) || (preco.minimo === 0 && preco.maximo === 0)) return;

        if (activeThumb === 0) {
            setPreco((old) => ({ ...old, valor: [Math.min(valor[0], preco.valor[1] - 1), preco.valor[1]] }));
        } else {
            setPreco((old) => ({ ...old, valor: [preco.valor[0], Math.max(valor[1], preco.valor[0] + 1)] }))
        }
    };

    const handleDistancia = (event, valor, activeThumb) => {
        if (!Array.isArray(valor) || (distancia.minimo === 0 && distancia.maximo === 0)) return;

        if (activeThumb === 0) {
            setDistancia((old) => ({ ...old, valor: [Math.min(valor[0], distancia.valor[1] - 1), distancia.valor[1]] }));
        } else {
            setDistancia((old) => ({ ...old, valor: [distancia.valor[0], Math.max(valor[1], distancia.valor[0] + 1)] }));
        }
    };

    const handleFiltro = () => {
        adicionarParametro("preco", preco.valor, "><");
        adicionarParametro("distancia", distancia.valor, "><");
        adicionarParametro("avaliacao", avaliacao, ">:");
        /* adicionarParametro("disponibilidade", disponibilidade, ":"); */
    };

    const handleDisponibilidade = (event) => setDisponibilidade({ ...disponibilidade, [event.target.name]: event.target.checked });


    return (
        <Card className="filtro-card">
            <Box className="filtro-card-titulo">
                <Typography className="encontrar-professor-titulo" sx={{ marginBottom: "0 !important" }}>
                    Filtro
                </Typography>
            </Box>
            <Box className="filtro-slider-container">
                <Typography className="filtro-titulo">
                    Preço
                </Typography>
                <Box className="filtro-slider-container">
                    <Slider
                        getAriaLabel={() => 'Preço mínimo'}
                        value={preco.valor}
                        onChange={handlePreco}
                        valueLabelDisplay="auto"
                        getAriaValueText={textoPreco}
                        disableSwap
                        min={preco.minimo}
                        max={preco.maximo}
                        sx={{ color: "black", marginBottom: "4px" }}
                    />
                    <Box className="filtro-slider-min-max-container">
                        <Typography className="filtro-slider-minimo" variant="subtitle2">
                            R$ {preco.minimo}
                        </Typography>
                        <Typography className="filtro-slider-maximo" variant="subtitle2">
                            R$ {preco.maximo}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box className="filtro-disponibilidade-container">
                <Typography className="filtro-titulo">
                    Disponibilidade
                </Typography>
                <Box className="filtro-disponibilidade-check-container">
                    <FormGroup>
                        <FormControlLabel name="manha" checked={disponibilidade.manha} onChange={handleDisponibilidade} control={<Checkbox />} label={<Typography className="filtro-disponibilidade-texto">Manhã</Typography>} />
                        <FormControlLabel name="tarde" checked={disponibilidade.tarde} onChange={handleDisponibilidade} control={<Checkbox />} label={<Typography className="filtro-disponibilidade-texto">Tarde</Typography>} />
                        <FormControlLabel name="noite" checked={disponibilidade.noite} onChange={handleDisponibilidade} control={<Checkbox />} label={<Typography className="filtro-disponibilidade-texto">Noite</Typography>} />
                    </FormGroup>
                </Box>
            </Box>
            <Box className="filtro-avaliacao-container">
                <Typography className="filtro-titulo">
                    Avaliação
                </Typography>
                <Box className="filtro-avaliacao-rating-container">
                    <Typography className="filtro-avaliacao-texto">{avaliacao}</Typography>
                    <Rating name="half-rating" value={avaliacao} defaultValue={5} precision={0.5} onChange={(event, novoValor) => {
                        setAvaliacao(novoValor);
                    }} />
                </Box>
            </Box>
            <Box className="filtro-slider-container">
                <Typography className="filtro-titulo">
                    Distância
                </Typography>
                <Box className="filtro-slider-container">
                    <Slider
                        getAriaLabel={() => 'Distância mínima'}
                        value={distancia.valor}
                        onChange={handleDistancia}
                        valueLabelDisplay="auto"
                        getAriaValueText={textoDistancia}
                        disableSwap
                        min={distancia.minimo}
                        max={distancia.maximo}
                        sx={{ color: "black", marginBottom: "4px" }}
                    />
                    <Box className="filtro-slider-min-max-container">
                        <Typography className="filtro-slider-minimo" variant="subtitle2">
                            {distancia.minimo} Km
                        </Typography>
                        <Typography className="filtro-slider-maximo" variant="subtitle2">
                            {distancia.maximo} Km
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <LoadingButton loading={props.isCarregando} onClick={handleFiltro} className="filtro-botao">
                <Typography className="loading-text">Filtrar</Typography>
            </LoadingButton>
        </Card>
    );
}

export default FiltroDePesquisaCard;
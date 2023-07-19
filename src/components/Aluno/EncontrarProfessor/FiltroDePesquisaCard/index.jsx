import React, { useState, useRef, useEffect } from "react";
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

    const { parametrosStr, setParametrosStr } = props.parametrosStrState;
    const { iniciarPesquisa, setIniciarPesquisa } = props.iniciarPesquisaState;

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


    useEffect(() => {
        if (props.alcanceFiltro.precoMinimo === -1 || props.alcanceFiltro.precoMaximo === -1 || 
            props.alcanceFiltro.distanciaMinima === -1 || props.alcanceFiltro.distanciaMaxima === -1) return;
        console.log("Alcance do Filtro Recebido! Novo Valor:");
        console.log(props.alcanceFiltro);

        if (props.alcanceFiltro.distanciaMinima !== -1) {
            setPreco({
                minimo: props.alcanceFiltro.precoMinimo,
                maximo: props.alcanceFiltro.precoMaximo,
                valor: [props.alcanceFiltro.precoMinimo, props.alcanceFiltro.precoMaximo]
            });
    
            setDistancia({
                minimo: props.alcanceFiltro.distanciaMinima,
                maximo: props.alcanceFiltro.distanciaMaxima,
                valor: [props.alcanceFiltro.distanciaMinima, props.alcanceFiltro.distanciaMaxima]
            });

            setIniciarPesquisa(true);
        }
    }, [props.alcanceFiltro]);

    useEffect(() => {
        if (!iniciarPesquisa) return;

        let parametros = {
            preco: {
                valor: preco.valor,
                operacao: "><"
            },
            distancia: {
                valor: distancia.valor,
                operacao: "><"
            },
            cidade: {
                valor: props.cidade,
                operacao: ":"
            }
        };

        mapearFiltro(parametros);
        setIniciarPesquisa(false);
    }, [iniciarPesquisa]);

    const mapearFiltro = (filtro) => {
        let valor, operacao;
        let novoParametro = "";
        
        console.log("Iniciando Filtragem dos parametros...");
        console.log("Valores para serem filtrados: ");
        console.log(filtro);

        let chaves = Object.keys(filtro);
        for (let chave in filtro) {
            valor = filtro[chave].valor;
            operacao = filtro[chave].operacao;

            if (chave === "disponibilidade") continue;

            if (Array.isArray(valor)) {
                novoParametro += `${chave}${operacao}${valor[0]}`;

                for (let i = 1; i < valor.length; i++) novoParametro += `+${valor[i]}`;
            } else novoParametro += `${chave}${operacao}${valor}`;

            if (chaves.indexOf(chave) < chaves.length - 1) novoParametro += ",";
        }

        console.log("Filtragem dos parametros finalizada! Novo valor: " + novoParametro);
        
        setParametrosStr(novoParametro);
        }

    const handleClickFiltro = () => {
        let parametros = {
            preco: {
                valor: preco.valor,
                operacao: "><"
            },
            distancia: {
                valor: distancia.valor,
                operacao: "><"
            },
            avaliacao: {
                valor: avaliacao,
                operacao: ">:"
            },
            cidade: {
                valor: props.cidade,
                operacao: ":"
            }
            //disponibilidade: ["Manhã", "Tarde", "Noite"]
        };
        mapearFiltro(parametros);
    }

    const textoPreco = (valor) => `R$ ${valor}`;
    const textoDistancia = (valor) => `${valor} Km`;

    const handleChangePreco = (event, valor, activeThumb) => {
        if (!Array.isArray(valor) || (preco.minimo === 0 && preco.maximo === 0)) return;

        if (activeThumb === 0) { 
            setPreco((old) => ({ ...old, valor: [Math.min(valor[0], preco.valor[1] - 1), preco.valor[1]] }));
        } else {
            setPreco((old) => ({ ...old, valor: [preco.valor[0], Math.max(valor[1], preco.valor[0] + 1)] }))
        }
    };

    const handleChangeDistancia = (event, valor, activeThumb) => {
        if (!Array.isArray(valor) || (distancia.minimo === 0 && distancia.maximo === 0)) return;

        if (activeThumb === 0) {
            setDistancia((old) => ({ ...old, valor: [Math.min(valor[0], distancia.valor[1] - 1), distancia.valor[1]] }));
        } else {
            setDistancia((old) => ({ ...old, valor: [distancia.valor[0], Math.max(valor[1], distancia.valor[0] + 1)] }));
        }
    };

    const handleChangeDisponibilidade = (event) => setDisponibilidade({ ...disponibilidade, [event.target.name]: event.target.checked });
    

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
                        onChange={handleChangePreco}
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
                        <FormControlLabel name="manha" checked={disponibilidade.manha} onChange={handleChangeDisponibilidade} control={<Checkbox />} label={<Typography className="filtro-disponibilidade-texto">Manhã</Typography>} />
                        <FormControlLabel name="tarde" checked={disponibilidade.tarde} onChange={handleChangeDisponibilidade} control={<Checkbox />} label={<Typography className="filtro-disponibilidade-texto">Tarde</Typography>} />
                        <FormControlLabel name="noite" checked={disponibilidade.noite} onChange={handleChangeDisponibilidade} control={<Checkbox />} label={<Typography className="filtro-disponibilidade-texto">Noite</Typography>} />
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
                        onChange={handleChangeDistancia}
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
            <LoadingButton loading={props.isCarregando} onClick={handleClickFiltro} className="filtro-botao">
                <Typography className="loading-text">Filtrar</Typography>
            </LoadingButton>
        </Card>
    );
}

export default FiltroDePesquisaCard;
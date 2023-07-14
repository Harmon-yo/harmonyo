import React, { useState, useRef } from "react";
import { Box, Typography, Slider, FormGroup, FormControlLabel, Checkbox, Rating } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import Card from "../../../Global/Card";
import "./style.css";

function FiltroDePesquisaCard(props) {
    const [preco, setPreco] = useState({
        minimo: 0,
        maximo: 100,
        valor: [0, 100]
    });

    const [distancia, setDistancia] = useState({
        minimo: 0,
        maximo: 100,
        valor: [0, 100]
    });
    const [avaliacao, setAvaliacao] = useState(5);
    const [disponibilidade, setDisponibilidade] = useState({
        manha: false,
        tarde: false,
        noite: false
    });


    

    const mapearFiltro = (filtro) => {
        let valor, operacao;
        let parametrosMapeados = props.parametros.current;
        
        parametrosMapeados = "";

        let chaves = Object.keys(parametrosMapeados);

        for (let chave in filtro) {
            valor = filtro[chave].valor;
            operacao = filtro[chave].operacao;

            if (chave === "disponibilidade") continue;

            if (Array.isArray(valor)) {
                parametrosMapeados += `${chave}${operacao}${valor[0]}`

                for (let i = 1; i < valor.length; i++) parametrosMapeados += `+${valor[i]}`
            } else {
                parametrosMapeados += `${chave}${operacao}${valor}`
            }

            if (chaves.indexOf(chave) < chaves.length - 1) parametrosMapeados += ',';
        }

        console.log("Parametros: ");
        console.log(parametrosMapeados);
        props.parametros.current = parametrosMapeados;
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
                operacao: "="
            }
            //disponibilidade: ["Manhã", "Tarde", "Noite"]
        };

        mapearFiltro(parametros.current);
    }

    const textoPreco = (valor) => `R$ ${valor}`;
    const textoDistancia = (valor) => `${valor} Km`;

    const handleChangePreco = (event, novoValor, activeThumb) => {
        if (!Array.isArray(novoValor)) return;

        if (activeThumb === 0) {
            setPreco((old) => ({ ...old, valor: [Math.min(novoValor[0], preco.valor[1] - preco.minimo), preco.valor[1]] }));
        } else {
            setPreco((old) => ({ ...old, valor: [preco.valor[0], Math.max(novoValor[1], preco.valor[0] + preco.minimo)] }));
        }
    };

    const handleChangeDistancia = (event, novoValor, activeThumb) => {
        if (!Array.isArray(novoValor)) return;

        if (activeThumb === 0) {
            setDistancia((old) => ({ ...old, valor: [Math.min(novoValor[0], distancia.valor[1] - distancia.minimo), distancia.valor[1]] }));
        } else {
            setDistancia((old) => ({ ...old, valor: [distancia.valor[0], Math.max(novoValor[1], distancia.valor[0] + distancia.minimo)] }));
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
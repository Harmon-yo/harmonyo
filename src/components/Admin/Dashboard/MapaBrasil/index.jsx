import { useRef, useEffect, useState } from 'react';
import {
    Typography,
    Tooltip,
    Box
} from '@mui/material';
import pathsRegioes from './svgMapa.js';
import BarraPorcentagem from '../Graficos/BarraPorcentagemHorizontal/index.jsx';

const siglas = {
    federacao: ["se",
        "ma", "es", "am", "rr",
        "go", "ap", "rs", "pb",
        "pi", "sp", "sc", "pe",
        "rj", "ms", "mt", "ba",
        "mg", "al", "ce", "rn",
        "pr", "ro", "df", "ac",
        "pa", "to"],
    sp: [
        "Adamantina",
        "Amparo",
        "Andradina",
        "Araçatuba",
        "Araraquara",
        "Assis",
        "Avaré",
        "Barretos",
        "Bauru",
        "Birigui",
        "Botucatu",
        "Bragança Paulista",
        "Campinas",
        "Capão Bonito",
        "Caraguatatuba",
        "Catanduva",
        "Dracena",
        "Fernandópolis",
        "Franca",
        "Guaratinguetá",
        "Guarulhos",
        "Itanhaém",
        "Itapecerica da Serra",
        "Itapetininga",
        "Itapeva",
        "Itu",
        "Jaboticabal",
        "Jacareí",
        "Jales",
        "Jau",
        "Jaú",
        "Jundiaí",
        "Limeira",
        "Lins",
        "Marília",
        "Mogi das Cruzes",
        "Mogi Guaçu",
        "Osasco",
        "Ourinhos",
        "Penápolis",
        "Pindamonhangaba",
        "Piracicaba",
        "Presidente Prudente",
        "Registro",
        "Ribeirão Preto",
        "Rio Claro",
        "Salto",
        "Santa Bárbara d'Oeste",
        "Santos",
        "São Carlos",
        "São João da Boa Vista",
        "São Joaquim da Barra",
        "São José do Rio Preto",
        "São José dos Campos",
        "São Paulo",
        "Sorocaba",
        "Taubaté",
        "Tupã",
        "Votuporanga"
    ]
};

const quantidadeUsuariosPorEstado = {
    valorTotal: 10,
    regioes: [
        {
            nome: "São Paulo",
            valor: 4
        },
        {
            nome: "Rio de janeiro",
            valor: 3
        },
        {
            nome: "Minas Gerais",
            valor: 2
        }, {
            nome: "Rio Grande do Sul",
            valor: 1
        }
    ]
}

function MapaBrasil(props) {
    const svgRef = useRef(null);
    const defaultFillColor = "gray";
    const defaultStrokeColor = "black";

    const [regiao, setRegiao] = useState("federacao");
    const pathsSelecionado = pathsRegioes[regiao];

    useEffect(() => {
        if (svgRef === null) return;

        const svg = svgRef.current;
        const paths = svg.querySelectorAll("path");

        for (let i = 0; i < paths.length; i++) {
            paths[i].setAttribute("stroke-width", "1");
            paths[i].onclick = (evt) => {
                evt.preventDefault();
                /* paths[i].setAttribute("fill", "red"); */

                setRegiao(siglas[regiao][i]);
            };
        }
    }, [svgRef]);

    return (
        <Box className="mapa-container">
            <Box className="svg-container">
                <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 691" version="1.2" >
                    {
                        pathsSelecionado.map((path, index) => (
                            <Tooltip title={siglas[regiao][index]}>
                                <path key={index} d={path} fill={defaultFillColor} stroke={defaultStrokeColor} />
                            </Tooltip>
                        ))
                    }
                </svg>
            </Box>
            <Box className="mapa-info-container">
{/*                 <Typography className="mapa-info-titulo">Informações</Typography>
 */}                {
                    quantidadeUsuariosPorEstado.regioes.map((regiao) => (
                        <BarraPorcentagem nome={regiao.nome} valorTotal={quantidadeUsuariosPorEstado.valorTotal} valor={regiao.valor} />
                    ))
                }

            </Box>
        </Box>

    )
}

export default MapaBrasil;
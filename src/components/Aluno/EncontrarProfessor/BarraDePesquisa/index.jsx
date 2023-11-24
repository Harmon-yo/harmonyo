import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Typography, FormControl, TextField, Select, MenuItem, InputAdornment, Tooltip } from "@mui/material";
import Card from "../../../Global/Card/index.jsx";
import "./style.css";
import { useEffect } from "react";




function BarraDePesquisa(props) {

    const [cidade, setCidade] = React.useState("");
    const [cidades, setCidades] = React.useState([]);

    const setProfessoresFiltrados = props.setProfessoresFiltrados;
    const adicionarParametro = props.adicionarParametro
    const [textoDeBusca, setTextoDeBusca] = React.useState("");

    const mudarCidade = (event) => {
        setCidade(event.target.value);
        adicionarParametro("cidade", event.target.value, ":");
    };

    useEffect(() => {
        props.requisicaoGet("/enderecos/cidades").then((resposta) => {
            let cidadesCadastradas = resposta.data;
            if (cidadesCadastradas.length > 0) {
                setCidades(cidadesCadastradas);
                setCidade(cidadesCadastradas[0]);
                adicionarParametro("cidade", cidadesCadastradas[0], ":");
                props.adicionarCarregamento(true);
            } else if (cidadesCadastradas.length == 0) {
                setCidade("?");
                props.adicionarCarregamento(false);
            }
        }).catch(() => {
            props.exibirErro("Erro ao carregar cidades cadastradas.");
            props.adicionarCarregamento(false);
        });
    }, []);

    const mudarTextoDeBusca = (event) => {
        event.preventDefault();
        setTextoDeBusca(event.target.value)
    };
    const verificarEnter = (event) => {
        event.preventDefault();
        
        if (event.key === "Enter") {
            const textoAProcurar = textoDeBusca.replace("*", "").replace("~", "")
            const parametros = `nome~*${textoAProcurar}*,instrumentos~*${textoAProcurar}*,cidade:${cidade}`;
            props.requisicaoGet(`/professores/busca?params=${parametros}`).then(
                (resposta) => {
                    if (resposta.status === 200) {
                        console.log("Professores encontrados: " + resposta.data.length);
                        console.log(resposta.data)
                        setProfessoresFiltrados(resposta.data);
                    } else {
                        console.log("Nenhum professor encontrado.");
                        setProfessoresFiltrados([]);
                    }
                }
            )

        }
    };


    return (
        <Card className="professores-busca-card">
            <Box className="professores-busca-lugar">
                <LocationOnIcon />
                <FormControl sx={{ width: '70%' }}>
                    <Select
                        labelId="demo-simple-select-label"
                        id="select-cidade"
                        value={cidade}
                        renderValue={(value) => {
                            return <Tooltip title={value} placement="right"><Typography className="professores-busca-lugar-nome">{value.length > 13 ? value.substring(0, 13) + "..." : value}</Typography></Tooltip>
                        }}
                        label=""
                        onChange={mudarCidade}
                        SelectProps={{ IconComponent: () => null }}
                        sx={{
                            '& .MuiSelect-select': {
                                padding: 0,
                                display: "flex",
                                alignItems: "center",
                                fontWeight: "700 !important"
                            }
                        }}
                    >
                        {
                            cidades.map(
                                (cidade) => (
                                    <MenuItem value={cidade}>{cidade}</MenuItem>
                                ))
                        }
                    </Select>
                </FormControl>
            </Box>
            <Box className="professores-busca-campo">
                <TextField className="busca-campo-input" value={textoDeBusca} onKeyUp={verificarEnter} onChange={mudarTextoDeBusca} placeholder="Buscar" InputProps={{
                    endAdornment: <InputAdornment><SearchIcon /></InputAdornment>,
                    readOnly: props.isCarregando
                }} />
            </Box>
        </Card>
    );
}

export default BarraDePesquisa;
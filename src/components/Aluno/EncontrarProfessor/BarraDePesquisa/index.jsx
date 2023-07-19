import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Typography, FormControl, TextField, Select, MenuItem, InputAdornment,Tooltip } from "@mui/material";
import Card from "../../../Global/Card/index.jsx";
import "./style.css";
import { useEffect } from "react";




function BarraDePesquisa(props) {
    
    const { cidade, setCidade } = props.cidadeState;
    const { setIniciarPesquisa } = props.iniciarPesquisaState;
    const [ textoDeBusca, setTextoDeBusca ] = React.useState("");

    const mudarCidade = (event) => {
        setCidade(event.target.value);
        setIniciarPesquisa(true);
    };

    const mudarTextoDeBusca = (event) => setTextoDeBusca(event.target.value);
    const verificarEnter = (event) => {
        if (event.key === "Enter") {
            /* Promise.all([
                props.requisicaoGet(`/professores/busca?params=nome~*${textoDeBusca}*,cidade:${cidade}`),
            ]) */
        }
    };


    return (
        <Card className="professores-busca-card">
            <Box className="professores-busca-lugar">
                <LocationOnIcon />
                <FormControl sx={{width: '70%'}}>
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
                            props.cidades.map(
                                (cidade, index) => (
                                    <MenuItem value={cidade} key={index}>{cidade}</MenuItem>
                                ))
                        }
                    </Select>
                </FormControl>
            </Box>
            <Box className="professores-busca-campo">
                <TextField className="busca-campo-input" value={textoDeBusca} onKeyDown={verificarEnter} onChange={mudarTextoDeBusca} placeholder="Buscar" InputProps={{
                endAdornment: <InputAdornment><SearchIcon/></InputAdornment>,
                readOnly: props.isCarregando
            }}
                    
                 />
            </Box>
        </Card>
    );
}

export default BarraDePesquisa;
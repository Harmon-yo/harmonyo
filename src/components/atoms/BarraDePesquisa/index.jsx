import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Card from "../Card";
import "./style.css";

function BarraDePesquisa(props) {
    const[cidade, setCidade] = React.useState('São Paulo');

    const handleChange = (event) => {
        setCidade(<LocationOnIcon /> + event.target.value);
    };

    return (
        <Card className="professores-busca-card">
            <Box className="professores-busca-lugar">
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Cidade</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="select-cidade"
                        value={cidade}
                        label="Cidade"
                        onChange={handleChange}
                        SelectProps={{ IconComponent: () => null }}
                    >
                        <MenuItem value={"São Paulo"}>São Paulo</MenuItem>
                        <MenuItem value={"Santo André"}>Santo André</MenuItem>
                        <MenuItem value={"São Bernardo do Campo"}>São Bernardo do Campo</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box className="professores-busca-campo">
                <Typography variant="subtitle1" className="professores-busca-campo-titulo">
                    Buscar
                </Typography>
                <SearchIcon />
            </Box>
        </Card>
    );
}

export default BarraDePesquisa;
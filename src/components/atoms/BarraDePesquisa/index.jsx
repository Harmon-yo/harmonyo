import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Typography, FormControl, TextField, Select, MenuItem, InputAdornment } from "@mui/material";
import Card from "../Card";
import "./style.css";

const cidades = [
    'São Paulo',
    'Santo André',
    'São Bernardo do Campo',
]

function BarraDePesquisa(props) {
    const [cidade, setCidade] = React.useState('São Paulo');

    const handleChange = (event) => {
        setCidade(event.target.value)
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
                            return <Typography className="professores-busca-lugar-nome">{value.length > 13 ? value.substring(0, 13) + "..." : value}</Typography>
                        }}
                        label=""
                        onChange={handleChange}
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
                <TextField className="busca-campo-input" placeholder="Buscar" InputProps={{
                endAdornment: <InputAdornment><SearchIcon/></InputAdornment>,
            }}
                    
                 />
            </Box>
        </Card>
    );
}

export default BarraDePesquisa;
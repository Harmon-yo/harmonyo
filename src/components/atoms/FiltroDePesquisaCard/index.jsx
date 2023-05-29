import React from "react";
import { Box, Typography, Slider, FormGroup, FormControlLabel, Checkbox, Rating} from "@mui/material";
import Card from "../Card";
import "./style.css";

const minDistance = 0;


function FiltroDePesquisaCard(props) {
    const [value1, setValue1] = React.useState([20, 37]);
    function valuetext(value) {
        return `R$${value}`;
    }

    const handleChange1 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
            setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
    };

    return (
        <Card className="filtro-card">
            <Box className="encontrar-professor-filtro-titulo">
                <Typography className="encontrar-professor-titulo" variant="h5">
                    Filtro
                </Typography>
            </Box>
            <Box className="filtro-preco-container">
                <Typography className="filtro-titulo" variant="subtitle1">
                    Preço
                </Typography>
                <Box className="filtro-preco-slider-container">
                    <Slider
                        getAriaLabel={() => 'Minimum distance'}
                        value={value1}
                        onChange={handleChange1}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        disableSwap
                        min={0}
                        max={100}
                        sx={{ color: "black" }}
                    />
                    <Box className="filtro-preco-min-max-container">
                        <Typography className="encontrar-professor-preco-minimo" variant="subtitle2">
                            R$ 50
                        </Typography>
                        <Typography className="encontrar-professor-preco-maximo" variant="subtitle2">
                            R$ 90
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box className="filtro-disponibilidade-container">
                <Typography className="filtro-titulo" variant="subtitle1">
                    Disponibilidade
                </Typography>
                <Box className="filtro-disponibilidade-check-container">
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked/>} label="Manhã" />
                        <FormControlLabel control={<Checkbox />} label="Tarde" />
                        <FormControlLabel control={<Checkbox />} label="Noite" />
                    </FormGroup>
                </Box>
            </Box>
            <Box className="filtro-avaliacao-container">
            <Typography className="filtro-titulo" variant="subtitle1">
                    Avaliação
                </Typography>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </Box>
            <Box>
                
            </Box>
        </Card>
    );
}

export default FiltroDePesquisaCard;
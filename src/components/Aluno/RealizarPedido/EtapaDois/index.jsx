import {
    Box,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
    Typography
} from "@mui/material";

function EtapaDois(props) {
    const {
        instrumento,
        setInstrumento
    } = props.instrumentoState;
    
    const instrumentosDisponiveis = props.instrumentosDisponiveis;

    const handleChangeInstrumento = (event) => {
        event.preventDefault();
        
        setInstrumento(instrumentosDisponiveis.find((instrumento) => instrumento.nome === event.target.value));
    };    

    return (
        <FormControl sx={{
            width: "50% ",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}
        onChange={handleChangeInstrumento}
        value={instrumento}
        >
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {
                    instrumentosDisponiveis.map((instrumento) => (
                        <FormControlLabel key={`instrumento-${instrumento.nome}`} value={instrumento.nome} disableTypography control={<Radio />} sx={{
                            width: "100%",
                        }}
                            label={<Box sx={{
                                width: "100% !important",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                margin: "0 !important"
                            }}>
                                <Typography>{instrumento.nome}</Typography>
                                <Typography>R$ {instrumento.valor}</Typography>
                            </Box>} >

                        </FormControlLabel>
                    ))
                }
            </RadioGroup>
        </FormControl>
    );
}

export default EtapaDois;
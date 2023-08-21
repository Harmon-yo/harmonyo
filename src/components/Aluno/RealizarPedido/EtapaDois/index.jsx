import {
    Box,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
    Typography
} from "@mui/material";

const instrumentos = [
    {
        nome: "Violão",
        valor: "R$ 57,90",
    },
    {
        nome: "Guitarra",
        valor: "R$ 57,90",
    }
];

function EtapaDois(props) {
    const {
        instrumento,
        setInstrumento
    } = props.instrumentoState;
    
    const handleChangeInstrumento = (event) => {
        event.preventDefault();
        setInstrumento(event.target.value);
    };

    const {
        errors,
        helperText
    } = props.error;
    

    return (
        <FormControl sx={{
            width: "50% ",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}
        error={errors.instrumento}
        helperText={errors.instrumento ? helperText.instrumento : ""}
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
                    instrumentos.map((instrumento) => (
                        <FormControlLabel key={instrumento.nome} value={instrumento.nome} disableTypography control={<Radio />} sx={{
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
                                <Typography>{instrumento.valor}</Typography>
                            </Box>} >

                        </FormControlLabel>
                    ))
                }
            </RadioGroup>
        </FormControl>
    );
}

export default EtapaDois;
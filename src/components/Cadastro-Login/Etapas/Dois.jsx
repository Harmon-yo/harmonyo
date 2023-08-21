import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, TextField, FormHelperText } from '@mui/material';
import InputMask from 'react-input-mask';

function EtapaDois(props) {
    const { formData, setFormData } = props.formData;
    const { error, helperText } = props;

    const handleChange = (e) => { setFormData({ ...formData, genero: e.target.value }) };

    return (
        <>


            <InputMask mask='99/99/9999' value={formData.dataNascimento} onChange={(e) => setFormData({ ...formData, dataNascimento: e.target.value })} sx={{ width: "100%" }}>
                {() => (
                    <TextField id="ipt-dataNascimento" label="Data de Nascimento" error={error.dataNascimento} helperText={helperText.dataNascimento} sx={{ width: "100%" }} />
                )}
            </InputMask>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Gênero</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Gênero"
                    sx={{ width: "100%" }}
                    onChange={handleChange}
                    value={formData.genero}
                    error={error.genero}
                >
                    <MenuItem value={"F"}>Feminino</MenuItem>
                    <MenuItem value={"M"}>Masculino</MenuItem>
                    <MenuItem value={"Na"}>Prefiro não dizer</MenuItem>
                </Select>
                <FormHelperText error={error.genero}>{helperText.genero}</FormHelperText>
            </FormControl>
        </>
    );
}

export default EtapaDois;
import React from 'react';
import { TextField } from '@mui/material';
import InputMask from 'react-input-mask';
import { useStyles } from "../../../pages/Cadastro-Login/Cadastro-Login.styles.js";


function EtapaUm(props) {
    const { formData, setFormData } = props.formData;
    const { error, helperText } = props;

    return (
        <>
            <TextField
                id="ipt-nome"
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                label="Nome"
                error={error.nome}
                helperText={helperText.nome}
                value={formData.nome}
                sx={useStyles().inputForm} />
            <InputMask mask='999.999.999-99' value={formData.cpf} onChange={(e) => setFormData({ ...formData, cpf: e.target.value })} sx={{ width: "100%" }}>
                {() => (
                    <TextField id="ipt-cpf" label="CPF" error={error.cpf} helperText={helperText.cpf} sx={{ width: "100%" }} />
                )}
            </InputMask>
            <TextField
                id="ipt-email"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                label="Email"
                value={formData.email}
                error={error.email}
                helperText={helperText.email}
                sx={useStyles().inputForm} />
        </>
    );
}

export default EtapaUm;
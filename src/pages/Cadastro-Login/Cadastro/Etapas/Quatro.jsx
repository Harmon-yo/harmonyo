import React, { useEffect } from 'react';
import { Box, TextField, Tooltip, Typography } from '@mui/material';
import InputMask from 'react-input-mask';
import { consultaCep } from "../../../../utils/index.js";

function EtapaFinal(props) {
    const txtPorquePedimosCep = 'Pedimos seu CEP para que após o cadastro sejam encontrados os professores mais próximos a você !'

    const { formData, setFormData } = props.formData;
    const { error, helperText } = props;
    useEffect(() => {
        if (formData.cep !== undefined && !formData.cep.includes('_') && formData.cep !== '' && formData.cep.length === 9) {
            console.log("Cep completo")

            consultaCep(formData.cep.replace('-', '')).then(
                (result) => {
                    if (result == null) {
                        setFormData((prevState) => ({
                            ...prevState,
                            cep: '_____-___',
                        }));

                        return;
                    } else {
                        setFormData((prevState) => ({
                            ...prevState,
                            cep: result.cep,
                            endereco: result.logradouro,
                            bairro: result.bairro,
                            cidade: result.localidade,
                            estado: result.uf
                        }));
                    }
                }
            )
        }
    }, [formData.cep]);

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <InputMask mask='99999-999' value={formData.cep} onChange={(e) => setFormData({ ...formData, cep: e.target.value })}>
                    {() => (
                        <TextField id="ipt-cep" label="CEP" error={error.cep} helperText={helperText.cep} fullWidth={true} />
                    )}
                </InputMask>
                <Tooltip title={txtPorquePedimosCep} placement="bottom-start" arrow={true}>
                    <Typography sx={{ color: '#2daf5a', fontWeight: 'bold' }}>Por que pedimos seu cep ?</Typography>
                </Tooltip>
            </Box>
            <TextField id="ipt-endereco" label="Endereco" fullWidth={true} value={formData.endereco} onChange={(e) => setFormData({ ...formData, endereco: e.target.value })} InputLabelProps={{ shrink: true }} />
            <TextField id="ipt-numero" label="Número" fullWidth={true} value={formData.numero} onChange={(e) => setFormData({ ...formData, numero: e.target.value })} InputLabelProps={{ shrink: true }} />
            <TextField id="ipt-bairro" label="Bairro" fullWidth={true} value={formData.bairro} onChange={(e) => setFormData({ ...formData, bairro: e.target.value })} InputLabelProps={{ shrink: true }} />
            <TextField id="ipt-cidade" label="Cidade" fullWidth={true} value={formData.cidade} onChange={(e) => setFormData({ ...formData, cidade: e.target.value })} InputLabelProps={{ shrink: true }} />
            <TextField id="ipt-estado" label="Estado" fullWidth={true} value={formData.estado} onChange={(e) => setFormData({ ...formData, estado: e.target.value })} InputLabelProps={{ shrink: true }} />
        </>

    );
}

export default EtapaFinal;
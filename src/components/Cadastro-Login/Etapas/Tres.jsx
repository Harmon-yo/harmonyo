import React from 'react';
import InputSenha from "../InputSenha/index.jsx";


function EtapaTres(props) {
    const { formData, setFormData } = props.formData;
    const { error, helperText } = props;

    return (
        <>

            <InputSenha id="ipt-senha"
                width="100%"
                onChange={(e) => {
                    setFormData({
                        ...formData,
                        senha: e.target.value
                    })
                }}
                value={formData.senha}
                error={error.senha}
                helperText={helperText.senha}
                label={'Senha'}
            />
            <InputSenha id="ipt-confirmar-senha"
                width="100%"
                onChange={(e) => setFormData({
                    ...formData,
                    confirmarSenha: e.target.value
                })}
                value={formData.confirmarSenha}
                error={error.confirmarSenha}
                helperText={helperText.confirmarSenha}
                label={'Confirmar Senha'}
            />
        </>
    );
}

export default EtapaTres;
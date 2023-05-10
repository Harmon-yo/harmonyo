import React from 'react';
import BoxWithContainer from '../../atoms/BoxWithContainer';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './style.css';

function Duvidas() {
    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [duvida, setDuvida] = React.useState('');
    const [errorNome, setErrorNome] = React.useState(false);
    const [errorEmail, setErrorEmail] = React.useState(false);
    const [errorDuvida, setErrorDuvida] = React.useState(false);
    const [helperTextNome, setHelperTextNome] = React.useState('');
    const [helperTextEmail, setHelperTextEmail] = React.useState('');
    const [helperTextDuvida, setHelperTextDuvida] = React.useState('');
    

    function limparMsgErros() {
        setErrorNome(false);
        setErrorEmail(false);
        setErrorDuvida(false);

        setHelperTextNome('');
        setHelperTextEmail('');
        setHelperTextDuvida('');
    }

    function enviarDuvida() {

        if (nome === '') {
            setErrorNome(true);
            setHelperTextNome("Campo Obrigatório !");
            return;
        }

        if (email === '') {
            setErrorEmail(true);
            setHelperTextEmail("Campo Obrigatório !")
            return;
        }

        if (duvida === '') {
            setErrorDuvida(true);
            setHelperTextDuvida("Campo Obrigatório !")
            return;
        }

        alert('Duvida enviada com sucesso!');
    }

    return (
        <BoxWithContainer
        boxClassName="duvidas-box"
        containerClassName="duvidas-container">
            <h1 className='title duvidas-title'>Dúvidas</h1>
            <Box className="duvidas-input">
                            <TextField id="ipt-nome" onChange={(e) => setNome(e.target.value)} label="Nome" variant="standard" error={errorNome} helperText={helperTextNome} placeholder='Seu nome'/>
                            <TextField id="ipt-email" onChange={(e) => setEmail(e.target.value)} label="Email" variant="standard" error={errorEmail} helperText={helperTextEmail} placeholder='Seu email' />
                            <TextField id="ipt-duvida" onChange={(e) => setDuvida(e.target.value)} label="Duvida" error={errorDuvida} helperText={helperTextDuvida} placeholder='Sua Dúvida' multiline rows={20} maxRows={20}/>
                            <Button className="duvidas-button" onClick={enviarDuvida} variant="contained" color="primary">Enviar</Button>
            </Box>
        </BoxWithContainer>
    );
}

export default Duvidas;
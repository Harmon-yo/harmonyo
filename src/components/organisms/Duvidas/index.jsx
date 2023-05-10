import React from 'react';
import BoxWithContainer from '../../atoms/BoxWithContainer';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Locationimg from '../../../imgs/location.png';
import DuvidasInformacao from '../../atoms/DuvidasInformacao';
import './style.css';

const informacoes = [
    {
        'src': Locationimg,
        'text': 'Rua Haddock Lobo, 595 - Cerqueira César, São Paulo - SP, 01414-001'
    },
    {
        'src': Locationimg,
        'text': '(11) 99999-9999'
    },
    {
        'src': Locationimg,
        'text': 'contato@harmonyo.com',
    }
]

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
            <Box className="duvidas-input-informacoes">
                <Box className="duvidas-input">
                    <Box className="duvidas-ipt-nome-container">
                        <TextField id="ipt-nome" onChange={(e) => setNome(e.target.value)}
                            label="Nome" variant="filled" size="small"
                            error={errorNome} helperText={helperTextNome}
                            placeholder='Seu nome' fullWidth required />
                    </Box>
                    <Box className="duvidas-ipt-email-container">
                        <TextField id="ipt-email" onChange={(e) => setEmail(e.target.value)}
                            label="Email" variant="filled"
                            error={errorEmail} helperText={helperTextEmail}
                            placeholder='Seu email' fullWidth required />
                    </Box>
                    <Box className="duvidas-ipt-duvida-container">
                        <TextField id="ipt-duvida" onChange={(e) => setDuvida(e.target.value)}
                            label="Duvida" variant="filled"
                            error={errorDuvida} helperText={helperTextDuvida}
                            placeholder='Sua Dúvida' multiline
                            rows={5} maxRows={20} fullWidth required />
                    </Box>
                    
                </Box>
                    
                <Box className="duvidas-informacoes">
                    {
                        informacoes.map((info, index) => (
                            <DuvidasInformacao key={index} src={info.src} text={info.text} />
                        ))
                    }
                </Box>
            </Box>
            <Box className="duvidas-button-container">
            <Button className="duvidas-button" onClick={enviarDuvida} variant="contained" color="primary">Enviar</Button>
            </Box>
        </BoxWithContainer>
    );
}

export default Duvidas;
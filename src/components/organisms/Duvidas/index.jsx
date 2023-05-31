import React from 'react';
import BoxWithContainer from '../../atoms/BoxWithContainer';
import {
    Box,
    Typography,
    TextField,
    Button
} from '@mui/material';
import Locationimg from '../../../imgs/location.png';
import Phoneimg from '../../../imgs/telephone.png';
import Emailimg from '../../../imgs/mail.png';
import DuvidasInformacao from '../../atoms/DuvidasInformacao';
import './style.css';

const informacoes = [
    {
        src: Locationimg,
        conteudo: 'Rua Haddock Lobo, 595 - Cerqueira César, São Paulo - SP, 01414-001',
        className: 'duvidas-informacao-location'
    },
    {
        src: Phoneimg,
        conteudo: '(11) 99999-9999',
        className: 'duvidas-informacao-phone'
    },
    {
        src: Emailimg,
        conteudo: 'contato@harmonyo.com',
        className: 'duvidas-informacao-email'
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
            <Typography className='title duvidas-title'>Dúvidas</Typography>
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
                            label="Dúvida" variant="filled"
                            error={errorDuvida} helperText={helperTextDuvida}
                            placeholder='Sua Dúvida' multiline
                            rows={5} maxRows={20} fullWidth required />
                    </Box>
                    
                </Box>
                    
                <Box className="duvidas-informacoes">
                    {
                        informacoes.map((info, index) => (
                            <DuvidasInformacao className={info.className} key={index} src={info.src} text={info.conteudo} />
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
import React from 'react';
import BoxWithContainer from '../../BoxWithContainer';
import {
    Box,
    Typography,
    TextField,
    Button
} from '@mui/material';
import Locationimg from '../../../../imgs/location.png';
import Phoneimg from '../../../../imgs/telephone.png';
import Emailimg from '../../../../imgs/mail.png';
import DuvidasInformacao from '../DuvidasInformacao';
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
    const [valor, setValor] = React.useState({
        nome: '',
        email: '',
        duvida: ''
    });

    const [erro, setErro] = React.useState({
        nome: false,
        email: false,
        duvida: false
    });

    const [helperText, setHelperText] = React.useState({
        nome: '',
        email: '',
        duvida: ''
    });


    const limparMsgErros = () => {
        for (let key in erro) setErro((error) => ({ ...error, [key]: false }));
        for (let key in helperText) setHelperText((helperText) => ({ ...helperText, [key]: "" }));
    }

    function enviarDuvida() {
        limparMsgErros();

        if (valor.nome === '') {
            setErro((error) => ({ ...error, nome: true }));
            setHelperText((helperText) => ({ ...helperText, nome: "Campo Obrigatório !" }));
            return;
        }
        if (valor.email === '') {
            setErro((error) => ({ ...error, email: true }));
            setHelperText((helperText) => ({ ...helperText, email: "Campo Obrigatório !" }));
            return;
        }

        if (valor.duvida === '') {
            setErro((error) => ({ ...error, duvida: true }));
            setHelperText((helperText) => ({ ...helperText, duvida: "Campo Obrigatório !" }));
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
                        <TextField id="ipt-nome" onChange={(e) => setValor({ ...valor, nome: e.target.value })}
                            label="Nome" variant="filled" size="small"
                            error={erro.nome} helperText={helperText.nome}
                            placeholder='Seu nome' fullWidth required />
                    </Box>
                    <Box className="duvidas-ipt-email-container">
                        <TextField id="ipt-email" onChange={(e) => setValor({ ...valor, email: e.target.value })}
                            label="Email" variant="filled"
                            error={erro.email} helperText={helperText.email}
                            placeholder='Seu email' fullWidth required />
                    </Box>
                    <Box className="duvidas-ipt-duvida-container">
                        <TextField id="ipt-duvida" onChange={(e) => setValor({ ...valor, duvida: e.target.value })}
                            label="Dúvida" variant="filled"
                            error={erro.duvida} helperText={helperText.duvida}
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
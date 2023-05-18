import React from 'react';
import {
    Box, Button,
    Typography, Modal,
    IconButton, Slide
} from '@mui/material';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { useStyles } from './modal.styles.js';



function ModalCriarConta(props) {

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    function redirecionarProfessor() {
        window.location.href = `/cadastro?categoria=Professor`;
    }
    function redirecionarAluno() {
        window.location.href = `/cadastro?categoria=Aluno`;
    }

    return (
        <>
            <Modal
                open={props.open}
                onClose={props.closeModal}
                Transition={Transition}
            >
                <Box sx={useStyles().background}>
                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}>
                        <IconButton
                            aria-label="close"
                            onClick={props.closeModal}
                            sx={{
                                color: "var(--dark-font)",
                            }}
                        >
                            <CloseIcon sx={{ fontSize: '2rem !important' }} />
                        </IconButton>
                    </Box>
                    <Typography sx={useStyles().titulo} variant="h4">
                        Como você gostaria de se cadastrar ?
                    </Typography>
                    <Typography sx={useStyles().subtitulo} variant="subtitle1">
                        Para fazer o cadastro, é necessário saber o que você é
                    </Typography>
                    <Box sx={useStyles().boxCards}>

                        <Button sx={useStyles().card} onClick={redirecionarProfessor}>
                            <Typography sx={useStyles().tituloCard} variant="h5">
                                Sou Professor
                            </Typography>
                            <Typography sx={useStyles().subtituloCard} variant="subtitle1">
                                Quero ensinar a tocar
                            </Typography>
                        </Button>

                        <Typography sx={useStyles().ouText} variant="h5">
                            ou
                        </Typography>

                        <Button sx={useStyles().card} onClick={redirecionarAluno}>
                            <Typography sx={useStyles().tituloCard} variant="h5">
                                Sou Aluno
                            </Typography>
                            <Typography sx={useStyles().subtituloCard} variant="subtitle1">
                                Quero aprender a tocar
                            </Typography>
                        </Button>
                    </Box>
                    <Typography sx={useStyles().loginTexto}>
                        Já possuo uma conta. 
                        <Link to="/login" onClick={props.onClickInTelaLogin}> 
                            <Typography sx={useStyles().loginLink}>
                                Fazer Login
                            </Typography>
                        </Link>
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}

export default ModalCriarConta;
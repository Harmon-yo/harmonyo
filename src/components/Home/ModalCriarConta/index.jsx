import React, { useEffect } from 'react';
import {
    Box, Button,
    Typography, Modal,
    IconButton, Slide
} from '@mui/material';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { useStyles } from './modal.styles.js';
import iconeProfessor from '../../../imgs/icone-professor-v2.png'
import iconeAluno from '../../../imgs/icone-aluno.png'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';



function ModalCriarConta(props) {
    const navigate = useNavigate();
    const Transition = React.forwardRef(
        (props, ref) => {return <Slide direction="up" ref={ref} {...props} />}
    );
    const classes = useStyles();
    const [categoria, setCategoria] = React.useState('');
    const naoEhPrimeiraRenderizacao = useRef(false);

    useEffect(
        () => {
            if (naoEhPrimeiraRenderizacao.current) navigate(`cadastro?categoria=${categoria}`);
            else naoEhPrimeiraRenderizacao.current = true;
        },
        [categoria]
    )

    return (
        <>
            <Modal
                open={props.visibilidade}
                onClose={props.closeModal}
                Transition={Transition}
            >
                <Box sx={classes.background}>
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
                    <Typography sx={classes.titulo} variant="h4">
                        Como você gostaria de se cadastrar ?
                    </Typography>
                    <Typography sx={classes.subtitulo} variant="subtitle1">
                        Para fazer o cadastro, é necessário saber o que você é
                    </Typography>
                    <Box sx={classes.boxCards}>

                        <Button sx={classes.card} onClick={() => setCategoria('Professor')}>
                            <Box>
                                <Typography sx={classes.tituloCard} variant="h5">
                                    Sou Professor
                                </Typography>
                                <Typography sx={classes.subtituloCard} variant="subtitle1">
                                    Quero ensinar a tocar
                                </Typography>
                            </Box>
          
                            <img src={iconeProfessor} alt="" width="28%"/>
                        </Button>

                        <Typography sx={classes.ouText} variant="h5">
                            ou
                        </Typography>

                        <Button sx={classes.card} onClick={() => setCategoria('Aluno')}>
                            <Box>
                                <Typography sx={classes.tituloCard} variant="h5">
                                    Sou Aluno
                                </Typography>
                                <Typography sx={classes.subtituloCard} variant="subtitle1">
                                    Quero aprender a tocar
                                </Typography>
                            </Box>
                                <img src={iconeAluno} alt="" width="30%"/>
                        </Button>
                    </Box>
                    <Typography sx={classes.loginTexto}>
                        Já possuo uma conta. 
                        <Link to="/login" onClick={props.onClickInTelaLogin}> 
                            <Typography sx={classes.loginLink}>
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
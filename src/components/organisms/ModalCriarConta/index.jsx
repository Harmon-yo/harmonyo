import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { useStyles } from './modal.styles.js';
import Slide from '@mui/material/Slide';



function ModalCriarConta(props) {
    
    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
      });

    return (
        <>
            <Modal
            open={props.open}
            onClose={props.closeModal}
            Transition={Transition}
            >
                <Box sx={useStyles().background}>
                    <IconButton
                        aria-label="close"
                        onClick={props.closeModal}
                        sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography sx = {useStyles().titulo}>
                        Como você gostaria de se cadastrar ?
                    </Typography>
                    <Typography sx = {useStyles().subtitulo}>
                        Para fazer o cadastro, é necessário saber o que você é
                    </Typography>
                    <Box sx={useStyles().boxCards}>

                        <Button sx={useStyles().card}>
                            <Typography sx = {useStyles().tituloCard}>
                                Sou Professor
                            </Typography>
                            <Typography sx = {useStyles().subtituloCard}>
                                Quero ensinar a tocar
                            </Typography>
                        </Button>
                        
                        <Typography sx = {useStyles().titulo}>
                            ou
                        </Typography>

                        <Button sx={useStyles().card}>
                            <Typography sx = {useStyles().tituloCard}>
                                Sou Aluno
                            </Typography>
                            <Typography sx = {useStyles().subtituloCard}>
                                Quero aprender a tocar
                            </Typography>
                        </Button>
                    </Box>
                    <Typography sx = {useStyles().subtitulo}>
                        Já possuo uma conta. <Link to="/login" style={{fontWeight: 'bold' }}> Fazer Login</Link>  
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}

export default ModalCriarConta;
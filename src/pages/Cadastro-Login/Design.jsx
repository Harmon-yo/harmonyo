import React from "react";
import { Link } from "react-router-dom";
import {
    Box,
    Typography,
    Alert
} from "@mui/material";
import Card from "../../components/Global/Card/index.jsx"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useStyles } from "./Cadastro-Login.styles.js";
import Logo from "../../components/Global/Logo/index.jsx";

function Design(props) {
    const classes = props.styles;

    return (
        <Box sx={classes.background}>
            <Box sx={classes.voltarContainer}>
                <Link to="/" style={{ color: 'black', fontWeight: 'bolder' }}>{<ArrowBackIosNewIcon />}</Link>
            </Box>
            <Box sx={classes.erroContainer}>
                {
                    props.errosServidor.map((mensagem, index) => {
                        return (
                            <Alert key={index} severity="error" onClose={() => {
                                props.setErrosServidor((errosServidor) => {
                                    let erros = [...errosServidor];
                                    erros.splice(index, 1);
                                    return erros;
                                })
                            }}>
                                {mensagem}
                            </Alert>
                        )
                    })
                }
            </Box>
            <Card className="" sx={classes.formCard}>
                <Logo height={{ xs: '10px', sm: '25px', xl: '35px' }} />
                <Typography sx={classes.formTitle}>{props.titulo}</Typography>
                {
                    props.children
                }
            </Card>
        </Box>

    );
}

export default Design;
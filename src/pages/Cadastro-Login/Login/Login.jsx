import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import InputSenha from "../../../components/Cadastro-Login/InputSenha/index.jsx";
import { useStyles } from "../Cadastro-Login.styles.js";
import api from "../../../api";
import ModalCriarConta from "../../../components/Home/ModalCriarConta/index.jsx"
import { useNavigate } from "react-router-dom";
import Design from "../Design.jsx";

function Login() {

    sessionStorage.ID = "";
    sessionStorage.NOME = "";
    sessionStorage.TOKEN = "";
    sessionStorage.EMAIL = "";

    useEffect(() => {
        setFormData({ ...formData, email: sessionStorage.EMAIL });
    }, [])
    const navigate = useNavigate();
    const classes = useStyles();
    const [visibilidade, setVisibilidade] = useState(false);
    const abrirModalCriarConta = () => setVisibilidade(true);
    const fecharModalCriarConta = () => setVisibilidade(false);

    const [formData, setFormData] = useState({
        email: "",
        senha: ""
    });
    const [error, setError] = useState({
        email: false,
        senha: false
    });
    const [helperText, setHelperText] = useState({
        email: "",
        senha: ""
    });

    const [avisos, setAvisos] = useState([]);

    const adicionaAviso = (aviso) => {
        setAvisos([...avisos, aviso]);
    }

    const validarCampos = () => {

        let camposOK = true;
        let email = formData.email;
        let senha = formData.senha;

        if (email === "" || email === null || senha === "" || senha === null) {
            setError({
                email: true,
                senha: true
            });

            setHelperText({
                email: "Login e/ou senha incorretos!",
                senha: "Login e/ou senha incorretos!"
            });

            camposOK = false;
        }

        return camposOK;

    }

    const login = async () => {
        if (!validarCampos()) return;

        let dadosLogin = {
            email: formData.email,
            senha: formData.senha
        }

        await api.post("/usuarios/login", dadosLogin)
            .then((res) => {
                sessionStorage.ID = res.data.userId;
                sessionStorage.NOME = res.data.nome;
                sessionStorage.CATEGORIA = res.data.categoria;
                sessionStorage.TOKEN = res.data.token
                sessionStorage.EMAIL = res.data.email;

                if (res.data.categoria === "Aluno") navigate(`/encontrar-professor`);
                else if (res.data.categoria === "Professor") navigate(`/dashboard-professor`);
                else if (res.data.categoria === "Administrador") navigate(`/dashboard-administrador`);
            })
            .catch((error) => {
                let response = error.response;

                if (error.code === "ERR_NETWORK") {
                    console.log("Mensagem add")
                    adicionaAviso({
                        mensagem: "Erro ao entrar em contato com o servidor.",
                        tipo: "erro"
                    })
                } else if (response.status === 403) {
                    console.log(response.data.message)

                    setError({
                        email: true,
                        senha: true
                    });

                    setHelperText({
                        email: response.data.message + '!',
                        senha: response.data.message + '!'
                    });
                } 
            });
    }

    const verificarEnter = (event) => {
        if (event.key === "Enter") {
            login();
        }
    };


    return (
        <>
            <ModalCriarConta visibilidade={visibilidade} closeModal={fecharModalCriarConta} onClickInTelaLogin={() => window.location.reload()}/>
            <Design errosServidor={[]} titulo="Entrar na conta" styles={classes} onKeyDown={verificarEnter} avisosState={{avisos, setAvisos}}>

                <Box sx={classes.formInputContainer}>
                    <TextField id="ipt-email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} label="Email" variant="outlined" error={error.email} helperText={helperText.email} value={formData.email} />
                    <InputSenha id="ipt-senha" onChange={(e) => setFormData({ ...formData, senha: e.target.value })} error={error.senha} helperText={helperText.senha} label={'Senha'} />
                </Box>
                <Box sx={classes.etapaContainer}>

                    <Box sx={classes.btnContainer}>
                        <Button variant="contained"
                            onClick={login}
                            sx={classes.btnLogin}>
                            Logar
                        </Button>
                    </Box>

                    <Typography sx={classes.txtPossuiConta}>Não Possui Conta? <Link onClick={abrirModalCriarConta} style={{ marginLeft: '5px', color: 'black', fontWeight: 'bold' }}> Fazer Cadastro</Link></Typography>
                </Box>
            </Design>
        </>
    );
}

export default Login; 
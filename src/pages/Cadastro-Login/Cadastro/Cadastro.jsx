import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Box,
    Button,
    Typography
} from "@mui/material";
import api from "../../../api.js";
import { useStyles } from "../Cadastro-Login.styles.js";
import EtapaUm from "../../../components/Cadastro-Login/Etapas/Um.jsx";
import EtapaDois from "../../../components/Cadastro-Login/Etapas/Dois.jsx";
import EtapaTres from "../../../components/Cadastro-Login/Etapas/Tres.jsx";
import EtapaFinal from "../../../components/Cadastro-Login/Etapas/Quatro.jsx";
import { verificarNome, verificarCpf, verificarEmail, verificarDataNascimento, verificarSenha, verificarCep } from "./verificacoes.js";
import Design from "../Design.jsx";

function Cadastro() {
    const classes = useStyles();
    const classeForm = useStyles({ gridTemplateColumns: true });
    const navigate = useNavigate();
    const categoria = useRef(new URLSearchParams(window.location.search).get("categoria"));

    
    const [etapa, setEtapa] = useState(1);
    if (etapa === 4) {
        classeForm.formInputContainer.gridTemplateColumns = "1fr 1fr";
        classes.formCard.width = "60%";
    } else {
        classeForm.formInputContainer.gridTemplateColumns = "1fr";
    }
    
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        cpf: '',
        dataNascimento: '',
        genero: '',
        senha: '',
        confirmarSenha: '',
        cep: '',
        logradouro: '',
        numero: '',
        complemento: '',
        cidade: '',
        bairro: '',
        estado: ''
    });

    const [error, setError] = useState({
        nome: false,
        email: false,
        cpf: false,
        dataNascimento: false,
        genero: false,
        senha: false,
        confirmarSenha: false,
        cep: false,
    });
    const [helperText, setHelperText] = useState({
        nome: '',
        email: '',
        cpf: '',
        dataNascimento: '',
        genero: '',
        senha: '',
        confirmarSenha: '',
        cep: '',
    });

    const [avisos, setAvisos] = useState([]);

    const adicionaAviso = (aviso) => {
        setAvisos([...avisos, aviso]);
    }

    useEffect(() => {
        if (categoria.current !== "Aluno" && categoria.current !== "Professor") {
            navigate(-1);
        }
    }, [])

    function limparErros() {
        for (let key in error) setError((error) => ({ ...error, [key]: false }));
        for (let key in helperText) setHelperText((helperText) => ({ ...helperText, [key]: "" }));
    }

    function validarCampos() {
        let verificacoes, camposOk = true;

        limparErros();

        switch (etapa) {
            case 1:
                verificacoes = {
                    nome: verificarNome(formData.nome),
                    email: verificarEmail(formData.email),
                    cpf: verificarCpf(formData.cpf)
                };

                break;
            case 2:
                verificacoes = {
                    dataNascimento: verificarDataNascimento(formData.dataNascimento),
                };

                break;
            case 3:
                verificacoes = {
                    senha: verificarSenha(formData.senha, formData.confirmarSenha),
                };

                break;
            case 4:
                verificacoes = {
                    cep: verificarCep(formData.cep),
                };
                /* verificacoes = {
                    cep: verificarCep(formData.cep),
                }; */
                break;
            default:
                break;
        }

        for (let campo in verificacoes) {
            if (formData[campo] === "" || !formData[campo]) {
                setError((error) => ({ ...error, [campo]: true }));
                setHelperText((helperText) => ({ ...helperText, [campo]: "Campo Obrigatório" }))
                camposOk = false;
            } else if (verificacoes[campo].error) {
                setError((error) => ({ ...error, [campo]: true }));
                setHelperText((helperText) => ({ ...helperText, [campo]: verificacoes[campo].helperText }))
                camposOk = false;
            }
        }

        return camposOk;
    }

    const voltarEtapa = () => setEtapa(etapa - 1);
    const proximaEtapa = () => validarCampos() ? setEtapa(etapa + 1) : null;

    function cadastrar() {
        if (!validarCampos()) return;

        let dadosUsuario = {
            nome: formData.nome,
            email: formData.email,
            cpf: formData.cpf,
            genero: formData.genero,
            senha: formData.senha,
            endereco: {
                logradouro: formData.logradouro,
                numero: formData.complemento,
                complemento: "",
                cidade: formData.localidade,
                bairro: formData.bairro,
                estado: formData.uf,
                cep: formData.cep
            },
        };

        const errorCatch = (error) => {
            let erros = [];

            if (error.code === "ERR_NETWORK") adicionaAviso({
                mensagem: "Erro ao entrar em contato com o servidor.",
                tipo: "erro"
            });
            else {
                if (error.response.status === 409) {
                    switch (error.response.data.message.toUpperCase()) {
                        case "EMAIL":
                            erros.push("Email já em uso!");
                            break;

                        case "CPF":
                            erros.push("CPF já em uso!");
                            break;
                        
                        default:
                            erros.push("Erro ao cadastrar!");
                            break;
                    }
                } else if (error.response.status === 400) {
                    let listaErros = error.response.data.errors;

                    let msg;
                    for (let erro of listaErros) {

                        if (erro.code[1] === "Size.nome") erro.code = "Nome";
                        else if (erro.code[1] === "Size.senha") erro.code = "Senha";

                        switch (erro.code) {
                            case "Nome":
                                msg = "Deve conter pelo menos 4 caractéres!";
                                break;
                            case "Email":
                                msg = "Email inválido !";
                                break;
                            case "Senha":
                                msg = "Deve conter pelo menos 3 caractéres!";
                                break;
                            case "CPF":
                                msg = "CPF inválido !";
                                break;
                            case "CEP":
                                msg = "CEP inválido !";
                                break;
                            case "genero":
                                msg = "Gênero Inválido! Selecione Uma Opção!";
                                break;
                            default:
                                msg = "Erro ao cadastrar!";
                                break;
                        }

                        if (msg) {
                            erros.push(msg);
                        }
                    }
                }
            }


            console.log("Erros:")
            console.log(erros);

            for (let i = 0; i < erros.length; i++) adicionaAviso({
                mensagem: erros[i],
                tipo: "erro"
            });
        }
        const url = categoria.current.toLowerCase() === "professor" ? "professores": "alunos"
        api.post(`/${url}/cadastro`, dadosUsuario)
            .then((res) => {
                sessionStorage.EMAIL = res.data.email;
                alert("Cadastro Realizado com Sucesso!");
                navigate("/login");
            })
            .catch((error) => errorCatch(error));
    }

    return (
        <Design titulo="Criar uma conta" styles={classes} avisosState={{avisos, setAvisos}}>
            <Box sx={classeForm.formInputContainer}>
                {
                    etapa === 1 ? <EtapaUm formData={{ formData, setFormData }} error={error} helperText={helperText} /> : null
                }
                {
                    etapa === 2 ? <EtapaDois formData={{ formData, setFormData }} error={error} helperText={helperText} /> : null
                }
                {
                    etapa === 3 ? <EtapaTres formData={{ formData, setFormData }} error={error} helperText={helperText} /> : null
                }
                {
                    etapa === 4 ? <EtapaFinal formData={{ formData, setFormData }} error={error} helperText={helperText} /> : null
                }
            </Box>
            <Box sx={classes.etapaContainer}>
                <Box sx={classes.btnContainer}>
                    {
                        etapa < 4
                            ? <Button variant="contained" onClick={proximaEtapa} sx={classes.btnProxima}>
                                Próxima
                            </Button>
                            : <Button variant="contained" onClick={cadastrar} sx={classes.btnCadastrar}>
                                Criar Conta
                            </Button>
                    }

                    {
                        etapa > 1
                            ? <Typography sx={classes.voltarOption} onClick={voltarEtapa}>Voltar</Typography>
                            : null
                    }
                </Box>
                {
                    etapa === 1 ? <Typography sx={classes.txtPossuiConta}>Já Possui Conta? <Link to="/login" style={{ color: 'black', fontWeight: 'bold' }}> Fazer Login</Link></Typography> : null
                }
            </Box>
        </Design>
    );
}

export default Cadastro;
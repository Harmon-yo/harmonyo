import React from "react";
import EstruturaPaginaUsuario from "../../../components/Global/EstruturaPaginaUsuario/Main";
import { Box, Button, Typography, Avatar, Rating, TextField, InputLabel, MenuItem, FormControl, Select} from "@mui/material";
import "./style.css";
import EditIcon from "../../../imgs/edit-24px.png"
import SaveIcon from "../../../imgs/checked-24px.png"
import { useState, useEffect } from "react";
import InputMask from 'react-input-mask';
import api from "../../../api.js";
import CardExperiencias from "../../../components/Professor/CardExperiencias";
import { verificarDataNascimento } from "../../Cadastro-Login/Cadastro/verificacoes";


function PerfilUsuario() {

  const[dadosPessoaisAntesDeEditar, setDadosPessoaisAntesDeEditar] = useState({
    nome: "",
    email: "",
    dataNasc: "",
    sexo: ""
  })
  
  const[formDataDisable, setFormDataDisable] = useState({
    dadosPessoais: true,
    dadosEndereco: true,
    dadosSobreMim: true,
  })


  const [formData, setFormData] = useState({
      nome: '',
      avaliacaoMedia: 0.0,
      email: '',
      cpf: '',
      sexo: '',
      dataNasc: '',
      dataNascFormatada: '',
      idade: '',
      bibliografia: '',
      cep: '',
      logradouro: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      estado: '',
      experiencias: [],
  });

  const [errorsDadosPessoais, setErrorsDadosPessoais] = useState({
    errorNome: false,
    helperTextNome: "",

    errorEmail: false,
    helperTextEmail: "",

    errorDataNasc: false,
    helperTextDataNasc: ""
  })

  useEffect(() => {
     obterDadosPerfil()
  },[])
  

  function obterDadosPerfil() {

  api.get(`/usuarios/dados-perfil/${sessionStorage.getItem("ID")}`, { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` }})
          .then(response => {

            console.log(response)

            let dadosUsuario = response.data;

            // Dados pessoais do usuário
            setFormData({
              nome: dadosUsuario.nome,
              email: dadosUsuario.email,
              avaliacaoMedia: dadosUsuario.avaliacaoMedia,
              cpf: dadosUsuario.cpf,
              sexo: dadosUsuario.sexo,
              dataNasc: dadosUsuario.dataNasc,
              dataNascFormatada: new Date(dadosUsuario.dataNasc).toLocaleString("pt-BR", {year: "numeric", month: "2-digit", day:"2-digit",}),
              idade: calcularIdade(dadosUsuario.dataNasc),
              bibliografia: dadosUsuario.bibliografia,
              cep: dadosUsuario.endereco.cep,
              logradouro: dadosUsuario.endereco.logradouro,
              numero: dadosUsuario.endereco.numero,
              complemento: dadosUsuario.endereco.complemento,
              bairro: dadosUsuario.endereco.bairro,
              cidade: dadosUsuario.endereco.cidade,
              estado: dadosUsuario.endereco.estado,
              experiencias: dadosUsuario.experiencia,
            })

            setDadosPessoaisAntesDeEditar({ 
              nome: dadosUsuario.nome,
              email: dadosUsuario.email,
              dataNasc: dadosUsuario.dataNasc,
              sexo: dadosUsuario.sexo,
            })

          })
          .catch(err => {
            console.log(err)
          })

  }

  function formatDateToLocalDateSpring(date) {
    const parts = date.split('/');

    let dataFormata = parts[2] + "-" + parts[1] +  "-" + parts[0] 

    return dataFormata;

  }

  function verificarNome(nome) {
    if (nome.length < 4) {
        setErrorsDadosPessoais({...errorsDadosPessoais, errorNome: true, helperTextNome: "O Nome deve conter no mínimo 4 caracteres"})
    }
    else {
      setErrorsDadosPessoais({...errorsDadosPessoais, errorNome: false, helperTextNome: ""})
    }
  }

  function verificarEmail(email) {
    if (email.length < 4) {
      setErrorsDadosPessoais({...errorsDadosPessoais, errorEmail: true, helperTextEmail: "O Email deve conter no mínimo 4 caracteres"})
    } else if (!email.includes('@') || !email.includes('.')) {
      setErrorsDadosPessoais({...errorsDadosPessoais, errorEmail: true, helperTextEmail: "Email Inválido"})
    }
    else {
      setErrorsDadosPessoais({...errorsDadosPessoais, errorEmail: false, helperTextEmail: ""})
    }
  }

  function validaDataNascimento(dataNascimento) {
    
    dataNascimento = dataNascimento.split('/');
    let dia = dataNascimento[0];
    let mes = dataNascimento[1];
    let ano = dataNascimento[2];

    if (dia < 1 || dia > 31) {setErrorsDadosPessoais({...errorsDadosPessoais, errorDataNasc: true, helperTextDataNasc: "Dia inválido"}); return;}
    else if (mes < 1 || mes > 12) {setErrorsDadosPessoais({...errorsDadosPessoais, errorDataNasc: true, helperTextDataNasc: "Mês inválido"}); return;}
    else if (ano < 1900 || ano > new Date().getFullYear()) {setErrorsDadosPessoais({...errorsDadosPessoais, errorDataNasc: true, helperTextDataNasc: "Ano inválido"}); return;}

    let data = new Date(ano, mes - 1, dia), dataAtual = new Date();

    if (data > dataAtual) {
      setErrorsDadosPessoais({...errorsDadosPessoais, errorDataNasc: true, helperTextDataNasc: "Data de Nascimento inválida"})
    }
    else {
      setErrorsDadosPessoais({...errorsDadosPessoais, errorDataNasc: false, helperTextDataNasc: ""})
    }
}


  function atualizarDadosPessoais() {

    let desabilitarEdicao;

    let camposNaoForamEditados = (dadosPessoaisAntesDeEditar.nome == formData.nome && dadosPessoaisAntesDeEditar.email == formData.email && dadosPessoaisAntesDeEditar.dataNasc && formData.dataNasc && dadosPessoaisAntesDeEditar.sexo == formData.sexo)

    if(camposNaoForamEditados){
      alert("Você não editou nenhum dos campos !")

      desabilitarEdicao = false;

      return desabilitarEdicao
    }
    else if (errorsDadosPessoais.errorNome == false && errorsDadosPessoais.errorEmail == false && errorsDadosPessoais.errorDataNasc == false) {

      let dadosUsuario = {
        nome: formData.nome,
        email: formData.email,
        dataNasc: formatDateToLocalDateSpring(formData.dataNascFormatada),
      }
      
      api.put(`/usuarios/atualiza-dados-pessoais/${sessionStorage.getItem("ID")}`, dadosUsuario, { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` }})
          .then(res => {
            alert("Seus Dados foram atualizados com sucesso!")
          })
          .catch(err => {
            console.log(err)
          })
          desabilitarEdicao = true
          return desabilitarEdicao;
    }
    else {
      alert("Campos Inválidos! Não foi possível atualizar seus dados!")

      desabilitarEdicao = false

      return desabilitarEdicao;
    }
    
  }


  function calcularIdade(dataNasc) {
    dataNasc = new Date(dataNasc);
    const dataAtual = new Date();
  
    let idade = dataAtual.getFullYear() - dataNasc.getFullYear();
    const mesAtual = dataAtual.getMonth();
    const diaAtual = dataAtual.getDate();
    const mesNascimento = dataNasc.getMonth();
    const diaNascimento = dataNasc.getDate();
  
    // Verifica se ainda não fez aniversário no ano corrente
    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
      idade--;
    }
  
    return idade;
  }


  let txtSobreMim = "Um professor de música apaixonado por instrumentos de corda. Com formação em Educação Musical e vasta experiência de atuação, ele compartilha sua paixão pela música através do ensino. Sua expertise abrange teoria musical, técnicas de execução e pedagogia, permitindo que ele transmita conhecimentos de forma envolvente e inspiradora aos seus alunos. "

  
  return (
    <EstruturaPaginaUsuario>
      <Box className="pagina-container">

        <Box className="container-dados-pessoais">
          <Box className="box-foto-perfil">
            <Avatar alt="" src="../../../imgs/user.png" sx={{width: 120, height:120}}/>
            <Rating name="half-rating-read" defaultValue={0} precision={0.5} readOnly size="medium" value={formData.avaliacaoMedia}/>
            <Typography className="txt-nome">{formData.nome}</Typography>
            <Typography className="txt-idade">{formData.idade} Anos</Typography>
          </Box>

          <Box className="box-dados-pessoais">
            
            <Box className="box-titulo-e-edit-icon">
              <Typography className="txt-titulo">Dados Pessoais</Typography>
              <img  src={formDataDisable.dadosPessoais ? EditIcon : SaveIcon} alt="" className="img-edit-icon" 
                    onClick={() =>{ 
                        if (formDataDisable.dadosPessoais == false) {
                          setFormDataDisable({...formData, dadosPessoais: atualizarDadosPessoais() })
                        }
                        else {
                          setFormDataDisable({dadosPessoais: false })
                        }
                      }
                    }
              />
            </Box>

            <Box className="box-inputs-dados-pessoais-pt1">
              <TextField id="ipt-nome" onChange={(e) => {setFormData({ ...formData, nome: e.target.value }); verificarNome(e.target.value)}} label="Nome" variant="standard" error={errorsDadosPessoais.errorNome} helperText={errorsDadosPessoais.helperTextNome} value={formData.nome} sx={{width: "40%"}} disabled={formDataDisable.dadosPessoais}/>
              <InputMask mask='99/99/9999'  onChange={(e) => {setFormData({ ...formData, dataNascFormatada: e.target.value }); validaDataNascimento(e.target.value)}} sx={{ width: "100%" }} value={formData.dataNascFormatada} disabled={formDataDisable.dadosPessoais}>
                  {() => (
                      <TextField id="ipt-dataNascimento" label="Data de Nascimento" error={errorsDadosPessoais.errorDataNasc} helperText={errorsDadosPessoais.helperTextDataNasc}  variant = "standard" disabled={formDataDisable.dadosPessoais}/>
                  )}
              </InputMask>
              
              <TextField id="ipt-cpf" label="CPF"  variant = "standard" sx={{width: "30%"}} value={formData.cpf} disabled/>      

            </Box>

            <Box className="box-inputs-dados-pessoais-pt2" >
              <TextField id="ipt-email" onChange={(e) => {setFormData({ ...formData, email: e.target.value }); verificarEmail(e.target.value)}} label="Email" variant="standard" error={errorsDadosPessoais.errorEmail} helperText={errorsDadosPessoais.helperTextEmail} value={formData.email} sx={{width: "64%"}} disabled={formDataDisable.dadosPessoais}/>
              <FormControl variant="standard" sx={{ minWidth: 120, width: "30%"}} disabled={formDataDisable.dadosPessoais}>
                <InputLabel id="demo-simple-select-standard-label">Sexo</InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={formData.sexo}
                  onChange={(e) => setFormData({ ...formData, sexo: e.target.value })}
                  label="Sexo"
                >
                  <MenuItem value={"Masculino"}>Masculino</MenuItem>
                  <MenuItem value={"Feminino"}>Feminino</MenuItem>
                  <MenuItem value={"Outros"}>Outros</MenuItem>
                </Select>
              </FormControl>        
            </Box>

          </Box>
        </Box>
        
        <Box className="container-sobre-mim-e-endereco">

          <Box className="box-sobre-mim">
            <Box className="box-titulo-e-edit-icon">
                <Typography className="txt-titulo">Sobre Mim</Typography>
                <img src={EditIcon} alt="" />
            </Box>
            <Typography className="txt-sobre-mim">{txtSobreMim}</Typography>
          </Box>
          
          <Box className="linha-divisao-pagina" />

          {
            sessionStorage.getItem("CATEGORIA").toLowerCase() === 'professor' ?
            <>
              <Box className="box-cards-experiencias">
                <Box className="box-titulo-e-edit-icon">
                    <Typography className="txt-titulo">Experiências</Typography>
                    <img src={EditIcon} alt="" />
                </Box>
                {
                  formData.experiencias.map((exp) => 
                    <CardExperiencias titulo = {exp.titulo} descricao = {exp.descricao}/>
                  )
                }
              </Box>
              <Box className="linha-divisao-pagina" />
            </> : null
          }

          <Box className = "box-endereco">

            <Box className="box-titulo-e-edit-icon">
                <Typography className="txt-titulo">Endereço</Typography>
                <img src={EditIcon} alt="" />
            </Box>

            
            <Box className="box-inputs-endereco-pt1">
              <InputMask mask='99999-999' value={formData.cep} onChange={""} sx={{width: '25%'}} disabled={formDataDisable.dadosEndereco}>
                        {() => (
                            <TextField id="ipt-cep" label="CEP" error={""} helperText={""} variant="standard" disabled={formDataDisable.dadosEndereco}/>
                        )}
              </InputMask>
            </Box>

            <Box className="box-inputs-endereco-pt1">
              <TextField id="ipt-endereco" onChange={""} label="Endereço" variant="standard" error={""} helperText={""} value={formData.logradouro} sx={{width: "60%"}} disabled={formDataDisable.dadosEndereco}/>           
              <TextField id="ipt-numero" onChange={""} label="Número" variant="standard" error={""} helperText={""} value={formData.numero} sx={{width: "10%"}} disabled={formDataDisable.dadosEndereco} />           
              <TextField id="ipt-complemento" onChange={""} label="Complemento" variant="standard" error={""} helperText={""} value={formData.complemento} sx={{width: "20%"}} disabled={formDataDisable.dadosEndereco}/>           
            </Box> 

            <Box className="box-inputs-endereco-pt1">
              <TextField id="ipt-bairro" onChange={""} label="Bairro" variant="standard" error={""} helperText={""} value={formData.bairro} sx={{width: "40%"}} disabled={formDataDisable.dadosEndereco}/>           
              <TextField id="ipt-cidade" onChange={""} label="Cidade" variant="standard" error={""} helperText={""} value={formData.cidade} sx={{width: "40%"}} disabled={formDataDisable.dadosEndereco}/>           
              <TextField id="ipt-estado" onChange={""} label="Estado" variant="standard" error={""} helperText={""} value={formData.estado} sx={{width: "10%"}} disabled={formDataDisable.dadosEndereco}/>           
            </Box> 

          </Box>
          

        </Box>
        

     </Box>
    </EstruturaPaginaUsuario>
  );
}

export default PerfilUsuario;

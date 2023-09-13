import React from "react";
import EstruturaPaginaUsuario from "../../../components/Global/EstruturaPaginaUsuario/Main";
import { Box,  Typography, Rating, TextField, InputLabel, MenuItem, FormControl, Select, Tooltip} from "@mui/material";
import "./style.css";
import EditIcon from "../../../imgs/edit-24px.png"
import SaveIcon from "../../../imgs/checked-24px.png"
import AdicionarIcon from "../../../imgs/botao-adicionar-24px.png"
import { useState, useEffect } from "react";
import InputMask from 'react-input-mask';
import api from "../../../api.js";
import CardExperiencias from "../../../components/Professor/CardExperiencias";
import { consultaCep } from "../../../utils";
import Textarea from '@mui/joy/Textarea';
import FormHelperText from '@mui/joy/FormHelperText';
import ModalExperiencias from "../../../components/Professor/ModalExperiencias";
import ModalUploadFotoPerfil from "../../../components/Global/ModalUploadFotoPerfil";
import AvatarComFoto from "../../../components/Global/AvatarComFoto/index.jsx";


function PerfilUsuario() {

  // Este indicador serve para que ao renderizar a página ele não modifique os dados de CEP logo de inicio e sim só altere os dados de endereço
  // quando o usuário digitar o último número do CEP

  const idUsuario = sessionStorage.getItem("ID");

  let [ativarBuscaCep, setAtivarBuscaCep] = useState(false);

  const [dadosPerfilAntesDeEditar, setDadosPerfilAntesDeEditar] = useState({
    nome: "",
    email: "",
    dataNasc: "",
    sexo: "",
    bibliografia: "",
    cep: "",
    numero: "",
    complemento: "",
    experiencias: [],
  })

  const [formDataDisable, setFormDataDisable] = useState({
    dadosPessoais: true,
    dadosEndereco: true,
    dadosSobreMim: true,
    dadosExperiencias: true
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

  const [errorsSobreMim, setErrorsSobreMim] = useState({
    errorSobreMim: false,
    helperTextSobreMim: "",
  })

  const [errorsDadosEndereco, setErrorsDadosEndereco] = useState({

    errorCep: false,
    helperTextCep: "",

    errorNumero: false,
    helperTextNumero: "",

  })

  let [visibilidade, setVisibilidade] = useState(false);
  const abrirModalExperiencias = () => setVisibilidade(true);
  const fecharModalExperiencias = () => setVisibilidade(false);;

  let [visibilidadeModalFotoPerfil, setVisibilidadeModalFotoPerfil] = useState(false);
  const abrirModalUploadFotoPerfil = () => setVisibilidadeModalFotoPerfil(true);
  const fecharModalFecharModalUploadFotoPerfil = () => setVisibilidadeModalFotoPerfil(false);
  const [recarregarImg, setRecarregarImg] = useState(false);

  useEffect(() => {
    obterDadosPerfil();
  }, [])

  useEffect(() => {
    if (formData.cep !== undefined && !formData.cep.includes('_') && formData.cep !== '' && formData.cep.length === 9) {
      if (ativarBuscaCep) {
        verificarCep()
      }
    }
  }, [formData.cep])

  function obterDadosPerfil() {
    // Obtendo os dados de perfil  
    api.get(`/usuarios/dados-perfil/${idUsuario}`, { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } })
      .then(response => {

        let dadosUsuario = response.data;

        // Dados pessoais do usuário
        setFormData({
          ...formData,
          nome: dadosUsuario.nome,
          email: dadosUsuario.email,
          avaliacaoMedia: dadosUsuario.avaliacaoMedia,
          cpf: dadosUsuario.cpf,
          sexo: dadosUsuario.sexo,
          dataNasc: dadosUsuario.dataNasc,
          dataNascFormatada: new Date(dadosUsuario.dataNasc).toLocaleString("pt-BR", { year: "numeric", month: "2-digit", day: "2-digit", }),
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

        setDadosPerfilAntesDeEditar({
          nome: dadosUsuario.nome,
          email: dadosUsuario.email,
          dataNasc: dadosUsuario.dataNasc,
          sexo: dadosUsuario.sexo,
          bibliografia: dadosUsuario.bibliografia,
          cep: dadosUsuario.endereco.cep,
          numero: dadosUsuario.endereco.numero,
          complemento: dadosUsuario.endereco.complemento,
          experiencias: dadosUsuario.experiencia,
        })

      })
      .catch(err => {
        console.log(err)
      })

  }

  function formatDateToLocalDateSpring(date) {
    const parts = date.split('/');

    let dataFormata = parts[2] + "-" + parts[1] + "-" + parts[0]

    return dataFormata;

  }

  function verificarNome(nome) {
    if (nome.length < 4) {
      setErrorsDadosPessoais({ ...errorsDadosPessoais, errorNome: true, helperTextNome: "O Nome deve conter no mínimo 4 caracteres" })
    }
    else {
      setErrorsDadosPessoais({ ...errorsDadosPessoais, errorNome: false, helperTextNome: "" })
    }
  }

  function verificarEmail(email) {
    if (email.length < 4) {
      setErrorsDadosPessoais({ ...errorsDadosPessoais, errorEmail: true, helperTextEmail: "O Email deve conter no mínimo 4 caracteres" })
    } else if (!email.includes('@') || !email.includes('.')) {
      setErrorsDadosPessoais({ ...errorsDadosPessoais, errorEmail: true, helperTextEmail: "Email Inválido" })
    }
    else {
      setErrorsDadosPessoais({ ...errorsDadosPessoais, errorEmail: false, helperTextEmail: "" })
    }
  }

  function validaDataNascimento(dataNascimento) {

    dataNascimento = dataNascimento.split('/');
    let dia = dataNascimento[0];
    let mes = dataNascimento[1];
    let ano = dataNascimento[2];

    if (dia < 1 || dia > 31) { setErrorsDadosPessoais({ ...errorsDadosPessoais, errorDataNasc: true, helperTextDataNasc: "Dia inválido" }); return; }
    else if (mes < 1 || mes > 12) { setErrorsDadosPessoais({ ...errorsDadosPessoais, errorDataNasc: true, helperTextDataNasc: "Mês inválido" }); return; }
    else if (ano < 1900 || ano > new Date().getFullYear()) { setErrorsDadosPessoais({ ...errorsDadosPessoais, errorDataNasc: true, helperTextDataNasc: "Ano inválido" }); return; }

    let data = new Date(ano, mes - 1, dia), dataAtual = new Date();

    if (data > dataAtual) {
      setErrorsDadosPessoais({ ...errorsDadosPessoais, errorDataNasc: true, helperTextDataNasc: "Data de Nascimento inválida" })
    }
    else {
      setErrorsDadosPessoais({ ...errorsDadosPessoais, errorDataNasc: false, helperTextDataNasc: "" })
    }
  }

  function validarSobreMim(bibliografia) {
    if (bibliografia === '' || bibliografia === undefined || bibliografia === ' ' || bibliografia.length < 20) {
      setErrorsSobreMim({ ...errorsSobreMim, errorSobreMim: true, helperTextSobreMim: "Texto Inválido. Este campo deve conter no mínimo 20 caracteres" })
    }
    else if (bibliografia.length === 500) {
      setErrorsSobreMim({ ...errorsSobreMim, errorSobreMim: true, helperTextSobreMim: "Você atingiu o máximo de caracteres" })
    }
    else {
      setErrorsSobreMim({ ...errorsSobreMim, errorSobreMim: false, helperTextSobreMim: "" })
    }
  }

  async function verificarCep() {

    let dadosViaCep = await consultaCep(formData.cep)


    if (dadosViaCep === null) {
      setErrorsDadosEndereco({ ...errorsDadosEndereco, errorCep: true, helperTextCep: "CEP Inválido" })
    }
    else {
      setFormData({
        ...formData,
        logradouro: dadosViaCep.logradouro,
        numero: "",
        complemento: "",
        bairro: dadosViaCep.bairro,
        cidade: dadosViaCep.localidade,
        estado: dadosViaCep.uf,
      })
      setErrorsDadosEndereco({ ...errorsDadosEndereco, errorCep: false, helperTextCep: "" })
    }
  }

  function verificarNumeroEndereco(num) {

    if (num > 99999 || num <= 0 || num === "" || num === null || num === undefined) {
      setErrorsDadosEndereco({ errorsDadosEndereco, errorNumero: true, helperTextNumero: "Número Inválido" })
    }
    else {
      setErrorsDadosEndereco({ errorsDadosEndereco, errorNumero: false, helperTextNumero: "" })
    }
  }

  function atualizarDadosPessoais() {

    let desabilitarEdicao;

    let camposNaoForamEditados = (dadosPerfilAntesDeEditar.nome === formData.nome && dadosPerfilAntesDeEditar.email === formData.email && dadosPerfilAntesDeEditar.dataNasc === formData.dataNasc && dadosPerfilAntesDeEditar.sexo === formData.sexo)

    if (camposNaoForamEditados) {
      alert("Você não editou nenhum dos campos !")

      desabilitarEdicao = true;

      return desabilitarEdicao
    }
    else if (errorsDadosPessoais.errorNome === false && errorsDadosPessoais.errorEmail === false && errorsDadosPessoais.errorDataNasc === false) {

      let dadosUsuario = {
        nome: formData.nome,
        email: formData.email,
        dataNasc: formatDateToLocalDateSpring(formData.dataNascFormatada),
        sexo: formData.sexo
      }

      api.put(`/usuarios/atualiza-dados-pessoais/${idUsuario}`, dadosUsuario, { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } })
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

  function atualizasrSobreMim() {
    let desabilitarEdicao;

    let camposNaoForamEditados = (dadosPerfilAntesDeEditar.bibliografia === formData.bibliografia)

    if (camposNaoForamEditados) {
      alert("Você não editou nenhum dos campos !")

      desabilitarEdicao = true;

      return desabilitarEdicao
    }
    else if (!errorsSobreMim.errorSobreMim) {

      let usuarioBibliografia = {
        bibliografia: formData.bibliografia
      }

      api.put(`/usuarios/atualiza-sobre-mim/${idUsuario}`, usuarioBibliografia, { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } })
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

  function atualizarDadosEndereco() {

    let desabilitarEdicao;

    let camposNaoForamEditados = (dadosPerfilAntesDeEditar.cep === formData.cep && dadosPerfilAntesDeEditar.numero === formData.numero && dadosPerfilAntesDeEditar.complemento === formData.complemento)

    if (camposNaoForamEditados) {
      alert("Você não editou nenhum dos campos de endereço !")

      desabilitarEdicao = true;

      return desabilitarEdicao
    }
    else if (formData.numero > 99999 || formData.numero <= 0 || formData.numero === "" || formData.numero === null || formData.numero === undefined) {
      setErrorsDadosEndereco({ errorsDadosEndereco, errorNumero: true, helperTextNumero: "Número Inválido" })

      alert("Campos Inválidos! Não foi possível atualizar seus dados!")

      desabilitarEdicao = false

      return desabilitarEdicao;
    }
    else if (!errorsDadosEndereco.errorCep && !errorsDadosEndereco.errorNumero) {

      let dadosEndereco = {
        cep: formData.cep,
        logradouro: formData.logradouro,
        numero: formData.numero,
        complemento: formData.complemento,
        bairro: formData.bairro,
        cidade: formData.cidade,
        estado: formData.estado
      }

      api.put(`/enderecos/atualiza-endereco-usuario/${idUsuario}`, dadosEndereco, { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } })
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

  function deletarExpPorId(id) {

    let url = `/experiencias/${id}`

    console.log(url)

    api.delete(url, { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } }).then(res => {
      alert("Experiência excluída com sucesso!")
      obterDadosPerfil()
    })
      .catch(err => {
        alert("Ocorreu um erro sao adicionar sua experiência")
        console.log(err)
      })

  }

  return (
    <EstruturaPaginaUsuario>
      <Box className="pagina-container">

        <Box className="container-dados-pessoais">
          <Box className="box-foto-perfil">
            <AvatarComFoto
              id={idUsuario}
              onClick={abrirModalUploadFotoPerfil}
              className="img-perfil"
              nome={formData.nome}
              recarregarImg={recarregarImg}
            />
            <ModalUploadFotoPerfil visibilidade={visibilidadeModalFotoPerfil} closeModal={fecharModalFecharModalUploadFotoPerfil} imgState={{ recarregarImg, setRecarregarImg }} nomeUsuario={formData.nome}/>
            <Box className="container-avaliacao">
              <Typography>{formData.avaliacaoMedia}</Typography>
              <Rating name="half-rating-read" defaultValue={0} precision={0.5} readOnly size="medium" value={formData.avaliacaoMedia} />
            </Box>
            <Typography className="txt-nome">{formData.nome}</Typography>
            {/* <Typography className="txt-idade">{formData.idade} Anos</Typography> */}
          </Box>

          <Box className="box-dados-pessoais">

            <Box className="box-titulo-e-edit-icon">
              <Typography className="txt-titulo">Dados Pessoais</Typography>
              <Tooltip title={formDataDisable.dadosPessoais ? "Editar Dados Pessoais" : "Salvar Alterações"} placement="bottom-start" arrow={true}>
                <img src={formDataDisable.dadosPessoais ? EditIcon : SaveIcon} alt="" className="img-edit-icon"
                  onClick={() => {
                    if (formDataDisable.dadosPessoais === false) {
                      setFormDataDisable({ ...formDataDisable, dadosPessoais: atualizarDadosPessoais() })
                    }
                    else {
                      setFormDataDisable({ ...formDataDisable, dadosPessoais: false })
                    }
                  }
                  }
                />
              </Tooltip>
            </Box>

            <Box className="box-inputs-dados-pessoais-pt1">
              <TextField id="ipt-nome" onChange={(e) => { setFormData({ ...formData, nome: e.target.value }); verificarNome(e.target.value) }} label="Nome" variant="standard" error={errorsDadosPessoais.errorNome} helperText={errorsDadosPessoais.helperTextNome} value={formData.nome} sx={{ width: "40%" }} disabled={formDataDisable.dadosPessoais} />
              <InputMask mask='99/99/9999' onChange={(e) => { setFormData({ ...formData, dataNascFormatada: e.target.value }); validaDataNascimento(e.target.value) }} sx={{ width: "100%" }} value={formData.dataNascFormatada} disabled={formDataDisable.dadosPessoais}>
                {() => (
                  <TextField id="ipt-dataNascimento" label="Data de Nascimento" error={errorsDadosPessoais.errorDataNasc} helperText={errorsDadosPessoais.helperTextDataNasc} variant="standard" disabled={formDataDisable.dadosPessoais} />
                )}
              </InputMask>

              <TextField id="ipt-cpf" label="CPF" variant="standard" sx={{ width: "30%" }} value={formData.cpf} disabled />

            </Box>

            <Box className="box-inputs-dados-pessoais-pt2" >
              <TextField id="ipt-email" onChange={(e) => { setFormData({ ...formData, email: e.target.value }); verificarEmail(e.target.value) }} label="Email" variant="standard" error={errorsDadosPessoais.errorEmail} helperText={errorsDadosPessoais.helperTextEmail} value={formData.email} sx={{ width: "64%" }} disabled={formDataDisable.dadosPessoais} />
              <FormControl variant="standard" sx={{ minWidth: 120, width: "30%" }} disabled={formDataDisable.dadosPessoais}>
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
              <Tooltip title={formDataDisable.dadosSobreMim ? "Editar Sobre Mim" : "Salvar Alterações"} placement="bottom-start" arrow={true}>
                <img src={formDataDisable.dadosSobreMim ? EditIcon : SaveIcon} alt="" className="img-edit-icon"
                  onClick={() => {
                    if (formDataDisable.dadosSobreMim === false) {
                      setFormDataDisable({ ...formDataDisable, dadosSobreMim: atualizasrSobreMim() })
                    }
                    else {
                      setFormDataDisable({ ...formDataDisable, dadosSobreMim: false })
                    }
                  }
                  }
                />
              </Tooltip>
            </Box>
            {
              formDataDisable.dadosSobreMim ?
                <Typography className="txt-sobre-mim">
                  {formData.bibliografia === '' ?
                    'Seja-bem vindo. Clique no icone de editar no canto superior direito e escreva sobre você! :)' :
                    formData.bibliografia
                  }
                </Typography>
                :
                <>
                  <Textarea name="Outlined"
                    placeholder="Escreva sobre você"
                    variant="outlined"
                    className="txt-area-sobre-mim"
                    error={errorsSobreMim.errorSobreMim}
                    helperText={errorsSobreMim.helperTextSobreMim}
                    value={formData.bibliografia}
                    inputProps={{ maxLength: 500 }}
                    onChange={(e) => { setFormData({ ...formData, bibliografia: e.target.value }); validarSobreMim(e.target.value) }}
                    endDecorator={
                      <Typography level="body-xs" sx={{ ml: 'auto', color: '#000' }}>
                        {formData.bibliografia.length} character(s)
                      </Typography>
                    }
                  />
                  <FormHelperText>{errorsSobreMim.helperTextSobreMim}</FormHelperText>
                </>

            }
          </Box>

          <Box className="linha-divisao-pagina" />

          {
            sessionStorage.getItem("CATEGORIA").toLowerCase() === 'professor' ?
              <>
                <Box className="box-cards-experiencias">
                  <Box className="box-titulo-e-edit-icon">
                    <Typography className="txt-titulo">Experiências</Typography>
                    <Box className="box-icones-editar-experiencias" style={{ justifyContent: formDataDisable.dadosExperiencias ? 'end' : 'space-between' }}>
                      <Tooltip title="Adicionar Experiência" placement="bottom-start" arrow={true}>
                        <img src={AdicionarIcon} alt="" onClick={abrirModalExperiencias} className="img-edit-icon"
                        style={{ display: formDataDisable.dadosExperiencias ? 'none' : 'flex' }} />
                      </Tooltip>
                      <Tooltip title={formDataDisable.dadosExperiencias ? "Editar Experiências" : "Salvar Alterações"} placement="bottom-start" arrow={true}>
                        <img src={formDataDisable.dadosExperiencias ? EditIcon : SaveIcon} alt="" className="img-edit-icon"
                          onClick={() => {
                            if (formDataDisable.dadosExperiencias === false) {
                              setFormDataDisable({ ...formDataDisable, dadosExperiencias: true })
                            }
                            else {
                              setFormDataDisable({ ...formDataDisable, dadosExperiencias: false })
                            }
                          }
                          }
                        />
                      </Tooltip>
                    </Box>
                  </Box>
                  {
                    formData.experiencias.map((exp, i) =>
                      <CardExperiencias index={i} idExp={exp.id} titulo={exp.titulo} descricao={exp.descricao} disableIconesEditarExcluir={formDataDisable.dadosExperiencias} deletarExpPorId={deletarExpPorId} stateFormDataExps={{ formData, setFormData }} />
                    )
                  }
                  <ModalExperiencias visibilidade={visibilidade} closeModal={fecharModalExperiencias} isNovaExp={true} stateFormDataExps={{ formData, setFormData }} />
                </Box>
                <Box className="linha-divisao-pagina" />
              </> : null
          }

          <Box className="box-endereco">

            <Box className="box-titulo-e-edit-icon">
              <Typography className="txt-titulo">Endereço</Typography>
              <Tooltip title={formDataDisable.dadosEndereco ? "Editar Dados de Endereço" : "Salvar Alterações"} placement="bottom-start" arrow={true}>
                <img src={formDataDisable.dadosEndereco ? EditIcon : SaveIcon} alt="" className="img-edit-icon"
                  onClick={() => {
                    if (!formDataDisable.dadosEndereco) {
                      setFormDataDisable({ ...formDataDisable, dadosEndereco: atualizarDadosEndereco() })
                    }
                    else {
                      console.log(formDataDisable)
                      setFormDataDisable({ ...formDataDisable, dadosEndereco: false })
                    }
                  }
                  }
                />
              </Tooltip>
            </Box>


            <Box className="box-inputs-endereco-pt1">
              <InputMask mask='99999-999' value={formData.cep}
                onChange={(e) => { setFormData({ ...formData, cep: e.target.value }); setAtivarBuscaCep(true) }} sx={{ width: '25%' }} disabled={formDataDisable.dadosEndereco}>
                {() => (
                  <TextField id="ipt-cep" label="CEP" error={errorsDadosEndereco.errorCep} helperText={errorsDadosEndereco.helperTextCep} variant="standard" disabled={formDataDisable.dadosEndereco} />
                )}
              </InputMask>
            </Box>

            <Box className="box-inputs-endereco-pt1">
              <TextField id="ipt-endereco" onChange={""} label="Endereço" variant="standard" error={""} helperText={""} value={formData.logradouro} sx={{ width: "60%" }} disabled />
              <TextField id="ipt-numero" onChange={(e) => { setFormData({ ...formData, numero: e.target.value }); verificarNumeroEndereco(e.target.value) }} label="Número" variant="standard" error={errorsDadosEndereco.errorNumero} helperText={errorsDadosEndereco.helperTextNumero} value={formData.numero} sx={{ width: "10%" }} disabled={formDataDisable.dadosEndereco} type="number" />
              <TextField id="ipt-complemento" onChange={(e) => { setFormData({ ...formData, complemento: e.target.value }) }} label="Complemento" variant="standard" error={""} helperText={""} value={formData.complemento} sx={{ width: "20%" }} disabled={formDataDisable.dadosEndereco} inputProps={{ maxLength: 50 }} />
            </Box>

            <Box className="box-inputs-endereco-pt1">
              <TextField id="ipt-bairro" onChange={""} label="Bairro" variant="standard" error={""} helperText={""} value={formData.bairro} sx={{ width: "40%" }} disabled />
              <TextField id="ipt-cidade" onChange={""} label="Cidade" variant="standard" error={""} helperText={""} value={formData.cidade} sx={{ width: "40%" }} disabled />
              <TextField id="ipt-estado" onChange={""} label="Estado" variant="standard" error={""} helperText={""} value={formData.estado} sx={{ width: "10%" }} disabled />
            </Box>

          </Box>


        </Box>


      </Box>
    </EstruturaPaginaUsuario>
  );
}

export default PerfilUsuario;

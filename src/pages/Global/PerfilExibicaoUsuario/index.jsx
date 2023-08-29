import React, { useEffect, useState } from "react";
import EstruturaPaginaUsuario from "../../../components/Global/EstruturaPaginaUsuario/Main";
import { Box, Avatar, Rating, Button, Typography } from "@mui/material";
import Card from "../../../components/Global/Card";
import "./style.css";
import api from "../../../api.js";
import { storage } from "../../../utils/firebase";

function PerfilExibicaoUsuario() {

  const [formData, setFormData] = useState({
    nome: '',
    avaliacaoMedia: 0.0,
    categoria: '',
    bibliografia: '',
    bairro: '',
    cidade: '',
    estado: '',
    experiencias: [],
  });

  const [formRating, setRating] = useState({
    avaliacoes: [],
  });

  const [formInstruments, setInstruments] = useState({
    instrumentos: [],
  });

  const [imgPerfilURL, setImgPerfilURL] = useState("")

  const [formTimeResponse, setFormTimeResponse] = useState({
    tempoMedio: "",
  });

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const idUsuario = urlSearchParams.get("id");

    if (idUsuario) {
      console.log(idUsuario);

      obterDadosUsuario();
      obterAvaliacoesUsuario();
      obterImgPerfil();
      obterInstrumentos();
      obterTempoMedioDeResposta();

      function obterDadosUsuario() {
        api.get(`/usuarios/dados-perfil/${idUsuario}`, { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } })
          .then(response => {

            let dadosUsuario = response.data;

            // Dados pessoais do usuário
            setFormData({
              ...formData,
              nome: dadosUsuario.nome,
              email: dadosUsuario.email,
              categoria: dadosUsuario.categoriaUsuario,
              avaliacaoMedia: dadosUsuario.avaliacaoMedia,
              bibliografia: dadosUsuario.bibliografia,
              bairro: dadosUsuario.endereco.bairro,
              cidade: dadosUsuario.endereco.cidade,
              estado: dadosUsuario.endereco.estado,
              experiencias: dadosUsuario.experiencia,
            })
          })
          .catch(err => {
            console.log(err)
          })
      }

      function obterAvaliacoesUsuario() {
        api.get(`/usuarios/${idUsuario}/avaliacoes`, { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } })
          .then(response => {

            let avaliacoesUsuario = response.data;

            setRating({
              ...formRating,
              avaliacoes: avaliacoesUsuario,
            })
          })
          .catch(err => {
            console.log(err)
          })
      }

      function obterImgPerfil() {

        let urlImg = `/imgs-perfil-usuario/${idUsuario}_ft_perfil`

        // Obtendo a URL da imagem de perfil
        storage.ref(urlImg).getDownloadURL()
          .then(url => {
            console.log(url)
            setImgPerfilURL(url)
          })
          .catch(err => {
            console.log(err)
          });

      }

      function obterInstrumentos() {

        let categoria = "";

        if (formData.categoria = "Professor") {
          categoria = "professores";
        } else {
          categoria = "alunos";
        }

        api.get(`/${categoria}/${idUsuario}/instrumentos`, { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } })
          .then(response => {

            let instrumentosUsuario = response.data;

            setInstruments({
              ...formInstruments,
              instrumentos: instrumentosUsuario,
            })
          })
          .catch(err => {
            console.log(err)
          })
      }

      function obterTempoMedioDeResposta() {

        api.get(`/dashboard/mes-atual/media-tempo-resposta/${idUsuario}`, { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } })
          .then(response => {

            let tempoMedio = response.data;

            setFormTimeResponse({
              ...formTimeResponse,
              tempoMedio: tempoMedio,
            })
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }, [])

  console.log(formData);
  console.log(formRating);
  console.log(formInstruments);
  console.log(formTimeResponse);

  return (
    <EstruturaPaginaUsuario className="teste">
      <Box className="pagina">
        <Box className="pagina-perfil">
          <Card className="card-perfil">
            <Box className="topo-card">
              <Avatar className="avatar-perfil" sx={{ width: 100, height: 100, backgroundColor: '#099250', fontSize: '45px' }} src={imgPerfilURL}>{formData.nome.charAt(0)}</Avatar>
              {formData.categoria === "Professor" && formTimeResponse.tempoMedio !== "" ?
                <>
                  <Box className="duracao">
                    <Typography variant="h8" component="h3">Tempo médio de resposta</Typography>
                    <Box>{formTimeResponse.tempoMedio}</Box>
                  </Box>
                </> : null
              }
            </Box>
            <Box className="nome">{formData.nome}</Box>
            <Box className="categoria">{formData.categoria}</Box>
            <Box className="avaliacao-usuario">
              <Rating value={formData.avaliacaoMedia} readOnly></Rating>
              <Box className="avaliacao-numero">{formData.avaliacaoMedia}</Box>
            </Box>
            <Box className="instrumentos">
              {formInstruments.instrumentos.map((instrumento) => {
                return (
                  <>
                    <Box className="item-instumento">{instrumento.nome}</Box>
                  </>
                )
              })}
            </Box>
            <Box>{formData.estado} - {formData.cidade} - {formData.bairro}</Box>
          </Card>
        </Box>
        <Box className="pagina-informacoes">
          {formData.categoria === "Professor" ?
            <>
              <Card className="card-agendar">
                <Button className="botao">Agende uma aula</Button>
              </Card>
            </> : null
          }
          {formData.bibliografia !== "" ?
            <>
              <Card className="card-geral">
                <Box className="card-titulo">Biografia</Box>
                <Box>{formData.bibliografia}</Box>
              </Card>
            </> : null
          }
          {formData.categoria === "Professor" && formData.experiencias.length !== 0 ?
            <>
              <Card className="card-geral">
                <Box className="card-titulo">Formações</Box>
                <Box>
                  {formData.experiencias.map((experiencia) => {
                    return (
                      <Box className="item-experiencia">
                        <Box className="item-experiencia-titulo">{experiencia.titulo}</Box>
                        <Box className="item-experiencia-descricao">{experiencia.descricao}</Box>
                      </Box>
                    )
                  })}
                </Box>
              </Card>
            </> : null
          }
          {formRating.avaliacoes.length !== 0 ?
            <Card className="card-geral">
              <Box className="card-titulo">Avaliações</Box>
              {formRating.avaliacoes.map((avaliacao) => {

                let urlImgAvaliacao = `/imgs-perfil-usuario/${avaliacao.usuarioAvaliador.id}_ft_perfil`

                let imgPerfilAvaliacaoURL = ""

                storage.ref(urlImgAvaliacao).getDownloadURL()
                  .then(url => {
                    console.log(url)
                    imgPerfilAvaliacaoURL = url
                  })
                  .catch(err => {
                    console.log(err)
                  });

                return (
                  <>
                    <Box className="avaliacao">
                      <Box className="avaliacao-head">
                        <Box>
                          <Avatar
                            sx={{ width: 50, height: 50, backgroundColor: '#099250' }}
                            src={imgPerfilAvaliacaoURL}>
                            {avaliacao.usuarioAvaliador.nome.charAt(0)}
                          </Avatar>
                        </Box>
                        <Box>
                          <Box className="avaliacao-titulo">
                            <Box className="avaliacao-nome">{avaliacao.usuarioAvaliador.nome}</Box>
                            <Rating value={avaliacao.valor} readOnly></Rating>
                            <Box className="avaliacao-numero">{avaliacao.valor}</Box>
                          </Box>
                          <Box className="avaliacao-data">{avaliacao.dataAvaliacao}</Box>
                        </Box>
                      </Box><Box className="avaliacao-texto">{avaliacao.comentario}</Box>
                    </Box>
                  </>
                )
              })}
            </Card> : null
          }
        </Box>
      </Box >
    </EstruturaPaginaUsuario >
  );
}


export default PerfilExibicaoUsuario;
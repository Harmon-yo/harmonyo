import React, { useEffect, useState } from "react";
import EstruturaPaginaUsuario from "../../../components/Global/EstruturaPaginaUsuario/Main";
import { Box, Rating, Button, Typography } from "@mui/material";
import Card from "../../../components/Global/Card";
import "./style.css";
import api from "../../../api.js";
import { storage } from "../../../utils/firebase";
import ModalAvaiacao from "../../../components/Global/ModalAvaliacao";
import { useNavigate } from "react-router-dom";
import AvatarComFoto from "../../../components/Global/AvatarComFoto";

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

  const navigate = useNavigate();
  const idUsuario = new URLSearchParams(window.location.search).get("id");

  useEffect(() => {
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

        api.get(`/professores/dashboard/mes-atual/media-tempo-resposta/${idUsuario}`, { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } })
          .then(response => {

            var minutos = response.data;
            var horas = Math.floor(minutos / 60);
            var minutos = minutos % 60;
            var dias = Math.floor(horas / 24);
            var horas = horas % 24;
            var texto = "";
            if (dias > 0) {
              if (dias == 1) {
                texto += dias + " dia ";
              } else {
                texto += dias + " dias ";
              }
            }
            if (horas > 0) {
              if (horas == 1) {
                texto += horas + " hora ";
              } else {
                texto += horas + " horas ";
              }
            }
            if (minutos > 0) {
              if (minutos == 1) {
                texto += minutos + " minuto ";
              } else {
                texto += minutos + " minutos ";
              }
            }


            setFormTimeResponse({
              ...formTimeResponse,
              tempoMedio: texto,
            })
          })
          .catch(err => {
            console.log(err)
          })


      }
    } else {
      navigate(-1);
    }
  }, [])

  console.log(formData);
  console.log(formRating);
  console.log(formInstruments);
  console.log(formTimeResponse);

  const handleClickAgendar = () => {
    navigate(`/pedido?id=${idUsuario}`);
  }

  return (
    <EstruturaPaginaUsuario className="teste">
      <Box className="pagina">
        <Box className="pagina-perfil">
          <Card className="card-perfil">
            <Box className="topo-card">
              <AvatarComFoto
                id={idUsuario}
                nome={formData.nome}
                className="avatar-perfil"
                sx={{ width: 100, height: 100, fontSize: '45px' }} />
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
            {formData.categoria === "Professor" ?
              <>
                <Box className="box-agendar">
                  <Button className="botao" onClick={handleClickAgendar}>Agende uma aula</Button>
                </Box>
              </> : null
            }</Card>
        </Box>
        <Box className="pagina-informacoes">
          <Card className="card-geral">
            <Box className="card-titulo">Biografia</Box>
            <Box>{
              formData.bibliografia !== "" ? formData.bibliografia : "Sem biografia"
            }</Box>
          </Card>

          {formData.categoria === "Professor" ?
            <>
              <Card className="card-geral">
                <Box className="card-titulo">Formações</Box>
                {
                  formData.experiencias.length !== 0 ?
                    <Box>
                      {formData.experiencias.map((experiencia) => {
                        return (
                          <Box className="box-experiencia">
                            <Box className="titulo-experiencia">{experiencia.titulo}</Box>
                            <Box className="descricao-experiencia">{experiencia.descricao}</Box>
                          </Box>
                        )
                      })}
                    </Box> : "Sem formações"
                }
              </Card>
            </> : null
          }
          {formRating.avaliacoes.length !== 0 ?
            <Card className="card-geral">
              <Box className="card-titulo">Avaliações</Box>
              {formRating.avaliacoes.map((avaliacao) => {

                return (
                  <>
                    <Box className="avaliacao">
                      <Box className="avaliacao-head">
                        <Box>
                          <AvatarComFoto
                            id={avaliacao.usuarioAvaliador.id}
                            nome={formData.nome}
                            sx={{ width: 50, height: 50 }}
                          />
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
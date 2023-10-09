import EstruturaPaginaUsuario from "../../../components/Global/EstruturaPaginaUsuario/Main";
import { Box, Typography, Rating, CircularProgress } from "@mui/material";
import "./style.css";
import api from "../../../api.js";
import { useState, useEffect } from "react";
import AvatarComFoto from "../../../components/Global/AvatarComFoto";
import CardFeedback from "../../../components/Global/CardFeedback";

function TelaFeedbacks() {

    const [dadosCarregados, setDadosCarregados] = useState(false)

    const [dadosUsuario, setDadosUsuario] = useState({
        id: sessionStorage.getItem("ID"),
        nome: "",
        avaliacaoMedia: 0,
        feedbackRecebidos: []
    })

    useEffect(() => {
        getDadosUsuario();
    }, [])

    function getDadosUsuario() {

        api.get(`/usuarios/${dadosUsuario.id}/avaliacoes-recebidas`, { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } })
            .then(response => {
                let dados = response.data;

                console.log(dados)

                setDadosUsuario({ ...dadosUsuario, nome: dados.nome, avaliacaoMedia: dados.avaliacaoMedia, feedbackRecebidos: dados.avaliacoes })

                setDadosCarregados(true)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <>
            <EstruturaPaginaUsuario>
                <Box className={"container-pagina-feedbacks"}>
                    <Box className={"container-ft-perfil-e-feedbacks"}>
                        <Box className={"box-ft-perfil"}>

                            {
                                dadosCarregados ?

                                    <>
                                        <AvatarComFoto
                                            id={sessionStorage.getItem("ID")}
                                            className="ft-perfil"
                                            nome={""}
                                        />
                                        <Box className="box-avaliacao">
                                            <Typography sx={{ fontWeight: "bold" }}>{dadosUsuario.avaliacaoMedia.toFixed(2)}</Typography>
                                            <Rating name="half-rating-read" defaultValue={0} precision={0.5} readOnly size="medium" value={dadosUsuario.avaliacaoMedia} />
                                        </Box>
                                        <Typography className="txt-nome">{dadosUsuario.nome}</Typography>
                                    </>

                                : 
                                    <>
                                        <Typography variant="h6" sx={{width: "80%", textAlign: "center"}}>Carregando informações</Typography>
                                        <CircularProgress style={{ color: "#16B364" }} />
                                    </>
                            }


                        </Box>
                        <Box className={"box-feedbacks"}>

                            {

                                dadosCarregados ?
                                    dadosUsuario.feedbackRecebidos.length > 0 ?
                                        dadosUsuario.feedbackRecebidos.map((avaliacao, i) =>

                                            <>
                                                <CardFeedback index={i}
                                                    id={avaliacao.idAvaliador}
                                                    nome={avaliacao.nomeAvaliador}
                                                    valorAvaliacao={avaliacao.valorAvaliacao}
                                                    dataAvaliacao={avaliacao.dataAvaliacaoFormatada}
                                                    txtAvaliacao={avaliacao.comentario}
                                                />
                                                <Box className="linha-divisao-pagina" />
                                            </>
                                        )
                                        :
                                        <>
                                            <Typography variant="h4" sx={{ marginTop: "50px", marginBottom: "50px" }}>Você ainda não possui avaliações</Typography>
                                            <Box className="linha-divisao-pagina" />
                                        </>
                                    :
                                    <>
                                        <Typography variant="h5" sx={{marginTop: "50px", marginBottom: "50px",}}>Carregando Avaliações</Typography>
                                        <CircularProgress style={{ color: "#16B364"}} />
                                    </>
                            }
                        </Box>
                    </Box>
                </Box>
            </EstruturaPaginaUsuario>
        </>
    )
}

export default TelaFeedbacks;
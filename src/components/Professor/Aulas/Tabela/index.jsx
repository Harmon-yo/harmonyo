import React, { useState, useEffect } from "react";
import "./style.css";
import { Box } from "@mui/material";
import ItemAula from "../ItemAula/index.jsx";
import api from "../../../../api";
import ModalAula from "../ModalAula/index.jsx";

function Tabela() {

    const [dadosAulas, setDadosAulas] = useState([]);

    const novaAula = {
        id: "",
        instrumento: "",
        valor: "",
    }

    const [instrumentos, setInstrumentos] = useState([]);
    
    const [reloadPage, setReloadPage] = React.useState(false);

    console.log(reloadPage);

    useEffect(() => {
        api.get(`/instrumentos`,
            { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } }).then((response) => {
                let resposta = response.data;
                setInstrumentos(resposta);
                console.log(instrumentos);
            }).catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        api.get(`/aulas/ativas/${sessionStorage.ID}`,
            { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } }).then((response) => {
                let aulas = response.data;
                setDadosAulas(aulas);
                console.log(dadosAulas);

            }).catch((err) => {
                console.log(err);
            });
    }, [reloadPage]);


    return (
        <Box className="tabela-conteudo">
            {dadosAulas.length > 0 ? dadosAulas.map((aula) => {
                return (
                    <ItemAula key={aula.id} aulaState={aula} instrumentoState={instrumentos} reloadState={[reloadPage, setReloadPage]}/>
                );
            }, [])
        : null}
            <ModalAula aulaState={novaAula} instrumentoState={instrumentos} reloadState={{reloadPage, setReloadPage}}/>
        </Box>
    );
}

export default Tabela;
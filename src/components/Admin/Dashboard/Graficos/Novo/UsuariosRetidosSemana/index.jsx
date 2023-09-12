import { useEffect, useState } from "react";
import FrequenciaSemanal from "./FrequenciaSemanal/index.jsx"
import api from "../../../../../../api";

const frequencias = [
    {
        dia: "S",
        valor: 0,
        valorTotal: 10
    },
    {
        dia: "T",
        valor: 1,
        valorTotal: 10
    },
    {
        dia: "Q",
        valor: 2,
        valorTotal: 10
    },
    {
        dia: "Q",
        valor: 3,
        valorTotal: 10
    },
    {
        dia: "S",
        valor: 4,
        valorTotal: 10
    },
    {
        dia: "S",
        valor: 5,
        valorTotal: 10
    },
    {
        dia: "D",
        valor: 6,
        valorTotal: 10
    }
];

const requisicaoGet = (url) => {
    return api.get(url, { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } });
}

function UsuariosRetidosSemana(props) {

    const [frequencias, setFrequencias] = useState([{
        dia: "S",
        valor: 0
    },
    {
        dia: "T",
        valor: 0
    },
    {
        dia: "Q",
        valor: 0
    },
    {
        dia: "Q",
        valor: 0
    },
    {
        dia: "S",
        valor: 0
    },
    {
        dia: "S",
        valor: 0
    },
    {
        dia: "D",
        valor: 0
    }
    ]);

    return (
        <FrequenciaSemanal titulo="Usuários retidos na semana" frequencias={frequencias} />
    );
}

export default UsuariosRetidosSemana;
import FrequenciaSemanal from "../UsuariosRetidosSemana/FrequenciaSemanal/index.jsx";
import { useState, useEffect } from "react";
import api from "../../../../../../api.js";

const requisicaoGet = (url) => {
    return api.get(url, { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } });
}

function UsuariosCadastradosSemana(props) {

    const [frequencias, setFrequencias] = useState([]);

    useEffect(() => {
        requisicaoGet("/usuarios/quantidade-cadastrados-semana").then(
            (response) => {
                const valores = response.data;
                console.log("Usuários cadastrados na semana: ")
                console.log(valores);

                const dias = ["S", "T", "Q", "Q", "S", "S", "D"];
                for (let i = 0; i < 7; i++) {
                    setFrequencias(valorAntigo => [...valorAntigo, {
                        dia: dias[i],
                        valor: valores[i]
                    }]);
                }
            }
        ).catch(() => {
            props.adicionaErro("Erro ao carregar usuários cadastrados na semana");
        });
    }, []);

    return (
        <FrequenciaSemanal titulo="Usuários na semana" frequencias={frequencias} />
    );
}

export default UsuariosCadastradosSemana;
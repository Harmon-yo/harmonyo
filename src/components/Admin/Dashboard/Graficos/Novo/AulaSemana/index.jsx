import { useEffect, useState } from "react";
import FrequenciaSemanal from "./FrequenciaSemanal";
import api from "../../../../../../api";
import "./style.css";

const requisicaoGet = (url) => {
    return api.get(url, { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } });
}

function AulaSemana(props) {

    const adicionaErro = props.adicionaErro;
    const [frequencias, setFrequencias] = useState([]);

    useEffect(() => {

        Promise.all([requisicaoGet("/pedidos/quantidade-realizadas-semana"),
        requisicaoGet("/pedidos/quantidade-pendentes-semana"),
        requisicaoGet("/pedidos/quantidade-canceladas-semana")]).then(
            ([responseRealizadas, responsepPendentes, responseCanceladas]) => {
                const realizadas = responseRealizadas.data;
                const pendentes = responsepPendentes.data;
                const canceladas = responseCanceladas.data;

                console.log("Aulas Realizadas na semana: ")
                console.log(realizadas);
                console.log("Aulas Pendentes na semana: ")
                console.log(pendentes);
                console.log("Aulas Canceladas na semana: ")
                console.log(canceladas);

                const dias = ["D", "S", "T", "Q", "Q", "S", "S"];

                for (let i = 0; i < 7; i++) {
                    setFrequencias(valorAntigo => [...valorAntigo, {
                        dia: dias[i],
                        valores: [realizadas[i], pendentes[i], canceladas[i]],
                        }]);
                }
            }
        ).catch((erro) => {
            adicionaErro(erro);
        });
    }, []);

    return (
        <FrequenciaSemanal titulo="Aulas na semana" frequencias={frequencias}/>
    );
}

export default AulaSemana;
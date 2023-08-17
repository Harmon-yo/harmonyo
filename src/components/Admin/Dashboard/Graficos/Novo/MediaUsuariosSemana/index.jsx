import FrequenciaSemanal from "../UsuariosRetidosSemana/FrequenciaSemanal/index.jsx";

const frequencias = [
    {
        dia: "S",
        valor: 12,
        valorTotal: 50
    },
    {
        dia: "T",
        valor: 10,
        valorTotal: 50
    },
    {
        dia: "Q",
        valor: 8,
        valorTotal: 50
    },
    {
        dia: "Q",
        valor: 6,
        valorTotal: 50
    },
    {
        dia: "S",
        valor: 4,
        valorTotal: 50
    },
    {
        dia: "S",
        valor: 2,
        valorTotal: 50
    },
    {
        dia: "D",
        valor: 0,
        valorTotal: 50
    }
]

function MediaUsuarioSemana(props) {
    return (
        <FrequenciaSemanal titulo="Usuários na semana" frequencias={frequencias}/>
    );
}

export default MediaUsuarioSemana;
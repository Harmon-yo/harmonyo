import FrequenciaSemanal from "./FrequenciaSemanal/index.jsx"

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

function UsuariosRetidosSemana(props) {
    return (
        <FrequenciaSemanal titulo="Usuários retidos na semana" frequencias={frequencias}/>
    );
}

export default UsuariosRetidosSemana;
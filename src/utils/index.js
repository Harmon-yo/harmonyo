import axios from 'axios';

function verificarToken() {
    let token = sessionStorage.TOKEN;

    if (token === null || token === "" || token.length < 186) {
        sessionStorage.TOKEN = "";
        return true;
    }
}

function validaDataNascimento(dataNascimento) {
    dataNascimento = dataNascimento.split('/');
    let dia = dataNascimento[0];
    let mes = dataNascimento[1];
    let ano = dataNascimento[2];

    if (dia < 1 || dia > 31) return { error: true, helperText: 'Dia inválido' };
    else if (mes < 1 || mes > 12) return { error: true, helperText: 'Mês inválido' };
    else if (ano < 1900 || ano > new Date().getFullYear()) return { error: true, helperText: 'Ano inválido' };

    let data = new Date(ano, mes - 1, dia), dataAtual = new Date();

    if (data > dataAtual) {
        return {
            error: true,
            helperText: 'Data de Nascimento inválida'
        }
    }

    return {
        error: false,
    };
}

async function consultaCep(cep) {
    let dadosViaCep = {}

    await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => {

            if (res.data.erro) dadosViaCep = null;
            else dadosViaCep = res.data;

        })
        .catch((error) => {
            console.log(error);
        })

    console.log("Resposta:")
    console.log(dadosViaCep)
    return dadosViaCep;
}

export {
    verificarToken,
    validaDataNascimento,
    consultaCep
};
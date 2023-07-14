import { validaDataNascimento } from "../../../utils/index.js";


function verificarNome(nome) {
    if (nome.length < 3) {
        return {
            error: true,
            helperText: 'Nome deve conter no mínimo 3 caracteres'
        };
    }

    return {
        error: false,
    };
}

function verificarCpf(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length < 11) {
        return {
            error: true,
            helperText: 'CPF deve conter 11 caracteres'
        };
    } else if (validaCPF(cpf)) {
        return {
            error: true,
            helperText: 'CPF inválido'
        }
    }

    return {
        error: false,
    };
}

function validaCPF(strCPF) {
    let soma, resto, i;
    soma = 0;
    //strCPF  = RetiraCaracteresInvalidos(strCPF,11);
    if (strCPF === "00000000000") return true;

    for (i = 1; i <= 9; i++) soma = soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);

    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) resto = 0;

    if (resto !== parseInt(strCPF.substring(9, 10))) return true;

    soma = 0;

    for (i = 1; i <= 10; i++) soma = soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);

    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) resto = 0;

    if (resto !== parseInt(strCPF.substring(10, 11))) return true;

    return false;
}

function verificarEmail(email) {
    if (email.length < 4) {
        return {
            error: true,
            helperText: 'Email deve conter no mínimo 4 caracteres'
        };
    } else if (!email.includes('@') || !email.includes('.')) {
        return {
            error: true,
            helperText: 'Email inválido'
        }
    }

    return {
        error: false,
    };
}

function verificarDataNascimento(dataNascimento) {
    let dataSemBarra = dataNascimento.replace(/[^\d]+/g, '');
    let verificacaoSeEhValida = validaDataNascimento(dataNascimento);

    if (dataSemBarra.length < 8) {
        return {
            error: true,
            helperText: 'Data de Nascimento deve conter 10 caracteres'
        };
    } else if (verificacaoSeEhValida.error) return verificacaoSeEhValida;

    return {
        error: false,
    };
}

function verificarSenha(senha, confirmarSenha) {
    if (senha.length < 3) {
        return {
            error: true,
            helperText: 'Senha deve conter no mínimo 6 caracteres'
        };
    } else if (senha !== confirmarSenha) {
        return {
            error: true,
            helperText: 'As senhas devem ser iguais!'
        }
    }

    return {
        error: false,
    };
}

function verificarCep(cep) {
    cep = cep.replace(/[^\d]+/g, '');

    if (cep.length < 8) return { error: true, helperText: 'CEP deve conter 8 caracteres' };

    return {
        error: false,
    };
}

export { verificarNome, verificarCpf, verificarEmail, verificarDataNascimento, verificarSenha, verificarCep };
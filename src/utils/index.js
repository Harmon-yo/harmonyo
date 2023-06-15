function verificarToken() {
    let token = sessionStorage.TOKEN;

    if (token === null || token === "" || token.length < 186) {
        sessionStorage.TOKEN = "";
        return true;
    }
}

export {
    verificarToken
};
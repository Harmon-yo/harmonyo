import axios from "axios";

// Variáveis de ambiente para conexão com o Back-End Local ou de Produção (AWS - Docker)
const ENV_PRODUCAO = "44.218.142.250";
const ENV_DESENVOLVIMENTO = "localhost"


const api = axios.create({
  baseURL: `http://${ENV_PRODUCAO}:8080`
});


export default api;
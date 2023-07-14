import axios from "axios";


const api = axios.create({
  baseURL: "http://localhost:8080"
});

const apiGet = async (url) => {
  const config = {
    headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` },
  };

  return api.get(url, config).then((response) => {
    return response.data;
  }).catch((error) => {
    console.log(error);
  });
};


export default api;
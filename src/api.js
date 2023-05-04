import axios from "axios";


function request(url) {
    return axios.create({
        baseURL: url
    })
}

export default request;
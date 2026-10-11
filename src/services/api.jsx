import axios from "axios";


// https://api.themoviedb.org/3/movie/now_playing?api_key=3959cdc8d938c145e73d25d637dd607d&language=pt-BR

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})

export default api;
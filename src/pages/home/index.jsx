import axios from "axios";
import { Languages } from "lucide-react";
import { useEffect , useState } from "react"
import api from "../../services/api";

export default function Home(){

    // criar um useState para armazenar os flmes.
    const [movie, setMovie] = useState();

    // O useEffect para carregar a API com clico de vida.
    useEffect(()=>{

        //função assincrona.
        async function loadMovies(){
            //await para esperar carregar o API e trazer o conteúdo, uso do params para informar a chave api / language e pages.
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "3959cdc8d938c145e73d25d637dd607d",
                    Language: "pt-BR",
                    page: 1,
                }
            })
        }

        loadMovies();

    }, [])

    return(
        <h1>Página Home</h1>
    )
}
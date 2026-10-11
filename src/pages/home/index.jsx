import { useEffect , useState } from "react"
import api from "../../services/api";
import Cards from "../../components/Cards";
import Skeleton from "../../components/Skeleton";
import { Link } from "react-router-dom";

export default function Home(){

    // criar um useState para armazenar os flmes.
    const [movies, setMovies] = useState();

    const [loading, setLoading] = useState(true);

    // O useEffect para carregar a API com clico de vida.
    useEffect(()=>{

        //função assincrona.
        async function loadMovies(){
            //await para esperar carregar o API e trazer o conteúdo, uso do params para informar a chave api / language e pages.
            const response = await api.get("trending/all/day", {
                params: {
                    api_key: "3959cdc8d938c145e73d25d637dd607d",
                    Language: "pt-BR",
                    page: 1,
                }
            })

            setMovies(response.data.results.slice(0, 10))
        }

        loadMovies();

    }, [])


    useEffect(()=> {
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [])

    return(
        <div className="bg-zinc-100 w-full min-h-screen">
            <section className="w-full bg-linear-to-r from-cyan-500 to-blue-500">
                <div className="space-y-3 rounded-2xl container mx-auto h-60 flex flex-col justify-center items-start">
                    <h2 className="font-bold text-5xl">Bem-Vindo(a).</h2>
                    <p className="font-semibold text-zinc-800 text-lg">Milhões de Filmes, Séries e Pessoas para Descobrir. Explore já.</p>
                </div>
            </section>
            <section className="w-full py-5 ">
                <div className="container mx-auto py-4 flex flex-col">
                    <h3 className="font-semibold text-lg">Tendências</h3>

                    <div className="grid grid-cols-5 gap-4 mt-5">
                        {movies?.map((movie) => (
                            <Link to={`/details/${movie.id}`} key={movie.id} >
                                {loading ? <Skeleton /> : <Cards movie={movie} />}
                            </Link>
                        ))}                        
                    </div>
                    
                </div>
            </section>
        </div>
    )
}
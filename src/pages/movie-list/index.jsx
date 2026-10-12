import PageIndice from "../../components/Page-indice";
import CardsMovies from '../../components/Cards-movies'
import { useEffect , useState } from "react";
import api from "../../services/api";
import Skeleton from "../../components/Skeleton";
import { Link } from "react-router-dom";


const movieList = () => {

    const [film, setFilm] = useState();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilm(){
            const response = await api.get("movie/now_playing" , {
                params: {
                    api_key: "3959cdc8d938c145e73d25d637dd607d",
                    language: "pt-BR",
                }
            })

            setFilm(response.data.results.slice(0, 20))
        }

        loadFilm();
    }, [])

    useEffect(()=> {
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [])


    return(
        <section className="w-full min-h-screen bg-zinc-800 ">
            <div className="container mx-auto py-5">
                <PageIndice link="/" previous="Home" select="Movies List" />

                <section className="mt-10">
                    <h2 className="font-bold text-5xl text-zinc-100">Movies</h2>

                    <div className="grid grid-cols-5 gap-4 mt-10">
                        {film?.map((fil) => (
                            <Link to={`/details/${fil.id}`} key={fil.id} >
                                {loading ? <Skeleton /> :  <CardsMovies fil={fil} />}
                            </Link>
                        ))}
                    </div>                    

                </section>
            </div>
        </section>
    )
}

export default movieList;
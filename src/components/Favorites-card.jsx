import { Trash, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import { toast } from 'react-toastify';

const FavoriteCards = ({ item, setFavorites , favorites}) => {

    // função para excluir os favoritos - setFavorites e favorites, é recebido via props do index favorites página base.

    function deletedMovie (id) {
        let filterMovie = favorites.filter( (item) => {
            return (item.id !== id)
        })

        // const confirmedDeleted = window.confirm(`Realmente quer excluir o filme - ${item.title}?`)

        //confirma se ação acima for verdade ele exclui.

            setFavorites(filterMovie)
            localStorage.setItem("@movieapp", JSON.stringify(filterMovie))
            toast.success(`Filme ${item.title} removido dos favoritos`)

    }


    return(
        <>
            <div className="bg-zinc-700 rounded-sm p-3 flex gap-3 h-30" >
                <div className="bg-zinc-800 w-40 rounded-sm overflow-hidden">
                    {item.backdrop_path === null ? ( 
                        <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} 
                            className="w-full h-full object-center object-cover "
                            alt={item.title}  /> 
                    ) : (
                        <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} 
                            className="w-full h-full object-center object-cover "
                            alt={item.title} />
                    )
                 }
                </div>
                <div className="w-full flex">
                    <div className="flex-1 items-center justify-start flex">
                        <h2 className="text-zinc-100 font-bold text-lg max-w-60 truncate">{item.title}</h2>
                    </div>
                    <div className="flex flex items-center justify-center gap-3 text-white">
                        <button onClick={() => deletedMovie(item.id)}  className="bg-zinc-800 p-4 rounded-full flex cursor-pointer  hover:bg-red-400 transition-all" >
                            <Trash width={20} />
                        </button>

                        <Link to={`/details/${item.id}`} target="_blank" className="bg-zinc-800 p-4 rounded-full flex cursor-pointer hover:bg-zinc-500 transition-all" >
                            <ExternalLink width={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FavoriteCards;
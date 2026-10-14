import { Heart, Link, Trash } from "lucide-react";
import PageIndice from "../../components/Page-indice";
import FavoriteCards from '../../components/Favorites-card'
import { useEffect, useState } from "react";

const favorites = () => {

    // recupera o JSON no localstorage.
    const [favorites, setFavorites] = useState();
    
    useEffect(() => {
        const myList = localStorage.getItem("@movieapp")
        setFavorites(JSON.parse(myList))


    }, [])

    return(
        <section className="w-full min-h-screen bg-zinc-800 ">
            <div className="container mx-auto py-5">
                <PageIndice link="/" previous="Home" select="Movies List" />

                <section className="mt-10 ">
                    <h2 className="font-bold text-5xl text-zinc-100 flex items-baseline gap-3 ">
                        Favorites 
                    <span className="text-lg text-purple-300">
                        {favorites?.length}
                    </span>
                    </h2>

                    {/* Grid favoritos */}
                    <div className="grid grid-cols-1 gap-3 mt-4 ">
                        {favorites?.length === 0 ? (
                            <p className="text-zinc-200 mt-12 w-full ">Sem nenhum favorito salvo ainda</p>
                        ) : (
                            <>
                                {favorites?.map((item) => (
                                    <FavoriteCards item={item} key={item.id} favorites={favorites} setFavorites={setFavorites}/>
                                ))}
                            </>
                        )}
                    </div>               

                </section>
            </div>
        </section>
    )
}

export default favorites;
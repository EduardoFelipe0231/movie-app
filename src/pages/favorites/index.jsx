import { Heart, Link, Trash } from "lucide-react";
import PageIndice from "../../components/Page-indice";
import FavoriteCards from '../../components/Favorites-card'
import { useEffect, useState } from "react";

const favorites = () => {

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
                    <div className="grid grid-cols-3 gap-3 mt-4 ">
                        {favorites?.map((item) => (
                            <FavoriteCards item={item} />
                        ))}
                    </div>               

                </section>
            </div>
        </section>
    )
}

export default favorites;
import { Star } from "lucide-react";

const Cards = ({ movie }) => {


    return(
        <article className="bg-white  flex flex-col px-5 py-3 rounded-2xl cursor-pointer hover:shadow">
            <div className="relative w-full">
                <div className="relative overflow-hidden rounded-lg h-100 ">
                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="w-full h-full bg-no-repeat bg-contain overflow-hidden hover:scale-105 transition-transform duration-500" alt="" />

                    <div className="bg-zinc-900/60 absolute flex items-center justify-center p-1 gap-2 text-yellow-400 rounded-sm top-2 left-2 ">
                        <Star width={16} height={16}/>
                        <p>{movie.vote_average.toFixed(1)}</p>
                    </div>
                
                </div>
                <div className="py-4 flex justify-between items-center">
                    <p className="font-bold capitalize truncate max-w-50">{movie.title ? movie.title : movie.name.toLowerCase() }</p>
                </div>
            </div>
        </article>
    )
}

export default Cards;
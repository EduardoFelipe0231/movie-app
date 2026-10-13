import { Star } from "lucide-react";

const Cards = ({ movie }) => {


    return(
        <article className="flex flex-col px-5 py-3 rounded-2xl cursor-pointer " title={movie.title ? movie.title : movie.name.toLowerCase() }>
            <div className="relative w-full">
                <div className="relative overflow-hidden rounded-lg h-95 ">
                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="w-full h-full bg-no-repeat bg-contain overflow-hidden hover:scale-105 transition-transform duration-500" alt="" />

                    <div className="bg-zinc-900/60 absolute flex items-center justify-center p-1 gap-2 text-yellow-400 rounded-sm top-2 left-2 ">
                        <Star width={16} height={16}/>
                        {/* <p>{movie.vote_average.toFixed(1)}</p> */}
                        {movie.vote_average === 0.0 ? "7.3" : <p>{movie.vote_average.toFixed(1)}</p>}
                    </div>
                
                </div>
                <div className="py-4 flex justify-between items-center text-zinc-100">
                    <p className="font-semibold capitalize truncate max-w-45">{movie.title ? movie.title : movie.name.toLowerCase() }</p>
                    {/* <p className="text-sm ring-1 p-1 rounded-sm">{movie.media_type }</p> */}


                    {movie.media_type === 'tv' ? (<p className="text-sm ring-1 px-1 rounded-sm text-red-300">{movie.media_type }</p>) : (<p className="text-sm ring-1 px-1 rounded-sm text-blue-300">{movie.media_type }</p>)}
                </div>
            </div>
        </article>
    )
}

export default Cards;
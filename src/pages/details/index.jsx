import { useParams } from "react-router-dom"
import PageIndice from "../../components/Page-indice";
import { Heart, MessageSquare, Play, Share } from "lucide-react";
import api from "../../services/api";
import { useEffect, useState } from "react";

export default function Details(){

    const { id } = useParams();
    const [details, setDetails] = useState({});



    useEffect(() => {

        async function loadDetails(){
            const response = await api.get(`movie/${id}` , {
                params: {                     
                    api_key: "3959cdc8d938c145e73d25d637dd607d",
                    language: "pt-BR"
                }
            }).then((response) =>{
                setDetails(response.data)
            })
            .catch(() => {
                console.log("Movie not found!")
            })

        }

        loadDetails();

        return () => {
            console.log("componente foi desmontado!!")
        }

    }, [])


    

    return(
        <section className="w-full bg-zinc-800 h-screen">
            
            <div className="bg-zinc-600 h-100 overflow-hidden relative flex flex-col justify-center items-center" > 
                <img src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`} className="w-full h-full object-center object-cover absolute top-0 left-0" alt={details.title} />         
                <div className="bg-zinc-700/60 rounded-full p-6 cursor-pointer hover:shadow transition-all z-100 absolute">
                    <Play className="text-zinc-200"/>
                </div>
            </div>
            
            <div className="container mx-auto py-5 flex-1 mt-3">
                <div className="flex justify-between items-center">
                    {/* <PageIndice link="/" previous="Home" select="Details"/> */}
                    <h1 className="font-bold text-zinc-100 text-4xl">{details.title}</h1>
                    {/* botões */}
                    <div className="flex gap-3">
                        <div className="bg-zinc-700/60 rounded-sm p-3 cursor-pointer hover:shadow transition-all " title="favorite">
                            <Heart className="text-zinc-400 hover:text-red-400 transition-all"/>
                        </div>
                        <div className="bg-zinc-700/60 rounded-sm p-3 cursor-pointer hover:shadow transition-all " title="share">
                            <Share className="text-zinc-400 hover:text-blue-400 transition-all"/>
                        </div>
                        <div className="bg-zinc-700/60 rounded-sm p-3 cursor-pointer hover:shadow transition-all " title="comment">
                            <MessageSquare className="text-zinc-400 hover:text-zinc-300 transition-all"/>
                        </div>
                    </div>
                </div>

                {/* informações */}
                <div className="w-full flex gap-4 text-zinc-100 mt-4 items-center text-sm">
                    {/* classification */}

                    
                    <h3 className="ring-1 p-1">PG-18</h3>
                    {/* converte para horas e minutos */}
                    <h3 className="font-semibold">{Math.floor(details.runtime / 60)}hr {details.runtime % 60}m</h3>
                    <div className="flex gap-3 items-center">
                        <p className="bg-yellow-300 text-zinc-900 font-bold rouded-4xl p-1">IMBD</p>
                        <h3>{details.vote_average?.toFixed(1)}</h3>
                    </div>
                    {/* cortar o texto */}
                    <h3>{details.release_date?.substring(0, 4)}</h3>
                </div>

                {/* overview */}
                <div className=" min-w-8/12 ">
                    <p className="text-zinc-100 leading-7 mt-5 w-full font-light">
                        {details.overview}
                        
                   </p>

                </div> 
                    {/* faz um map nos generos do filme */}
                    <h6 className="text-red-300">{details?.genres?.map(o => o.name).join(', ')}</h6>

                    {details?.production_companies.map((o) => (
                        <p>{o.name}</p>
                    ))}
                <div>
                    
                </div>
            </div>        
                             
            
        </section>
    )
}
import { useEffect, useState } from "react";
import { Link, replace, useNavigate, useParams } from "react-router-dom"

import { Heart, MessageSquare, Play, Share } from "lucide-react";

import api from "../../services/api";

import { toast } from 'react-toastify';

export default function Details(){
    
    const { id } = useParams();

    const [details, setDetails] = useState({});

    const navigate = useNavigate();   
    

    useEffect(() => {

        async function loadDetails(){
            const response = await api.get(`movie/${id}` , {
                params: {                     
                    api_key: "3959cdc8d938c145e73d25d637dd607d",
                }
            }).then((response) =>{
                setDetails(response.data)
            })
            .catch(() => {
                navigate("/", { replace: true })
                return;
            })

        }

        loadDetails();

        return () => {
            console.log("componente foi desmontado!!")
        }

    }, [navigate, id])
    
    // *********** criando o salvamento no localstorage  *********** \\
    const handleFavorite = () => {
        // cria o caminho para o local.
        const myList = localStorage.getItem("@movieapp")

        // variável para armazenar caso já tiver uma armazena nela, caso vazia, inicia do zero.
        let savedFavorite = JSON.parse(myList) || [];

        // compara os ID e seo filme salvo já nao está na lista em "savedFavorite".
        const hasMovie = savedFavorite.some((savedF) => savedF.id === details.id)

        
        if(hasMovie){
            toast.warn(`Filme ${details.title} já existe na lista` )
            return
        }
        
        // const confirmedAdd = window.confirm("Deseja adicionar aos favoritos?")
        

            savedFavorite.push(details)
            localStorage.setItem("@movieapp", JSON.stringify(savedFavorite))
            toast.success(`Filme ${details.title} salvo com sucesso!`)


    }

    // copia o link da página
    const [copy, setCopy] = useState(false);
    
    
    async function copyToClip() {
        const shareUrl = window.location.href;
        await navigator.clipboard.writeText(shareUrl);
        setCopy(copy)
        toast(`Link copiado com sucesso`)        
    }

    return(
        <section className="w-full bg-zinc-800 h-screen">
            
            <div className="bg-zinc-600 h-100 overflow-hidden relative flex flex-col justify-center items-center" > 
    

                {details.backdrop_path === null ? ( 
                        <img src={`https://image.tmdb.org/t/p/original/${details.poster_path}`} 
                            className="w-full h-full object-center object-cover absolute top-0 left-0"
                            alt={details.title}  /> 
                    ) : (
                        <img src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`} 
                            className="w-full h-full object-center object-cover absolute top-0 left-0"
                            alt={details.title} />
                    )
                 }


                <Link className="z-100 " target="_blank" to={`https://www.youtube.com/results?search_query=${details.title}`}>
                    <div className="group  bg-zinc-700/60 rounded-full p-5 cursor-pointer hover:shadow transition-all flex gap-3 text-zinc-200 items-center ">
                        <h3 className="group-hover:text-purple-300">Trailer</h3>
                        <Play className="text-zinc-200 group-hover:text-purple-300" width={17 } height={17}/>
                    </div>
                </Link>
            </div>
            
            <div className="container mx-auto py-5 flex-1 mt-3">
                <div className="flex justify-between items-center">
                    {/* <PageIndice link="/" previous="Home" select="Details"/> */}
                    <h1 className="font-bold text-zinc-100 text-4xl">{details.title}</h1>
                    {/* botões */}
                    <div className="flex gap-3">
                        <button onClick={handleFavorite}  className="bg-zinc-700/60 rounded-sm p-2 cursor-pointer hover:shadow transition-all " title="favorite">
                            <Heart width={20} height={20} className="text-zinc-400 hover:text-red-400 transition-all"/>
                        </button>
                        {copy  ? console.log("copiado") : console.log("não copiado ainda")}
                        <button onClick={copyToClip} className="bg-zinc-700/60 rounded-sm p-2 cursor-pointer hover:shadow transition-all " title="share">
                            <Share width={20} height={20} className="text-zinc-400 hover:text-blue-400 transition-all"/>
                        </button>
                        <button className="bg-zinc-700/60 rounded-sm p-2 cursor-pointer hover:shadow transition-all " title="comment">
                            <MessageSquare width={20} height={20} className="text-zinc-400 hover:text-zinc-300 transition-all"/>
                        </button>
                    </div>
                </div>

                {/* informações */}
                <div className="w-full flex gap-4 text-zinc-100 mt-4 items-center text-sm">
                    {/* classification */}

                    
                    <h3 className="ring-1 p-1">{details.adult === "false" ? "PG-18" : "PG-14"}</h3>
                    {/* converte para horas e minutos */}
                    <h3 className="font-semibold">{Math.floor(details.runtime / 60)}hr {details.runtime % 60}m</h3>
                    <div className="flex gap-3 items-center ">
                        <p className="bg-yellow-300 text-zinc-900 font-bold p-1">IMBD</p>
                        {details?.vote_average === 0.0 ? "7.3" : <p>{details.vote_average?.toFixed(1)}</p>}
                    </div>
                    {/* cortar o texto */}
                    <h3>{details.release_date?.substring(0, 4)}</h3>
                    {/* faz um map nos generos do filme e junta e adicionar o "," para separar. */}
                    <h3 className="text-purple-300">{details?.genres?.map(o => o.name).join(' • ')}</h3> 
                </div>

                {/* overview */}
                <div className=" min-w-8/12 w-full ">
                    <p className="text-zinc-400 leading-7 mt-5 font-semibold italic text-lg">
                        {details.tagline}
                    </p>
                    <p className="text-zinc-100 leading-7 mt-5 font-light">
                        {details.overview}                       
                   </p>

                </div> 
                                        
                <div>
                    
                </div>
            </div>        
                             
            
        </section>
    )
}
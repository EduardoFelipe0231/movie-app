import { useParams } from "react-router-dom"
import PageIndice from "../../components/Page-indice";

export default function Details(){

    const { id } = useParams();

    return(
        <section className="w-full bg-zinc-800 h-screen">
            <div className="container mx-auto py-5 flex-1">
                <PageIndice link="/" previous="Home" select="Details"/>
                
                <div className="bg-zinc-600 h-90 rounded-3xl mt-10 overflow-hidden" >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcx84kYm9_oRaFjvtYvbaEvlSmCfmoTXKd-xJx08W2Ptd4WtxKg4EjJRQ&s=10" className="w-full h-full overflow-hidden" alt="" />
                </div>

            </div>
         </section>
    )
}
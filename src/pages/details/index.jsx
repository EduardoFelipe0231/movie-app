import { useParams } from "react-router-dom"

export default function Details(){

    const { id } = useParams();

    return(
        <div className="min-h-screen">
            <h1>Página Details - {id}</h1>
        </div>
    )
}
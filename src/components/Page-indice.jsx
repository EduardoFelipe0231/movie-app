import { Link } from "react-router-dom";

const PageIndice = ( { link, previous , select , movie }) => {
    return(
        <div className="flex gap-2 text-zinc-100">
            <Link to={link}>
                <h3 className="font-semibold text-purple-300">{previous} / </h3>
            </Link>
            <h3 className="text-zinc-400">{select}</h3>
        </div>
    )
}

export default PageIndice;
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <footer className="w-full bg-zinc-900 text-zinc-100 py-5">
            <div className="container mx-auto py-3 gap-5 flex items-center justify-between">
                <Link to="/" className="font-semibold text-lg ">
                    MovieApp
                </Link>
                <div className="flex gap-2 items-center text-zinc-500">
                    &copy;
                    <p className="flex gap-2 items-center ">
                        criado por
                        <a href="https://github.com/EduardoFelipe0231" target="_blank" className="hover:text-zinc-100 transition-all">
                            Eduardo Felipe
                        </a>
                        Todos os direitos reservados.
                    </p>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer;
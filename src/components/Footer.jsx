import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <footer className="w-full bg-zinc-900 text-zinc-100 py-5">
            <div className="container mx-auto py-3 gap-5 flex items-center justify-between">
                <Link to="/" className="font-semibold text-lg ">
                    MovieApp
                </Link>
            </div>
            
        </footer>
    )
}

export default Footer;
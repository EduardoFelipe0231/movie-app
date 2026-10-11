import { Link } from "react-router-dom"
import Avatar from 'boring-avatars';
import { Search } from "lucide-react";

const Header = () => {
    return(
        //header > container > logo > nav > etc..
        <header className="w-full bg-slate-900 text-zinc-100">
            {/* Container */}
            <div className="container mx-auto py-3 gap-5 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center">
                    <Link to="/" className="font-semibold text-2xl ">
                        MovieApp
                    </Link>
                </div>

                {/* Navbar */}
                <nav className="flex items-center gap-5 transition-all flex-1  justify-center">
                    <Link to="" className="hover:text-red-300">Movie</Link>
                    <Link to="" className="hover:text-red-300">TV Shows</Link>
                    <Link to="" className="hover:text-red-300">Favorites</Link>
                </nav>

                {/* Search Box*/}
                <div className="flex w-[320px] items-center gap-3 rounded-full bg-slate-800 p-2 ring-zinc-700">
                    <Search className="w-5 h-5 text-zinc-500" />
                    <input placeholder="Busque um filme ou série.." type="search" className="flex-1 bg-transparent outline-none placeholder:text-zinc-500" />
                </div>

                {/* Profile picture */}
                <div className="cursor-pointer hover:shadow transition-all" title="Profile">
                    <Avatar name="Amelia" size={40} variant="beam"/>
                </div>
                
            </div>
        </header>
    )
}

export default Header;
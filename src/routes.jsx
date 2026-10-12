import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import MovieList from './pages/movie-list'
import TvList from './pages/tv-list'
import Favorites from "./pages/favorites";
import Details from "./pages/details"
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/movies" element={<MovieList />}></Route>
                <Route path="/tvshows" element={<TvList />}></Route>
                <Route path="/favorites" element={<Favorites />}></Route>
                <Route path="/details/:id" element={<Details/> }></Route>                 
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
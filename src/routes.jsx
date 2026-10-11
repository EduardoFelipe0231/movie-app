import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Details from "./pages/details"
import Header from "./components/Header";

export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/details/:id" element={<Details/> }></Route>                 
            </Routes>
        </BrowserRouter>
    )
}
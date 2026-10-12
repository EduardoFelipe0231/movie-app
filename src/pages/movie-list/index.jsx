import PageIndice from "../../components/Page-indice";

const movieList = () => {
    return(
        <section className="w-full min-h-screen bg-zinc-800 ">
            <div className="container mx-auto py-5">
                <PageIndice link="/" previous="Home" select="Movies List" />
            </div>
        </section>
    )
}

export default movieList;
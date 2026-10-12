import PageIndice from "../../components/Page-indice";

const tvList = () => {
    return(
        <section className="w-full min-h-screen bg-zinc-800 ">
            <div className="container mx-auto py-5">
                <PageIndice link="/" previous="Home" select="TV Shows List" />
            </div>
        </section>
    )
}

export default tvList;
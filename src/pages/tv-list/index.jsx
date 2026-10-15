import PageIndice from "../../components/Page-indice";
import { tabTitle } from "../../util/title";

const tvList = () => {
    tabTitle(`TV Shows`)
    return(
        <section className="w-full min-h-screen bg-zinc-800 ">
            <div className="container mx-auto py-5">
                <PageIndice link="/" previous="Home" select="TV Shows List" />
            </div>
        </section>
    )
}

export default tvList;
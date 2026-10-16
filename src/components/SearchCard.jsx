import { ArrowUpRight } from "lucide-react";

const searchCard = () => {
    return(
        <div className="absolute right-60 flex flex-col bg-zinc-700 p-4 rounded-sm max-w-100 w-full shadow top-15 z-100 gap-2">
            {/* card */}
            <article className="flex items-center justify-between">
                <h3>
                    Spider-Man: Brand New Day
                </h3>
                <ArrowUpRight />
            </article>
        </div>
    )
}

export default searchCard;
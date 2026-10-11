const Skeleton = () => {
    return(
        <article className="bg-white  flex flex-col px-5 py-3 rounded-2xl cursor-pointer hover:shadow">
            <div className="relative w-full">
                <div className="relative overflow-hidden h-100 bg-zinc-300 animate-pulse rounded-sm ">
               
                </div>
                <div className="py-4 bg-zinc-300 animate-pulse rounded-sm mt-4">
                    
                </div>
            </div>
        </article>
    )
}

export default Skeleton;
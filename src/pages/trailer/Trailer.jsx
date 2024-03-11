import YouTube from "react-youtube";

export default function Trailer({trailer}){
return(
    <section>
        <div className="container">
            <div className="flex flex-wrap justify-between items-center gap-[15px]">
                {
                    trailer.slice(0, 4).map((el) =>(
                        <YouTube  videoId={el.key} />
                    ))
                }

            </div>
        </div>
    </section>
)
}
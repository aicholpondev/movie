import {useNavigate} from "react-router";

export default function Card({item}){

    const navigate = useNavigate()
    // console.log(item)
    return(
        <div className="w-[160px] h-[250px] my-[15px]">
            <div>
                <img
                    onClick={() => navigate(`/details/${item.id}`)}
                    className="w-full h-[90%] rounded-md"
                    src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${item.poster_path}`} alt="img"/>
                <h4 className="text-black-700 font-bold text-[18px] text-center pt-1">{item.title}</h4>
            </div>

        </div>
    )
}
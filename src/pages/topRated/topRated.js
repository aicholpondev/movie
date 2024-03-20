import {MdOutlineArrowForwardIos} from "react-icons/md";
import Card from "../../components/UI/card/card";
import {useEffect, useState} from "react";
import axios from "axios";
import {API, API_KEY, TOP_RATED} from "../../api/api";

export default function TopRated({language}){

    const [topRated,setTopRated] = useState([]);
    useEffect(() =>{
        axios(API+TOP_RATED+API_KEY + language())
            .then(({data}) =>{
                setTopRated(data.results)
            })
    },[language()]);

    return(
        <div className=" py-[50px]">
            <div className="container">
                <h1 className="text-black font-bold text-[46px] flex items-center gap-[15px]">Лучшие <MdOutlineArrowForwardIos />
                </h1>
                <div className="grid grid-rows-3 grid-flow-col gap-4">
                    {
                        topRated.length? topRated.map((el) =>(
                            <Card item={el}/>
                        )) : (<h1>Loading...</h1>)
                    }

                </div>
            </div>

        </div>
    )
}
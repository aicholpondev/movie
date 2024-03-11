import { MdOutlineArrowForwardIos } from "react-icons/md";
import {useEffect, useState} from "react";
import axios from "axios";
import {API, API_KEY, POPULAR} from "../../api/api";
import Card from "../../components/UI/card/card";


export default function Popular(){

    const [popular,setPopular] = useState([]);
    useEffect(() =>{
        axios(API+POPULAR+API_KEY)
            .then(({data}) =>{
                setPopular(data.results)
            })
    },[]);

    // console.log(popular)

    // console.log(API ,'API')
    // console.log(POPULAR,"POPULAR")
    return(
        <div className=" py-[50px]">
            <div className="container">
                <h1 className="text-black font-bold text-[46px] flex items-center gap-[15px]">В тренде <MdOutlineArrowForwardIos/>
                </h1>
                <div className="grid grid-rows-3 grid-flow-col gap-4">
                    {
                        popular.length? popular.map((el) =>(
                            <Card item={el}/>
                        )) : (<h1>Loading...</h1>)
                    }

                </div>
            </div>

        </div>
    )
}
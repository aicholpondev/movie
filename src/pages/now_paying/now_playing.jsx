import { MdOutlineArrowForwardIos } from "react-icons/md";
import {useEffect, useState} from "react";
import axios from "axios";
import {API, API_KEY, NOW_PLAYING} from "../../api/api";
import Card from "../../components/UI/card/card";


export default function NowPlaying({language}){

    const [nowPlaying,setNowPlaying] = useState([]);
    useEffect(() =>{
        axios(API+NOW_PLAYING+API_KEY + language())
            .then(({data}) =>{
                setNowPlaying(data.results)
            })
    },[language()]);


    return(
        <div className=" py-[50px]">
            <div className="container">
                <h1 className="text-black font-bold text-[46px] flex items-center gap-[15px]">Смотреть сейчас <MdOutlineArrowForwardIos/>
                </h1>
                <div className="grid grid-rows-3 grid-flow-col gap-4">
                    {
                        nowPlaying.length? nowPlaying.map((el) =>(
                            <Card item={el}/>
                        )) : (<h1>Loading...</h1>)
                    }

                </div>
            </div>

        </div>
    )
}
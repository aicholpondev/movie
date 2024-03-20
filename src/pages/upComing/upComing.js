import {useEffect, useState} from "react";
import axios from "axios";
import {API, API_KEY,  UPCOMING} from "../../api/api";
import {MdOutlineArrowForwardIos} from "react-icons/md";
import Card from "../../components/UI/card/card";

export default function UpComing({language}){

    const [upcoming,setUpComing] = useState([]);
    useEffect(() =>{
        axios(API+UPCOMING+API_KEY+ language())
            .then(({data}) =>{
                setUpComing(data.results)
            })
    },[language()]);
    return(
        <div className=" py-[50px]">
            <div className="container">
                <h1 className="text-black font-bold text-[46px] flex items-center gap-[15px]">Ожидаемые <MdOutlineArrowForwardIos />
                </h1>
                <div className="grid grid-rows-3 grid-flow-col gap-4">
                    {
                        upcoming.length? upcoming.map((el) =>(
                            <Card item={el}/>
                        )) : (<h1>Loading...</h1>)
                    }

                </div>
            </div>

        </div>
    )
}
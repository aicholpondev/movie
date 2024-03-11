import {useEffect, useState} from "react";
import {useParams} from "react-router";
import axios from "axios";
import {API, ACTORS, API_KEY, TRAILER} from "../../api/api";
import { FaCalendarAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import Actors from "../actors/actors";
import Trailer from "../trailer/Trailer";

export default function Details(){


    const [details,setDetails] = useState({})
    const {id} = useParams();
    const [actors,setActors] = useState([]);
    const [trailer,setTrailer] = useState([]);

    useEffect(() => {
        axios(API + id + API_KEY).then(({data}) =>{
            setDetails(data)
        });
    }, []);

    // console.log(id)
    // console.log(details)

    useEffect(() =>{
        axios(API + id + ACTORS + API_KEY)
            .then(({data}) =>{
            setActors(data.cast)
        })
    },[]);
    // console.log(actors)

    useEffect(() => {
        axios(API + TRAILER + API_KEY)
            .then(({data}) =>{
                setTrailer(data.results)
            })
    },[]);

    // console.log(trailer)

    function timeRun (runtime){
        let hours = Math.floor(runtime / 60) + "h";
        let minutes = runtime % 60 + "m"
        return hours + " " + minutes
    }
    return(
       <div>
           <div style={{background:`url("https://image.tmdb.org/t/p/original${details.backdrop_path}") no-repeat center/cover`}} className="min-h-[100vh]">
               <div style={{backdropFilter: "blur(3px)"}} className="w-full h-[100vh] bg-[#a7a7a7a3]">
                   <div className="container">
                       <div className="flex items-center justify-between h-[100vh]">
                           <div className="w-[30%]">
                               <img src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${details.poster_path}`} alt="img"/>

                           </div>
                           <div className="w-[65%]">
                               <h1 className="text-4xl font-bold text-[white]">{details.title}</h1>
                               <div className="flex items-center gap-[20px] py-[25px]">
                                   <h2 className="flex items-center gap-[5px] text-[white] font-bold"> <FaCalendarAlt />{details.release_date}</h2>
                                   <h5 className="flex items-center gap-[5px] text-[white] font-bold"> <MdAccessTimeFilled />{timeRun(details.runtime)}</h5>
                               </div>
                               <p className="text-[white] text-[18px] font-normal w-[90%]">{details.overview}</p>
                           </div>

                       </div>

                   </div>
               </div>

           </div>

           <Actors actors={actors}/>
           <Trailer trailer={trailer}/>
       </div>
    )
}
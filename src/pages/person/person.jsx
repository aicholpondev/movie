import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import axios from "axios";
import {API_KEY, MOVIE_PERSON, PERSON} from "../../api/api";
import Slider from "react-slick";


export default function Person(){
    const {id} = useParams();
    const [person,setPerson] = useState({});
    const [moviePerson,setMoviePerson] = useState([]);
    const navigate = useNavigate()


    useEffect(() =>{
        axios(PERSON + id + API_KEY).then(({data}) =>{
            setPerson(data)
        })
    },[]);

    useEffect(() =>{
        axios(PERSON + id + MOVIE_PERSON + API_KEY)
            .then(({data}) =>{
                setMoviePerson(data.cast)
            })
    },[])

    // console.log(person)
    console.log(moviePerson)

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        afterChange: function(index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
    };
    return(
       <section className="py-[50px]">
           <div className="container">
               <div className="flex items-start justify-between">
                   <img className="w-[45%]" src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${person.profile_path}`} alt=""/>
                   <div className="w-[45%]">
                       <h1 className="text-black-900 text-[20px] font-black py-[15px]">{person.name}</h1>
                       <h2 className="text-black-900 text-[20px] font-normal py-[15px]">  {person.birthday}</h2>
                       <h3 className="text-black-900 text-[20px] font-bold py-[15px]">{person.place_of_birth}</h3>


                       <p>Biography <br/>
                           {person.biography}</p>
                   </div>


               </div>

               <div className="">
                   <Slider {...settings}>
                       {
                           moviePerson.map((el) =>(
                            <div>
                                <img
                                    onClick={() => navigate(`/details/${el.id}`)}

                                    className="w-[70%] h-[90%] rounded-[10px] cursor-pointer " src={`https://image.tmdb.org/t/p/original${el.poster_path}`} alt="img"/>
                                <h1 className="text-center w-[70%] pt-[10px] text-black text-xl font-bold">{el.title}</h1>
                            </div>
                        ))
                       }
                   </Slider>
               </div>
           </div>
       </section>
    )
}
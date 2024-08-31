import Slider from "react-slick";
import imgActors from "../../assets/img/img.webp"
import {useNavigate} from "react-router";

export default function Actors({actors}){
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
            },
        ],
    };

    const navigate = useNavigate()
    // console.log(actors)


    return(
        <section className="py-[50px]">
            <div className="container">
                <div>

                        <div>
                            <Slider {...settings}>

                            {
                                actors.map((el) =>(
                                    <div className="rounded-[20px]  w-[300px] h-[90%] bg-[#c1c0c0]">

                                           <img
                                               onClick={() =>  navigate(`/person/${el.id}`)}
                                               className="w-[100%] rounded-[20px]"
                                               src={el.profile_path !== null ? `https://image.tmdb.org/t/p/w500${el.profile_path}` : imgActors} alt="img"/>


                                        <div className="text-center">
                                            <h5 className="text-black-900 text-[20px] font-normal py-[15px]">{el.character}</h5>
                                            <h6 className="text-black-900 text-[20px] font-bold">{el.original_name}</h6>
                                        </div>
                                    </div>


                                        ))
                            }
                            </Slider>

                        </div>

                </div>
            </div>

        </section>
    )
}
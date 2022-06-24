import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../lib/ApiKey";
import {useParams} from "react-router-dom";
import Slider from "react-slick"
import TopRated from "../pages/TopRated";
import Trailer from "./Trailer/Trailer";

const FilmTreiler = () => {

    const [trailers, setTrailers] = useState([])
    const {movieId} = useParams()
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        padding: 10,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${APIKEY}&language=en-US`)
            .then(({data}) => setTrailers(data.results))
    })
    return (
        <div className="container mx-10">


            <Slider {...settings}>
                {
                    trailers.map(el => (
                        <Trailer el={el}/>

                    ))
                }
            </Slider>
        </div>
    );
};

export default FilmTreiler;
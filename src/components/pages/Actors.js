import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../lib/ApiKey";
import {Link,useParams} from "react-router-dom";
import Slider from "react-slick";

const Actors = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
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


    const {movieId} = useParams()
    const [actors,setActors] = useState([])
    useEffect(() => {
        axios(`http://api.themoviedb.org/3/movie${movieId}/credits?api_key=${APIKEY}$language = en-US`)
            .then(({data})=>setActors(data.cast))
    },[])

    const profileImg = "data:image/png;base64,"


    return (
        <div>

        </div>
    );
};

export default Actors;
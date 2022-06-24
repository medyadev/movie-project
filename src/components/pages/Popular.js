import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../lib/ApiKey";
import MovieCard from "../MovieCard/MovieCard";



const Popular = () => {

    const [popular, setPopular] = useState([])
    const getPopular = async () => {
        const url = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`)
        const {data} = await url
        await setPopular(data.results)
    }
    console.log(Popular)

    useEffect(() => {
    getPopular()
    }, [])

    return (
        <div className="container">
            <div className="row">

                {
                    popular.map(el=> <MovieCard movie ={el}/>)
                }
            </div>

        </div>
    );
};

export default Popular;
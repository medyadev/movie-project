import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../lib/ApiKey";
import MovieCard from "../MovieCard/MovieCard";



const TopRated = () => {

    const [topRated, setTopRated] = useState([])
    const getTopRated = async () => {
        const url = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`)
        const {data} = await url
        await setTopRated(data.results)
    }
    console.log(topRated)

    useEffect(() => {
        getTopRated()
    }, [])


    return (
        <div className="container">
            <div className="row">

                {
                    topRated.map(el => <MovieCard key={el.id} movie={el}/>)

                }
            </div>

        </div>
    );
};

export default TopRated;
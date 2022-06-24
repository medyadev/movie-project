import React from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import {APIKEY} from "../../lib/ApiKey";
import {useEffect, useState} from "react";
import FilmTreiler from "../video/FilmTreiler";
import Actors from "./Actors";


const FilmPage = () => {
    const {movieId} = useParams()
    const [details, setDetails] = useState({})

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${APIKEY}&language=en-US`)
            .then(({data}) => setDetails(data))
    }, [])
    // console.log(details)
// [] index

    return (
        <div style={{
            background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${details.backdrop_path}") no-repeat center/cover`,
            minHeight: "100vh"
        }}>
            <div className="redr">
                <div className="container  ">
                    <div className="row  ">
                        <div className="col-4">

                            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${details.poster_path}`}
                                 alt=""/>
                        </div>
                        <div className="col-6 text-white">
                            <h1>{details.title}</h1>
                            <p className="my-3">{details.release_date}</p>
                            <p className="my-3">{Math.floor(details.runtime / 60)}h {details.runtime % 60}min</p>
                            <p>status{details.status}</p>
                            <p>vote{details.vote_average}</p>
                            <p>status{details.overview}</p>


                        </div>
                    </div>
                    <Actors/>
                    <FilmTreiler/>                </div>

            </div>
        </div>


    );
};

export default FilmPage;
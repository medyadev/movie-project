import React from 'react';
import {Link} from "react-router-dom";

const MovieCard = ({movie}) => {
    const {title,backdrop_path,poster_path
    } = movie

    return (
        <div className="col-3">
            <div className="img">
                <Link to={`/movies/${movie.id}`}>
                    <img className="movie" src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${poster_path}`}
                         alt=""/>
                </Link>

            </div>
            <p>{title}</p>
        </div>

    );
};

export default MovieCard;
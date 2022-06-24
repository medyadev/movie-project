import React from 'react';
import YouTube from 'react-youtube';

const Trailer = () => {

    const opts = {
        height: '200',
        width: '200',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    }
    return <YouTube videoId={el.key} opts={opts}/>;



    return (
        <div>

        </div>
    );
};

export default Trailer;
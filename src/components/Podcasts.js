import React , {useState} from "react";
import ReactPlayer from "react-player";
import SpotifyPlayer from 'react-spotify-player';

// size may also be a plain string using the presets 'large' or 'compact'
const size = {
    height: 200,
};
const view = 'coverart'; // or 'coverart'
const theme = 'black'; // or 'white'

const Podcasts = () => {
    //can add more links if needed
    const links = [
        {
            id:1,
            url: "https://www.youtube.com/watch?v=RUfM7IWu3pQ",
            text:"OverBoost #50 Podcast",
            format: "YT"
        },{
            id:2,
            url:"https://www.youtube.com/watch?v=pfUw8S5z6oY",
            text:"Zack!!! Podcast (German)",
            format: "YT"
        },
        {
            id:3,
            url: "https://open.spotify.com/episode/6quiILqLiHAC1UssK0U4ji?si=oSOmUZzxTJmwRgAMpev69A",
            text:"InsertMoin Podcast (German)",
            format: "Spotify"
        },
        {
            id:4,
            url: "https://open.spotify.com/episode/2PLQSNwJ4tORJaw4n9UqZy?si=qUj6zLCUSJasp1XG5cTy8Q",
            text:"Super Gamer Podcast 74",
            format: "Spotify"
        }
    ]


    //looping through links to get individual items
    //dynamically add classname for css
    return (
        <ul className="mainplayers">
            {links.map(link => {
                    return(
                        <li key={link.id}>
                            <h4 className="cleanfont">{link.text}</h4>
                            { link.format === "YT" ? <ReactPlayer url={link.url} controls="true"/> : <SpotifyPlayer
                                uri={link.url}
                                size={size}
                                view={view}
                                theme={theme}
                            />}
                            <br/>
                        </li>
                    )
                //TODO else case default in case of error?
            })}
        </ul>

    )
}
export default Podcasts
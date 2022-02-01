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

    const selectDropDown = name => {
        setDropName(name);
    }

    const [dropName, setDropName] = useState("All Podcasts");


    //can add more links if needed
    const dropOptions = [
        {
            id:1,
            text:"All Podcasts",
        },{
            id:2,
            text:"Youtube",
        },
        {
            id:3,
            text:"Spotify",
        }
    ]

    //can add more links if needed
    const links = [
        {
            id:1,
            url: "https://www.youtube.com/watch?v=RUfM7IWu3pQ",
            text:"OverBoost #50 Podcast",
            format: "Youtube"
        },{
            id:2,
            url:"https://www.youtube.com/watch?v=pfUw8S5z6oY",
            text:"Zack!!! Podcast (German)",
            format: "Youtube"
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
        <div className="marathoncenter">
            <nav style={{ paddingLeft:"10%", position:"absolute" }}>
                <ul className={`marathonNav.showMenu"`}>
                    <li className="sidebarTop">Selection</li>
                    {dropOptions.map(link => {
                        return(
                            <li className={`item ${dropName==link.text ? " active" : ""}`} key={link.id}>
                                <span
                                    style={{marginRight:"15px"}}
                                    onClick={() => selectDropDown(link.text)}
                                >
                                    {link.text}
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </nav><ul className="mainplayers">
            {links.map(link => {
                if (dropName === "All Podcasts") {
                    return (
                        <li key={link.id}>
                            <h4 className="cleanfont">{link.text}</h4>
                            {link.format === "Youtube" ? <ReactPlayer url={link.url} controls="true"/> : <SpotifyPlayer
                                uri={link.url}
                                size={size}
                                view={view}
                                theme={theme}
                            />}
                            <br/>
                        </li>
                    )
                }
                if (dropName === link.format) {
                    return (
                        <li key={link.id}>
                            <h4 className="cleanfont">{link.text}</h4>
                            {link.format === "Youtube" ? <ReactPlayer url={link.url} controls="true"/> : <SpotifyPlayer
                                uri={link.url}
                                size={size}
                                view={view}
                                theme={theme}
                            />}
                            <br/>
                        </li>
                    )
                }
                //TODO else case default in case of error?
            })}
        </ul>
        </div>
    )
}
export default Podcasts
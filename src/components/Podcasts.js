import React , {useState} from "react";
import ReactPlayer from "react-player";


const Podcasts = () => {
    //can add more links if needed
    const links = [
        {
            id:1,
            url:"https://www.youtube.com/watch?v=pfUw8S5z6oY",
            text:"Zack!!! German Podcast",
        },
        {
            id:2,
            url: "/media/podcasts",
            text:"Podcasts",
        },
        {
            id:3,
            url: "/media/articles",
            text:"Articles",
        }
    ]


    //looping through links to get individual items
    //dynamically add classname for css
    return (
            <ul className={`mediacenter`}>
                <li>
                    <ReactPlayer url="https://www.youtube.com/watch?v=pfUw8S5z6oY" controls="true" />
                </li>
            </ul>
    )
}

export default Podcasts
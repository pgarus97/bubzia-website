import React , {useState} from "react";
import ReactPlayer from "react-player";


const Articles = () => {
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
                Here comes article a href
            </li>
        </ul>
    )
}

export default Articles
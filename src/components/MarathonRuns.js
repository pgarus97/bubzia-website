import React , {useState} from "react";
import ReactPlayer from "react-player";
import {NavLink} from "react-router-dom";


const MarathonRuns = () => {
    //can add more links if needed
    const links = [
        {
            id:1,
            url:"https://www.youtube.com/watch?v=rKnDj3wMNik&list=PLgIDB87U34NdW7iErb21WRcMGDQu3HLWv&index=1",
            text:"Blindfolded Super Mario 64 - 70 Star at Summer Games Done Quick 2021",
        },
        {
            id:2,
            url: "https://www.youtube.com/watch?v=ZcOd82Q6-oU",
            text:"Blindfolded Super Mario 64 - 16 Star at Awesome Games Done Quick 2021",
        },
        {
            id:3,
            url: "https://www.youtube.com/watch?v=GKq2aIpIDQM",
            text:"Blindfolded Smash 64 - Break the Targets at Summer Games Done Quick 2020",
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
                        <ReactPlayer url={link.url} controls="true" />
                        <br/>
                    </li>
                )
            })}
        </ul>
    )
}

export default MarathonRuns
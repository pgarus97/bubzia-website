import React from "react";
import { NavLink } from "react-router-dom"
import {v4 as uuidv4} from "uuid";




const Navbar = () => {
    //can add more links if needed
    const links = [
        {
            id:uuidv4(),
            path: "/",
            text:"Home",
        },
        {
            id:uuidv4(),
            path: "/speedrun",
            text:"Speedruns",
        },{
            id:uuidv4(),
            path: "/media",
            text:"Media",
        },
        /*{
            id:uuidv4(),
            path: "/strats",
            text:"Strats",
        },
        {
            id:uuidv4(),
            path: "/twitch",
            text:"Twitch",
        },*/
        {
            id:uuidv4(),
            path: "/youtube",
            text:"Youtube",
        },
        {
            id:uuidv4(),
            path: "/goals",
            text:"Goals",
        },
        {
            id:uuidv4(),
            path: "/support",
            text:"Support",
        }
    ]


    //looping through links to get individual items
    //dynamically add classname for css
    return (
        <nav className="navBar">
            <ul className={`menuNav`}>
                {links.map(link => {
                    return(
                      <li className="navButton" key={link.id}>
                      <NavLink     className="topbar"
                                   to={link.path}
                                   activeClassName={`${link.path==="/" ? "" : "active-link"}`}
                                   >
                              {link.text}
                          </NavLink>
                      </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar
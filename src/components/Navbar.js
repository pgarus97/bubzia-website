import React , {useState} from "react";
import { NavLink } from "react-router-dom"




const Navbar = () => {
    //can add more links if needed
    const links = [
        {
            id:1,
            path: "/",
            text:"Home",
        },
        {
            id:2,
            path: "/speedrun/pbs",
            text:"Speedruns",
        },
        {
            id:3,
            path: "/strats",
            text:"Strats",
        },
        {
            id:4,
            path: "/twitch",
            text:"Twitch",
        },
        {
            id:5,
            path: "/youtube",
            text:"Youtube",
        },
        {
            id:6,
            path: "/media/marathons",
            text:"Media",
        },
        {
            id:7,
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
                                   activeClassName={`${link.path=="/" ? "" : "active-link"}`}
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
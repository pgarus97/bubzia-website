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
            path: "/speedrun",
            text:"Speedruns",
        },
        {
            id:3,
            path: "/twitch",
            text:"Twitch",
        },
        {
            id:4,
            path: "/strats",
            text:"Strats",
        },
        {
            id:5,
            path: "/youtube",
            text:"Youtube",
        },
        {
            id:6,
            path: "/media",
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
                          <NavLink to={link.path}
                                   activeClassName="active-link"
                                   exact>
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
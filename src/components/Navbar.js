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
            path: "/speedruns",
            text:"Speedruns",
        },
        {
            id:3,
            path: "/twitch",
            text:"Twitch",
        },
        {
            id:4,
            path: "/youtube",
            text:"Youtube",
        },
        {
            id:5,
            path: "/media",
            text:"Media",
        },
        {
            id:6,
            path: "/support",
            text:"Support",
        },
        {
            id:7,
            path: "/contact",
            text:"Contact",
        },
    ]


    //looping through links to get individual items
    //dynamically add classname for css
    return (
        <nav className="navBar">
            <ul className={`menuNav showMenu`}>
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
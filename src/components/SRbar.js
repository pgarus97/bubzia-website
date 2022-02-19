import React from "react";
import { NavLink } from "react-router-dom"
import {v4 as uuidv4} from "uuid";


const SRbar = () => {
    //can add more links if needed
    const links = [
        {
            id:uuidv4(),
            path: "/speedrun",
            text:"Personal Bests",
        },
        {
            id:uuidv4(),
            path: "/speedrun/goals",
            text:"Goals",
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
                            <NavLink className="topbar"
                                     to={link.path}
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

export default SRbar
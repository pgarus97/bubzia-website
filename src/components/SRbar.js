import React from "react";
import { NavLink } from "react-router-dom"


const SRbar = () => {
    //can add more links if needed
    const links = [
        {
            id:1,
            path: "/speedrun/pbs",
            text:"Personal Bests",
        },
        {
            id:2,
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

export default SRbar
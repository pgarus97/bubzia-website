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
            path: "/about",
            text:"About",
        },
    ]


    //looping through links to get individual items
    //dynamically add classname for css
    return (
        <nav className="navBar">
            <ul className={`menuNav`}>
                {links.map(link => {
                    return(
                      <li key={link.id}>
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
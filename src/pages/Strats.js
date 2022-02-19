import React, {useState} from "react"
import {Route, useRouteMatch,Switch, Link} from "react-router-dom";
import StratPage from "../components/StratPage";
import { v4 as uuidv4 } from "uuid";


const Strats = () => {
    const { url, path } = useRouteMatch()

    const dropOptions = [
        {
            id:uuidv4(),
            text:"Super Mario 64",
            handle:"sm64",
        },{
            id:uuidv4(),
            text:"SM64 Romhacks",
            handle:"sm64hacks",
        },{
            id:uuidv4(),
            text:"Smash 64",
            handle:"smash64",
        },{
            id:uuidv4(),
            text:"Smash Melee",
            handle:"melee",
        },{
            id:uuidv4(),
            text:"Metroid: Fusion",
            handle:"fusion",
        },{
            id:uuidv4(),
            text:"Metroid: Zero Mission",
            handle:"zm",
        },{
            id:uuidv4(),
            text:"Ocarina of Time",
            handle:"oot",
        },{
            id:uuidv4(),
            text:"Deltarune",
            handle:"deltarune",
        },{
            id:uuidv4(),
            text:"Rhythm Tengoku",
            handle:"tengoku",
        },

    ]

    const selectDropDown = name => {
        setDropName(name);
    }

    const [dropName, setDropName] = useState("Super Mario 64");

    return (
        <div className="marathoncenter">
            <Switch>
                <nav style={{ paddingLeft:"10%", position:"absolute", left:"-100px"}}>
                <ul className={`marathonNav.showMenu"`}>
                    <li className="sidebarTop">Selection</li>
                        {dropOptions.map(link => {
                            return(
                        <li className={`item ${dropName===link.text ? " active" : ""}`} key={link.id} onClick={() => selectDropDown(link.text)}>
                                <Link to={`${url}/${link.handle}`} style={{marginRight:"15px"}}>
                                    {link.text}
                                </Link>
                        </li>
                        )})}
                    </ul>
                    <Route path={`${path}/:slug`}>
                        <StratPage />
                    </Route>
                </nav>
            </Switch>
        </div>
    )
}
export default Strats
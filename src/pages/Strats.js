import React, {useState} from "react"
import SRbar from "../components/SRbar";
import {Route, useRouteMatch,Switch, Link} from "react-router-dom";
import PersonalBests from "../components/PersonalBests";
import Goals from "../components/Goals";
import StratPage from "../components/StratPage";

const Strats = () => {
    const { url, path } = useRouteMatch()

    const dropOptions = [
        {
            id:1,
            text:"Super Mario 64",
            handle:"sm64",
        },{
            id:2,
            text:"SM64 Romhacks",
            handle:"sm64hacks",
        },{
            id:3,
            text:"Smash 64",
            handle:"smash64",
        },{
            id:4,
            text:"Smash Melee",
            handle:"melee",
        },{
            id:5,
            text:"Metroid: Fusion",
            handle:"fusion",
        },{
            id:6,
            text:"Metroid: Zero Mission",
            handle:"zm",
        },{
            id:7,
            text:"Ocarina of Time",
            handle:"oot",
        },{
            id:8,
            text:"Deltarune",
            handle:"deltarune",
        },{
            id:9,
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
                        <li className={`item ${dropName==link.text ? " active" : ""}`} key={link.id} onClick={() => selectDropDown(link.text)}>
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
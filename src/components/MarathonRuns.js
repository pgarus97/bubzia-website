import React , {useState} from "react";
import ReactPlayer from "react-player";
import {v4 as uuidv4} from "uuid";


const MarathonRuns = () => {

    //can add more links if needed
    const dropOptions = [
        {
            id:uuidv4(),
            text:"Super Mario 64",
        },{
            id:uuidv4(),
            text:"Smash 64",
        },{
            id:uuidv4(),
            text:"Smash Melee",
        },{
            id:uuidv4(),
            text:"Metroid: Fusion",
        },{
            id:uuidv4(),
            text:"Metroid: Zero Mission",
        },{
            id:uuidv4(),
            text:"Deltarune",
        },{
            id:uuidv4(),
            text:"Rhythm Tengoku",
        },

    ]

    /*const handleToggle = () => {
        setNavbarOpen(prev => !prev)
        //setNavbarOpen(!navbarOpen);
    }*/

    /*const closeMenu = () => {
        setNavbarOpen(true)
    }*/

    const selectDropDown = name => {
        setDropName(name);
    }

    //const [navbarOpen, setNavbarOpen] = useState(true);

    const [dropName, setDropName] = useState("Super Mario 64");


    //can add more links if needed
    const links = [
        {
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=4pfrkdpWRaQ",
            text:"Blindfolded Super Mario 64 - 70 Star at RTAinJapan Winter 2021",
            game: "Super Mario 64",
        },{
            id:uuidv4(),
            url:"https://www.youtube.com/watch?v=rKnDj3wMNik",
            text:"Blindfolded Super Mario 64 - 70 Star at SGDQ2021",
            game: "Super Mario 64",
        },
        {
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=ZcOd82Q6-oU",
            text:"Blindfolded Super Mario 64 - 16 Star at AGDQ2021",
            game: "Super Mario 64",
        },
        {
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=GKq2aIpIDQM",
            text:"Blindfolded Smash 64 - Break the Targets at SGDQ2020",
            game: "Smash 64",
        },
        {
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=XHNUJ63oJY0",
            text:"Blindfolded Deltarune - any% at RTAinJapan Winter 2019",
            game: "Deltarune",
        },
        {
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=M9LzvBr26b4",
            text:"Blindfolded Metroid: Fusion - 100% at ESACoronaRelief",
            game: "Metroid: Fusion",
        },
        {
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=2oJwrnziHkU",
            text:"Blindfolded Metroid: Zero Mission - any% at ESASummerOnline",
            game: "Metroid: Zero Mission",
        },
        {
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=jQMbfm75Uf4",
            text:"Blindfolded Super Mario 64 - 16 Star at ESAWinter21",
            game: "Super Mario 64",
        },
        {
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=-vzFCPD1IIA",
            text:"Blindfolded Deltarune - any% at ESAWinter21",
            game: "Deltarune",
        },
        {
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=WS3zqibbG3g",
            text:"Blindfolded Smash 64 - Break the Targets at ESASummerOnline",
            game: "Smash 64",
        },
        {
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=TzLq21_O3QM",
            text:"Blindfolded Super Mario 64 - 16 Star at GMM",
            game: "Super Mario 64",
        },
        {
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=mJ7tKLE93_o",
            text:"Blindfolded Metroid: Zero Mission - any% at Metroid Marathon 2019",
            game: "Metroid: Zero Mission",
        },
        {
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=dqY8pJwVjgQ",
            text:"Blindfolded Rhythm Tengoku - any% at EgaeS",
            game: "Rhythm Tengoku",
        },
        {
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=obfKZ-mx-Ms",
            text:"Blindfolded Smash Melee - Adventure at ESASummer21",
            game: "Smash Melee",
        },
        {
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=hPHbMQJug78",
            text:"Blindfolded Super Mario 64 - 16 Star at GDQ One-and-Done-athon",
            game: "Super Mario 64",
        },
        {
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=vOrFC8ZJblY",
            text:"Blindfolded Super Mario 64 - 70 Star at GDQ No Category Left Behind",
            game: "Super Mario 64",
        },
        {
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=UwqWHlwWsT8",
            text:"Blindfolded Smash Melee - Adventure at ZFM2021",
            game: "Smash Melee",
        },
        {
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=4_VoNt6WZMs",
            text:"Blindfolded Smash Melee - Adventure at MGS2 2wentieth",
            game: "Smash Melee",
        },
        {
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=wdUAtSO94MM",
            text:"Blindfolded Super Mario 64 - 70 Star at ESASummer21",
            game: "Super Mario 64",
        }
    ]

    //looping through links to get individual items
    return (
        <div className="marathoncenter">
            <nav style={{ paddingLeft:"10%", position:"absolute", left:"-100px"}}>
                <ul className={`marathonNav.showMenu"`}>
                    <li className="sidebarTop">Selection</li>
                    {dropOptions.map(link => {
                        return(
                            <li className={`item ${dropName===link.text ? " active" : ""}`} key={link.id} onClick={() => selectDropDown(link.text)}>
                                <span style={{marginRight:"15px"}}>
                                    {link.text}
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <ul className="mainplayers">
                {links.map(link => {
                    if (dropName === link.game){
                        return(
                            <li key={link.id}>
                                <h4 className="cleanfont">{link.text}</h4>
                                <ReactPlayer url={link.url} controls="true"/>
                                <br/>
                            </li>
                        )
                    }
                    //TODO else case default in case of error?
                })}
            </ul>
        </div>
    )
}

export default MarathonRuns
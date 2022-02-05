import React, {useState} from "react"
import ReactPlayer from "react-player";

const PersonalBests = () => {

    //can add more links if needed
    const dropOptions = [
        {
            id:1,
            text:"Super Mario 64",
        },{
            id:2,
            text:"Ocarina of Time",
        },{
            id:3,
            text:"Smash 64",
        },{
            id:4,
            text:"Smash Melee",
        },{
            id:5,
            text:"Metroid: Fusion",
        },{
            id:6,
            text:"Metroid: Zero Mission",
        },{
            id:7,
            text:"Deltarune",
        },{
            id:8,
            text:"Rhythm Tengoku",
        },

    ]

    const selectDropDown = name => {
        setDropName(name);
    }

    const [dropName, setDropName] = useState("Super Mario 64");


    //can add more links if needed
    const links = [
        {
            id:1,
            url: "https://www.youtube.com/watch?v=oMU8sEqopC0",
            text:"Blindfolded Super Mario 64 - 70 Star",
            time:"1:44:28",
            game: "Super Mario 64",
        },{
            id:2,
            url:"https://www.youtube.com/watch?v=jIJy6fEIS28",
            text:"Blindfolded Super Mario 64 - 16 Star",
            time:"28:16",
            game: "Super Mario 64",
        },{
            id:3,
            url: "https://www.youtube.com/watch?v=vxqsw4JFF0I",
            text:"Blindfolded Super Mario 64 - 1 Star",
            time:"24:16",
            game: "Super Mario 64",
        },{
            id:4,
            url: "https://www.youtube.com/watch?v=bHCEg76icEU",
            text:"Blindfolded Super Mario 64 - 50 Star",
            time:"1:06:58",
            game: "Super Mario 64",
        },{
            id:5,
            url: "https://www.youtube.com/watch?v=PEgcXK3_cMc",
            text:"Blindfolded Super Mario 64 - 31 Star",
            time:"46:08",
            game: "Super Mario 64",
        },{
            id:6,
            url: "https://www.youtube.com/watch?v=Ia0xUE8ff4A",
            text:"Blindfolded Super Mario 64 - Softlock%",
            time:"1:59",
            game: "Super Mario 64",
        },{
            id:7,
            url: "https://www.youtube.com/watch?v=ueVFXwcXMZw",
            text:"Blindfolded Scrooge 64 - 1 Star",
            time:"1:47",
            game: "SM64 Romhacks",
        },{
            id:8,
            url: "https://www.youtube.com/watch?v=jo5GFKFEBv4",
            text:"Blindfolded Smash 64 - Break the Targets (All Characters)",
            time:"6:20",
            game: "Smash 64",
        },{
            id:9,
            url: "https://www.youtube.com/watch?v=Bzt44ZglQ6M",
            text:"Blindfolded Ocarina of Time - any%",
            time:"50:32",
            game: "Ocarina of Time",
        },{
            id:10,
            url: "https://www.youtube.com/watch?v=lWWMBsy0bZs",
            text:"Blindfolded Metroid: Fusion - 100%",
            time:"2:32:41",
            game: "Metroid: Fusion",
        },{
            id:11,
            url: "https://www.youtube.com/watch?v=TzLq21_O3QM",
            text:"Blindfolded Super Mario 64 - 16 Star at GMM",
            game: "Super Mario 64",
        },{
            id:12,
            url: "https://www.youtube.com/watch?v=mJ7tKLE93_o",
            text:"Blindfolded Metroid: Zero Mission - any% at Metroid Marathon 2019",
            game: "Metroid: Zero Mission",
        },
        {
            id:13,
            url: "https://www.youtube.com/watch?v=dqY8pJwVjgQ",
            text:"Blindfolded Rhythm Tengoku - any% at EgaeS",
            game: "Rhythm Tengoku",
        },
        {
            id:14,
            url: "https://www.youtube.com/watch?v=obfKZ-mx-Ms",
            text:"Blindfolded Smash Melee - Adventure at ESASummer21",
            game: "Smash Melee",
        },
        {
            id:15,
            url: "https://www.youtube.com/watch?v=hPHbMQJug78",
            text:"Blindfolded Super Mario 64 - 16 Star at GDQ One-and-Done-athon",
            game: "Super Mario 64",
        }
        ,
        {
            id:16,
            url: "https://www.youtube.com/watch?v=vOrFC8ZJblY",
            text:"Blindfolded Super Mario 64 - 70 Star at GDQ No Category Left Behind",
            game: "Super Mario 64",
        },
        {
            id:17,
            url: "https://www.youtube.com/watch?v=UwqWHlwWsT8",
            text:"Blindfolded Smash Melee - Adventure at ZFM2021",
            game: "Smash Melee",
        },
        {
            id:18,
            url: "https://www.youtube.com/watch?v=4_VoNt6WZMs",
            text:"Blindfolded Smash Melee - Adventure at MGS2 2wentieth",
            game: "Smash Melee",
        },
        {
            id:19,
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
                            <li className={`item ${dropName==link.text ? " active" : ""}`} key={link.id} onClick={() => selectDropDown(link.text)}>
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
                                <h4 className="cleanfont">{link.text} in {link.time}</h4>
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
export default PersonalBests
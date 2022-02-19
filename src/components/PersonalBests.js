import React, {useState} from "react"
import ReactPlayer from "react-player";
import { v4 as uuidv4 } from "uuid";

const PersonalBests = () => {

    //can add more links if needed
    const dropOptions = [
        {
            id:uuidv4(),
            text:"Super Mario 64",
        },{
            id:uuidv4(),
            text:"SM64 Romhacks",
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
            text:"Ocarina of Time",
        },{
            id:uuidv4(),
            text:"Deltarune",
        },{
            id:uuidv4(),
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
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=oMU8sEqopC0",
            text:"Blindfolded Super Mario 64 - 70 Star",
            time:"1:44:28",
            game: "Super Mario 64",
            strats: "https://docs.google.com/document/d/11E6JE_EHMTXxLFJJlGdLjKPXnBWxf0wQLPKo7YxK3OQ/edit?usp=sharing",
        },{
            id:uuidv4(),
            url:"https://www.youtube.com/watch?v=jIJy6fEIS28",
            text:"Blindfolded Super Mario 64 - 16 Star",
            time:"28:16",
            game: "Super Mario 64",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=vxqsw4JFF0I",
            text:"Blindfolded Super Mario 64 - 1 Star",
            time:"24:16",
            game: "Super Mario 64",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=bHCEg76icEU",
            text:"Blindfolded Super Mario 64 - 50 Star",
            time:"1:06:58",
            game: "Super Mario 64",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=PEgcXK3_cMc",
            text:"Blindfolded Super Mario 64 - 31 Star",
            time:"46:08",
            game: "Super Mario 64",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=Ia0xUE8ff4A",
            text:"Blindfolded Super Mario 64 - Softlock%",
            time:"1:59",
            game: "Super Mario 64",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=ueVFXwcXMZw",
            text:"Blindfolded Scrooge 64 - 1 Star",
            time:"1:47",
            game: "SM64 Romhacks",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=jo5GFKFEBv4",
            text:"Blindfolded Smash 64 - Break the Targets (All Characters)",
            time:"6:20",
            game: "Smash 64",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=Bzt44ZglQ6M",
            text:"Blindfolded Ocarina of Time - any%",
            time:"50:32",
            game: "Zelda",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=lWWMBsy0bZs",
            text:"Blindfolded Metroid: Fusion - 100%",
            time:"2:32:41",
            game: "Metroid",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=kvXdmW0NFNw",
            text:"Blindfolded Pokemon Red - any% Glitchless",
            time:"3:14:39",
            game: "Pokemon",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=xNy6KeJ_dqo",
            text:"Blindfolded Metroid: Zero Mission - any%",
            time:"1:22:46",
            game: "Metroid",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=dqY8pJwVjgQ",
            text:"Blindfolded Rhythm Tengoku - any%",
            time:"1:04:40",
            game: "Rhythm Tengoku",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=0zSqp5e9kl0",
            text:"Blindfolded Smash Melee - Adventure Mode",
            time:"8:51",
            game: "Smash Melee",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=zJxHLySbNEk",
            text:"Blindfolded Super Captain Falcon 64 - 1 Star",
            time:"11:45",
            game: "SM64 Romhacks",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=0aKRd2xibmc",
            text:"Blindfolded Nier Automata - [A] Ending",
            time:"2:46:54 Loadless",
            game: "Nier Automata",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=MkbSmvm1Q1M",
            text:"Blindfolded Pokemon Blue - any% NSC",
            time:"16:01",
            game: "Pokemon",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=5bLdXyD5qiw",
            text:"Blindfolded Kingdom Hearts 2 - any% Beginner",
            time:"6:36:47",
            game: "Kingdom Hearts",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=6Z6lG4wQwNQ",
            text:"Blindfolded Deltarune - any% NG+",
            time:"34:04",
            game: "Deltarune",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=Pivz3wWBg1g",
            text:"Blindfolded Deltarune - any% NG+ TP",
            time:"34:16",
            game: "Deltarune",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=VBputJIq9w4",
            text:"Blindfolded Deltarune - any% NG+ TPTR",
            time:"39:32",
            game:"Deltarune",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=LnKyTetaMNY",
            text:"Blindfolded Nier Automata - [E] Ending",
            time:"10:08:06",
            game:"Nier Automata",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=QhUTKnTu6zA",
            text:"Blindfolded Final Fantasy 3 - any%",
            time:"8:01",
            game:"Final Fantasy",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=wUVNP3vrIbw",
            text:"Blindfolded Smash 64 - Classic Mode",
            time:"12:32",
            game:"Smash 64",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=oZdXeHtjNoI",
            text:"Blindfolded Ib - Promise of Reunion",
            time:"54:40",
            game: "Ib",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=YOTWE9aEmtc",
            text:"Blindfolded Kingdom Hearts 1 - any% Beginner",
            time:"7:56:39",
            game: "Kingdom Hearts",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=s14ZFFBgopQ",
            text:"Blindfolded Metroid: Fusion - any%",
            time:"2:00:05",
            game: "Metroid",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=y-FLd9_J6BM",
            text:"Blindfolded A Link to the Past - any%",
            time:"3:40",
            game: "Zelda",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=gRkmmTbE2Go",
            text:"Blindfolded Metroid: Zero Mission - 100%",
            time:"3:11:42",
            game: "Metroid",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=ryV7JeqFrV4",
            text:"Blindfolded Wario Land 2 - any% Glitchless",
            time:"16:00",
            game: "Wario Land 2",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=oMc0oANwUnY",
            text:"Blindfolded Pokemon Yellow - any%",
            time:"1:57",
            game: "Pokemon",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=iWYqV0VJomk",
            text:"Blindfolded Kingdom Hearts 3 - Olymp%",
            time:"1:03:32",
            game: "Kingdom Hearts",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=x4Ikd6V4Hes",
            text:"Blindfolded Wii Sports - Golf: 9 Holes",
            time:"9:07",
            game: "Wii Sports",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=BuNhoeHily4",
            text:"Blindfolded Asura's Wrath - New Game Easy",
            time:"2:59:31",
            game: "Asura's Wrath",
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
                                <h4 className="cleanfont">{link.text} in {link.time} {link.strats != null ? <a  href={link.strats} target="_blank" rel="noreferrer">(Strats)</a> : ""}
                                </h4>
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
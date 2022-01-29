import React , {useState} from "react";
import ReactPlayer from "react-player";
import { RiArrowDropDownLine } from "react-icons/ri"



const MarathonRuns = () => {

    //can add more links if needed
    const dropOptions = [
        {
            id:1,
            text:"All Games",
        },{
            id:2,
            text:"Super Mario 64",
        },
        {
            id:3,
            text:"Smash 64",
        },
    ]

    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
        //setNavbarOpen(!navbarOpen);
    }

    const closeMenu = () => {
        setNavbarOpen(true)
    }

    const selectDropDown = name => {
        setDropName(name);
        closeMenu();

    }

    const [navbarOpen, setNavbarOpen] = useState(true);

    const [dropName, setDropName] = useState("All Games");


    //can add more links if needed
    const links = [
        {
            id:1,
            url:"https://www.youtube.com/watch?v=rKnDj3wMNik&list=PLgIDB87U34NdW7iErb21WRcMGDQu3HLWv&index=1",
            text:"Blindfolded Super Mario 64 - 70 Star at Summer Games Done Quick 2021",
            game: "Super Mario 64",
        },
        {
            id:2,
            url: "https://www.youtube.com/watch?v=ZcOd82Q6-oU",
            text:"Blindfolded Super Mario 64 - 16 Star at Awesome Games Done Quick 2021",
            game: "Super Mario 64",
        },
        {
            id:3,
            url: "https://www.youtube.com/watch?v=GKq2aIpIDQM",
            text:"Blindfolded Smash 64 - Break the Targets at Summer Games Done Quick 2020",
            game: "Smash 64",
        }
    ]


    //looping through links to get individual items
    //dynamically add classname for css
    //TODO this button does not rerender for some reason

    return (
        <div className="marathoncenter">
            <nav style={{ paddingLeft:"5%" }}>
                <button style={{ paddingRight:"1%" , position:"absolute", cursor:"pointer"}} onClick={() => handleToggle()}>
                    {
                    <div style={{display:"flex", alignItems: "center"}}>
                        <RiArrowDropDownLine style={{ color: "#7b7b7b", width: "50px", height: "50px" }}/>
                        <p style={{ float: "right",  }}>{dropName}</p>
                    </div>
                }</button>
                <ul className={`marathonNav ${navbarOpen ? " showMenu" : ""}`}>
                    {dropOptions.map(link => {
                        return(
                            <li className="item" key={link.id}>
                                <span
                                    style={{marginRight:"15px"}}
                                    onClick={() => selectDropDown(link.text)}
                                >
                                    {link.text}
                                </span>


                            </li>
                        )
                    })}
                </ul>
            </nav>
            <ul className="mainplayers">
                {links.map(link => {
                    if (dropName === "All Games") {
                        return(
                            <li key={link.id}>
                                <h4 className="cleanfont">{link.text}</h4>
                                <ReactPlayer url={link.url} controls="true"/>
                                <br/>
                            </li>
                        )
                    }
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
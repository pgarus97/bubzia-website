import React , {useState} from "react";
import {v4 as uuidv4} from "uuid";

const Articles = () => {
    //can add more links if needed
    const dropOptions = [
        {
            id:uuidv4(),
            text:"All Articles",
        },{
            id:uuidv4(),
            text:"Interview",
        },{
            id:uuidv4(),
            text:"News",
        }
    ]

    const selectDropDown = name => {
        setDropName(name);
    }

    const [dropName, setDropName] = useState("All Articles");

    //can add more links if needed
    const links = [
        {
            id:uuidv4(),
            url:"https://news.yahoo.co.jp/articles/d3093a04fb0856cbde8d014c619ddf6b4275447b",
            text:"『スーパーマリオ64』を「目隠し」でクリアするRTAが話題に。「RTA in Japan Winter 2021」で記憶と耳だけを頼りに攻略していく驚異的なタイムアタックが披露される",
            publisher:"www.news.yahoo.co.jp",
            date:"29 Dec 2021",
            type:"News"

        },{
            id:uuidv4(),
            url:"https://www.thegamer.com/super-mario-64-speedrun-blindfold/",
            text:"Speedrunner Beats Super Mario 64 In 24 Minutes While Blindfolded",
            publisher:"www.thegamer.com",
            date:"11 Dec 2021",
            type:"News"

        },{
            id:uuidv4(),
            url:"https://www.thegamer.com/super-mario-64-blindfolded-speedrun/",
            text:"YouTuber Beats Mario 64 In Under Two Hours While Blindfolded",
            publisher:"www.thegamer.com",
            date:"06 Dec 2021",
            type:"News"

        },{
            id:uuidv4(),
            url:"https://www.fanbyte.com/features/a-speedrunners-quest-to-perfect-super-mario-64-blindfolded/",
            text:"A Speedrunner’s Quest to Perfect Super Mario 64 Blindfolded",
            publisher:"www.fanbyte.com",
            date:"11 Nov 2021",
            type:"Interview"
        },
        {
            id:uuidv4(),
            url:"https://www.thegamer.com/speedrunner-super-mario-64-blindfolded-39-minutes/",
            text:"Speedrunner Beats Super Mario 64 Blindfolded In Just 39 Minutes",
            publisher:"www.thegamer.com",
            date:"08 Jan 2021",
            type:"News"
        },
        {
            id:uuidv4(),
            url:"https://www.shacknews.com/article/119738/summer-games-done-quick-2020-interview-bubzia-and-super-smash-bros-64-blindfolded",
            text:"Summer Games Done Quick 2020, Interview: Bubzia and Super Smash Bros. 64 Blindfolded",
            publisher:"www.shacknews.com",
            date:"12 Aug 2020",
            type:"Interview"
        }
    ]


    //looping through links to get individual items
    //dynamically add classname for css
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
                    if (dropName === "All Articles") {
                        return(
                            <li style={{borderBottom: "2px solid #eaeaea" ,paddingBottom:20,paddingTop:20}} key={link.id}>
                                <a className="articleLink" href={link.url} target="_blank" rel="noreferrer">{link.text} <br/> Published: {link.date} <br/> {link.publisher}</a>
                            </li>
                        )
                    }
                    if (dropName === link.type){
                        return(
                            <li style={{borderBottom: "2px solid #eaeaea" ,paddingBottom:20,paddingTop:20}} key={link.id}>
                                <a className="articleLink" href={link.url} target="_blank" rel="noreferrer">{link.text} <br/> Published: {link.date} <br/> {link.publisher}</a>
                            </li>
                        )
                    }
                    //TODO else case default in case of error?
                })}
            </ul>
        </div>
    )
}

export default Articles
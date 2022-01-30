import React , {useState} from "react";
import ReactPlayer from "react-player";
import SpotifyPlayer from "react-spotify-player";


const Articles = () => {
    //can add more links if needed
    const links = [
        {
            id:1,
            url:"https://news.yahoo.co.jp/articles/d3093a04fb0856cbde8d014c619ddf6b4275447b",
            text:"『スーパーマリオ64』を「目隠し」でクリアするRTAが話題に。「RTA in Japan Winter 2021」で記憶と耳だけを頼りに攻略していく驚異的なタイムアタックが披露される",
            publisher:"www.news.yahoo.co.jp",
            date:"29 Dec 2021"

        },{
            id:2,
            url:"https://www.thegamer.com/super-mario-64-speedrun-blindfold/",
            text:"Speedrunner Beats Super Mario 64 In 24 Minutes While Blindfolded",
            publisher:"www.thegamer.com",
            date:"11 Dec 2021"

        },{
            id:3,
            url:"https://www.thegamer.com/super-mario-64-blindfolded-speedrun/",
            text:"YouTuber Beats Mario 64 In Under Two Hours While Blindfolded",
            publisher:"www.thegamer.com",
            date:"06 Dec 2021"

        },{
            id:4,
            url:"https://www.fanbyte.com/features/a-speedrunners-quest-to-perfect-super-mario-64-blindfolded/",
            text:"A Speedrunner’s Quest to Perfect Super Mario 64 Blindfolded",
            publisher:"www.fanbyte.com",
            date:"11 Nov 2021"
        },
        {
            id:5,
            url:"https://www.thegamer.com/speedrunner-super-mario-64-blindfolded-39-minutes/",
            text:"Speedrunner Beats Super Mario 64 Blindfolded In Just 39 Minutes",
            publisher:"www.thegamer.com",
            date:"08 Jan 2021"
        },
        {
            id:6,
            url:"https://www.shacknews.com/article/119738/summer-games-done-quick-2020-interview-bubzia-and-super-smash-bros-64-blindfolded",
            text:"Summer Games Done Quick 2020, Interview: Bubzia and Super Smash Bros. 64 Blindfolded",
            publisher:"www.shacknews.com",
            date:"12 Aug 2020"
        }
    ]


    //looping through links to get individual items
    //dynamically add classname for css
    return (
        <ul className={`mainplayers`} >
            {links.map(link => {
                return(
                    <li style={{borderBottom: "2px solid #eaeaea" ,paddingBottom:20,paddingTop:20}} key={link.id}>
                        <a className="articleLink" href={link.url} target="_blank" rel="noreferrer">{link.text} <br/> Published: {link.date} <br/> {link.publisher}</a>
                    </li>
                )
            })}
        </ul>
    )
}

export default Articles
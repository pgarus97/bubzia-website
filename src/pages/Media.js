import React from "react"
import Mediabar from "../components/Mediabar";
import {Route, Switch} from "react-router-dom";
import ReactPlayer from "react-player";
import {BsDiscord, BsTwitch, BsTwitter, BsYoutube} from "react-icons/bs";
import {FaPatreon} from "react-icons/fa";
import Speedruns from "./Speedruns";
import Twitch from "./Twitch";
import Youtube from "./Youtube";
import Support from "./Support";
import Contact from "./Contact";
import NotMatch from "./NotMatch";
import Podcasts from "../components/Podcasts";
import Articles from "../components/Articles";
import MarathonRuns from "../components/MarathonRuns";

const Media = () => {
    return (
        <>
            <div className={"mediacenter"}>
                <h4><Mediabar/></h4>
            </div>
            <Switch>
                <Route exact path="/media/">
                    <MarathonRuns />
                </Route>
                <Route path="/media/marathons">
                    <MarathonRuns />
                </Route>
                <Route path="/media/podcasts">
                    <Podcasts />
                </Route>
                <Route path="/media/articles">
                    <Articles />
                </Route>
            </Switch>
        </>
    )
}
export default Media
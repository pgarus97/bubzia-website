//pages imports
import Navbar from "../components/Navbar";
import Speedruns from "./Speedruns";
import NotMatch from "./NotMatch";
import Strats from "./Strats";
import Twitch from "./Twitch";
import Youtube from "./Youtube";
import Media from "./Media";
import Support from "./Support";
import Contact from "./Contact";
import TopHeader from "../components/TopHeader";
import Goals from "../components/Goals";

import ReactPlayer from "react-player";
import {Route, Switch} from "react-router-dom";

import { BsDiscord, BsTwitter, BsTwitch, BsYoutube } from 'react-icons/bs';
import { FaPatreon } from 'react-icons/fa'



const Homepage = () => {




    return(
        <>
            <TopHeader/>
            <div>
            <Navbar/>
            <Switch>
                <Route exact path="/">
                        <div className="maincenter">
                            <div className="mainplayers">
                                <h1>Check out my stream:</h1>
                                <ReactPlayer url="https://www.twitch.tv/bubzia" controls="true" />
                            </div>
                            <div className="mainplayers">
                                <h1>Most recent Youtube Video:</h1>
                                <iframe title={"YT"} width="620" height="360" playing={true}
                                        src="https://www.youtube.com/embed/videoseries?list=UUZVaxoDFZkOhTw3MDG8V8dQ"
                                        frameBorder="0" allowFullScreen></iframe>
                            </div>
                        </div>
                        <div className="aboutme">
                            <h1>About me</h1>
                            <div className="AboutText">
                                Blindfolded Speedrunner since July 2017, Moderator of the blindfolded speedrunning community, Twitch Partner.<br/><br/>

                                My hobby consists of speedrunning many different games without looking by creating consistent strategies and memorizing them.<br/>
                                I love to participate at many marathons to open up blindfolded speedrunning further to the public.  <br/><br/>


                                <h3>Stream-Schedule: </h3>
                                Monday-Friday ~ 1:30pm-5pm CET<br/><br/>

                                If you enjoy my content, please check out my social media accounts!<br/>

                                <ul classname="homepageLinks">
                                    <li><a  href="https://www.twitch.tv/bubzia" target="_blank" rel="noreferrer"><BsTwitch classname="icon"/></a><br/></li>
                                    <li><a  href="https://www.youtube.com/bubzia" target="_blank" rel="noreferrer"><BsYoutube classname="icon"/></a><br/></li>
                                    <li><a  href="https://twitter.com/Bubzia1" target="_blank" rel="noreferrer"><BsTwitter classname="icon"/></a><br/></li>
                                    <li><a  href="https://patreon.com/Bubzia" target="_blank" rel="noreferrer"><FaPatreon classname="icon"/></a><br/></li>
                                    <li><a  href="https://discord.gg/D7yTBaXxTW" target="_blank" rel="noreferrer"><BsDiscord classname="icon"/></a><br/></li>
                                </ul>

                                For Business-Inquiries: <a href="mailto:yazek.twitch@gmail.com" target="_blank" rel="noreferrer">yazek.twitch@gmail.com</a><br/>
                            </div>
                        </div>
                </Route>
                <Route path="/speedrun">
                    <Speedruns />
                </Route>
                <Route path="/strats">
                    <Strats />
                </Route>
                <Route path="/goals">
                <Goals />
                </Route>
                <Route path="/twitch">
                    <Twitch />
                </Route>
                <Route path="/youtube">
                    <Youtube />
                </Route>
                <Route path="/media">
                    <Media />
                </Route>
                <Route path="/support">
                    <Support />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="*">
                    <NotMatch />
                </Route>
            </Switch>
            </div>
        </>

    )
}

export default Homepage
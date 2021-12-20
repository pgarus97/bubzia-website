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

import ReactPlayer from "react-player";
import {Route, Switch} from "react-router-dom";



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
                                <iframe width="600" height="340"
                                        src="http://www.youtube.com/embed/videoseries?list=UUZVaxoDFZkOhTw3MDG8V8dQ"
                                        frameBorder="0" allowFullScreen></iframe>
                            </div>
                        </div>
                        <div className="aboutme">
                            <h1>About me</h1>
                            <div className="text">

                            </div>
                        </div>
                </Route>
                <Route path="/speedruns">
                    <Speedruns />
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
//pages imports
import Navbar from "../components/Navbar";
import Speedruns from "./Speedruns";
import NotMatch from "./NotMatch";
//import Strats from "./Strats";
import Twitch from "./Twitch";
import Youtube from "./Youtube";
import Media from "./Media";
import Support from "./Support";
import Contact from "./Contact";

import ReactPlayer from "react-player";
import {Route, Switch} from "react-router-dom";



const Homepage = () => {




    return(
        <>
            <div className="header">
            <Navbar/>
            <Switch>
                <Route exact path="/">
                        <div className={"maincenter"}>
                            <div className="inner">
                                <h1> Bubzia - Blindfolded Speedruns</h1>
                            </div>
                            <ReactPlayer url="https://www.twitch.tv/bubzia" controls="true" />
                            Most recent Youtube Video:
                            <iframe width="600" height="340"
                                    src="http://www.youtube.com/embed/videoseries?list=UUZVaxoDFZkOhTw3MDG8V8dQ"
                                    frameBorder="0" allowFullScreen></iframe>
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
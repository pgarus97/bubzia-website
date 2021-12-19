import Navbar from "../components/Navbar";
import Speedruns from "./Speedruns";
import NotMatch from "./NotMatch";
//import Strats from "./Strats";
import Twitch from "./Twitch";
import Youtube from "./Youtube";
import Media from "./Media";
import Support from "./Support";
import Contact from "./Contact";
import {Route, Switch} from "react-router-dom";



const Homepage = () => {

    //Route path="*" is a fallback and matches everything
    return(
        <>
            <Navbar/>
            <Switch>
                <Route exact path="/">
                    <div className={"maincenter"}>
                        <div className="inner">
                            <h1>Bubzia - Blindfolded Speedruns</h1>
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
        </>

    )
}

export default Homepage
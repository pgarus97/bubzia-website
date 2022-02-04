import React from "react"
import {Route, Switch} from "react-router-dom";
import PersonalBests from "../components/PersonalBests";
import Goals from "../components/Goals";
import SRbar from "../components/SRbar";

const Speedruns = () => {
    return (
        <>
            <div className={"mediacenter"}>
                <h4><SRbar/></h4>
            </div>
            <Switch>
                <Route exact path="/speedrun/">
                    <PersonalBests />
                </Route>
                <Route path="/speedrun/pbs">
                    <PersonalBests />
                </Route>
                <Route path="/speedrun/goals">
                    <Goals />
                </Route>
            </Switch>
        </>
    )
}
export default Speedruns
import React from "react"
import PatreonImage from "../imgs/patreonlogo.png";
import TwitchImage from "../imgs/Twitchimage.jpeg";
import PayPalImage from "../imgs/Paypalimage.jpg";

const Support = () => {
    return (
        <>
            <div className="Supporttext">
            <br/>There are many ways you can support my channel and future blindfolded speedruns!
            </div>
            <div className={"leftcenter"}>
                <a  href="https://streamelements.com/bubzia/tip" target="_blank" rel="noreferrer"><img src={PayPalImage} width={"240"} height={"150"}/></a>
                <div className="Supporttext"> The best way to support me is directly with a donation via Paypal! <br/> Donations usually help to fund new streaming equipment!</div>
            </div>
            <div className={"leftcenter"}>
                <a  href="https://patreon.com/Bubzia" target="_blank" rel="noreferrer"><img src={PatreonImage} width={"200"} height={"200"} /></a>
                <div className="Supporttext"> I offer some cool benefits for my Patreons including game requests, training sessions and more! </div>
            </div>
                <div className={"leftcenter"}>
                <a  href="https://www.twitch.tv/subs/bubzia" target="_blank" rel="noreferrer"><img src={TwitchImage} width={"350"} height={"200"}/></a>
                    <div className="Supporttext"> As a Twitch Sub, you gain access to many awesome emotes, ad-free viewing and many cool perks!</div>
            </div>

            <div className="aboutme">
                <div className="text">
                    Blindfolded speedruns are my passion and hobby.
                    I am truly grateful for everyone who supports me by
                    watching my livestreams and videos, by chatting around or even contributing some money to the cause. <br/>
                    If I had the time and resources to route, practice and create blindfolded speedruns in a full-time scale,
                    I am sure that I could achieve amazing heights and crazy speedruns like you have never seen before.
                    That's why I really appreciate every tiny bit of support and hope that one day it will be enough to reach
                    that dream!<br/><br/>

                    PLEASE NOTE! Do not worry if you are unable to financially support my channel! <br/>
                    I appreciate the usual support on Twitch, Youtube, Twitter and everywhere else is just as much as everything else!
                </div>
            </div>
        </>
    )
}
export default Support
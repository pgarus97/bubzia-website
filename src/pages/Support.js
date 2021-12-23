import React from "react"
import ReactPlayer from "react-player";

const Support = () => {
    return (
        <>
            <div className={"maincenter"}>
                <ReactPlayer url="https://www.youtube.com/watch?v=J8saRCuj80A"  controls="true" />
            </div>
            <div className="aboutme">
                <div className="text">
                    Blindfolded speedruns are my passion and hobby. I am truly grateful for everyone who supports me by
                    watching my livestreams and videos, chats around with me or even contributes some money to the cause via Twitch Subs, Patreon etc.

                    If I had the time and resources to route, practice and create blindfolded speedruns in a full-time scale,
                    I am sure that I could achieve amazing heights and crazy speedruns like you have never seen before.

                    That's why I really appreciate every tiny bit of support and hope that one day it will be enough to reach that dream.
                    The best way to support me is directly through Streamelements with a donation via Paypal: LINK
                    I also offer some cool benefits for those of you who choose to support me on Patreon: LINK + Benefits TODO
                    As a Twitch Sub, you gain access to many awesome emotes, ad-free viewing and TODO

                    BUT!
                    As I said before, do not worry if you are unable to financially support my channel!
                    Your usual support on Twitch, Youtube, Twitter and everywhere else is just as important for me!
                </div>
            </div>
        </>
    )
}
export default Support
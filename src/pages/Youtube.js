import React from "react"
import ReactPlayer from "react-player";

const Youtube = () => {
    return (
        <>
        <div className="SupporttextHeader" style={{position:"center"}}>
            <br/>Here are a few example playlists of the Youtube-Content that I am producing!
        </div>
        <div className={"leftcenter"}>
            <ReactPlayer url="https://www.youtube.com/playlist?list=PLgIDB87U34NegVrVbXtkts_wBlH_VyyuT" controls="true"/>
            <div className="Supporttext"> Blindfolded Speedrun News! <br/>
                A series in which I showcase blindfolded achievements and runs of various <br/>
                communtiy members at the end of each month! </div>
        </div>
        <div className={"leftcenter"}>
            <ReactPlayer url="https://www.youtube.com/playlist?list=PLgIDB87U34NfkOAOPKHzCMux2aUnA6lvT" controls="true"/>
            <div className="Supporttext"> Super Mario 64 - 16 Star Tutorial! <br/>
                The presented strategies are targeted for beginners and specialized in consistency, <br/>
                such that everyone can try their hands on blindfolded speedrunning!</div>
        </div>
        <div className={"leftcenter"}>
            <ReactPlayer url="https://www.youtube.com/playlist?list=PLgIDB87U34NfI2R1hLv8bau_YFasXqPes" controls="true"/>
            <div className="Supporttext"> Youtube-Shorts! <br/>
                I frequently upload short clips and funny moments to Youtube's new "Shorts" feature!</div>
        </div>
        <div className={"leftcenter"}>
            <ReactPlayer url="https://www.youtube.com/playlist?list=PLgIDB87U34NfJmEwlSXqUR5S-kro7i-C6" controls="true"/>
            <div className="Supporttext"> Youtube-Exclusive Content (Edits)! <br/>
            Here, you can find all edited videos like highlights of streams, compliations <br/>
            showcases and more!</div>
        </div>
        </>
    )
}
export default Youtube
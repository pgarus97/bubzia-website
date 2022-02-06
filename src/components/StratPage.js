import React, {useState} from "react"
import Gist from "react-embed-gist"
import {useParams} from "react-router-dom";

const StratPage = () => {

    const aboutData = [
        {
            slug: "sm64",
            title: "Super Mario 64",
            description:
                "In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items.",
        },
        {
            slug: "zm",
            title: "Metroid Zero Mission",
            description: "This app was developed by me.",
        },
        //TODO add here other type of strat links
        //TODO then runs with more than one run/or maybe all: make another nested routing with array of categories into /strats/sm64/70star
        //TODO and in that make another array which maps 70 star to gist and then read it in a gist embed

    ]

    const {slug} = useParams()
    const aboutContent = aboutData.find(item => item.slug === slug)
    const {title,description} = aboutContent
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}
export default StratPage
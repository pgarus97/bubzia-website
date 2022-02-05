import React, {useState} from "react"
import Gist from "react-embed-gist"

const Goals = () => {

    //showing single goal gist
    return (
        <div className="marathoncenter">
            <Gist gist="pgarus97/5001520114d5c06405fff74c2d6f95c9" wrapperClass="gistWrapper" titleClass="gistTitle"/>
        </div>
    )
}
export default Goals
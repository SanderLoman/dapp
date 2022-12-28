import React from "react"
import RoadM from "../../assets/roadmap.png" // not good enough
import { Fade } from "react-reveal"

const Roadmap = () => {
    return (
        <div className="roadmap flex flex-col h-screen">
            <div className="flex justify-center items-center h-5/6 w-full">
            <Fade>
                <img src={RoadM} alt="Roadmap" className="" />
            </Fade>
            </div>
        </div>
    )
}

export default Roadmap

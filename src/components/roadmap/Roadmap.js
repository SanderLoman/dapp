import React from "react"
import RoadM from "../../assets/roadmap.png" // not good enough

const Roadmap = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex flex-col justify-center text-center h-1/6 w-full">
                <h1 className="text-5xl md:text-15xl">Roadmap</h1>
                <p className="text-4xl md:text-5xl">With the right fucking plan, great things can happen!</p>
            </div>
            <div className="flex justify-center items-center h-5/6 w-full">
                <img src={RoadM} alt="Roadmap" className="" />
            </div>
        </div>
    )
}

export default Roadmap

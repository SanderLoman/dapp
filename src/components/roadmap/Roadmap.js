import React from "react"
import level1 from "../../assets/level1.png"
import level2 from "../../assets/level2.png"
import level3 from "../../assets/level3.png"
import level4 from "../../assets/level4.png"
import { Fade } from "react-reveal"
import "./Roadmap.css"

const Roadmap = () => {
    return (
        <div className="roadmap flex flex-col h-max md:h-screen">
            <div className="flex flex-col justify-center items-center w-5/6 mx-auto text-center mb-28">
                <h1 className="roadmapText leading-none">Roadmap</h1>
                <p className="smallText">
                    With the right fucking plan, great things can happen!
                </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center flex-wrap">
                <Fade delay={500}>
                    <img src={level1} alt="Roadmap" className="image py-8 md:p-8" />
                </Fade>
                <Fade delay={750}>
                    <img src={level2} alt="Roadmap" className="image py-8 md:p-8" />
                </Fade>
                <Fade delay={1000}>
                    <img src={level3} alt="Roadmap" className="image py-8 md:p-8" />
                </Fade>
                <Fade delay={1250}>
                    <img src={level4} alt="Roadmap" className="image py-8 md:p-8" />
                </Fade>
                  <img src={null} alt="" className="h-60" />
            </div>
        </div>
    )
}

export default Roadmap

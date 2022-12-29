import React from "react"
import Staking from "../staking/Staking"
import Roadmap from "../roadmap/Roadmap"
import Team from "../team/Team"
import "./Achtergrond.css"

const Achtergrond = () => {
    return (
        <>
            <div className="rand">
                <Staking id="staking" />
                <Roadmap />
            </div>
            <Team />
        </>
    )
}

export default Achtergrond

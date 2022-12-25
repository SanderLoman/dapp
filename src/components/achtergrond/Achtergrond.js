import React from "react"
import Staking from "../staking/Staking"
import Roadmap from "../roadmap/Roadmap"
import "./Achtergrond.css"

const Achtergrond = () => {
    return <div className="rand md:h-[1999px]">
        <Staking />
        {/* <Roadmap /> */}
    </div>
}

export default Achtergrond

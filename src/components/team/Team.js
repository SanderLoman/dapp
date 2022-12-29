import React from "react"
import Sander from "../../assets/sander.png"
import MisterChad from "../../assets/misterchad.png"
import "./Team.css"

const Team = () => {
    return (
        <div className="team h-max bg-white">
            <div className="flex flex-col justify-center items-center w-5/6 mx-auto text-center">
                <h1 className="team-members lg:-mb-20">Team Members</h1>
                <p className="sub-text pb-20">
                    WTF this team can send tokens to the fucking moon!
                </p>
            </div>
            <div className="flex flex-col md:flex-row justify-around w-1/2 md:1/4 mx-auto items-center flex-wrap pb-96">
                <img href="" src={MisterChad} alt="" className="h-60 mb-20" />
                <img href="" src={Sander} alt="" className="h-60" />
            </div>
        </div>
    )
}

export default Team

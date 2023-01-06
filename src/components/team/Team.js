import React from "react"
import Fade from "react-reveal/Fade"
import Sander from "../../assets/sander.png"
import MisterChad from "../../assets/misterchad.png"
import "./Team.css"

const Team = () => {
    return (
        <div className="team h-max bg-white">
            <div className="flex flex-col justify-center items-center w-5/6 mx-auto text-center">
                <Fade>
                    <h1 className="team-members lg:-mb-20">Team Members</h1>
                </Fade>
                <Fade delay={200}>
                    <p className="sub-text pb-20">
                        WTF this team can send tokens to the fucking moon!
                    </p>
                </Fade>
            </div>
            <div className="flex flex-col md:flex-row justify-around w-full lg:w-1/2 md:1/4 mx-auto items-center flex-wrap pb-96">
                <Fade delay={400}>
                    <a
                        href="https://t.me/mystachad"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={MisterChad}
                            alt=""
                            className="h-60 mb-20 md:mb-0 hover:cursor-pointer"
                        />
                    </a>
                </Fade>
                <Fade delay={600}>
                    <a
                        href="https://t.me/Sanduhh"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={Sander}
                            alt=""
                            className="h-60 hover:cursor-pointer"
                        />
                    </a>
                </Fade>
            </div>
        </div>
    )
}

export default Team

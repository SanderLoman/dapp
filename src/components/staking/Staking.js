import React from "react"
import HeaderButton from "../../assets/HeaderButton.jpg" //example remove later
import dudes2 from "../../assets/staking_dudes.png"
import { Fade, Slide } from "react-reveal"
import "./Staking.css"

const Staking = () => {
    return (
        <div className="flex flex-col md:flex-row pt-40 md:pt-96 h-screen items-center justify-center ">
            <div className="flex h-full w-full md:w-1/2 ">
                <div className="flex justify-center m-10 md:m-32">
                    <Slide left>
                        <img src={dudes2} alt="Staking" className="" />
                    </Slide>
                </div>
            </div>
            <div className="flex h-full w-full md:w-1/2 ">
                <div className="flex flex-col items-center justify-center w-2/3 mx-auto">
                    <Fade bottom>
                        <h1 className="text-center text-5xl md:text-10xl">
                            STAKING
                        </h1>
                    </Fade>
                    <Fade bottom delay={200}>
                        <p className="text-center text-4xl md:text-5xl pb-8 md:pb-16">
                            You can now stake you WTF tokens! We want our
                            investors to chill and earn. So sit back, relax, and
                            enjoy your rewards!
                        </p>
                    </Fade>
                    <Fade bottom delay={400}>
                        <img
                            src={HeaderButton}
                            alt="Staking"
                            className="w-1/4 mx-auto"
                        />
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Staking

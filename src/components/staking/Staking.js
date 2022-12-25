import React from "react"
import HeaderButton from "../../assets/HeaderButton.jpg" //example remove later
import dudes2 from "../../assets/staking_dudes.png"
import { Fade, Slide } from "react-reveal"
import "./Staking.css"

const Staking = () => {
    return (
        <div className="main-container flex justify-evenly">
            <div className="image-container flex justify-center items-center w-1/3">
                <img src={dudes2} alt="Dudes" className="" />
            </div>
            <div className="text-container flex flex-col justify-center items-center w-1/3">
                <h1 className="text-12xl">Staking</h1>
                <p className="text-5xl">
                    You can now stake you WTF tokens! We want our investors to
                    chill and earn. So sit back, relax.. And enjoy your rewards!
                </p>
                <img
                    src={HeaderButton}
                    alt="Staking button"
                    className="button w-1/5"
                />
            </div>
        </div>
    )
}

export default Staking

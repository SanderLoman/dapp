import { React } from "react"
import StakeButton from "../../assets/stake.png"
import dudes2 from "../../assets/staking_dudes.png"
import { Fade, Slide } from "react-reveal"
import "./Staking.css"
import { Link } from "react-router-dom"

const Staking = () => {

    return (
        <div
            className="staking main-container flex justify-evenly h-screen pt-52"
        >
            <div className="image-container flex justify-center items-center w-1/3">
                <Slide left>
                    <img src={dudes2} alt="Dudes" className="" />
                </Slide>
            </div>
            <div className="text-container flex flex-col justify-center items-center w-1/3">
                <Fade bottom>
                    <h1 className="text-12xl">Staking</h1>
                </Fade>
                <Fade bottom>
                    <p className="text-5xl">
                        You can now stake you WTF tokens! We want our investors
                        to chill and earn. So sit back, relax.. And enjoy your
                        rewards!
                    </p>
                </Fade>
                <Fade bottom>
                    <Link to="/tokenstaking">
                        <img
                            src={StakeButton}
                            alt="Staking button"
                            className="button w-1/5 mb-40"
                        />
                    </Link>
                </Fade>
            </div>
        </div>
    )
}

export default Staking

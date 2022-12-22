import React from "react"
import Tokenomic from "../../assets/tokenomicsImage.jpg"
import Taart from "../../assets/taartImage.jpg"
import { Slide } from "react-reveal"
import "./Tokenomics.css"

const Tokenomics = () => {
    return (
        <div className="tokenomics h-screen flex flex-col md:flex-row md:h-[50vh] justify-around z-10">
            <Slide left>
                <img
                    src={Tokenomic}
                    alt="Tokenomics"
                    className="Tokenomic w-[300px] md:w-[500px] my-10"
                />
            </Slide>
            <Slide right>
                <img
                    src={Taart}
                    alt="Taart"
                    className="Taart w-[300px] md:w-[500px] my-10"
                />
            </Slide>
        </div>
    )
}

export default Tokenomics

import React from "react"
import Tokenomic from "../../assets/tokenomicsImage.jpg"
import Taart from "../../assets/taartImage.jpg"
import { Slide } from "react-reveal"
import "./Tokenomics.css"

const Tokenomics = () => {
    return (
        <div className="tokenomics flex flex-col md:flex-row lg:h-[50vh] justify-around items-center overflow-hidden">
            <Slide left>
                <img
                    src={Tokenomic}
                    alt="Tokenomics"
                    className="Tokenomic w-auto h-auto"
                />
            </Slide>
            <Slide right>
                <img
                    src={Taart}
                    alt="Taart"
                    className="Taart w-auto h-auto"
                />
            </Slide>
        </div>
    )
}

export default Tokenomics

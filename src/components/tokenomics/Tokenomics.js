import React from "react"
import Tokenomic from "../../assets/tokenomicsImage.jpg"
import Taart from "../../assets/taartImage.jpg"
import { Slide } from "react-reveal"
import "./Tokenomics.css"

const Tokenomics = () => {
    return (
        <div className="tokenomics my-20 flex flex-col md:flex-row justify-around items-center">
            <Slide left>
                <img
                    src={Tokenomic}
                    alt="Tokenomics"
                    className="Tokenomic mb-20 w-2/3 md:mb-0 md:w-1/5"
                />
            </Slide>
            <Slide right>
                <img
                    src={Taart}
                    alt="Taart"
                    className="Taart w-2/3 md:mb-0 md:w-1/5"
                />
            </Slide>
        </div>
    )
}

export default Tokenomics

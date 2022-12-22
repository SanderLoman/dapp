import React from "react"
import Tokenomic from "../../assets/tokenomicsImage.jpg"
import Taart from "../../assets/taartImage.jpg"
import { Slide } from "react-reveal"

const Tokenomics = () => {
    return (
        <div className="flex h-max justify-around items-center overflow-hidden">
            <Slide left>
                <img
                    src={Tokenomic}
                    alt="Tokenomics"
                    className="max-w-full animate-slide-in-left"
                />
            </Slide>
            <Slide right>
                <img
                    src={Taart}
                    alt="Taart"
                    className="max-w-full animate-slide-in-right"
                />
            </Slide>
        </div>
    )
}

export default Tokenomics

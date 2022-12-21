import React from "react"
import Tokenomic from "../../assets/tokenomicsImage.jpg"
import Taart from "../../assets/taartImage.jpg"

const Tokenomics = () => {
    return (
        <div className="flex h-screen justify-around items-center overflow-hidden">
            <img
                src={Tokenomic}
                alt="Tokenomics"
                className="w-1/4 animate-slide-in-left"
            />
            <img
                src={Taart}
                alt="Taart"
                className="w-1/4 animate-slide-in-right"
            />
        </div>
    )
}

export default Tokenomics

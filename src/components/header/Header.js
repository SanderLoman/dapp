import React from "react"
import "./Header.css"
import dex from "../../assets/dexscreener.png"

const Header = () => {
    return (
        <div className="flex h-max">
            <div className="relative top-10 md:top-56 w-1/2 h-max">
                <div className="flex flex-col">
                    <span className="text-center text-7xl md:text-25xl">
                        WTF
                    </span>
                    <span className="relative text-center text-5xl bottom-4 md:text-14xl md:bottom-32">
                        DUDES
                    </span>
                </div>
            </div>
            <div className="flex w-1/2">
                <img src={dex} alt="dex" className="w-max h-max" />
            </div>
        </div>
    )
}

export default Header

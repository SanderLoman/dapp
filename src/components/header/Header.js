import React from "react"
import "./Header.css"
import dex from "../../assets/dexscreener.png"

const Header = () => {
    return (
        <div className="flex border border-red-500 h-max">
            <div className="flex flex-col w-1/2 border border-black">
                <span className="WTF text-center">WTF</span>
                <span className="DUDES text-center relative bottom-96">DUDES</span>
            </div>
            <div className="flex w-1/2 border border-black">
                <img src={dex} alt="dex" className="w-max h-max" />
            </div>
        </div>
    )
}

export default Header

// make the span responsive to the screen size
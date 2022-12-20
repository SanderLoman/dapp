import React from "react"
import Check from "../../assets/checkImage.jpg"
import "./Content.css"

const Content = () => {
    return (
        <div className="header-container flex flex-col md:flex-row items-center justify-evenly xl:m-52 px-4 py-8">
            <div className="header-left flex flex-col items-center">
            <h1 className="text-10xl font-bold text-center">
                WTF DUDES CRYPTO
            </h1>
            <p className="text-5xl text-center my-4 xl:w-1/2">
                wtf dudes crypto is a token made for the people who suffered in
                this rough bear market. A lot of you guys probably lost some of
                your gains because of Bitcoin... Like WTF Bitcoin?! Because
                Bitcoin is fucking us we made this token. We as a team are ready
                to make the market great again! We got lots of things prepared
                so hop in and WTF DUDES this is about to get crazy!
            </p>
        </div>
        </div>
    )
}

export default Content

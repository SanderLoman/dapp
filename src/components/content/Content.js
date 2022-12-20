import React from "react"
import Check from "../../assets/checkImage.jpg"
import "./Content.css"

const Content = () => {
    return (
        <div className="content-container flex md:flex-row items-center w-screen h-screen">
            <div className="flex flex-col items-center m-4">
                <h1 className="xl:text-10xl text-5xl font-bold text-center">
                    WTF DUDES CRYPTO
                </h1>
                <p className="xl:text-5xl text-3xl text-center mt-4 mb-16 md:w-2/4">
                    wtf dudes crypto is a token made for the people who suffered
                    in this rough bear market. A lot of you guys probably lost
                    some of your gains because of Bitcoin... Like WTF Bitcoin?!
                    Because Bitcoin is fucking us we made this token. We as a
                    team are ready to make the market great again! We got lots
                    of things prepared so hop in and WTF DUDES this is about to
                    get crazy!
                </p>
                <div className="flex flex-row items-center md:flex-row md:text-5xl text-2xl justify-around w-full md:w-2/4">
                    <div className="flex items-center">
                        <img src={Check} alt="Check" className="h-6 md:h-auto"/>
                        <p className="">Safe team</p>
                    </div>
                    <div className="flex items-center">
                        <img src={Check} alt="Check" className="h-6 md:h-auto"/>
                        <p className="">Utility</p>
                    </div>
                    <div className="flex items-center">
                        <img src={Check} alt="Check" className="h-6 md:h-auto"/>
                        <p className="">Community</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content

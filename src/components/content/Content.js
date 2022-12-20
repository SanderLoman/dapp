import React from "react"
import Check from "../../assets/checkImage.jpg"
import "./Content.css"

const Content = () => {
    return (
        <div className="content-container flex md:flex-row items-center xl:m-52">
            <div className="content-left flex flex-col items-center">
                <h1 className="xl:text-10xl text-5xl font-bold text-center">
                    WTF DUDES CRYPTO
                </h1>
                <p className="xl:text-5xl text-3xl text-center mt-4 mb-16 md:w-3/4">
                    wtf dudes crypto is a token made for the people who suffered
                    in this rough bear market. A lot of you guys probably lost
                    some of your gains because of Bitcoin... Like WTF Bitcoin?!
                    Because Bitcoin is fucking us we made this token. We as a
                    team are ready to make the market great again! We got lots
                    of things prepared so hop in and WTF DUDES this is about to
                    get crazy!
                </p>
                <div className="flex text-5xl justify-around w-full">
                    <div className="flex">
                        <img src={Check} alt="Check" className="" />
                        safe team
                    </div>
                    <div className="flex">
                        <img src={Check} alt="Check" className="" />
                        utility
                    </div>
                    <div className="flex">
                        <img src={Check} alt="Check" className="" />
                        community
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content

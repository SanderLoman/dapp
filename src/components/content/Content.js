import React from "react"
import Check from "../../assets/checkImage.jpg"
import { Fade } from "react-reveal"
import "./Content.css"

const Content = () => {
    return (
        <div className="Content flex flex-col h-max items-center justify-center text-center">
            <Fade bottom distance="30%">
                <h1 className="Content-header text-5xl font-bold">
                    WTF DUDES CRYPTO
                </h1>
            </Fade>
            <Fade bottom distance="40%" delay={250}>
                <p className="Content-paragraph text-5xl leading-tight">
                    wtf dudes crypto is a token made for the people who suffered
                    in this rough bear market. A lot of you guys probably lost
                    some of your gains because of Bitcoin... Like WTF Bitcoin?!
                    Because Bitcoin is fucking us we made this token. We as a
                    team are ready to make the market great again! We got lots
                    of things prepared so hop in and WTF DUDES this is about to
                    get crazy!
                </p>
            </Fade>
            <ul className="Content-list flex flex-row justify-around w-full ">
                <li className="Content-list-item md:mr-5">
                    <Fade delay={500}>
                        <img
                            src={Check}
                            alt="Check"
                            className="Content-check w-auto h-auto"
                        />
                        <p className="Content-list-text text-customPurple">
                            Safeteam
                        </p>
                    </Fade>
                </li>
                <li className="Content-list-item md:mr-5">
                    <Fade delay={700}>
                        <img
                            src={Check}
                            alt="Check"
                            className="Content-check w-auto h-auto"
                        />
                        <p className="Content-list-text text-customPink">
                            Utility
                        </p>
                    </Fade>
                </li>
                <li className="Content-list-item mr-5">
                    <Fade delay={900}>
                        <img
                            src={Check}
                            alt="Check"
                            className="Content-check w-auto h-auto"
                        />
                        <p className="Content-list-text text-customOrange">
                            Community
                        </p>
                    </Fade>
                </li>
            </ul>
        </div>
    )
}

export default Content

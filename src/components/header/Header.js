import React from "react"
import HeaderLogo from "../../assets/wtfdudes_text.png"
import HeaderWTF from "../../assets/wtf_dude_orange.png"
import HeaderLink1 from "../../assets/BuyToken.jpg"
import HeaderLink2 from "../../assets/ChartButton.jpg"
import HeaderLink3 from "../../assets/TelegramButton.jpg"
import "./Header.css"

const Header = () => {
    return (
        <div className="header-container flex flex-col md:flex-row items-center justify-evenly h-screen px-4 pb-8">
            <div className="header-left flex flex-col items-center">
                <a
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                    target="_blank"
                    without
                    rel="noreferrer"
                >
                    <img
                        src={HeaderLogo}
                        alt="Header logo"
                        className="pb-8 md:transform md:transition-all md:hover:scale-105"
                    />
                </a>
                <div className="header-links flex w-full items-center justify-evenly">
                    <a
                        href="https://app.uniswap.org/#/swap"
                        target="_blank"
                        without
                        rel="noreferrer"
                    >
                        <img
                            src={HeaderLink1}
                            alt="Header link 1"
                            className="md:transform md:transition-all md:hover:scale-125"
                        />
                    </a>
                    <a
                        href="https://dexscreener.com/bsc/"
                        target="_blank"
                        without
                        rel="noreferrer"
                    >
                        <img
                            src={HeaderLink2}
                            alt="Header link 2"
                            className="md:transform md:transition-all md:hover:scale-125"
                        />
                    </a>
                    {/* Change later link is not right */}
                    <a
                        href="https://t.me/Sanduhh"
                        target="_blank"
                        without
                        rel="noreferrer"
                    >
                        <img
                            src={HeaderLink3}
                            alt="Header link 3"
                            className="md:transform md:transition-all md:hover:scale-125"
                        />
                    </a>
                    {/* Change later link is not right */}
                </div>
            </div>
            <div className="header-right">
                <img src={HeaderWTF} alt="Header WTF" className="headerdude" />
            </div>
        </div>
    )
}

export default Header
